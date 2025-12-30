"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { PulseLoader } from "react-spinners";
import { Post } from "@/app/blogs/page";

export default function NotifySubscriberComponent() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [notifyStates, setNotifyStates] = useState<{
        [key: number]: "idle" | "loading" | "success" | "error";
    }>({});

    async function notifySubscriber(
        title: string,
        description: string,
        tags: string[],
        minuteRead: number,
        link: string,
        postIndex: number
    ) {
        setNotifyStates((prev) => ({ ...prev, [postIndex]: "loading" }));

        try {
            const response = await fetch("/api/notifySubscriber", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    title,
                    description,
                    tags,
                    minuteRead,
                    link,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setNotifyStates((prev) => ({
                    ...prev,
                    [postIndex]: "success",
                }));
                console.log("Notification sent:", data);
            } else {
                setNotifyStates((prev) => ({ ...prev, [postIndex]: "error" }));
                console.error("Failed to notify subscribers:", data.error);

                setTimeout(() => {
                    setNotifyStates((prev) => ({
                        ...prev,
                        [postIndex]: "idle",
                    }));
                }, 3000);
            }
        } catch (error) {
            console.error("Error notifying subscribers:", error);
            setNotifyStates((prev) => ({ ...prev, [postIndex]: "error" }));

            setTimeout(() => {
                setNotifyStates((prev) => ({ ...prev, [postIndex]: "idle" }));
            }, 3000);
        }
    }

    useEffect(() => {
        fetch("/api/getBlogPost")
            .then((response) => response.json())
            .then((data) => {
                setPosts(
                    data.posts.sort(
                        (a, b) =>
                            new Date(b.date).getTime() -
                            new Date(a.date).getTime()
                    )
                );
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
                className="text-3xl font-bold mb-5"
            >
                Notify Blog Subscribers
            </motion.h1>

            <div className="flex flex-col gap-3">
                {posts.slice(0, 4).map((post, index) => {
                    const buttonState = notifyStates[index] || "idle";
                    const isDisabled =
                        buttonState === "loading" || buttonState === "success";

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.1 * index,
                                duration: 0.5,
                                type: "spring",
                            }}
                            className="group flex items-center justify-between bg-[#0A0C0E]/10 backdrop-blur-md border border-[#1793D1]/50 hover:border-[#1793D1]/80 p-4 rounded-2xl hover:shadow-lg shadow-md hover:shadow-[#1793D1]/80 shadow-[#1793D1]/50"
                        >
                            {/* Blog Details */}
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-1 line-clamp-1">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-[#F6F9FC]/75 select-none">
                                    {new Date(post.date).toLocaleDateString(
                                        "en-US",
                                        {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        }
                                    )}
                                </p>
                            </div>

                            {/* Notify Button */}
                            <motion.button
                                whileHover={isDisabled ? {} : { scale: 1.05 }}
                                whileTap={isDisabled ? {} : { scale: 0.95 }}
                                onClick={() =>
                                    !isDisabled &&
                                    notifySubscriber(
                                        post.title,
                                        post.description,
                                        post.tags,
                                        post.minuteRead,
                                        `https://bigbeastishank.com/blogs/${post.slug}`,
                                        index
                                    )
                                }
                                disabled={isDisabled}
                                className={`rounded-xl outline-none select-none ${
                                    buttonState === "success"
                                        ? "bg-[#1d991d]"
                                        : buttonState === "error"
                                        ? "bg-red-500"
                                        : "bg-[#1793D1]"
                                } px-4 py-2 cursor-pointer flex justify-center items-center text-sm font-medium transition-colors disabled:opacity-80 disabled:cursor-not-allowed w-[180px] h-[40px]`}
                            >
                                {buttonState === "loading" ? (
                                    <PulseLoader
                                        loading={true}
                                        size={8}
                                        color="white"
                                    />
                                ) : buttonState === "success" ? (
                                    <>
                                        Notified <FaCheck className="ml-2" />
                                    </>
                                ) : buttonState === "error" ? (
                                    "Failed. Retry?"
                                ) : (
                                    "Notify Subscribers"
                                )}
                            </motion.button>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
