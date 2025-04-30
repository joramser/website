'use client';

import * as RadixTooltip from '@radix-ui/react-tooltip';
import { clsx } from 'clsx';
import { useState } from 'react';

type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
};

export const Tooltip: React.FC<TooltipProps> = ({ children, content, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <RadixTooltip.TooltipProvider>
      <RadixTooltip.Root delayDuration={100} open={open}>
        <RadixTooltip.Trigger
          onMouseEnter={() => {
            setOpen(true);
          }}
          onMouseLeave={() => {
            setOpen(false);
          }}
          onFocus={() => {
            setOpen(true);
          }}
          onBlur={() => {
            setOpen(false);
          }}
        >
          {children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Content
          className={clsx('animate-slide-up-and-fade rounded-sm bg-gray-100 py-2 px-4 text-indigo-600', className)}
          sideOffset={8}
        >
          <RadixTooltip.Arrow className="fill-gray-100" />
          {content}
        </RadixTooltip.Content>
      </RadixTooltip.Root>
    </RadixTooltip.TooltipProvider>
  );
};
