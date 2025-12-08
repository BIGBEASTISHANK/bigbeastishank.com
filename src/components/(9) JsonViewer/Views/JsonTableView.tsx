"use client";
import { paletteColors } from "@@/data/PaletteColors";
import { CopyButton } from "@/components/(9) JsonViewer/CopyButton";

export function JsonTableView({ data }: { data: any }) {
    const flattenObject = (
        obj: any,
        prefix = ""
    ): { key: string; value: any; type: string }[] => {
        let result: { key: string; value: any; type: string }[] = [];

        for (const key in obj) {
            const fullKey = prefix ? `${prefix}.${key}` : key;
            const value = obj[key];

            if (value === null) {
                result.push({ key: fullKey, value: "null", type: "null" });
            } else if (Array.isArray(value)) {
                result.push({
                    key: fullKey,
                    value: `[${value.length} items]`,
                    type: "array",
                });
                value.forEach((item, index) => {
                    if (typeof item === "object" && item !== null) {
                        result = result.concat(
                            flattenObject(item, `${fullKey}[${index}]`)
                        );
                    } else {
                        result.push({
                            key: `${fullKey}[${index}]`,
                            value: item,
                            type: typeof item,
                        });
                    }
                });
            } else if (typeof value === "object") {
                result.push({
                    key: fullKey,
                    value: `{${Object.keys(value).length} keys}`,
                    type: "object",
                });
                result = result.concat(flattenObject(value, fullKey));
            } else {
                result.push({ key: fullKey, value: value, type: typeof value });
            }
        }

        return result;
    };

    const rows = flattenObject(data);

    const getTypeColor = (type: string) => {
        switch (type) {
            case "string":
                return paletteColors[9].hex;
            case "number":
                return paletteColors[6].hex;
            case "boolean":
                return paletteColors[11].hex;
            case "object":
                return paletteColors[7].hex;
            case "array":
                return paletteColors[10].hex;
            default:
                return paletteColors[4].hex;
        }
    };

    return (
        <div
            className="backdrop-blur-md border rounded-lg p-4 overflow-auto"
            style={{
                backgroundColor: `${paletteColors[1].hex}80`,
                borderColor: paletteColors[2].hex,
            }}
        >
            <div className="flex items-center justify-between mb-3">
                <span
                    style={{ color: paletteColors[5].hex }}
                    className="font-semibold select-none"
                >
                    Table View ({rows.length} entries)
                </span>
                <CopyButton
                    value={data}
                    style={{ color: paletteColors[9].hex }}
                />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr
                            style={{
                                backgroundColor: paletteColors[2].hex,
                                color: paletteColors[5].hex,
                            }}
                        >
                            <th
                                className="p-2 text-left border select-none"
                                style={{ borderColor: paletteColors[4].hex }}
                            >
                                Key
                            </th>
                            <th
                                className="p-2 text-left border select-none"
                                style={{ borderColor: paletteColors[4].hex }}
                            >
                                Value
                            </th>
                            <th
                                className="p-2 text-left border select-none"
                                style={{ borderColor: paletteColors[4].hex }}
                            >
                                Type
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr
                                key={index}
                                style={{
                                    backgroundColor:
                                        index % 2 === 0
                                            ? `${paletteColors[2].hex}40`
                                            : "transparent",
                                }}
                            >
                                <td
                                    className="p-2 border font-mono text-xs"
                                    style={{
                                        borderColor: paletteColors[4].hex,
                                        color: paletteColors[3].hex,
                                    }}
                                >
                                    {row.key}
                                </td>
                                <td
                                    className="p-2 border font-mono text-xs break-all"
                                    style={{
                                        borderColor: paletteColors[4].hex,
                                        color: paletteColors[5].hex,
                                    }}
                                >
                                    {String(row.value)}
                                </td>
                                <td
                                    className="p-2 border font-mono text-xs select-none"
                                    style={{
                                        borderColor: paletteColors[4].hex,
                                        color: getTypeColor(row.type),
                                    }}
                                >
                                    {row.type}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
