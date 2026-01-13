'use client'

import { createContext, useContext, useState } from 'react'

interface CartItem {
    product: any
    quantity: number
    volume: string
}

interface QuoteContextType {
    open: boolean
    setOpen: (open: boolean) => void
    success: boolean
    setSuccess: (success: boolean) => void
    cart: CartItem[]
    addToCart: (item: CartItem) => void
    removeFromCart: (productId: string) => void
    clearCart: () => void
}

const QuoteContext = createContext<QuoteContextType | null>(null)

export function QuoteProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false)
    const [success, setSuccess] = useState(false)
    const [cart, setCart] = useState<CartItem[]>([])

    const addToCart = (item: CartItem) => {
        setCart(prev => {
            const existing = prev.find(i => i.product.title === item.product.title)
            if (existing) {
                return prev.map(i => i.product.title === item.product.title
                    ? { ...i, quantity: i.quantity + item.quantity }
                    : i
                )
            }
            return [...prev, item]
        })
    }

    const removeFromCart = (productTitle: string) => {
        setCart(prev => prev.filter(i => i.product.title !== productTitle))
    }

    const clearCart = () => setCart([])

    return (
        <QuoteContext.Provider value={{
            open, setOpen,
            success, setSuccess,
            cart, addToCart, removeFromCart, clearCart
        }}>
            {children}
        </QuoteContext.Provider>
    )
}

export const useQuote = () => {
    const context = useContext(QuoteContext)
    if (!context) throw new Error('useQuote must be used within a QuoteProvider')
    return context
}
