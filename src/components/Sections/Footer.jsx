import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 px-4 text-center text-gray-500 bg-black/[0.04]">
      <small className="mb-2 block text-s">
        &copy; 2023 Ishank. All rights reserved.
      </small>
      <p className="text-xs">
        This website built by{" "}
        <a href="/github" target="_blank" className="underline">
          Ishank
        </a>{" "}
        with the help of{" "}
        <a href="https://www.youtube.com/@ByteGrad/videos" target="_blank" className="underline">
          Byte Grad
        </a>
      </p>
    </footer>
  );
}
