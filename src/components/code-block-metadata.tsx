"use client";

import { useEffect, useState } from "react";

export function CodeBlockMetadata() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const figures = document.querySelectorAll(
      "figure[data-rehype-pretty-code-figure]"
    );

    figures.forEach((figure, index) => {
      // Skip if already processed
      if (figure.querySelector(".copy-button")) return;

      const pre = figure.querySelector("pre");
      const figcaption = figure.querySelector("figcaption");
      const title = figcaption?.textContent || null;
      const language = pre?.dataset?.language;

      if (!pre) return;

      const code = pre.textContent || "";
      const figureId = `code-block-${index}`;
      figure.setAttribute("data-code-id", figureId);

      // Hide the figcaption since we'll show title in our custom header
      if (figcaption) {
        figcaption.style.display = "none";
      }

      // Create wrapper for title and copy button
      const header = document.createElement("div");
      header.className =
        // "flex items-center justify-between bg-stone-800 px-4 py-2 border-b border-stone-700";
        "flex items-center justify-between px-4 py-2";

      const titleEl = document.createElement("div");
      titleEl.className = "text-xs text-gray-500";
      // Add title if exists
      if (title) {
        titleEl.textContent = title;
      } else {
        titleEl.textContent = language || "";
        // header.appendChild(document.createElement("div")); // spacer
      }
      header.appendChild(titleEl);

      // Create copy button container (React will hydrate this)
      const buttonContainer = document.createElement("div");
      buttonContainer.className = "copy-button-container";
      buttonContainer.setAttribute("data-code", code);
      buttonContainer.setAttribute("data-id", figureId);
      header.appendChild(buttonContainer);

      figure.insertBefore(header, pre);
    });
  }, []);

  useEffect(() => {
    const handleCopy = async (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const code = target.getAttribute("data-code");
      const id = target.getAttribute("data-id");

      if (!code || !id) return;

      await navigator.clipboard.writeText(code);
      setCopiedId(id);

      setTimeout(() => setCopiedId(null), 2000);
    };

    const containers = document.querySelectorAll(".copy-button-container");
    containers.forEach((container) => {
      const button = document.createElement("button");
      button.className =
        "copy-button flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-500 transition-colors";
      button.setAttribute(
        "data-code",
        container.getAttribute("data-code") || ""
      );
      button.setAttribute("data-id", container.getAttribute("data-id") || "");

      const id = container.getAttribute("data-id");
      const isCopied = copiedId === id;

      button.innerHTML = isCopied
        ? '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span>Copied!</span>'
        : '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg><span>Copy</span>';

      button.addEventListener("click", handleCopy);
      container.innerHTML = "";
      container.appendChild(button);
    });
  }, [copiedId]);

  return null; // This component only hydrates existing DOM
}
