export const langList = [
  {
    lang: "jsx",
    defaultCodeExample: "",
  },
  {
    lang: "tsx",
    defaultCodeExample: "",
  },
  {
    lang: "swift",
    defaultCodeExample: "",
  },
  {
    lang: "kotlin",
    defaultCodeExample: "",
  },
  {
    lang: "objectivec",
    defaultCodeExample: "",
  },
  {
    lang: "js-extras",
    defaultCodeExample: "",
  },
  {
    lang: "reason",
    defaultCodeExample: "",
  },
  {
    lang: "rust",
    defaultCodeExample: "",
  },
  {
    lang: "graphql",
    defaultCodeExample: "",
  },
  {
    lang: "yaml",
    defaultCodeExample: "",
  },
  {
    lang: "go",
    defaultCodeExample: "",
  },
  {
    lang: "cpp",
    defaultCodeExample: "",
  },
  {
    lang: "markdown",
    defaultCodeExample: "",
  },
] as const;

type TLangs = typeof langList;

export type TLang = TLangs[number];
