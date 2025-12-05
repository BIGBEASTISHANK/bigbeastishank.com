"use client";
import { useState } from "react";
import ReactJson from "react-json-view";

type InputMode = "json" | "api";
type HttpMethod = "GET" | "POST";
type PostContentType = "json" | "form-data" | "plain-text";

export default function JsonViewer() {
    const [mode, setMode] = useState<InputMode>("json");
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
                    // Parse form data from textarea (expects key=value pairs, one per line)
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

    return (
        <div className="flex flex-col w-full md:max-w-[45rem] max-w-[35rem] mx-auto p-4 gap-4">
            {/* Mode Toggle */}
            <div className="flex gap-2 p-1 bg-gray-800 rounded-lg w-fit">
                <button
                    onClick={() => setMode("json")}
                    className={`px-4 py-2 rounded-md transition-colors ${
                        mode === "json"
                            ? "bg-[#1793D1] text-white"
                            : "text-gray-400 hover:text-white"
                    }`}
                >
                    JSON Code
                </button>
                <button
                    onClick={() => setMode("api")}
                    className={`px-4 py-2 rounded-md transition-colors ${
                        mode === "api"
                            ? "bg-[#1793D1] text-white"
                            : "text-gray-400 hover:text-white"
                    }`}
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
                        className="w-full h-64 p-3 bg-gray-800 text-white rounded-lg font-mono text-sm resize-y"
                        placeholder="Enter JSON here..."
                    />
                    <button
                        onClick={handleJsonSubmit}
                        className="px-6 py-2 bg-[#1793D1] text-white rounded-lg hover:bg-blue-700 transition-colors w-fit"
                    >
                        Parse JSON
                    </button>
                </div>
            )}

            {/* API Mode */}
            {mode === "api" && (
                <div className="flex flex-col gap-4">
                    {/* HTTP Method Toggle */}
                    <div className="flex gap-2 p-1 bg-gray-800 rounded-lg w-fit">
                        <button
                            onClick={() => setHttpMethod("GET")}
                            className={`px-4 py-2 rounded-md transition-colors ${
                                httpMethod === "GET"
                                    ? "bg-green-600 text-white"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            GET
                        </button>
                        <button
                            onClick={() => setHttpMethod("POST")}
                            className={`px-4 py-2 rounded-md transition-colors ${
                                httpMethod === "POST"
                                    ? "bg-yellow-600 text-white"
                                    : "text-gray-400 hover:text-white"
                            }`}
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
                        className="w-full p-3 bg-gray-800 text-white rounded-lg"
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
                                        className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                                            contentType === type
                                                ? "bg-purple-600 text-white"
                                                : "bg-gray-800 text-gray-400 hover:text-white"
                                        }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>

                            <textarea
                                value={postBody}
                                onChange={(e) => setPostBody(e.target.value)}
                                className="w-full h-32 p-3 bg-gray-800 text-white rounded-lg font-mono text-sm resize-y"
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
                        className="px-6 py-2 bg-[#1793D1] text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed w-fit"
                    >
                        {loading ? "Loading..." : "Send Request"}
                    </button>
                </div>
            )}

            {/* Error Display */}
            {error && (
                <div className="p-4 bg-red-900/30 border border-red-500 rounded-lg text-red-200">
                    {error}
                </div>
            )}

            {/* JSON Output */}
            {output && (
                <div className="mt-4">
                    <h3 className="text-white text-lg font-semibold mb-2">
                        Output:
                    </h3>
                    <div className="rounded-lg p-4">
                        <ReactJson
                            src={output}
                            theme="harmonic"
                            collapsed={false}
                            displayDataTypes={false}
                            displayObjectSize={true}
                            enableClipboard={true}
                            indentWidth={2}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
