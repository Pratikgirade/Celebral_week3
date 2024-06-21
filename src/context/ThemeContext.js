import { createContext, useContext } from 'react';

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

export const useTheme = () => useContext(ThemeContext);
export const useThemeUpdate = () => useContext(ThemeUpdateContext);
