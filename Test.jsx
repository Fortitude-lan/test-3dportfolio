/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/test.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/test.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.平面.geometry} material={nodes.平面.material} />
      <mesh geometry={nodes.平面002.geometry} material={nodes.平面002.material} position={[-0.62, 0.216, -0.829]} />
    </group>
  )
}

useGLTF.preload('/test.glb')
