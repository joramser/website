import { clsx } from "clsx";
import Link, { type LinkProps } from "next/link";

type ButtonLinkProps = {
  disabled?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps;

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  className,
  disabled = false,
  ...props
}) => {
  return (
    <Link
      className={clsx(
        "inline-flex h-12 items-center justify-center rounded-sm border-2 bg-transparent px-4 opacity-70 md:font-semibold xl:h-14 xl:w-44",
        {
          "border-indigo-400 text-indigo-400 hover:border-indigo-500 hover:text-indigo-500 transition hover:-translate-y-0.5":
            !disabled,
        },
        { "border-gray-400 text-gray-400": !!disabled },
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
