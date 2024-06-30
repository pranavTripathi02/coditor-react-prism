import { TTheme } from "../../types";
import { themes } from "prism-react-renderer";
import { Option, Select } from "../primitives";

type TProps = {
  theme: TTheme;
  updateTheme: (newTheme: TTheme) => void;
};

const PrismThemeSelect = ({ theme, updateTheme }: TProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selTheme = e.target.value as TTheme;
    updateTheme(selTheme);
  };
  return (
    <label className="flex items-center gap-2">
      <span>Theme: </span>
      <Select onChange={handleChange} defaultValue={theme}>
        {Object.keys(themes).map((theme) => (
          <Option value={theme} key={theme}>
            {theme}
          </Option>
        ))}
      </Select>
    </label>
  );
};

export default PrismThemeSelect;
