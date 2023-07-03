import { createElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const typographyStyles = cva(``, {
  variants: {
    intent: {
      "title-main": `text-7xl font-["Mr_Eaves_Small_Caps"]`,
      "title-secondary": `text-5xl font-["Mr_Eaves_Small_Caps"]`,
      "title-tertiary": `text-3xl font-["Mr_Eaves_Small_Caps"]`,
      text: `font-["Bookinsanity"]`,
      "text-italic": `font-["Bookinsanity_Italic"] italic`,
      "text-bold": `font-["Bookinsanity_Bold"] font-bold`,
      "text-bold-italic": `font-["Bookinsanity_Bold_Italic"] font-bold italic`,
    },
  },
  defaultVariants: {
    intent: "text",
  },
} as const);

export type TypographyProps = VariantProps<typeof typographyStyles> &
  React.HTMLAttributes<Element> & {
    children: React.ReactNode;
    className?: string;
    htmlTag?: ValidHtmlTag;
  };

export function Typography({
  children,
  htmlTag,
  intent,
  className: classNameFromProps,
  ...props
}: TypographyProps) {
  const idealTag = determineIdealTag(intent);
  const tag = htmlTag && validTags.includes(htmlTag) ? htmlTag : idealTag;
  const className = twMerge(typographyStyles({ intent }), classNameFromProps);
  return createElement(tag, { className, ...props }, children);
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
