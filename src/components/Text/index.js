import React from "react";
const variantClasses = {
  h1: "font-extrabold sm:text-[44px] md:text-[50px] text-[58px]",
  h2: "font-semibold sm:text-[38px] md:text-[44px] text-[52px]",
  h3: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  h4: "font-bold sm:text-[32px] md:text-[38px] text-[42px]",
  h5: "font-semibold sm:text-[21px] md:text-[27px] text-[40px]",
  h6: "font-semibold sm:text-[32px] md:text-[34px] text-[36px]",
  body1: "sm:text-[20px] md:text-[22px] text-[24px]",
  body2: "text-[20px]",
  body3: "text-[18px]",
  body4: "text-[16px]",
  body5: "text-[14px]",
  body6: "text-[13px]",
  body7: "font-medium text-[11px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
