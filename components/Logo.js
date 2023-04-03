'use client';
import { ContactShadows, Loader, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import { Suspense } from 'react';
import Model from './Model';
import CanvasProgress from './CanvasProgress';



export default function Logo() {
    return (
        <div className="canvas p-18 w-[500px] h-[500px]">
            <Canvas
                width={700}
                height={700}
                pixelratio={[1, 2]}
                camera={{ position: [-3, 2, 15], fov: 6 }}
            >
                <ambientLight intensity={0.6} />
                <directionalLight position={[-2, 5, 2]} />
                <Suspense fallback={<CanvasProgress />}>
                    <Model />
                    <ContactShadows
                        rotation-x={Math.PI / 2}
                        position={[0, -0.8, 0]}
                        opacity={1}
                        width={10}
                        height={10}
                        blur={1.5}
                        far={0.8}
                    />
                </Suspense>
                <OrbitControls
                    makeDefault
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 1.75}
                />
            </Canvas>
        </div>
    )
}
