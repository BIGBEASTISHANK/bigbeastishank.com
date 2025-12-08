"use client";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

export function CopyButton({
    value,
    style,
}: {
    value: any;
    style?: React.CSSProperties;
}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(JSON.stringify(value, null, 2));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.button
            onClick={handleCopy}
            className="transition-colors flex items-center gap-1 cursor-pointer select-none"
            style={style}
            title="Copy to clipboard"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {copied ? (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-1"
                >
                    <FaCheck className="text-sm" />
                    <span className="text-xs">Copied!</span>
                </motion.div>
            ) : (
                <span className="text-base">📋</span>
            )}
        </motion.button>
    );
}
