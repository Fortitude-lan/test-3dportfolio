/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Hersynne
 * @Date: 2025-07-14 17:42:50
 * @LastEditors: Hersynne
 * @LastEditTime: 2025-07-17 19:09:57
 */
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { HeroModel } from './HeroModel'


const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <Canvas camera={{ position: [0, 2, 15], fov: 45 }}>
            <OrbitControls
                enableZoom={!isTablet}
             // enablePan={false}
            // maxDistance={20}
            // minDistance={5}
            // minPolarAngle={Math.PI / 5}
            // maxPolarAngle={Math.PI / 2}
            />
            <ambientLight intensity={0.2} color='1a1a40' />
            <directionalLight position={[5, 5, 5]} intensity={5} />
            <HeroModel />
        </Canvas>
    )
}

export default HeroExperience
