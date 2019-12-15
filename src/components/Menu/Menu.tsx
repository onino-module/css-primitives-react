import React from "react";
import classNames from "classnames/bind";
import styles from "./Menu.module.css";

const WIDTH_DEFAULT = "300px";
const COLOR_DEFAULT = "primary";
const NO_SELECT_MESSAGE_DEFAULT = "Select one...";

let cx = classNames.bind(styles);

interface IMenuProps<T> {
  width?: string;
  onSelect?: (e: T | null) => void;
  items?: { label: string; value: T }[];
  noMenuMessage?: string;
}

class Menu<T = any> extends React.Component<IMenuProps<T>> {
  public state = {
    collapsed: true,
    selectedValue: null,
    selectedLabel: ""
  };

  private selectItem = (value: T, label: string) => {
    this.setState(
      {
        selectedValue: value,
        selectedLabel: label,
        collapsed: true
      },
      () => this.props.onSelect!(value)
    );
  };

  static defaultProps = {
    width: WIDTH_DEFAULT,
    color: COLOR_DEFAULT,
    noSelectMessage: NO_SELECT_MESSAGE_DEFAULT,
    onSelect: () => {}
  };
  public render() {
    const { items, width, children } = this.props;
    return (
      <div
        tabIndex={0}
        role="button"
        className={styles["container"]}
        style={{ width }}
      >
        {items &&
          items.map(({ value, label }, index) => (
            <div
              tabIndex={index}
              role="button"
              className={cx({
                item: true,
                selected: value === this.state.selectedValue
              })}
              key={label + index}
              onClick={() => this.selectItem(value, label)}
            >
              {label}
            </div>
          ))}
        {children}
      </div>
    );
  }
}

export default Menu;
