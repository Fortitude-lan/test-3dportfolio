/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Hersynne
 * @Date: 2025-07-14 17:42:50
 * @LastEditors: Hersynne
 * @LastEditTime: 2025-07-19 00:59:09
 */
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { HeroModel } from './HeroModel'
import { TestModel } from './TestModel'


const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
            <OrbitControls
                enableZoom={!isTablet}
            // enablePan={false}
            // maxDistance={20}
            // minDistance={5}
            // minPolarAngle={Math.PI / 5}
            // maxPolarAngle={Math.PI / 2}
            />
            <ambientLight intensity={0.2} color='1a1a40' />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
                <group
                    scale={isMobile ? 0.7 : 1}
                    position={[0, -1.5, 0]}
                    rotation={[0, -Math.PI / 4, 0]}
                >
                    <HeroModel />
                    {/* <TestModel/> */}
                </group>
            </Suspense>

        </Canvas>
    )
}

export default HeroExperience
