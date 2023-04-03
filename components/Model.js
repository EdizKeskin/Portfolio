import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/logo.gltf");
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                geometry={nodes.path329.geometry}
                material={materials["SVGMat.008"]}
                position={[-0.38, -0.67, 0.01]}
                rotation={[1.58, 0, 0]}
                scale={[4.08, -1, 4.08]}
            />
        </group>
    );
}

useGLTF.preload("/logo.gltf");