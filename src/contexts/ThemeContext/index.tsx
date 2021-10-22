import { createContext, FC, useEffect, useState } from 'react';

import { theme as defaultTheme, darkTheme } from 'styles/stitches.config';

export const ThemeContext = createContext({});

const availableThemes = {
    light: defaultTheme.className,
    dark: darkTheme.className,
};

type ThemeType = keyof typeof availableThemes;

export const saveThemeToStorage = (theme: ThemeType) => {
    window.localStorage.setItem(`${import.meta.env.VITE_APP_TITLE}-theme`, theme);
};

export const getSavedThemeFromStorage = (): ThemeType => {
    const savedTheme = window.localStorage.getItem(`${import.meta.env.VITE_APP_TITLE}-theme`) as ThemeType;
    if (savedTheme) return savedTheme;
    else return 'light';
};

export const useStitchTheme = () => {
    const [currentTheme, setCurrentTheme] = useState<ThemeType>(getSavedThemeFromStorage());

    const $$html = document.documentElement;

    const toggleTheme = (theme: ThemeType) => {
        $$html.classList.remove(availableThemes[currentTheme]);
        $$html.classList.add(availableThemes[theme]);
        setCurrentTheme(theme);
    };

    useEffect(() => {
        saveThemeToStorage(currentTheme);
    }, [currentTheme]);

    useEffect(() => {
        toggleTheme(getSavedThemeFromStorage());
    }, []);

    return { currentTheme, toggleTheme };
};

const ThemeProvider: FC = ({ children }) => {
    const { currentTheme, toggleTheme } = useStitchTheme();
    return <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
