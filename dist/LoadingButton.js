import React from "react";
import style from "./LoadingButton.module.css";
const LABEL_DEFAULT = "";
const ON_CLICK_DEFAULT = () => { };
const COLOR_DEFAULT = "primary";
const LOADING_DEFAULT = false;
const LoadingButton = ({ label = LABEL_DEFAULT, onClick = ON_CLICK_DEFAULT, color = COLOR_DEFAULT, loading = LOADING_DEFAULT }) => {
    const button_classes = style.button.concat(" " + style[color]);
    let spin_classes = style.spin;
    let spin_container__classes = style["spin-container"];
    loading && (spin_classes = spin_classes.concat(" " + style.active));
    loading && (spin_container__classes = spin_container__classes.concat(" " + style.active));
    return (React.createElement("button", { className: button_classes, onClick: onClick },
        label,
        React.createElement("div", { className: spin_container__classes },
            React.createElement("div", { className: spin_classes }))));
};
export default LoadingButton;
