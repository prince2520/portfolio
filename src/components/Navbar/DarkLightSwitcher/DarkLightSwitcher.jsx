import { useContext } from "react";
import { Icon } from "@iconify/react";

import DarkContext from "../../../context/DarkModeContext";

import "./DarkLightSwitcher.css";

const DarkLightSwitcher = () => {
  const darkCtx = useContext(DarkContext);

  return (
    <div
      className="flex-center dark-light-switcher cursor-btn"
      onClick={() => darkCtx?.darkHandler()}
    >
      <Icon
        className="icon-btn"
        fontSize={`1.25rem`}
        icon={
          darkCtx?.dark
            ? `material-symbols:light-mode-rounded`
            : `icon-park-outline:dark-mode`
        }
      />
      <h5>{!darkCtx?.dark ? `Dark` : `Light`}</h5>
    </div>
  );
};

export default DarkLightSwitcher;
