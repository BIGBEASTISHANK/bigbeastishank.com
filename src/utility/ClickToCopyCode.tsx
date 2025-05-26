"use client";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCheck, FaClipboard, FaCopy } from "react-icons/fa";

export default function ClickToCopyCode({
  children,
}: {
  children: React.ReactNode;
}) {
  const [copiedCode, setCopiedCode] = useState(false);

  return (
    <CopyToClipboard
      text={String(children).replace(/\n$/, "")}
      className="my-auto justify-center"
      onCopy={() => {
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      }}
    >
      <div>
        {copiedCode ? (
          <p className="flex my-auto gap-2 items-center justify-center text-[#00FF00] font-bold"> 
            Copied!
            <FaCheck className="text-base"/>
          </p>
        ) : (
          <a title="Click to copy!" className="cursor-pointer select-none">
            <FaClipboard />
          </a>
        )}
      </div>
    </CopyToClipboard>
  );
}
