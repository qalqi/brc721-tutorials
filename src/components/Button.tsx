import cx from "classnames";

export const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
  }
) => {
  const { variant = "primary", className, disabled, ...rest } = props;
  const classes = cx(
    "px-5 py-1 text-white",
    {
      "!bg-gray-200 pointer-events-none": disabled,
      "bg-orange-500 hover:bg-orange-600": variant === "primary",
      "bg-gray-100 hover:bg-gray-200 !text-gray-500": variant === "secondary",
    },
    className
  );

  return <button className={classes} {...rest} />;
};
