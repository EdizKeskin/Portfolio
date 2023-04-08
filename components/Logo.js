'use client';
import { ContactShadows, Loader, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import { Suspense } from 'react';
import CanvasProgress from './CanvasProgress';
import dynamic from 'next/dynamic';
const Model = dynamic(() => import('./Model'));

export default function Logo() {
    return (
        <div className="canvas p-18 md:w-[500px] md:h-[500px] sm:w-[400px] sm:h-[400px] z-30 relative">
            <Canvas
                width={700}
                height={700}
                pixelratio={[1, 2]}
                camera={{ position: [-3, 2, 15], fov: 6 }}
            >
                <ambientLight intensity={0.6} />
                <directionalLight position={[-2, 5, 2]} />
                <Suspense fallback={<CanvasProgress />}>
                    <Model className="z-40" />
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
            <Loader />
        </div>
    )
}
