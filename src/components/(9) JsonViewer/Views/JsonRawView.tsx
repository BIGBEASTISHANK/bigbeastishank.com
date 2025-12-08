"use client";
import { paletteColors } from "@@/data/PaletteColors";
import { CopyButton } from "@/components/(9) JsonViewer/CopyButton";

export function JsonRawView({ data }: { data: any }) {
    const jsonString = JSON.stringify(data, null, 2);

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
                    Raw JSON
                </span>
                <CopyButton
                    value={data}
                    style={{ color: paletteColors[9].hex }}
                />
            </div>
            <pre
                className="font-mono text-sm whitespace-pre-wrap break-all"
                style={{ color: paletteColors[5].hex }}
            >
                {jsonString}
            </pre>
        </div>
    );
}
