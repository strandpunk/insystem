import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model() {
    const model = useGLTF("Perseverance.glb");
    const x = 1.2;
    return (
        <primitive object={model.scene} dispose={null} position={[0, -2, 0]} scale={[x, x, x]} />
    )
}