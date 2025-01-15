import plugin from "tailwindcss/plugin";
import { OptionalConfig } from "tailwindcss/types/config";

import button from "./plugins/button";
import tag from "./plugins/tag";

const colors = {
  "bg-primary": "#000",
  "bg-secondary": "#0F0F0F",
  "bg-tertiary": "#292929",
  "bg-quaternary": "#373737",
  "text-primary": "#fff",
  "text-secondary": "#adadad",
  "text-tertiary": "#858585",
  "text-quaternary": "#4a4a4a",
  "border-primary": "#252525",
  "border-secondary": "#434343",
  success: {
    DEFAULT: "#80FF7E",
  },
  info: {
    DEFAULT: "#68C8FF",
  },
};

const config: Partial<OptionalConfig> = {
  theme: {
    extend: {
      colors,
    },
    fontFamily: {
      // variables defined in layout file
      sans: ["var(--font-sans-serif-primary)", "sans-serif"],
      mono: ["var(--font-mono-primary)", "monospace"],
    },
    keyframes: {
      "bg-move-right": {
        "100%": { backgroundPosition: "0 100%" },
      },
    },
  },
  plugins: [
    button,
    tag,
    plugin(({ addBase, addComponents }) => {
      addBase({
        ":root": {
          "--bg-primary": colors["bg-primary"],
          "--mg-primary": "#252525",
          "--fg-primary": colors["text-primary"],

          "--border-primary": colors["border-primary"],
          "--border-secondary": colors["border-secondary"],

          "--muted-bg-primary": "#191919",
          "--muted-fg-primary": "#666666",

          "--pressable-2xs-size": "1.25rem",
          "--pressable-2xs-px": "",

          "--pressable-sm-size": "1.75rem",
          "--pressable-sm-px": "",

          "--pressable-md-size": "2.25rem",
          "--pressable-md-px": "",
        },
      });

      addBase({
        "::selection": {
          "mix-blend-mode": "darken",
          "background-clip": "text",
          color: colors["bg-primary"],
          backgroundColor: "rgba(255, 255, 255, 0.6)",
        },

        "*:focus-visible": {
          outlineOffset: "4px",
        },
      });

      addComponents({
        ".btn": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      });

      addComponents({
        ".mask-image-fade-b": {
          "mask-image":
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)",
        },

        ".gsap-hide-items": {
          ".gsap-item": {
            opacity: "0",
          },
        },
      });

      addComponents({
        ".prose": {
          lineHeight: "1.75",
          fontSize: "14px",
          fontWeight: "300",
          color: colors["text-secondary"],

          ul: {
            position: "relative",
            paddingLeft: "1.25rem",

            "li + li": {
              marginTop: "0.25rem",
            },

            "li::before": {
              content: "'▸'",
              position: "absolute",
              left: "0",
              color: colors["text-quaternary"],
            },
          },
        },
      });
    }),
  ],
};

export default config;
