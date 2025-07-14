import { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import { useTheme } from 'next-themes';

const useDarkMode = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const [isDarkMode, setIsDarkMode] = useState(currentTheme === 'dark');
    const ref = useRef(null);

    const toggleDarkMode = async () => {
        if (
            !ref.current ||
            !document.startViewTransition ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            setIsDarkMode(!isDarkMode);
            return;
        }

        await document.startViewTransition(() => {
            flushSync(() => {
                setIsDarkMode(!isDarkMode);
            });
        }).ready;

        //计算按钮中心点坐标
        const { top, left, width, height } = ref.current.getBoundingClientRect();
        // const x = left + width / 2;
        // const y = top + height / 2;

        //右上角坐标
        const x = window.innerWidth; // 右上角的X坐标
        const y = 0; // 右上角的Y坐标

        //计算扩散半径
        const maxRadius = Math.hypot(
            Math.max(left, window.innerWidth - left),
            Math.max(top, window.innerHeight - top)
        );
        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
        ];

        //动画
        // document.documentElement.animate(
        //     {
        //         clipPath
        //     },
        //     {
        //         duration: 700,
        //         easing: 'ease-in',
        //         pseudoElement: '::view-transition-new(root)',
        //     }
        // );

    };

    useEffect(() => {
        console.log(isDarkMode)
        console.log(currentTheme, 'currentTheme')
        if (isDarkMode) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, [isDarkMode]);

    return { isDarkMode, toggleDarkMode, ref };
};

export default useDarkMode;
