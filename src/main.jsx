/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Hersynne
 * @Date: 2025-07-14 09:22:31
 * @LastEditors: Hersynne
 * @LastEditTime: 2025-07-14 10:09:16
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Scrollbar from './components/Scrollbar.jsx'
import App from './App.jsx'
import { ThemeProvider } from "next-themes";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <App />
      <Scrollbar />

    </ThemeProvider>
  </StrictMode>,
)
