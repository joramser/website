'use client';

import * as RadixTooltip from '@radix-ui/react-tooltip';
import { clsx } from 'clsx';

type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
};

export const Tooltip: React.FC<TooltipProps> = ({ children, content, className }) => {
  return (
    <RadixTooltip.TooltipProvider>
      <RadixTooltip.Root delayDuration={100}>
        <RadixTooltip.Trigger>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Content
          className={clsx('animate-slide-up-and-fade rounded bg-gray-100 py-2 px-4 text-indigo-600', className)}
          sideOffset={8}
        >
          <RadixTooltip.Arrow className="fill-gray-100" />
          {content}
        </RadixTooltip.Content>
      </RadixTooltip.Root>
    </RadixTooltip.TooltipProvider>
  );
};
