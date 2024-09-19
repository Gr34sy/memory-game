// styles
import styles from "./theme.module.css";

// types
import { themes } from "../../../../types/settingsTypes";
import { Dispatch, SetStateAction } from "react";

//utilities
import avialableThemes from "../../../../utils/avialableThemes";

// components
import Button from "../../../button/Button";
import SettingsBox from "../settings-box/SettingsBox";

// hooks
import { useState } from "react";

type ThemeProps = {
  setTheme: Dispatch<SetStateAction<themes>>;
};

const Theme = ({ setTheme }: ThemeProps) => {
  const [activeTheme, setActiveTheme] = useState(avialableThemes[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  function handleMenuClick(theme: themes) {
    setActiveTheme(theme);
    setShowDropdown(false);
    setTheme(theme);
  }

  return (
    <SettingsBox label="Theme" bigItems>
      <div className={styles["dropdown-thumb"]}>
        <Button
          buttonType="selection"
          isActive={true}
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          {activeTheme}
        </Button>

        {showDropdown && (
          <div className={styles["dropdown-menu"]}>
            {avialableThemes.map((theme) => (
              <div
                key={`dropdown-menu-${theme}`}
                className={styles["dropdown-item"]}
                onClick={() => handleMenuClick(theme)}
              >
                {theme}
              </div>
            ))}
          </div>
        )}
      </div>
    </SettingsBox>
  );
};

export default Theme;
