import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Ishank. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built by{" "}
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
