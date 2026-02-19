"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { PulseLoader } from "react-spinners";

export default function CustomNotificationComponent() {
  const [subject, setSubject] = useState("");
  const [htmlBody, setHtmlBody] = useState("");
  const [sendState, setSendState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSend() {
    if (!subject.trim() || !htmlBody.trim()) {
      setErrorMsg("Subject and HTML body cannot be empty.");
      setTimeout(() => setErrorMsg(""), 4000);
      return;
    }

    setSendState("loading");

    try {
      const response = await fetch("/api/customNotificationToSub", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ subject, htmlBody }),
      });

      const data = await response.json();

      if (response.ok) {
        setSendState("success");
        setTimeout(() => setSendState("idle"), 4000);
      } else {
        setErrorMsg(data.error || "Something went wrong.");
        setSendState("error");
        setTimeout(() => {
          setSendState("idle");
          setErrorMsg("");
        }, 4000);
      }
    } catch (error) {
      console.error("Error sending custom email:", error);
      setErrorMsg("Internal error. Please try again.");
      setSendState("error");
      setTimeout(() => {
        setSendState("idle");
        setErrorMsg("");
      }, 4000);
    }
  }

  const isDisabled = sendState === "loading" || sendState === "success";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-5 w-full"
    >
      <h2 className="text-3xl font-bold mb-5">
        Custom Notification to Subscribers
      </h2>

      {/* Subject Input */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-400 font-medium select-none">
          Email Subject
        </label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="e.g. Exciting news from BBI!"
          disabled={isDisabled}
          className="bg-[#0A0C0E]/10 backdrop-blur-md border border-[#1793D1]/50 hover:border-[#1793D1]/80 p-4 rounded-2xl hover:shadow-lg shadow-md hover:shadow-[#1793D1]/80 shadow-[#1793D1]/50 disabled:opacity-60 outline-none"
        />
      </div>

      {/* HTML Body Text area */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-400 font-medium select-none">HTML Body</label>
        <textarea
          value={htmlBody}
          onChange={(e) => setHtmlBody(e.target.value)}
          placeholder={"<h1>Hello!</h1>\n<p>Your custom message here...</p>"}
          disabled={isDisabled}
          rows={14}
          className="bg-[#0A0C0E]/10 backdrop-blur-md border border-[#1793D1]/50 hover:border-[#1793D1]/80 p-4 rounded-2xl hover:shadow-lg shadow-md hover:shadow-[#1793D1]/80 shadow-[#1793D1]/50 disabled:opacity-60 outline-none"
        />
      </div>

      {/* Live Preview */}
      {htmlBody.trim() && (
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400 font-medium select-none">
            Live Preview
          </label>
          <div
            className="bg-white rounded-xl p-4 text-black text-sm min-h-[80px] overflow-auto"
            dangerouslySetInnerHTML={{ __html: htmlBody }}
          />
        </div>
      )}

      {/* Error Message */}
      {errorMsg && (
        <p className="text-red-400 text-sm flex items-center gap-2">
          ⚠️ {errorMsg}
        </p>
      )}

      {/* Send Button */}
      <button
        onClick={handleSend}
        disabled={isDisabled}
        className={`rounded-xl outline-none select-none ${
          sendState === "success"
            ? "bg-[#1d991d]"
            : sendState === "error"
              ? "bg-red-500"
              : "bg-[#1793D1]"
        } px-6 py-2 cursor-pointer flex justify-center items-center text-sm font-medium transition-colors disabled:opacity-80 disabled:cursor-not-allowed w-[220px] h-[42px]`}
      >
        {sendState === "loading" ? (
          <PulseLoader color="#fff" size={8} />
        ) : sendState === "success" ? (
          <>
            <FaCheck className="mr-2" /> Sent to All!
          </>
        ) : sendState === "error" ? (
          "Failed. Retry?"
        ) : (
          "Send Notification"
        )}
      </button>
    </motion.div>
  );
}
