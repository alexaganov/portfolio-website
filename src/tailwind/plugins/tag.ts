import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents }) => {
  addComponents({
    ".tag, .tag-base": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      fontFamily: "var(--font-mono-primary)",
      transitionProperties: "color, background-color, border-color",
      transitionDuration: "0.15s",
      transitionTimingFunction: "ease-in-out",
    },

    ".tag-pill": {
      borderRadius: "9999px",
    },

    ".tag": {
      "&-md": {
        minWidth: "var(--pressable-2xs-size)",
        minHeight: "var(--pressable-2xs-size)",
        fontSize: "0.75rem",
        padding: "0 0.625rem",
        "--btn-s-icon-size": "1rem",
      },

      "&-s-icon": {
        width: "var(--tag-s-icon-size)",
        height: "var(--tag-s-icon-size)",
      },

      "&-solid-muted, &-outline-muted-default": {
        backgroundColor: "var(--muted-bg-primary)",
        color: "var(--muted-fg-primary)",
      },
    },
  });
});
