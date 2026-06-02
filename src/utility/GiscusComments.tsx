"use client";

import Giscus from "@giscus/react";
import { ShortDivider } from "./Dividers";

export default function GiscusComments() {
  return (
    <section className="border border-gray-600 rounded-3xl backdrop-blur-md sm:p-5 p-3 scroll-mt-28" id="comments">
      <div className="mb-4">
        <h2 className="font-bold text-2xl">Comments</h2>
        <p className="text-sm text-[#F6F9FC]/75">
          Ask questions, share feedback, or continue the conversation on GitHub.
        </p>
      </div>

      <ShortDivider />

      <div className="giscus-wrapper">
        <Giscus
          id="comments"
          repo="BIGBEASTISHANK/bigbeastishank.com"
          repoId="R_kgDOGpK7Rg"
          category="General"
          categoryId="DIC_kwDOGpK7Rs4C-V8u"
          mapping="pathname"
          strict="0"
          reactionsEnabled="0"
          emitMetadata="0"
          inputPosition="top"
          theme="transparent_dark"
          lang="en"
          loading="lazy"
        />
      </div>
    </section>
  );
}