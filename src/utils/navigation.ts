export const removeHash = () => {
  history.pushState(
    "",
    document.title,
    window.location.pathname + window.location.search
  );
};
