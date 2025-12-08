"use client";
import { motion } from "framer-motion";
import { paletteColors } from "@@/data/PaletteColors";
import { CopyButton } from "@/components/(9) JsonViewer/CopyButton";

export function JsonRawView({ data }: { data: any }) {
    const jsonString = JSON.stringify(data, null, 2);

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
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="flex items-center justify-between mb-3"
            >
                <span style={{ color: paletteColors[5].hex }} className="font-semibold select-none">
                    Raw JSON
                </span>
                <CopyButton value={data} style={{ color: paletteColors[9].hex }} />
            </motion.div>
            <motion.pre
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="font-mono text-sm whitespace-pre-wrap break-all"
                style={{ color: paletteColors[5].hex }}
            >
                {jsonString}
            </motion.pre>
        </motion.div>
    );
}
