import type { LinkIconName } from "@/content/link-page";

const svg = {
  viewBox: "0 0 24 24",
  width: 22,
  height: 22,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function LinkIcon({ name }: { name: LinkIconName }) {
  switch (name) {
    case "site":
      return (
        <svg {...svg}>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
    case "github":
      return (
        <svg {...svg}>
          <path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18 4.77 5.07 5.07 0 0 0 17.91 1S16.73.65 14 2.48a13.4 13.4 0 0 0-5 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case "spotify":
      return (
        <svg {...svg}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 10.2c2.4-.7 5.5-.5 7.6.8M7.6 13c2.2-.6 5-.4 7 .8M8.2 15.6c1.7-.4 3.6-.2 5 .6" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...svg}>
          <rect x="3" y="6.5" width="18" height="11" rx="3" />
          <path d="m11 10 4 2-4 2z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...svg}>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...svg}>
          <path d="M14 7.2c.7 2.1 2.2 3.5 4.2 3.8" />
          <path d="M14 7v8.2a3.2 3.2 0 1 1-2.6-3.15" />
        </svg>
      );
    case "threads":
      return (
        <svg {...svg}>
          <path d="M9.2 8.4c1.1-1.5 4.4-1.7 5.6.4 1.1 2 .2 4.2-2 4.8-2 .5-3.5-.4-3.8-1.8.5 2.6 3.1 3.7 5.3 3 2.9-.9 4.4-3.6 3.9-6.6C17.7 5 14.8 3.4 11.8 4 8.1 4.7 6.3 8 7 11.8c.7 4.2 4 6.6 7.8 6.2 2.2-.3 3.7-1.4 4.6-2.9" />
        </svg>
      );
    case "x":
      return (
        <svg {...svg}>
          <path d="M5 5l14 14M19 5 5 19" />
        </svg>
      );
  }
}
