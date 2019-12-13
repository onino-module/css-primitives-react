import React from "react";
import style from "./Modal.module.css";
interface IModalProps {
  color?: "primary" | "secondary" | "warning" | "danger" | "success";
  width?:string;
  show?:boolean;
  close?:()=>void;
}

const WIDTH_DEFAULT = "300px";

const Modal: React.FC<IModalProps> = ({
  width = WIDTH_DEFAULT,
  show,
  close,
  children,
}) => {
  return (
    <div className={style.container} style={{display:show?"flex":"none"}}>
        <div className={style["click-layer"]} onClick={close}></div>
        <div className={style["modal-content"]}>
            {children}
        </div>
    </div>
  );
};

export default Modal;
