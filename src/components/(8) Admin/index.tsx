"use client";
import { ShortDivider } from "@/utility/Dividers";
import HeadingBasic from "@/utility/HeadingBasic";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCheck } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { PulseLoader } from "react-spinners";
import { Post } from "@/app/blogs/page";

export default function AdminComponent() {
    // Variables
    const [username, setUsername]: [
        userEmail: string,
        setUserEmail: Dispatch<SetStateAction<string>>
    ] = useState<string>("");
    const [password, setPassword]: [
        userEmail: string,
        setUserEmail: Dispatch<SetStateAction<string>>
    ] = useState<string>("");
    const [totp, setTotp]: [
        submitSuccess: number,
        setSubmitSuccess: Dispatch<SetStateAction<number>>
    ] = useState<number>();

    const [error, setError]: [
        userEmail: string,
        setUserEmail: Dispatch<SetStateAction<string>>
    ] = useState<string>("");
    const [isLoggedIn, setIsLoggedIn]: [
        submitSuccess: boolean,
        setSubmitSuccess: Dispatch<SetStateAction<boolean>>
    ] = useState<boolean>(false);

    const [allEmail, setAllEmail]: [
        submitSuccess: { email: string }[],
        setSubmitSuccess: Dispatch<SetStateAction<{ email: string }[]>>
    ] = useState<{ email: string }[]>([]);

    const [copied, setCopied]: [
        submitSuccess: boolean,
        setSubmitSuccess: Dispatch<SetStateAction<boolean>>
    ] = useState<boolean>(false);

    const [showEmail, setShowEmail]: [
        submitSuccess: boolean,
        setSubmitSuccess: Dispatch<SetStateAction<boolean>>
    ] = useState<boolean>(false);

    const [isLoggingIn, setIsLoggingIn]: [
        isSubmitting: boolean,
        setIsSubmitting: Dispatch<SetStateAction<boolean>>
    ] = useState<boolean>(false);
    const [verifyLoggingIn, setVerifyLoggingIn]: [
        isSubmitting: boolean,
        setIsSubmitting: Dispatch<SetStateAction<boolean>>
    ] = useState<boolean>(true);

    const [posts, setPosts]: [
        posts: Post[],
        setPosts: Dispatch<SetStateAction<Post[]>>
    ] = useState<Post[]>([]);

    // Updated: Track notify state per post using object with post index as key
    const [notifyStates, setNotifyStates] = useState<{
        [key: number]: "idle" | "loading" | "success" | "error";
    }>({});

    // Handle login submit function
    async function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setIsLoggingIn(true);

        try {
            const response = await fetch("/api/adminLogin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    totpCode: totp,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error);
                setIsLoggingIn(false);
                await new Promise((resolve) => setTimeout(resolve, 5000));
                setError("");
            } else {
                setIsLoggedIn(true);
                setAllEmail(data.response);
            }
        } catch (error) {
            // Setting formdata and error message
            setError("Internal server error");
            setIsLoggingIn(false);
            console.log(String(error));

            // Waiting for error message to disappear
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }

    // Admin login verify function
    async function adminLoginVerify() {
        const response = await fetch("/api/adminLoginVerify", {
            method: "GET",
            credentials: "include",
        })

        const allEmailData = await response.json();
        console.log(response.status)

        if (response.ok) {
            setIsLoggedIn(true);
            setAllEmail(allEmailData.response);
        }

        setVerifyLoggingIn(false);
    }

    // Updated: Notify subscriber function with loading state
    async function notifySubscriber(
        title: string,
        description: string,
        tags: string[],
        minuteRead: number,
        link: string,
        postIndex: number
    ) {
        // Set loading state for this specific post
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
                // Set success state
                setNotifyStates((prev) => ({
                    ...prev,
                    [postIndex]: "success",
                }));
                console.log("Notification sent:", data);
            } else {
                // Set error state
                setNotifyStates((prev) => ({ ...prev, [postIndex]: "error" }));
                console.error("Failed to notify subscribers:", data.error);

                // Reset to idle after 3 seconds
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

            // Reset to idle after 3 seconds
            setTimeout(() => {
                setNotifyStates((prev) => ({ ...prev, [postIndex]: "idle" }));
            }, 3000);
        }
    }

    useEffect(() => {
        // Verify If is logged in
        adminLoginVerify();

        // Fetching blog posts
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
        <div id="admin" className="px-5 scroll-mt-28">
            {/* Title */}
            <HeadingBasic
                heading="Admin Panel"
                url="/admin"
                description={
                    <>
                        <p>
                            Admin panel for BBI to read his data from database!
                        </p>
                    </>
                }
            />

            {/* Short Divider */}
            <ShortDivider delay={0.3} />

            {/* Verifying loggin */}
            {verifyLoggingIn && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.5,
                        type: "spring",
                    }}
                    className="flex flex-col items-center justify-center gap-5 py-10"
                >
                    {/* Spinner Container */}
                    <div className="relative">
                        {/* Outer Ring */}
                        <div className="w-16 h-16 border-4 border-[#1793D1]/20 rounded-full"></div>

                        {/* Spinning Ring */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-[#1793D1] rounded-full animate-spin"></div>

                        {/* Inner Pulse Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#1793D1]/30 rounded-full animate-pulse"></div>
                    </div>

                    {/* Text with animated dots */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.8,
                            duration: 0.5,
                        }}
                        className="flex items-center gap-2"
                    >
                        <p className="text-lg font-semibold text-[#1793D1]">
                            Verifying your session
                        </p>
                        <span className="flex gap-1">
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                                className="w-1.5 h-1.5 bg-[#1793D1] rounded-full"
                            />
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: 0.3,
                                }}
                                className="w-1.5 h-1.5 bg-[#1793D1] rounded-full"
                            />
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: 0.6,
                                }}
                                className="w-1.5 h-1.5 bg-[#1793D1] rounded-full"
                            />
                        </span>
                    </motion.div>

                    {/* Optional: Subtle background glow */}
                    <div className="absolute w-32 h-32 bg-[#1793D1]/5 rounded-full blur-2xl -z-10"></div>
                </motion.div>
            )}

            {/* Login to admin panel */}
            {!isLoggedIn && !verifyLoggingIn && (
                <>
                    <form
                        onSubmit={handleLoginSubmit}
                        className="flex flex-col gap-5 justify-center"
                    >
                        <div className="flex md:flex-row flex-col gap-5 md:gap-3 justify-center">
                            {/* Username */}
                            <motion.input
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.7,
                                    duration: 0.5,
                                    type: "spring",
                                }}
                                type="text"
                                placeholder="Username"
                                className="w-full outline-none border-2 border-[#1793D1] rounded-full py-2 px-3"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {/* Password */}
                            <motion.input
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.5,
                                    type: "spring",
                                }}
                                type="password"
                                placeholder="Password"
                                className="w-full outline-none border-2 border-[#1793D1] rounded-full py-2 px-3"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {/* Totp */}
                            <motion.input
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.7,
                                    duration: 0.5,
                                    type: "spring",
                                }}
                                type="number"
                                placeholder="TOTP"
                                className="w-full outline-none border-2 border-[#1793D1] rounded-full py-2 px-3 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                                onChange={(e) =>
                                    setTotp(e.target.valueAsNumber)
                                }
                            />
                        </div>

                        {/* Submit button */}
                        <div className="flex items-center gap-5">
                            <motion.button
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.9,
                                    duration: 0.5,
                                    type: "spring",
                                }}
                                type="submit"
                            >
                                <p className="bg-[#1793D1] text-white outline-none border-none rounded-full cursor-pointer hover:scale-[1.1] transition-all w-[6rem] flex justify-center items-center h-[2.5rem]">
                                    {isLoggingIn ? (
                                        <PulseLoader
                                            loading={true}
                                            size={15}
                                            color="white"
                                        />
                                    ) : (
                                        "Login"
                                    )}
                                </p>
                            </motion.button>

                            {/* Error Message */}
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        type: "spring",
                                    }}
                                    className="p-2 bg-red-500/10 border border-red-500/30 rounded-xl w-full"
                                >
                                    <p className="text-red-400 text-sm flex items-center gap-2">
                                        <span className="text-red-500">⚠️</span>
                                        {error}
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </form>
                </>
            )}

            {/* Showing Pannel */}
            {isLoggedIn && !verifyLoggingIn && (
                <>
                    {/* Blog subscribers list */}
                    <div>
                        {/* Heading */}
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
                            Blogs Subscribers Email
                        </motion.h1>

                        <div className="flex flex-wrap gap-4 items-center mt-3">
                            {/* Copy Button */}
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
                                        allEmail
                                            .map((email) => email.email)
                                            .join("\n")
                                    )}
                                    onCopy={() => {
                                        setCopied(true);
                                        setTimeout(
                                            () => setCopied(false),
                                            2000
                                        );
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

                            {/* Show emails button */}
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

                        {/* Emails */}
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
                                        className="outline-none w-min border-2 border-[#1793D1] rounded-full py-2 px-3 select-none"
                                    >
                                        {email.email}
                                    </motion.p>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Short Divider */}
                    <ShortDivider delay={0.7} />

                    {/* Notify subscribers about blog */}
                    <div>
                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 1,
                                type: "spring",
                            }}
                            className="text-3xl font-bold mb-5"
                        >
                            Notify blog's subscribers
                        </motion.h1>

                        {/* Posts */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-5"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.15,
                                        delayChildren: 0.3,
                                    },
                                },
                            }}
                        >
                            {posts.slice(0, 4).map((post, index) => {
                                const buttonState =
                                    notifyStates[index] || "idle";
                                const isDisabled =
                                    buttonState === "loading" ||
                                    buttonState === "success";

                                return (
                                    <motion.div
                                        key={index}
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                y: 50,
                                                scale: 0.9,
                                            },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 100,
                                                    damping: 15,
                                                    duration: 0.6,
                                                },
                                            },
                                        }}
                                        whileHover={{
                                            scale: 1.03,
                                            transition: { duration: 0.2 },
                                        }}
                                        className="h-full"
                                    >
                                        <div className="group h-full min-h-[12rem] flex flex-col bg-[#0A0C0E]/10 backdrop-blur-md border border-[#1793D1]/50 hover:border-[#1793D1]/80 p-5 rounded-3xl transition-all hover:shadow-lg shadow-md hover:shadow-[#1793D1]/80 shadow-[#1793D1]/50">
                                            {/* Title */}
                                            <motion.h3
                                                className="text-lg md:text-xl font-semibold mb-2 line-clamp-2"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: 0.1 + index * 0.15,
                                                }}
                                            >
                                                {post.title}
                                            </motion.h3>

                                            {/* Date */}
                                            <motion.p
                                                className="text-sm md:text-base text-[#F6F9FC]/75 mb-4 select-none"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{
                                                    delay: 0.2 + index * 0.15,
                                                }}
                                            >
                                                {new Date(
                                                    post.date
                                                ).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </motion.p>

                                            {/* Notify Button */}
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.8,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                transition={{
                                                    delay: 0.3 + index * 0.15,
                                                    type: "spring",
                                                    stiffness: 200,
                                                }}
                                            >
                                                <motion.button
                                                    whileHover={
                                                        isDisabled
                                                            ? {}
                                                            : { scale: 1.05 }
                                                    }
                                                    whileTap={
                                                        isDisabled
                                                            ? {}
                                                            : { scale: 0.95 }
                                                    }
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
                                                        buttonState ===
                                                        "success"
                                                            ? "bg-[#1d991d]"
                                                            : buttonState ===
                                                              "error"
                                                            ? "bg-red-500"
                                                            : "bg-[#1793D1]"
                                                    } px-4 py-2 w-fit mt-auto ml-auto cursor-pointer flex justify-center items-center text-sm md:text-base font-medium transition-colors disabled:opacity-80 disabled:cursor-not-allowed min-w-[140px]`}
                                                >
                                                    {buttonState ===
                                                    "loading" ? (
                                                        <PulseLoader
                                                            loading={true}
                                                            size={8}
                                                            color="white"
                                                        />
                                                    ) : buttonState ===
                                                      "success" ? (
                                                        <>
                                                            Notified{" "}
                                                            <FaCheck className="ml-2" />
                                                        </>
                                                    ) : buttonState ===
                                                      "error" ? (
                                                        "Failed. Retry?"
                                                    ) : (
                                                        "Notify Subscribers"
                                                    )}
                                                </motion.button>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </>
            )}
        </div>
    );
}
