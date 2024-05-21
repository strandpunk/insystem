import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model() {
    const model = useGLTF("mod.gltf");
    const x = 0.07;
    return (
        <primitive object={model.scene} dispose={null} rotation={[0, -3.6, 0]} position={[0, 0, 0]} scale={[x, x, x]} />
    )
}