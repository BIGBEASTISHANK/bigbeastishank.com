"use client";
import { ShortDivider } from "@/utility/Dividers";
import HeadingBasic from "@/utility/HeadingBasic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PulseLoader } from "react-spinners";
import AllSubscribersComponent from "@/components/(8) Admin/AllSubscribersComponent";
import NotifySubscriberComponent from "@/components/(8) Admin/NotifySubscriberComponent";
import ClientDetailsComponent from "@/components/(8) Admin/ClientDetailsComponent";

export default function AdminComponent() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [totp, setTotp] = useState<number>();
    const [error, setError] = useState<string>("");
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
    const [verifyLoggingIn, setVerifyLoggingIn] = useState<boolean>(true);

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
            }
        } catch (error) {
            setError("Internal server error");
            setIsLoggingIn(false);
            console.log(String(error));

            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }

    async function adminLoginVerify() {
        const response = await fetch("/api/adminLoginVerify", {
            method: "GET",
            credentials: "include",
        });

        if (response.ok) {
            setIsLoggedIn(true);
        }

        setVerifyLoggingIn(false);
    }

    useEffect(() => {
        adminLoginVerify();
    }, []);

    return (
        <div id="admin" className="px-5 scroll-mt-28">
            <HeadingBasic
                heading="Admin Panel"
                url="/admin"
                description={
                    <>
                        <p>Admin panel for BBI to manage data from database!</p>
                    </>
                }
            />

            <ShortDivider delay={0.3} />

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
                    <div className="relative">
                        <div className="w-16 h-16 border-4 border-[#1793D1]/20 rounded-full"></div>
                        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-[#1793D1] rounded-full animate-spin"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#1793D1]/30 rounded-full animate-pulse"></div>
                    </div>

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

                    <div className="absolute w-32 h-32 bg-[#1793D1]/5 rounded-full blur-2xl -z-10"></div>
                </motion.div>
            )}

            {!isLoggedIn && !verifyLoggingIn && (
                <form
                    onSubmit={handleLoginSubmit}
                    className="flex flex-col gap-5 justify-center"
                >
                    <div className="flex md:flex-row flex-col gap-5 md:gap-3 justify-center">
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
                            onChange={(e) => setTotp(e.target.valueAsNumber)}
                        />
                    </div>

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
            )}

            {isLoggedIn && !verifyLoggingIn && (
                <>
                    <AllSubscribersComponent />
                    <ShortDivider delay={0.7} />
                    <NotifySubscriberComponent />
                    <ShortDivider delay={0.9} />
                    <ClientDetailsComponent />
                </>
            )}
        </div>
    );
}
