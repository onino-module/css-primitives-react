import React, { ChangeEvent } from "react";
import classNames from "classnames/bind";
import styles from "./Switch.module.css";

const COLOR_DEFAULT = "primary";
const ON_TOGGLE_DEFAULT = () => {};
const DEFAULT_CHECKED_DEFAULT = false;

let cx = classNames.bind(styles);

interface ISwitchProps {
  color?: "primary" | "secondary" | "warning" | "danger" | "success";
  onToggle?: (e: boolean) => void;
  checked?: boolean;
  defaultChecked?: boolean;
}

const Switch: React.FC<ISwitchProps> = ({
  onToggle = ON_TOGGLE_DEFAULT,
  checked,
  color = COLOR_DEFAULT,
  defaultChecked = DEFAULT_CHECKED_DEFAULT
}) => {
  let sliderClasses = cx({
    slider: true,
    [color]: true
  });
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onToggle(e.currentTarget.checked)
        }
        checked={checked}
        defaultChecked={defaultChecked}
      />
      <span className={sliderClasses}></span>
    </label>
  );
};

export default Switch;
