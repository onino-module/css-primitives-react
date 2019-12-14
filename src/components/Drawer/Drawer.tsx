import React from "react";
import classNames from "classnames/bind";
import styles from "./Drawer.module.css";
interface IDrawerProps {
  show?: boolean;
  close?: () => void;
  overlay?: boolean;
}

const OVERLAY_DEFAULT = true;

let cx = classNames.bind(styles);

const Drawer: React.FC<IDrawerProps> = ({
  show,
  close,
  children,
  overlay = OVERLAY_DEFAULT
}) => {
  let containerClasses = cx({
    "container": true,
    "active": show
  })
  let overlaylasses = cx({
    "click-layer": true,
    "active": show
  })
  let contentlasses = cx({
    "drawer-content": true,
    "active": show
  })
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
