'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Skin = 'ndis' | 'aged-care' | 'service-provider' | null

interface SkinContextType {
  skin: Skin
  setSkin: (skin: Skin) => void
}

const SkinContext = createContext<SkinContextType>({
  skin: null,
  setSkin: () => {},
})

export const useSkin = () => useContext(SkinContext)

export function SkinProvider({ children }: { children: ReactNode }) {
  const [skin, setSkin] = useState<Skin>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('carters-skin') as Skin
    setSkin(saved || 'ndis')
    setMounted(true)
  }, [])

  useEffect(() => {
    if (skin && mounted) {
      localStorage.setItem('carters-skin', skin)
    }
  }, [skin, mounted])

  if (!mounted) return <>{children}</>

  return (
    <SkinContext.Provider value={{ skin, setSkin }}>
      <div data-skin={skin || ''}>
        {children}
      </div>
    </SkinContext.Provider>
  )
}
