import { TLang } from "../../types";
import { Option, Select } from "../primitives";
import { langList } from "../../types/prismLanguages";

type TProps = {
  lang: TLang;
  updateLang: (newLang: TLang) => void;
};

function PrismLangSelect({ lang, updateLang }: TProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selLang = e.target.value as TLang["lang"];
    updateLang(langList.find((lang) => lang.lang === selLang) || langList[1]);
  };
  return (
    <label className="flex items-center gap-2">
      <span>Programming Language: </span>
      <Select onChange={handleChange} defaultValue={lang.lang}>
        {langList.map((lang) => (
          <Option value={lang.lang}>{lang.lang}</Option>
        ))}
      </Select>
    </label>
  );
}

export default PrismLangSelect;
