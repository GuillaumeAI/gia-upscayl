import React from "react";

//@STCGoal Header of the App on the Left
export default function Header({ version }: { version: string }) {
  return (
    <a
      href="https://github.com/GuillaumeAI/gia-upscayl"
      target="_blank"
      className="outline-none focus-visible:ring-2"
      data-tip="Star us on GitHub 😁">
      <div className="flex items-center gap-3 px-5 py-5">
        <img src="windsurf-sea256.png" className="inline-block w-14" alt="GIA-Upscayl Logo" />
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold">
            GIAUpscayl <span className="text-xs">{version}</span>
          </h1>
          <p className="">GuillaumeAI's Upscayler</p>
        </div>
      </div>
    </a>
  );
}
