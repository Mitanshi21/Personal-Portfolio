import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import Loader from "../Loader";

const Earth = () => {
    const earthRef = useRef();

    useFrame((state) => {
        // Continuous rotation
        if (earthRef.current) {
            earthRef.current.rotation.y += 0.002;
        }
    });

    // Additional Scroll Sync interaction
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // We can interact with the earth based on scroll range if needed
            // But for Earth in footer, maybe we just speed it up?
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <group ref={earthRef} rotation-y={0}>
            <mesh scale={2.5}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#4d53ed" wireframe />
                <mesh scale={0.9}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshBasicMaterial color="#000" />
                </mesh>
            </mesh>
        </group>
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='always'
            dpr={[1, 1.5]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    autoRotate={false}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />

                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1} />

            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
