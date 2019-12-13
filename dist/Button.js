import React from "react";
import style from "./Button.module.css";
const LABEL_DEFAULT = "";
const ON_CLICK_DEFAULT = () => { };
const COLOR_DEFAULT = "primary";
const DISABLED_DEFAULT = false;
const Button = ({ label = LABEL_DEFAULT, onClick = ON_CLICK_DEFAULT, color = COLOR_DEFAULT, disabled = DISABLED_DEFAULT }) => {
    let classes = style.button.concat(" " + style[color]);
    disabled && (classes = classes.concat(" " + style.disabled));
    return (React.createElement("button", { className: classes, onClick: onClick, disabled: disabled }, label));
};
export default Button;
