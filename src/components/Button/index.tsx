import React, { ReactNode } from "react";
import "./button.css";

export interface ButtonProps {
  children?: ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  containsIcon?: boolean;
  longButton?: boolean;
  icon?: {
    url: string;
    size: {
      width: string;
      height: string;
    };
  };
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  children,
  containsIcon,
  icon,
  onClick,
  variant = "primary",
  disabled,
  longButton,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`storybook-button storybook-button--${variant} ${
        disabled ? "storybook-button--disabled" : ""
      } ${longButton ? "storybook-button--long" : ""}`}
    >
      {containsIcon ? (
        <div className="button-image">
          <img
            src={icon ? icon.url : ""}
            width={icon && icon.size.width ? icon.size.width : "24px"}
            height={icon && icon.size.height ? icon.size.height : "24px"}
          />
        </div>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
