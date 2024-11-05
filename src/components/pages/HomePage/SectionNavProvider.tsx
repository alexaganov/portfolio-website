import { createSafeContext, useSafeContext } from "@/utils/context";
import React, { ComponentType, ReactNode, useMemo, useState } from "react";

export interface SectionNavSection {
  id: string;
  name: string;
  shortName?: string;
  Content?: ComponentType;
}

interface ContextValue {
  activeId?: string;
  setActiveId: (id: string | undefined) => void;
  sections: SectionNavSection[];
}

const Context = createSafeContext<ContextValue>();

export const useSectionNav = () => useSafeContext(Context);

interface SectionNavProviderProps extends Pick<ContextValue, "sections"> {
  children?: ReactNode;
}

const SectionNavProvider = ({
  sections,
  children,
}: SectionNavProviderProps) => {
  const [activeId, setActiveId] = useState<string | undefined>();

  const value = useMemo(() => {
    return {
      activeId,
      sections,
      setActiveId,
    };
  }, [activeId, setActiveId, sections]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default SectionNavProvider;
