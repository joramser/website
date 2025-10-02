"use client";

import { CheckIcon, CopyIcon } from "@phosphor-icons/react";
import * as Tabs from "@radix-ui/react-tabs";
import { clsx } from "clsx";
import type { ReactElement } from "react";
import { useState } from "react";

type CodeTabItem = {
  label: string;
  value: string;
  content: ReactElement;
  icon?: ReactElement;
};

type CodeTabProps = {
  items: CodeTabItem[];
  className?: string;
};

export const CodeTab: React.FC<CodeTabProps> = ({ items, className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Tabs.Root
      className={clsx(
        "w-full bg-slate-800/50 border border-slate-700 rounded-xl",
        className,
      )}
      defaultValue={items[0].value}
    >
      <Tabs.List className="flex">
        {items.map((item) => (
          <Tabs.Trigger
            key={item.value}
            value={item.value}
            className={clsx(
              "flex gap-2 items-center px-4 py-2 transition-colors text-gray-400 hover:text-gray-200 border-b-2 border-transparent",
              "data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-indigo-500",
            )}
          >
            {item?.icon}
            {item.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {items.map((item) => (
        <Tabs.Content
          key={item.value}
          value={item.value}
          className="flex justify-between items-center px-4 py-2 text-base"
        >
          <pre className="overflow-x-auto">
            <code className="text-gray-300">{item.content}</code>
          </pre>
          <button
            type="button"
            onClick={() => handleCopy(item.value)}
            className={"p-2 rounded transition-colors hover:bg-slate-700"}
            aria-label="Copy code"
          >
            {copied ? <CheckIcon size={20} /> : <CopyIcon size={20} />}
          </button>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};
