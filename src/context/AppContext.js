// src/context/AppContext.js
import { createContext, useContext } from 'react';

export const AppContext = createContext(null);

export const useAppContext = () => useContext(AppContext);
