import Link, { LinkProps } from 'next/link';
import { clsx } from 'clsx';

import { AllowedColors } from '@web/components/ui/types';

type BasicLinkProps = {
  color?: AllowedColors;
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps;

/**
 * Styled link component
 */
export const BasicLink: React.FC<BasicLinkProps> = ({ children, className, color = 'orange', external, ...props }) => {
  return (
    <Link
      className={clsx(
        `inline-flex items-center tracking-wider transition hover:shadow-underline`,
        { 'text-orange-500 hover:text-orange-600 hover:shadow-orange-600': color === 'orange' },
        { 'text-emerald-500 hover:text-emerald-600 hover:shadow-emerald-600': color === 'emerald' },
        { 'text-rose-500 hover:text-rose-600 hover:shadow-rose-600': color === 'rose' },
        { 'text-indigo-500 hover:text-indigo-600 hover:shadow-indigo-600': color === 'indigo' },
        { 'text-amber-500 hover:text-amber-600 hover:shadow-amber-600': color === 'amber' },
        { 'text-violet-500 hover:text-violet-600 hover:shadow-violet-600': color === 'violet' },
        className
      )}
      target={clsx({ _blank: !!external })}
      rel={clsx({ 'noreferrer noopener': !!external })}
      {...props}
    >
      {children}
      {external && <span className="pl-1 text-sm">↗</span>}
    </Link>
  );
};
