import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-radius10",
  RoundedBorder27: "rounded-radius275",
};
const variants = {
  OutlineIndigoA400:
    "bg-blue_50 border-bw097 border-indigo_A400 border-solid text-indigo_A400",
  OutlineGray500: "border-bw15 border-gray_500 border-solid text-gray_900",
  FillIndigoA700: "bg-indigo_A700 text-white_A700",
  FillBlueA701: "bg-blue_A701 text-white_A700",
  OutlineDeeppurple400:
    "bg-deep_purple_400 border border-deep_purple_400 border-solid shadow-bs text-white_A700",
  OutlineIndigoA700:
    "bg-indigo_A700 border border-indigo_A700 border-solid shadow-bs text-white_A700",
  OutlineIndigoA700_1:
    "border-2 border-indigo_A700 border-solid shadow-bs text-indigo_A700",
  FillGray55: "bg-gray_55 text-bluegray_701",
  FillGray56: "bg-gray_56 text-light_blue_900",
  FillBlue51: "bg-blue_51 text-indigo_500",
  FillRed50: "bg-red_50 text-deep_orange_900",
  FillLightgreen50: "bg-light_green_50 text-teal_800",
  FillGray57: "bg-gray_57 text-pink_A700",
  FillRed51: "bg-red_51 text-pink_700",
  FillGray54: "bg-gray_54",
};
const sizes = {
  sm: "p-[3px]",
  md: "p-[12px] sm:p-[6px] md:p-[8px]",
  lg: "md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder10", "RoundedBorder27"]),
  variant: PropTypes.oneOf([
    "OutlineIndigoA400",
    "OutlineGray500",
    "FillIndigoA700",
    "FillBlueA701",
    "OutlineDeeppurple400",
    "OutlineIndigoA700",
    "OutlineIndigoA700_1",
    "FillGray55",
    "FillGray56",
    "FillBlue51",
    "FillRed50",
    "FillLightgreen50",
    "FillGray57",
    "FillRed51",
    "FillGray54",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder10",
  variant: "OutlineIndigoA400",
  size: "sm",
};

export { Button };
