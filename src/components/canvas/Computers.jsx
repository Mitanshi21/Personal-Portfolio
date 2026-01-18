import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import Loader from "../Loader";

const Computers = ({ isMobile }) => {
    const meshRef = useRef();

    useFrame((state) => {
        // Basic rotation over time
        // meshRef.current.rotation.y += 0.005; 

        // Add simple scroll/mouse interaction logic here if needed, 
        // but OrbitControls handles mouse.
        // For scroll-synced, we usually bind window.scrollY to rotation.
        // However, since this canvas is in the Hero section, scroll moves it out of view.
        // A subtle continuous rotation is better here.

        // Let's add a gentle oscillation
        const t = state.clock.getElapsedTime();
        meshRef.current.position.y = (isMobile ? -3 : -3.25) + Math.sin(t * 1.5) * 0.1;
    });

    // Scroll Sync Logic
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (meshRef.current) {
                // Rotate based on scroll
                meshRef.current.rotation.y = scrollY * 0.002;
                meshRef.current.rotation.x = scrollY * 0.001;
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor='black' />
            <pointLight intensity={1} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            {/* Visual Placeholder: A floating abstract tech cube group */}
            <group ref={meshRef} scale={isMobile ? 0.7 : 0.75} position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]}>
                <mesh position={[0, 0, 0]} rotation={[0.4, 0.2, 0]}>
                    <boxGeometry args={[2, 1.5, 0.1]} /> {/* Screen */}
                    <meshStandardMaterial color="#444" roughness={0.5} />
                </mesh>
                <mesh position={[0, -0.8, 0.5]} rotation={[-1.2, 0, 0]}>
                    <boxGeometry args={[2, 1.5, 0.1]} /> {/* Keyboard */}
                    <meshStandardMaterial color="#333" roughness={0.5} />
                </mesh>
            </group>
        </mesh>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop='always' // Changed to always for smooth animation
            shadows
            dpr={[1, 1.5]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
