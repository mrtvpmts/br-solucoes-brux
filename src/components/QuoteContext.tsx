'use client'

import { createContext, useContext, useState } from 'react'

interface QuoteContextType {
    open: boolean
    setOpen: (open: boolean) => void
    success: boolean
    setSuccess: (success: boolean) => void
}

const QuoteContext = createContext<QuoteContextType | null>(null)

export function QuoteProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false)
    const [success, setSuccess] = useState(false)

    return (
        <QuoteContext.Provider value={{ open, setOpen, success, setSuccess }}>
            {children}
        </QuoteContext.Provider>
    )
}

export const useQuote = () => {
    const context = useContext(QuoteContext)
    if (!context) throw new Error('useQuote must be used within a QuoteProvider')
    return context
}
