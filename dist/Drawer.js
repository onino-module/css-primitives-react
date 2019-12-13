import React from "react";
import style from "./Drawer.module.css";
const OVERLAY_DEFAULT = true;
const Drawer = ({ show, close, children, overlay = OVERLAY_DEFAULT }) => {
    let containerClasses = style.container;
    show && (containerClasses = containerClasses.concat(" " + style.active));
    let overlaylasses = style["click-layer"];
    show && (overlaylasses = overlaylasses.concat(" " + style.active));
    let contentlasses = style["drawer-content"];
    show && (contentlasses = contentlasses.concat(" " + style.active));
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: containerClasses },
            React.createElement("div", { className: contentlasses }, children)),
        overlay && React.createElement("div", { className: overlaylasses, onClick: close })));
};
export default Drawer;
