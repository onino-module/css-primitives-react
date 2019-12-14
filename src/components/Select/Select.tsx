import React from "react";
import classNames from "classnames/bind";
import styles from "./Select.module.css";
import { SelectArrow } from "./SelectArrow";
import { SelectCross } from "./SelectCross";

const WIDTH_DEFAULT = "300px";
const COLOR_DEFAULT = "primary";
const NO_SELECT_MESSAGE_DEFAULT = "Select one...";

let cx = classNames.bind(styles);

interface ISelectProps<T> {
  width?: string;
  onSelect?: (e: T | null) => void;
  options?: { label: string; value: T }[];
  noSelectMessage?: string;
}

class Select<T = any> extends React.Component<ISelectProps<T>> {
  public constructor(props: ISelectProps<T>) {
    super(props);
  }

  private myRef: React.RefObject<HTMLDivElement> = React.createRef();

  componentDidMount() {
    //@ts-ignore
    this.myRef.current!.addEventListener("keyup", this.keyPress);
    this.myRef.current!.addEventListener("focusout", this.closeMenu);
  }

  componentWillUnmount() {
    //@ts-ignore
    this.myRef.current!.removeEventListener("keyup", this.keyPress);
    this.myRef.current!.removeEventListener("focusout", this.closeMenu);
  }

  public state = {
    collapsed: true,
    selectedValue: null,
    selectedLabel: ""
  };

  private selectItem = (value: T, label: string) => {
    this.setState({
      selectedValue: value,
      selectedLabel: label,
      collapsed: true,
    }, ()=>this.props.onSelect!(value));
  };

  private toggleMenu = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  private closeMenu = () => {
    this.setState({
      collapsed: true
    });
  };

  private keyPress = (e: React.KeyboardEvent) => {
    if (e.which == 13 || e.keyCode == 13) {
      this.toggleMenu();
    }
  };

  private reset = (e:any) => {
      e.preventDefault()
    this.setState({
        selectedValue: false,
        selectedLabel: false,
        collapsed:true
      }, ()=>this.props.onSelect!(null));
  }

  static defaultProps = {
    width: WIDTH_DEFAULT,
    color: COLOR_DEFAULT,
    noSelectMessage: NO_SELECT_MESSAGE_DEFAULT,
    onSelect : ()=>{}
  };
  public render() {
    const { options, width, noSelectMessage } = this.props;

    const optionsContainerClasses = cx({
      "options-container": true,
      [styles.collapsed]: this.state.collapsed
    });
    return (
      <div
        tabIndex={0}
        role="button"
        className={styles["select-css"]}
        style={{ width }}
        ref={this.myRef}
      >
        <div className={styles["select-button"]}  onClick={this.toggleMenu}>
          {this.state.selectedLabel || noSelectMessage}
        </div>
        {this.state.selectedLabel &&  <div className={styles["cross-container"]} onClick={this.reset}>
          <SelectCross
            size={10}
          />
        </div>}
        <div className={styles["arrow-container"]}  onClick={this.toggleMenu}>
          <SelectArrow
            className={cx({
              arrow: true,
              "arrow-collapsed": this.state.collapsed
            })}
            size={12}
          />
        </div>
        <div className={optionsContainerClasses}>
          {options &&
            options.map(({ value, label }, index) => (
              <span
                role="option"
                className={cx({
                  option: true,
                  selected: value === this.state.selectedValue
                })}
                key={label+index}
                onClick={() => this.selectItem(value, label)}
              >
                {label}
              </span>
            ))}
        </div>
      </div>
    );
  }
}

export default Select;
