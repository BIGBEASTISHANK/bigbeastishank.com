"use client";
import { useState, JSX } from "react";
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
            return <span style={{ color: paletteColors[4].hex }}>null</span>;
        }

        if (typeof value === "boolean") {
            return (
                <span style={{ color: paletteColors[11].hex }}>
                    {value.toString()}
                </span>
            );
        }

        if (typeof value === "number") {
            return <span style={{ color: paletteColors[6].hex }}>{value}</span>;
        }

        if (typeof value === "string") {
            return (
                <span style={{ color: paletteColors[9].hex }}>"{value}"</span>
            );
        }

        if (Array.isArray(value)) {
            if (value.length === 0) {
                return <span style={{ color: paletteColors[4].hex }}>[]</span>;
            }

            return (
                <div className="inline-block w-full">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => toggleCollapse(path)}
                            className="transition-colors cursor-pointer select-none"
                            style={{ color: paletteColors[4].hex }}
                        >
                            {isCollapsed ? "▶" : "▼"}
                        </button>
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
                    </div>
                    {!isCollapsed && (
                        <div
                            className="ml-6 mt-1 border-l-2 pl-4"
                            style={{ borderColor: paletteColors[2].hex }}
                        >
                            {value.map((item, index) => (
                                <div key={index} className="my-1 flex gap-2">
                                    <span
                                        className="flex-shrink-0 select-none"
                                        style={{ color: paletteColors[4].hex }}
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
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            );
        }

        if (typeof value === "object") {
            const keys = Object.keys(value);
            if (keys.length === 0) {
                return (
                    <span style={{ color: paletteColors[4].hex }}>{"{}"}</span>
                );
            }

            return (
                <div className="inline-block w-full">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => toggleCollapse(path)}
                            className="transition-colors cursor-pointer select-none"
                            style={{ color: paletteColors[4].hex }}
                        >
                            {isCollapsed ? "▶" : "▼"}
                        </button>
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
                    </div>
                    {!isCollapsed && (
                        <div
                            className="ml-6 mt-1 border-l-2 pl-4"
                            style={{ borderColor: paletteColors[2].hex }}
                        >
                            {keys.map((key) => (
                                <div key={key} className="my-1 flex gap-2">
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
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            );
        }

        return (
            <span style={{ color: paletteColors[4].hex }}>{String(value)}</span>
        );
    };

    return (
        <div
            className="backdrop-blur-md border rounded-lg p-4 font-mono text-sm overflow-auto"
            style={{
                backgroundColor: `${paletteColors[1].hex}80`,
                borderColor: paletteColors[2].hex,
            }}
        >
            {renderValue(data)}
        </div>
    );
}
