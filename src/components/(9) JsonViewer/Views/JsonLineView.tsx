"use client";
import { useState, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { paletteColors } from "@@/data/PaletteColors";
import { CopyButton } from "@/components/(9) JsonViewer/CopyButton";

export function JsonLineView({ data }: { data: any }) {
    const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

    const toggleCollapse = (path: string) => {
        setCollapsed((prev) => {
            const next = new Set(prev);
            if (next.has(path)) {
                next.delete(path);
            } else {
                next.add(path);
            }
            return next;
        });
    };

    const renderValue = (
        value: any,
        path: string = "",
        depth: number = 0
    ): JSX.Element => {
        const isCollapsed = collapsed.has(path);

        if (value === null) {
            return (
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: paletteColors[4].hex }}
                >
                    null
                </motion.span>
            );
        }

        if (typeof value === "boolean") {
            return (
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: paletteColors[11].hex }}
                >
                    {value.toString()}
                </motion.span>
            );
        }

        if (typeof value === "number") {
            return (
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: paletteColors[6].hex }}
                >
                    {value}
                </motion.span>
            );
        }

        if (typeof value === "string") {
            return (
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: paletteColors[9].hex }}
                >
                    "{value}"
                </motion.span>
            );
        }

        if (Array.isArray(value)) {
            if (value.length === 0) {
                return (
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ color: paletteColors[4].hex }}
                    >
                        []
                    </motion.span>
                );
            }

            return (
                <div className="inline-block w-full">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2"
                    >
                        <motion.button
                            onClick={() => toggleCollapse(path)}
                            className="transition-colors cursor-pointer select-none"
                            style={{ color: paletteColors[4].hex }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isCollapsed ? "▶" : "▼"}
                        </motion.button>
                        <span
                            style={{ color: paletteColors[4].hex }}
                            className="select-none"
                        >
                            [{value.length}{" "}
                            {value.length === 1 ? "item" : "items"}]
                        </span>
                        <CopyButton
                            value={value}
                            style={{ color: paletteColors[9].hex }}
                        />
                    </motion.div>
                    <AnimatePresence>
                        {!isCollapsed && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-6 mt-1 border-l-2 pl-4 overflow-hidden"
                                style={{ borderColor: paletteColors[2].hex }}
                            >
                                {value.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: index * 0.05,
                                            duration: 0.2,
                                        }}
                                        className="my-1 flex gap-2"
                                    >
                                        <span
                                            className="flex-shrink-0 select-none"
                                            style={{
                                                color: paletteColors[4].hex,
                                            }}
                                        >
                                            {index}:
                                        </span>
                                        <div className="flex-1">
                                            {renderValue(
                                                item,
                                                `${path}[${index}]`,
                                                depth + 1
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            );
        }

        if (typeof value === "object") {
            const keys = Object.keys(value);
            if (keys.length === 0) {
                return (
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ color: paletteColors[4].hex }}
                    >
                        {"{}"}
                    </motion.span>
                );
            }

            return (
                <div className="inline-block w-full">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2"
                    >
                        <motion.button
                            onClick={() => toggleCollapse(path)}
                            className="transition-colors cursor-pointer select-none"
                            style={{ color: paletteColors[4].hex }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isCollapsed ? "▶" : "▼"}
                        </motion.button>
                        <span
                            style={{ color: paletteColors[4].hex }}
                            className="select-none"
                        >
                            {"{"}
                            {keys.length} {keys.length === 1 ? "key" : "keys"}
                            {"}"}
                        </span>
                        <CopyButton
                            value={value}
                            style={{ color: paletteColors[9].hex }}
                        />
                    </motion.div>
                    <AnimatePresence>
                        {!isCollapsed && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-6 mt-1 border-l-2 pl-4 overflow-hidden"
                                style={{ borderColor: paletteColors[2].hex }}
                            >
                                {keys.map((key, index) => (
                                    <motion.div
                                        key={key}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: index * 0.05,
                                            duration: 0.2,
                                        }}
                                        className="my-1 flex gap-2"
                                    >
                                        <div className="flex gap-1 flex-shrink-0">
                                            <span
                                                style={{
                                                    color: paletteColors[3].hex,
                                                }}
                                                className="select-none"
                                            >
                                                "{key}"
                                            </span>
                                            <span
                                                style={{
                                                    color: paletteColors[4].hex,
                                                }}
                                                className="select-none"
                                            >
                                                :
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            {renderValue(
                                                value[key],
                                                `${path}.${key}`,
                                                depth + 1
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            );
        }

        return (
            <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                style={{ color: paletteColors[4].hex }}
            >
                {String(value)}
            </motion.span>
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="backdrop-blur-md border rounded-lg p-4 font-mono text-sm overflow-auto"
            style={{
                backgroundColor: `${paletteColors[1].hex}80`,
                borderColor: paletteColors[2].hex,
            }}
        >
            {renderValue(data)}
        </motion.div>
    );
}
