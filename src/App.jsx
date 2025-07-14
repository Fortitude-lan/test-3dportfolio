/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Hersynne
 * @Date: 2025-07-14 09:22:31
 * @LastEditors: Hersynne
 * @LastEditTime: 2025-07-14 13:52:26
 */

import { useState } from 'react'
import useDarkMode from '@/hooks/useDarkMode';
import Hero from './pages/Hero';

function App() {
  const { isDarkMode, toggleDarkMode, ref: themeRef } = useDarkMode();

  return (
    <main>
      <Hero />

      <div className='absolute top-0 right-0 text-foreground text-right'
        onClick={toggleDarkMode}
        ref={themeRef}
      > Mode Theme</div>
    </main>
  )
}

export default App
