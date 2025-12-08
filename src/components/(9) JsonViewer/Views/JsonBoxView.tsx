"use client";
import { useState, JSX } from "react";
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
        keyName?: string
    ): JSX.Element => {
        const isCollapsed = collapsed.has(path);

        if (value === null) {
            return (
                <div
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
                </div>
            );
        }

        if (typeof value === "boolean") {
            return (
                <div
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
                </div>
            );
        }

        if (typeof value === "number") {
            return (
                <div
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
                </div>
            );
        }

        if (typeof value === "string") {
            return (
                <div
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
                </div>
            );
        }

        if (Array.isArray(value)) {
            if (value.length === 0) {
                return (
                    <div
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
                    </div>
                );
            }

            return (
                <div
                    className="backdrop-blur-md border-2 rounded-lg p-4"
                    style={{
                        backgroundColor: `${paletteColors[10].hex}10`,
                        borderColor: `${paletteColors[10].hex}80`,
                    }}
                >
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => toggleCollapse(path)}
                                className="transition-colors text-lg cursor-pointer select-none"
                                style={{ color: paletteColors[10].hex }}
                            >
                                {isCollapsed ? "▶" : "▼"}
                            </button>
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
                    {!isCollapsed && (
                        <div
                            className="space-y-3 pl-4 border-l-4"
                            style={{
                                borderColor: `${paletteColors[10].hex}50`,
                            }}
                        >
                            {value.map((item, index) => (
                                <div key={index}>
                                    {renderValue(
                                        item,
                                        `${path}[${index}]`,
                                        `[${index}]`
                                    )}
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
                    <div
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
                    </div>
                );
            }

            return (
                <div
                    className="backdrop-blur-md border-2 rounded-lg p-4"
                    style={{
                        backgroundColor: `${paletteColors[7].hex}10`,
                        borderColor: `${paletteColors[7].hex}80`,
                    }}
                >
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => toggleCollapse(path)}
                                className="transition-colors text-lg cursor-pointer select-none"
                                style={{ color: paletteColors[7].hex }}
                            >
                                {isCollapsed ? "▶" : "▼"}
                            </button>
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
                    {!isCollapsed && (
                        <div
                            className="space-y-3 pl-4 border-l-4"
                            style={{
                                borderColor: `${paletteColors[7].hex}50`,
                            }}
                        >
                            {keys.map((key) => (
                                <div key={key}>
                                    {renderValue(
                                        value[key],
                                        `${path}.${key}`,
                                        key
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            );
        }

        return (
            <div
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
            </div>
        );
    };

    return (
        <div
            className="backdrop-blur-md border rounded-lg p-4 overflow-auto"
            style={{
                backgroundColor: `${paletteColors[1].hex}80`,
                borderColor: paletteColors[2].hex,
            }}
        >
            {renderValue(data)}
        </div>
    );
}
