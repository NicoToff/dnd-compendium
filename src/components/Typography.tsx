import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const typographyStyles = cva(``, {
    variants: {
        intent: {
            titleMain: `text-7xl tracking-wide font-["Mr_Eaves_Small_Caps"]`,
            titleSecondary: `text-5xl tracking-wide font-["Mr_Eaves_Small_Caps"]`,
            titleTertiary: `text-3xl tracking-wider font-["Mr_Eaves_Small_Caps"]`,
            text: `font-["Bookinsanity"]`,
        },
    },
    defaultVariants: {
        intent: "text",
    },
} as const);

export type TypographyProps = VariantProps<typeof typographyStyles> &
    React.HTMLAttributes<Element> & { children: React.ReactNode; htmlTag?: ValidHtmlTag };

export function Typography({ children, htmlTag, intent, ...props }: TypographyProps) {
    const idealTag = determineIdealTag(intent);
    const tag = htmlTag && validTags.includes(htmlTag) ? htmlTag : idealTag;
    return React.createElement(tag, { className: typographyStyles({ intent }), ...props }, children);
}
const determineIdealTag = (intent: string | undefined | null): ValidHtmlTag => {
    // prettier-ignore
    switch (intent) {
        case "titleMain": return "h1";
        case "titleSecondary": return "h2";
        case "titleTertiary": return "h3";
        case "text": return "p";
        default: return "p";
    }
};

const validTags = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "b",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "html",
    "i",
    "iframe",
    "input",
    "ins",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "meta",
    "meter",
    "nav",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "svg",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
] as const;

export type ValidHtmlTag = (typeof validTags)[number];
