import { PropsWithChildren } from "react";
import { ComponentPropsWithoutRef } from "react";
import styles from "./button.module.css";

type ButtonProps = Omit<ComponentPropsWithoutRef<"button">, "className"> & {
  buttonType: "primary" | "secondary" | "selection" | "big";
  isActive?: boolean;
};

const Button = ({
  children,
  buttonType,
  isActive,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[`button--${buttonType}`]} ${
        isActive ? styles.active : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
