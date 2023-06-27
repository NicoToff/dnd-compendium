from os import mkdir, path, getcwd, listdir
import sys
import requests
import json
import subprocess
from enum import Enum
from typing import Union, List, Dict, TypedDict
from datetime import datetime
from colorama import Fore, Style


# Get the last piece of the file name
def t(file: str):
    return Style.BRIGHT + path.basename(file) + Style.RESET_ALL


def hash_content(content):
    return (
        subprocess.check_output(
            ["git", "hash-object", "--stdin"],
            input=content,
        )
        .strip()
        .decode("utf-8")
    )


class Status(Enum):
    SUCCESS = "SUCCESS"
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"


def log(msg: str, pre_msg: str, pre_color: Status):
    case = {
        Status.INFO: Fore.BLUE,
        Status.SUCCESS: Fore.GREEN,
        Status.WARNING: Fore.YELLOW,
        Status.ERROR: Fore.RED,
    }[pre_color]
    pre = f"{case}[" if pre_msg else ""
    suf = f"] {Style.RESET_ALL}" if pre_msg else ""
    print(
        f"{pre}{pre_msg}{suf}{Fore.LIGHTBLACK_EX}<{datetime.now().strftime('%H:%M:%S.%f')}>{Style.RESET_ALL} {msg}"
    )


def create_type_file(json_file_path: str, type_file_path: str):
    try:
        subprocess.run(
            [
                "quicktype.cmd",
                json_file_path,
                "--just-types",
                "--prefer-unions",
                "--prefer-types",
                "-o",
                type_file_path,
            ]
        )
    except subprocess.CalledProcessError as e:
        print("Error generating types for: ", json_file_path, e)


class ItemData(TypedDict):
    name: str
    path: str
    sha: str
    size: int
    url: str
    html_url: str
    git_url: str
    download_url: Union[str, None]
    type: str
    _links: Dict[str, str]


if not getcwd().endswith("dnd-compendium"):
    log(
        "Please run this script from the root folder of the repo.",
        "ERROR",
        Status.ERROR,
    )
    log(
        "This script expects the root folder to be named 'dnd-compendium'.",
        "Did you know?",
        Status.INFO,
    )
    exit()

args = sys.argv[1:]
quiet = "-q" in args or "--quiet" in args
force_types = "-f" in args or "--force-types" in args
url = "https://api.github.com/repos/5e-bits/5e-database/contents/src"
# From the root of the repo, then apps, then typesense, the api directory
output_json_directory = path.join(getcwd(), "apps", "typesense", "api")

if not path.isdir(output_json_directory):
    mkdir(output_json_directory)

new_files = 0
num_updated = 0

response = requests.get(url)
response.raise_for_status()

data: List[ItemData] = json.loads(response.text)
already_up_to_date = True

files_that_need_types = []

for item in data:
    if item["name"].endswith(".json"):
        file_url = item["download_url"]
        json_file_path = path.join(output_json_directory, item["name"])

        if path.isfile(json_file_path):
            with open(json_file_path, "rb") as file:
                existing_content = file.read()

            existing_hash = hash_content(existing_content)
            already_up_to_date = existing_hash == item["sha"]
            if already_up_to_date:
                if not quiet:
                    log(
                        f"Skipping file {t(json_file_path)}...",
                        "NO CHANGE",
                        Status.INFO,
                    )
                continue

        response = requests.get(file_url)
        response.raise_for_status()

        downloaded_content = response.content
        downloaded_hash = hash_content(downloaded_content)

        if downloaded_hash != item["sha"]:
            log(
                f"Hash mismatch for file {t(json_file_path)} ! Skipping...",
                "DANGER",
                Status.ERROR,
            )
            continue

        with open(json_file_path, "wb") as file:
            file.write(downloaded_content)

            if not already_up_to_date:
                added_or_updated = "UPDATED"
                num_updated += 1
            else:
                added_or_updated = "ADDED"
                new_files += 1
            log(f"{t(json_file_path)} downloaded.", added_or_updated, Status.SUCCESS)

            files_that_need_types.append(json_file_path)


log(
    f"Downloaded {new_files} new files and updated {num_updated} existing files.",
    "DONE",
    Status.SUCCESS,
)

output_ts_types_directory = path.join(getcwd(), "libs", "types", "src")
if len(files_that_need_types) != 0 or force_types:
    if force_types:
        all_docs = listdir(output_json_directory)
        # join output_json_directory to all_docs
        files_that_need_types = [
            path.join(output_json_directory, doc) for doc in all_docs
        ]
    log(
        f"Generating types for {len(files_that_need_types)} files...",
        "INFO",
        Status.INFO,
    )
    for file in files_that_need_types:
        create_type_file(
            file,
            path.join(
                output_ts_types_directory,
                path.basename(file).replace(".json", ".ts"),
            ),
        )
    log("All types generated.", "DONE", Status.SUCCESS)
    log("Creating index file...", "INFO", Status.INFO)
    with open(path.join(getcwd(), "libs", "types", "index.ts"), "w") as file:
        all_files = listdir(output_ts_types_directory)
        for f in all_files:
            if f.endswith(".ts"):
                file.write(f"export * from './src/{f[:-3]}';\n")
    log("Index file created.", "DONE", Status.SUCCESS)
