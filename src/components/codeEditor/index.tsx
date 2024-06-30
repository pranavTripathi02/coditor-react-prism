import { useState } from "react";
import CodeBlock from "./codeBlock";
import PrismThemeSelect from "./themeSelect.tsx";
import { TTheme, TLang } from "../../types/";
import { langList } from "../../types/prismLanguages.ts";
import PrismLangSelect from "./languageSelect.tsx";

function CodeEditor() {
  const [prismTheme, setPrismTheme] = useState<TTheme>("github");
  const [prismLang, setPrismLang] = useState<TLang>(langList[1]);
  const updateTheme = (newTheme: TTheme) => {
    setPrismTheme(newTheme);
  };
  const updateLang = (newLang: TLang) => {
    setPrismLang(newLang);
  };
  return (
    <div className="max-w-9xl container mx-auto flex flex-col gap-4">
      <div className="flex gap-12 self-end px-4">
        <PrismLangSelect lang={prismLang} updateLang={updateLang} />
        <PrismThemeSelect theme={prismTheme} updateTheme={updateTheme} />
      </div>
      <CodeBlock prismTheme={prismTheme} prismLang={prismLang} />
    </div>
  );
}

export default CodeEditor;
