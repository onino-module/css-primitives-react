import React, { ChangeEvent } from "react";
import style from "./Input.module.css";
interface IInputProps {
  label: string;
  color?: "primary" | "secondary" | "warning" | "danger" | "success";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  width?:string;
}

const LABEL_DEFAULT = "Placeholder";
const COLOR_DEFAULT = "primary";
const WIDTH_DEFAULT = "300px";

const Input: React.FC<IInputProps> = ({
  label = LABEL_DEFAULT,
  color = COLOR_DEFAULT,
  width = WIDTH_DEFAULT,
  onChange,
  value
}) => {
  return (
    <div className={style.container} style={{width}}>
      <input type="text" onChange={onChange} required value={value} />
      <label className={style.label}>
        <span className={style["content-name"]}>{label}</span>
      </label>
    </div>
  );
};

export default Input;
