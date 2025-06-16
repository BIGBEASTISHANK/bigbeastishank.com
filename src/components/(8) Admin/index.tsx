"use client";
import { ShortDivider } from "@/utility/Dividers";
import HeadingBasic from "@/utility/HeadingBasic";
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCheck } from "react-icons/fa";
import { TbMail } from "react-icons/tb";

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

  // Handle submit function
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

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
    console.log(data);
    if (!response.ok) {
      setError(data.error);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setError("");
    } else {
      setIsLoggedIn(true);
      setAllEmail(data.response);
    }
  }

  return (
    <div id="admin" className="px-5 scroll-mt-28">
      {/* Title */}
      <HeadingBasic
        heading="Admin Panel"
        url="/admin"
        description={
          <>
            <p>Admin panel for BBI to read his data from database!</p>
          </>
        }
      />

      {/* Short Divider */}
      <ShortDivider delay={0.3} />

      {/* Login to admin panel */}
      {!isLoggedIn && (
        <>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 justify-center"
          >
            <div className="flex md:flex-row flex-col gap-5 md:gap-3 justify-center">
              {/* Username */}
              <motion.input
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
                type="text"
                placeholder="Username"
                className="w-full outline-none border-2 border-[#1793D1] rounded-full py-2 px-3"
                onChange={(e) => setUsername(e.target.value)}
              />
              {/* Password */}
              <motion.input
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                type="password"
                placeholder="Password"
                className="w-full outline-none border-2 border-[#1793D1] rounded-full py-2 px-3"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Totp */}
              <motion.input
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
                type="number"
                placeholder="TOTP"
                className="w-full outline-none border-2 border-[#1793D1] rounded-full py-2 px-3 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                onChange={(e) => setTotp(e.target.valueAsNumber)}
              />
            </div>

            {/* Submit button */}
            <div className="flex items-center gap-5">
              <motion.button
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
                type="submit"
                className="w-min"
              >
                <p className="bg-[#1793D1] text-white px-4 py-2 outline-none rounded-full cursor-pointer hover:scale-[1.1] transition-all w-min">
                  Login
                </p>
              </motion.button>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
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

      {/* Showing subscribers email */}
      {isLoggedIn && (
        <>
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            className="text-3xl font-bold"
          >
            Blogs Subscribers Email
          </motion.h1>

          <div className="flex flex-wrap gap-4 items-center mt-3">
            {/* Copy Button */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            >
              <CopyToClipboard
                text={String(allEmail.map((email) => email.email).join("\n"))}
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

            {/* Show emails button */}
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
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
        </>
      )}
    </div>
  );
}
