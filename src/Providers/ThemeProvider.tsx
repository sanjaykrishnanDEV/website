import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

const ThemeStates = {
    dark: "dark",
    light: "light",
} as const

type ThemeState = (typeof ThemeStates)[keyof typeof ThemeStates]

type ThemeContextValue = {
    theme: ThemeState
    setTheme: (theme: ThemeState) => void
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)
function getInitialTheme(): ThemeState {
    const stored = localStorage.getItem("theme")
    return stored === ThemeStates.dark || stored === ThemeStates.light
        ? stored
        : ThemeStates.light
}
function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<ThemeState>(getInitialTheme())

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () =>
        setTheme((prev) =>
            prev === ThemeStates.dark ? ThemeStates.light : ThemeStates.dark
        )

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


export function useTheme() {
    const ctx = useContext(ThemeContext)
    if (!ctx) throw new Error("useTheme must be used within a ThemeProvider")
    return ctx
}

export { ThemeStates }
export default ThemeProvider