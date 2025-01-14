import plugin from "tailwindcss/plugin";
import { CSSRuleObject } from "tailwindcss/types/config";

export default plugin(({ addComponents }) => {
  addComponents({
    ".btn, .btn-base": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      fontFamily: "var(--font-mono-primary)",
      cursor: "pointer",
      transitionProperties: "color, background-color, border-color",
      transitionDuration: "0.15s",
      transitionTimingFunction: "ease-in-out",
    },

    ".btn-pill": {
      borderRadius: "9999px",
    },

    ".btn": {
      "&-sm": {
        minWidth: "var(--pressable-sm-size)",
        minHeight: "var(--pressable-sm-size)",
        fontSize: "0.75rem",
        padding: "0 0.625rem",
      },

      "&-md, &-icon-md": {
        borderRadius: "0.5rem", // 12px
        minWidth: "var(--pressable-md-size)",
        minHeight: "var(--pressable-md-size)",
      },

      "&-md": {
        padding: "0 0.75rem",
      },

      "&-md, &-text-md, &-icon-md": {
        "--btn-s-icon-size": "1rem",
      },

      "&-md, &-text-md": {
        fontSize: "0.875rem",
        lineHeight: "1.25",
        gap: "0.5rem",
      },

      "&-s-icon": {
        width: "var(--btn-s-icon-size)",
        height: "var(--btn-s-icon-size)",
      },

      "&-outline-primary, &-outline-primary-default": {
        border: "1px solid var(--border-primary)",
        color: "var(--muted-fg-primary)",
      },

      "&-outline-primary": {
        "&-selected": {
          backgroundColor: "var(--border-primary)",
          color: "var(--fg-primary)",
        },

        "&:hover, &-active": {
          borderColor: "var(--border-secondary)",
          color: "var(--fg-primary)",
        },
      },

      "&-text-primary": {
        color: "var(--muted-fg-primary)",

        "&-active, &:hover": {
          color: "var(--fg-primary)",
        },
      },

      "&-link-primary": {
        color: "var(--fg-primary)",

        "&:hover": {
          textDecoration: "underline",
        },
      },

      "&-link-secondary": {
        color: "var(--muted-fg-primary)",

        "&:hover": {
          textDecoration: "underline",
          color: "var(--fg-primary)",
        },
      },
    },
  });
});
