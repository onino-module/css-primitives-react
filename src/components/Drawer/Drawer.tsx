import React from "react";
import style from "./Drawer.module.css";
interface IDrawerProps {
  show?: boolean;
  close?: () => void;
  overlay?: boolean;
}

const OVERLAY_DEFAULT = true;

const Drawer: React.FC<IDrawerProps> = ({
  show,
  close,
  children,
  overlay = OVERLAY_DEFAULT
}) => {
  let containerClasses = style.container;
  show && (containerClasses = containerClasses.concat(" " + style.active));
  let overlaylasses = style["click-layer"];
  show && (overlaylasses = overlaylasses.concat(" " + style.active));
  let contentlasses = style["drawer-content"];
  show && (contentlasses = contentlasses.concat(" " + style.active));
  return (
    <React.Fragment>
      <div className={containerClasses}>
        <div className={contentlasses}>{children}</div>
      </div>
      {overlay && <div className={overlaylasses} onClick={close}></div>}
    </React.Fragment>
  );
};

export default Drawer;
