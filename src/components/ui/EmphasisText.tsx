import { clsx } from "clsx";

import { AllowedColors } from "@web/components/ui/types";

type EmphasisTextProps = {
  color?: AllowedColors;
} & React.HTMLAttributes<HTMLSpanElement>;

/**
 * Styled text component
 */
export const EmphasisText: React.FC<EmphasisTextProps> = ({
  children,
  className,
  color = "orange",
  ...props
}) => {
  return (
    <span
      className={clsx(
        `font-semibold`,
        { "text-orange-500": color === "orange" },
        { "text-emerald-500": color === "emerald" },
        { "text-rose-500": color === "rose" },
        { "text-indigo-500": color === "indigo" },
        { "text-amber-500": color === "amber" },
        { "text-yellow-500": color === "yellow" },
        { "text-sky-500": color === "sky" },
        { "text-cyan-500": color === "cyan" },
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
