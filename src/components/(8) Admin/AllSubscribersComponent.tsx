"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCheck } from "react-icons/fa";
import { TbMail } from "react-icons/tb";

export default function AllSubscribersComponent() {
    const [allEmail, setAllEmail] = useState<{ email: string }[]>([]);
    const [copied, setCopied] = useState<boolean>(false);
    const [showEmail, setShowEmail] = useState<boolean>(false);

    useEffect(() => {
        fetch("/api/adminLoginVerify")
            .then((response) => response.json())
            .then((data) => {
                if (data.subscriberEmails) {
                    setAllEmail(data.subscriberEmails);
                }
            });
    }, []);

    return (
        <div>
            <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.5,
                    type: "spring",
                }}
                className="text-3xl font-bold"
            >
                Blog Subscribers Email
            </motion.h1>

            <div className="flex flex-wrap gap-4 items-center mt-3">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.5,
                        type: "spring",
                    }}
                >
                    <CopyToClipboard
                        text={String(
                            allEmail.map((email) => email.email).join("\n")
                        )}
                        onCopy={() => {
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2000);
                        }}
                    >
                        <button className="outline-none">
                            {copied ? (
                                <p className="flex my-auto gap-2 items-center justify-center font-bold text-md px-3 py-2 bg-[#1793D1] border-2 border-[#1793D1] rounded-2xl">
                                    Copied!
                                    <FaCheck className="text-md my-auto" />
                                </p>
                            ) : (
                                <a
                                    title="Click to copy!"
                                    className="cursor-pointer select-none flex items-center gap-2 text-md font-bold px-3 py-2 bg-[#1793D1] border-2 border-[#1793D1] rounded-2xl hover:scale-[1.1] transition-all"
                                >
                                    Copy all emails <TbMail />
                                </a>
                            )}
                        </button>
                    </CopyToClipboard>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.5,
                        type: "spring",
                    }}
                    onClick={() => setShowEmail(!showEmail)}
                    className="outline-none"
                >
                    <p className="cursor-pointer select-none text-md font-bold px-3 py-2 border-2 border-[#1793D1] bg-[#1A1E23] rounded-2xl hover:scale-[1.1] transition-all">
                        {showEmail ? "Hide" : "Show"} all emails
                    </p>
                </motion.button>
            </div>

            {showEmail && (
                <div className="flex flex-wrap gap-2 mt-5">
                    {allEmail.map((email, index) => (
                        <motion.p
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: (index * 0.3) / 2,
                                duration: 0.5,
                                type: "spring",
                            }}
                            key={index}
                            className="outline-none w-min backdrop-blur-md border-2 border-[#1793D1]/50 hover:border-[#1793D1]/8 rounded-full py-2 px-3 select-none "
                        >
                            {email.email}
                        </motion.p>
                    ))}
                </div>
            )}
        </div>
    );
}
