import { createSafeContext, useSafeContext } from '@/utils/context'
import { isInViewport, scrollToElement } from '@/utils/dom';
import React, { ComponentType, ReactNode, useEffect, useMemo, useRef, useState } from 'react'

export interface SectionNavSection {
  id: string;
  name: string;
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
  children?: ReactNode
}

const SectionNavProvider = ({ sections, children }: SectionNavProviderProps) => {
  const [activeId, setActiveId] = useState<string | undefined>(sections[0]?.id);

  const value = useMemo(() => {
    return {
      activeId,
      sections,
      setActiveId
    }
  }, [activeId, setActiveId])

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default SectionNavProvider