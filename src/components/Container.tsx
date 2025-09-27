import { clsx } from "clsx";

export const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "container mx-auto flex min-h-screen flex-col",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
