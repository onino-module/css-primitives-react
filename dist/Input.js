import React from "react";
import style from "./Input.module.css";
const LABEL_DEFAULT = "Placeholder";
const COLOR_DEFAULT = "primary";
const WIDTH_DEFAULT = "300px";
const Input = ({ label = LABEL_DEFAULT, color = COLOR_DEFAULT, width = WIDTH_DEFAULT, onChange, value }) => {
    return (React.createElement("div", { className: style.container, style: { width } },
        React.createElement("input", { type: "text", onChange: onChange, required: true, value: value }),
        React.createElement("label", { className: style.label },
            React.createElement("span", { className: style["content-name"] }, label))));
};
export default Input;
