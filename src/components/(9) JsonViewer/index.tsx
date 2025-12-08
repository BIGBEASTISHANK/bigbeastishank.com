"use client";
import { useState } from "react";
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
            <div className="flex gap-2 p-1 w-fit">
                <button
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
                </button>
                <button
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
                </button>
            </div>

            {/* JSON Mode */}
            {mode === "json" && (
                <div className="flex flex-col gap-4">
                    <textarea
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
                    <button
                        onClick={handleJsonSubmit}
                        className="px-6 py-2 rounded-lg transition-colors w-fit cursor-pointer select-none"
                        style={{
                            backgroundColor: paletteColors[7].hex,
                            color: paletteColors[5].hex,
                        }}
                    >
                        Parse JSON
                    </button>
                </div>
            )}

            {/* API Mode */}
            {mode === "api" && (
                <div className="flex flex-col gap-4">
                    {/* HTTP Method Toggle */}
                    <div
                        className="flex gap-2 p-1 backdrop-blur-md border outline-none rounded-lg w-fit"
                        style={{
                            backgroundColor: `${paletteColors[1].hex}80`,
                            borderColor: paletteColors[4].hex,
                        }}
                    >
                        <button
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
                        </button>
                        <button
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
                        </button>
                    </div>

                    {/* URL Input */}
                    <input
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
                    {httpMethod === "POST" && (
                        <>
                            <div className="flex gap-2 flex-wrap">
                                {(
                                    [
                                        "json",
                                        "form-data",
                                        "plain-text",
                                    ] as PostContentType[]
                                ).map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setContentType(type)}
                                        className="px-3 py-1.5 rounded-md text-sm transition-colors backdrop-blur-md border outline-none cursor-pointer select-none"
                                        style={{
                                            backgroundColor:
                                                contentType === type
                                                    ? paletteColors[11].hex
                                                    : `${paletteColors[1].hex}80`,
                                            color:
                                                contentType === type
                                                    ? paletteColors[5].hex
                                                    : paletteColors[4].hex,
                                            borderColor: paletteColors[4].hex,
                                        }}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>

                            <textarea
                                value={postBody}
                                onChange={(e) => setPostBody(e.target.value)}
                                className="w-full h-32 p-3 backdrop-blur-md border outline-none rounded-lg font-mono text-sm resize-y"
                                style={{
                                    backgroundColor: `${paletteColors[1].hex}80`,
                                    borderColor: paletteColors[4].hex,
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
                        </>
                    )}

                    <button
                        onClick={handleApiCall}
                        disabled={loading || !url}
                        className="px-6 py-2 rounded-lg transition-colors w-fit select-none"
                        style={{
                            backgroundColor:
                                loading || !url
                                    ? paletteColors[4].hex
                                    : paletteColors[7].hex,
                            color: paletteColors[5].hex,
                            cursor: loading || !url ? "not-allowed" : "pointer",
                        }}
                    >
                        {loading ? "Loading..." : "Send Request"}
                    </button>
                </div>
            )}

            {/* Error Display */}
            {error && (
                <div
                    className="p-4 border rounded-lg select-none"
                    style={{
                        backgroundColor: `${paletteColors[8].hex}30`,
                        borderColor: paletteColors[8].hex,
                        color: paletteColors[12].hex,
                    }}
                >
                    {error}
                </div>
            )}

            {/* JSON Output */}
            {output && (
                <div className="mt-4">
                    <div className="flex items-center justify-between mb-3">
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
                            <button
                                onClick={() => setViewMode("line")}
                                className="px-3 py-1.5 rounded-md text-sm transition-colors cursor-pointer select-none"
                                style={{
                                    backgroundColor:
                                        viewMode === "line"
                                            ? paletteColors[7].hex
                                            : "transparent",
                                    color:
                                        viewMode === "line"
                                            ? paletteColors[5].hex
                                            : paletteColors[4].hex,
                                }}
                            >
                                Line
                            </button>
                            <button
                                onClick={() => setViewMode("box")}
                                className="px-3 py-1.5 rounded-md text-sm transition-colors cursor-pointer select-none"
                                style={{
                                    backgroundColor:
                                        viewMode === "box"
                                            ? paletteColors[7].hex
                                            : "transparent",
                                    color:
                                        viewMode === "box"
                                            ? paletteColors[5].hex
                                            : paletteColors[4].hex,
                                }}
                            >
                                Box
                            </button>
                            <button
                                onClick={() => setViewMode("table")}
                                className="px-3 py-1.5 rounded-md text-sm transition-colors cursor-pointer select-none"
                                style={{
                                    backgroundColor:
                                        viewMode === "table"
                                            ? paletteColors[7].hex
                                            : "transparent",
                                    color:
                                        viewMode === "table"
                                            ? paletteColors[5].hex
                                            : paletteColors[4].hex,
                                }}
                            >
                                Table
                            </button>
                            <button
                                onClick={() => setViewMode("raw")}
                                className="px-3 py-1.5 rounded-md text-sm transition-colors cursor-pointer select-none"
                                style={{
                                    backgroundColor:
                                        viewMode === "raw"
                                            ? paletteColors[7].hex
                                            : "transparent",
                                    color:
                                        viewMode === "raw"
                                            ? paletteColors[5].hex
                                            : paletteColors[4].hex,
                                }}
                            >
                                Raw
                            </button>
                        </div>
                    </div>

                    {renderView()}
                </div>
            )}
        </div>
    );
}
