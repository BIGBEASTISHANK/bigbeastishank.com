"use client";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export function CopyButton({ value, style }: { value: any; style?: React.CSSProperties }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(JSON.stringify(value, null, 2));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="transition-colors flex items-center gap-1 cursor-pointer select-none"
            style={style}
            title="Copy to clipboard"
        >
            {copied ? (
                <>
                    <FaCheck className="text-sm" />
                    <span className="text-xs">Copied!</span>
                </>
            ) : (
                <span className="text-base">📋</span>
            )}
        </button>
    );
}
