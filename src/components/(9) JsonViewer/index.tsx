"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { paletteColors } from "@@/data/PaletteColors";
import { JsonLineView } from "@/components/(9) JsonViewer/Views/JsonLineView";
import { JsonBoxView } from "@/components/(9) JsonViewer/Views/JsonBoxView";
import { JsonTableView } from "@/components/(9) JsonViewer/Views/JsonTableView";
import { JsonRawView } from "@/components/(9) JsonViewer/Views/JsonRawView";

type InputMode = "json" | "api";
type HttpMethod = "GET" | "POST";
type PostContentType = "json" | "form-data" | "plain-text";
type ViewMode = "line" | "box" | "table" | "raw";

export default function JsonViewer() {
    const [mode, setMode] = useState<InputMode>("json");
    const [viewMode, setViewMode] = useState<ViewMode>("line");
    const [httpMethod, setHttpMethod] = useState<HttpMethod>("GET");
    const [contentType, setContentType] = useState<PostContentType>("json");
    const [url, setUrl] = useState("");
    const [jsonInput, setJsonInput] = useState(
        JSON.stringify(
            {
                id: "f92c7a1b-4c3f-4c43-8e7e-9bf7a2d9b1d4",
                timestamp: "2025-12-02T14:32:10Z",
                user: {
                    username: "silver_wolf_82",
                    age: 27,
                    email: "silver_wolf_82@example.com",
                    preferences: {
                        theme: "dark",
                        notifications: true,
                        language: "en-US",
                    },
                },
                items: [
                    {
                        item_id: 101,
                        name: "Red Backpack",
                        quantity: 1,
                        price: 49.99,
                    },
                    {
                        item_id: 205,
                        name: "Wireless Mouse",
                        quantity: 2,
                        price: 19.95,
                    },
                ],
                metrics: {
                    session_length_seconds: 482,
                    clicks: 13,
                    location: {
                        lat: 37.7749,
                        lon: -122.4194,
                    },
                },
                flags: {
                    verified: false,
                    beta_user: true,
                },
            },
            null,
            2
        )
    );
    const [postBody, setPostBody] = useState("");
    const [output, setOutput] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleJsonSubmit = () => {
        try {
            const parsed = JSON.parse(jsonInput);
            setOutput(parsed);
            setError(null);
        } catch (e) {
            setError("Invalid JSON: " + (e as Error).message);
            setOutput(null);
        }
    };

    const handleApiCall = async () => {
        setLoading(true);
        setError(null);
        try {
            const options: RequestInit = {
                method: httpMethod,
            };

            if (httpMethod === "POST") {
                if (contentType === "json") {
                    options.headers = { "Content-Type": "application/json" };
                    options.body = postBody;
                } else if (contentType === "form-data") {
                    const formData = new FormData();
                    postBody.split("\n").forEach((line) => {
                        const [key, ...valueParts] = line.split("=");
                        if (key && valueParts.length > 0) {
                            formData.append(
                                key.trim(),
                                valueParts.join("=").trim()
                            );
                        }
                    });
                    options.body = formData;
                } else if (contentType === "plain-text") {
                    options.headers = { "Content-Type": "text/plain" };
                    options.body = postBody;
                }
            }

            const response = await fetch(url, options);
            const data = await response.json();
            setOutput(data);
        } catch (e) {
            setError("API Error: " + (e as Error).message);
            setOutput(null);
        } finally {
            setLoading(false);
        }
    };

    const renderView = () => {
        switch (viewMode) {
            case "line":
                return <JsonLineView data={output} />;
            case "box":
                return <JsonBoxView data={output} />;
            case "table":
                return <JsonTableView data={output} />;
            case "raw":
                return <JsonRawView data={output} />;
            default:
                return <JsonLineView data={output} />;
        }
    };

    return (
        <div className="flex flex-col w-full md:max-w-[45rem] max-w-[35rem] mx-auto p-4 gap-4">
            {/* Mode Toggle */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex gap-2 p-1 w-fit"
            >
                {/* Json */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMode("json")}
                    className="px-4 py-2 rounded-full transition-colors cursor-pointer select-none border-2"
                    style={{
                        backgroundColor:
                            mode === "json"
                                ? paletteColors[7].hex
                                : "transparent",
                        color:
                            mode === "json"
                                ? paletteColors[5].hex
                                : paletteColors[4].hex,
                        borderColor: paletteColors[7].hex,
                    }}
                >
                    JSON Code
                </motion.button>

                {/* API */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMode("api")}
                    className="px-4 py-2 rounded-full transition-colors cursor-pointer select-none border-2"
                    style={{
                        backgroundColor:
                            mode === "api"
                                ? paletteColors[7].hex
                                : "transparent",
                        color:
                            mode === "api"
                                ? paletteColors[5].hex
                                : paletteColors[4].hex,
                        borderColor: paletteColors[7].hex,
                    }}
                >
                    API Call
                </motion.button>
            </motion.div>

            <div className="relative">
                <AnimatePresence mode="wait" initial={false}>
                    {/* Json Mode */}
                    {mode === "json" && (
                        <motion.div
                            key="json-mode"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-4"
                        >
                            <motion.textarea
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.3 }}
                                value={jsonInput}
                                onChange={(e) => setJsonInput(e.target.value)}
                                className="w-full h-64 p-3 backdrop-blur-md border rounded-lg font-mono text-sm resize-y outline-none"
                                style={{
                                    backgroundColor: `${paletteColors[1].hex}80`,
                                    borderColor: paletteColors[4].hex,
                                    color: paletteColors[5].hex,
                                }}
                                placeholder="Enter JSON here..."
                            />
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleJsonSubmit}
                                className="px-6 py-2 rounded-lg transition-colors w-fit cursor-pointer select-none"
                                style={{
                                    backgroundColor: paletteColors[7].hex,
                                    color: paletteColors[5].hex,
                                }}
                            >
                                Parse JSON
                            </motion.button>
                        </motion.div>
                    )}

                    {/* API Mode */}
                    {mode === "api" && (
                        <motion.div
                            key="api-mode"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-4"
                        >
                            {/* HTTP Method Toggle */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.3 }}
                                className="flex gap-2 p-1 backdrop-blur-md border outline-none rounded-lg w-fit"
                                style={{
                                    backgroundColor: `${paletteColors[1].hex}80`,
                                    borderColor: paletteColors[4].hex,
                                }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setHttpMethod("GET")}
                                    className="px-4 py-2 rounded-md transition-colors cursor-pointer select-none"
                                    style={{
                                        backgroundColor:
                                            httpMethod === "GET"
                                                ? paletteColors[9].hex
                                                : "transparent",
                                        color:
                                            httpMethod === "GET"
                                                ? paletteColors[0].hex
                                                : paletteColors[4].hex,
                                    }}
                                >
                                    GET
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setHttpMethod("POST")}
                                    className="px-4 py-2 rounded-md transition-colors cursor-pointer select-none"
                                    style={{
                                        backgroundColor:
                                            httpMethod === "POST"
                                                ? paletteColors[10].hex
                                                : "transparent",
                                        color:
                                            httpMethod === "POST"
                                                ? paletteColors[0].hex
                                                : paletteColors[4].hex,
                                    }}
                                >
                                    POST
                                </motion.button>
                            </motion.div>

                            {/* URL Input */}
                            <motion.input
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                                type="text"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="Enter API URL..."
                                className="w-full p-3 backdrop-blur-md border outline-none rounded-lg"
                                style={{
                                    backgroundColor: `${paletteColors[1].hex}80`,
                                    borderColor: paletteColors[4].hex,
                                    color: paletteColors[5].hex,
                                }}
                            />

                            {/* POST Content Type & Body */}
                            <AnimatePresence>
                                {httpMethod === "POST" && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col gap-4 overflow-hidden"
                                    >
                                        <div className="flex gap-2 flex-wrap">
                                            {(
                                                [
                                                    "json",
                                                    "form-data",
                                                    "plain-text",
                                                ] as PostContentType[]
                                            ).map((type, index) => (
                                                <motion.button
                                                    key={type}
                                                    initial={{
                                                        opacity: 0,
                                                        scale: 0.8,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        scale: 1,
                                                    }}
                                                    transition={{
                                                        delay: index * 0.1,
                                                        duration: 0.2,
                                                    }}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() =>
                                                        setContentType(type)
                                                    }
                                                    className="px-3 py-1.5 rounded-md text-sm transition-colors backdrop-blur-md border outline-none cursor-pointer select-none"
                                                    style={{
                                                        backgroundColor:
                                                            contentType === type
                                                                ? paletteColors[11]
                                                                      .hex
                                                                : `${paletteColors[1].hex}80`,
                                                        color:
                                                            contentType === type
                                                                ? paletteColors[5]
                                                                      .hex
                                                                : paletteColors[4]
                                                                      .hex,
                                                        borderColor:
                                                            paletteColors[4]
                                                                .hex,
                                                    }}
                                                >
                                                    {type}
                                                </motion.button>
                                            ))}
                                        </div>

                                        <motion.textarea
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                delay: 0.2,
                                                duration: 0.3,
                                            }}
                                            value={postBody}
                                            onChange={(e) =>
                                                setPostBody(e.target.value)
                                            }
                                            className="w-full h-32 p-3 backdrop-blur-md border outline-none rounded-lg font-mono text-sm resize-y"
                                            style={{
                                                backgroundColor: `${paletteColors[1].hex}80`,
                                                borderColor:
                                                    paletteColors[4].hex,
                                                color: paletteColors[5].hex,
                                            }}
                                            placeholder={
                                                contentType === "form-data"
                                                    ? "key1=value1\nkey2=value2"
                                                    : contentType === "json"
                                                    ? '{"key": "value"}'
                                                    : "Plain text body"
                                            }
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                                whileHover={{
                                    scale: loading || !url ? 1 : 1.05,
                                }}
                                whileTap={{ scale: loading || !url ? 1 : 0.95 }}
                                onClick={handleApiCall}
                                disabled={loading || !url}
                                className="px-6 py-2 rounded-lg transition-colors w-fit select-none"
                                style={{
                                    backgroundColor:
                                        loading || !url
                                            ? paletteColors[4].hex
                                            : paletteColors[7].hex,
                                    color: paletteColors[5].hex,
                                    cursor:
                                        loading || !url
                                            ? "not-allowed"
                                            : "pointer",
                                }}
                            >
                                {loading ? "Loading..." : "Send Request"}
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Error Display */}
            <AnimatePresence>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="p-4 border rounded-lg select-none"
                        style={{
                            backgroundColor: `${paletteColors[8].hex}30`,
                            borderColor: paletteColors[8].hex,
                            color: paletteColors[12].hex,
                        }}
                    >
                        {error}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* JSON Output */}
            <AnimatePresence>
                {output && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}
                        className="mt-4"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                            className="flex items-center justify-between mb-3"
                        >
                            <h3
                                className="text-lg font-semibold select-none"
                                style={{ color: paletteColors[5].hex }}
                            >
                                Output:
                            </h3>

                            {/* View Mode Toggle */}
                            <div
                                className="flex gap-2 p-1 backdrop-blur-md border rounded-lg flex-wrap"
                                style={{
                                    backgroundColor: `${paletteColors[1].hex}80`,
                                    borderColor: paletteColors[4].hex,
                                }}
                            >
                                {(
                                    [
                                        "line",
                                        "box",
                                        "table",
                                        "raw",
                                    ] as ViewMode[]
                                ).map((view, index) => (
                                    <motion.button
                                        key={view}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            delay: 0.3 + index * 0.05,
                                            duration: 0.2,
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setViewMode(view)}
                                        className="px-3 py-1.5 rounded-md text-sm transition-colors cursor-pointer select-none"
                                        style={{
                                            backgroundColor:
                                                viewMode === view
                                                    ? paletteColors[7].hex
                                                    : "transparent",
                                            color:
                                                viewMode === view
                                                    ? paletteColors[5].hex
                                                    : paletteColors[4].hex,
                                        }}
                                    >
                                        {view.charAt(0).toUpperCase() +
                                            view.slice(1)}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={viewMode}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                {renderView()}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
