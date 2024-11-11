import React, { ComponentProps } from "react";

type SafeExternalLinkProps = ComponentProps<"a">;

/**
 * Renders a span (omitting link props) instead of a link if the href is empty
 * By default will pass rel and target to a link
 */
const SafeExternalLink = ({
  href,
  rel = "noreferrer noopener",
  target = "_blank",
  ...props
}: SafeExternalLinkProps) => {
  if (!href) {
    return <span {...props} />;
  }

  return <a href={href} rel={rel} target={target} {...props} />;
};

export default SafeExternalLink;
