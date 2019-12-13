import React from "react";
import style from "./LoadingButton.module.css";

interface ILoadingButtonProps {
  label: string;
  onClick?: () => void;
  color?: "primary" | "secondary" | "warning" | "danger" | "success";
  loading?: boolean;
}

const LABEL_DEFAULT = "";
const ON_CLICK_DEFAULT = () => {};
const COLOR_DEFAULT = "primary";
const LOADING_DEFAULT = false;

const LoadingButton: React.FC<ILoadingButtonProps> = ({
    label = LABEL_DEFAULT,
    onClick = ON_CLICK_DEFAULT,
    color = COLOR_DEFAULT,
    loading = LOADING_DEFAULT
  }) => {
  const button_classes = style.button.concat(" " + style[color]);
  let spin_classes = style.spin
  let spin_container__classes = style["spin-container"]
  loading && (spin_classes = spin_classes.concat(" " + style.active))
  loading && (spin_container__classes = spin_container__classes.concat(" " + style.active))
  return (
    <button className={button_classes} onClick={onClick}>
      {label}
      <div className={spin_container__classes}>
       <div className={spin_classes}/>
      </div>
    </button>
  );
};

export default LoadingButton;
