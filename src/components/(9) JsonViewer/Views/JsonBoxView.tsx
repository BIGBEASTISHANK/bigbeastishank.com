"use client";
import { useState, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { paletteColors } from "@@/data/PaletteColors";
import { CopyButton } from "@/components/(9) JsonViewer/CopyButton";

export function JsonBoxView({ data }: { data: any }) {
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
        keyName?: string,
        index: number = 0
    ): JSX.Element => {
        const isCollapsed = collapsed.has(path);

        if (value === null) {
            return (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="backdrop-blur-md border rounded-lg p-3"
                    style={{
                        backgroundColor: `${paletteColors[2].hex}80`,
                        borderColor: paletteColors[4].hex,
                    }}
                >
                    {keyName && (
                        <div
                            className="font-semibold mb-1 text-sm select-none"
                            style={{ color: paletteColors[3].hex }}
                        >
                            {keyName}
                        </div>
                    )}
                    <span
                        className="text-sm select-none"
                        style={{ color: paletteColors[4].hex }}
                    >
                        null
                    </span>
                </motion.div>
            );
        }

        if (typeof value === "boolean") {
            return (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="backdrop-blur-md border rounded-lg p-3"
                    style={{
                        backgroundColor: `${paletteColors[11].hex}20`,
                        borderColor: `${paletteColors[11].hex}80`,
                    }}
                >
                    {keyName && (
                        <div
                            className="font-semibold mb-1 text-sm select-none"
                            style={{ color: paletteColors[3].hex }}
                        >
                            {keyName}
                        </div>
                    )}
                    <span
                        className="font-medium select-none"
                        style={{ color: paletteColors[11].hex }}
                    >
                        {value.toString()}
                    </span>
                </motion.div>
            );
        }

        if (typeof value === "number") {
            return (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="backdrop-blur-md border rounded-lg p-3"
                    style={{
                        backgroundColor: `${paletteColors[6].hex}20`,
                        borderColor: `${paletteColors[6].hex}80`,
                    }}
                >
                    {keyName && (
                        <div
                            className="font-semibold mb-1 text-sm select-none"
                            style={{ color: paletteColors[3].hex }}
                        >
                            {keyName}
                        </div>
                    )}
                    <span
                        className="font-medium select-none"
                        style={{ color: paletteColors[6].hex }}
                    >
                        {value}
                    </span>
                </motion.div>
            );
        }

        if (typeof value === "string") {
            return (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="backdrop-blur-md border rounded-lg p-3"
                    style={{
                        backgroundColor: `${paletteColors[9].hex}20`,
                        borderColor: `${paletteColors[9].hex}80`,
                    }}
                >
                    {keyName && (
                        <div
                            className="font-semibold mb-1 text-sm select-none"
                            style={{ color: paletteColors[3].hex }}
                        >
                            {keyName}
                        </div>
                    )}
                    <span
                        className="font-medium break-all"
                        style={{ color: paletteColors[9].hex }}
                    >
                        "{value}"
                    </span>
                </motion.div>
            );
        }

        if (Array.isArray(value)) {
            if (value.length === 0) {
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="backdrop-blur-md border rounded-lg p-3"
                        style={{
                            backgroundColor: `${paletteColors[2].hex}80`,
                            borderColor: paletteColors[4].hex,
                        }}
                    >
                        {keyName && (
                            <div
                                className="font-semibold mb-1 text-sm select-none"
                                style={{ color: paletteColors[3].hex }}
                            >
                                {keyName}
                            </div>
                        )}
                        <span
                            className="text-sm select-none"
                            style={{ color: paletteColors[4].hex }}
                        >
                            [ empty array ]
                        </span>
                    </motion.div>
                );
            }

            return (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="backdrop-blur-md border-2 rounded-lg p-4"
                    style={{
                        backgroundColor: `${paletteColors[10].hex}10`,
                        borderColor: `${paletteColors[10].hex}80`,
                    }}
                >
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <motion.button
                                onClick={() => toggleCollapse(path)}
                                className="transition-colors text-lg cursor-pointer select-none"
                                style={{ color: paletteColors[10].hex }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {isCollapsed ? "▶" : "▼"}
                            </motion.button>
                            <div>
                                {keyName && (
                                    <div
                                        className="font-bold text-base select-none"
                                        style={{ color: paletteColors[3].hex }}
                                    >
                                        {keyName}
                                    </div>
                                )}
                                <div
                                    className="text-sm font-medium select-none"
                                    style={{ color: paletteColors[10].hex }}
                                >
                                    Array [{value.length}{" "}
                                    {value.length === 1 ? "item" : "items"}]
                                </div>
                            </div>
                        </div>
                        <CopyButton
                            value={value}
                            style={{ color: paletteColors[9].hex }}
                        />
                    </div>
                    <AnimatePresence>
                        {!isCollapsed && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-3 pl-4 border-l-4 overflow-hidden"
                                style={{
                                    borderColor: `${paletteColors[10].hex}50`,
                                }}
                            >
                                {value.map((item, idx) => (
                                    <div key={idx}>
                                        {renderValue(
                                            item,
                                            `${path}[${idx}]`,
                                            `[${idx}]`,
                                            idx
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            );
        }

        if (typeof value === "object") {
            const keys = Object.keys(value);
            if (keys.length === 0) {
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="backdrop-blur-md border rounded-lg p-3"
                        style={{
                            backgroundColor: `${paletteColors[2].hex}80`,
                            borderColor: paletteColors[4].hex,
                        }}
                    >
                        {keyName && (
                            <div
                                className="font-semibold mb-1 text-sm select-none"
                                style={{ color: paletteColors[3].hex }}
                            >
                                {keyName}
                            </div>
                        )}
                        <span
                            className="text-sm select-none"
                            style={{ color: paletteColors[4].hex }}
                        >
                            {"{ empty object }"}
                        </span>
                    </motion.div>
                );
            }

            return (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="backdrop-blur-md border-2 rounded-lg p-4"
                    style={{
                        backgroundColor: `${paletteColors[7].hex}10`,
                        borderColor: `${paletteColors[7].hex}80`,
                    }}
                >
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <motion.button
                                onClick={() => toggleCollapse(path)}
                                className="transition-colors text-lg cursor-pointer select-none"
                                style={{ color: paletteColors[7].hex }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {isCollapsed ? "▶" : "▼"}
                            </motion.button>
                            <div>
                                {keyName && (
                                    <div
                                        className="font-bold text-base select-none"
                                        style={{ color: paletteColors[3].hex }}
                                    >
                                        {keyName}
                                    </div>
                                )}
                                <div
                                    className="text-sm font-medium select-none"
                                    style={{ color: paletteColors[7].hex }}
                                >
                                    Object {"{"}
                                    {keys.length}{" "}
                                    {keys.length === 1 ? "key" : "keys"}
                                    {"}"}
                                </div>
                            </div>
                        </div>
                        <CopyButton
                            value={value}
                            style={{ color: paletteColors[9].hex }}
                        />
                    </div>
                    <AnimatePresence>
                        {!isCollapsed && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-3 pl-4 border-l-4 overflow-hidden"
                                style={{
                                    borderColor: `${paletteColors[7].hex}50`,
                                }}
                            >
                                {keys.map((key, idx) => (
                                    <div key={key}>
                                        {renderValue(
                                            value[key],
                                            `${path}.${key}`,
                                            key,
                                            idx
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            );
        }

        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="backdrop-blur-md border rounded-lg p-3"
                style={{
                    backgroundColor: `${paletteColors[2].hex}80`,
                    borderColor: paletteColors[4].hex,
                }}
            >
                {keyName && (
                    <div
                        className="font-semibold mb-1 text-sm select-none"
                        style={{ color: paletteColors[3].hex }}
                    >
                        {keyName}
                    </div>
                )}
                <span style={{ color: paletteColors[4].hex }}>
                    {String(value)}
                </span>
            </motion.div>
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="backdrop-blur-md border rounded-lg p-4 overflow-auto"
            style={{
                backgroundColor: `${paletteColors[1].hex}80`,
                borderColor: paletteColors[2].hex,
            }}
        >
            {renderValue(data)}
        </motion.div>
    );
}
