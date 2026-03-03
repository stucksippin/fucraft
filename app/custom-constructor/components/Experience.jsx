import { OrbitControls, Environment, ContactShadows, useProgress, Html } from "@react-three/drei"
import { Table } from "./Table"
import { Suspense } from "react"

function Loader() {
    const { progress } = useProgress()
    return (
        <Html center>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                fontFamily: "sans-serif",
            }}>
                <div style={{
                    width: "48px",
                    height: "48px",
                    border: "3px solid #e0e0e0",
                    borderTop: "3px solid #BAA898",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite",
                }} />
                <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
                <span style={{ fontSize: "13px", color: "#888" }}>
                    {Math.round(progress)}%
                </span>
            </div>
        </Html>
    )
}

export const Experience = () => {
    return (
        <>
            <Environment files="/env.hdr" background={false} />

            {/* Мягкая тень прямо на белом фоне — без серого квадрата */}
            <ContactShadows
                position={[0, -0.8, 0]}
                opacity={0.4}
                scale={10}
                blur={2.5}
                far={4}
                color="#8a7060"
            />

            <Suspense fallback={<Loader />}>
                <Table />
            </Suspense>

            <OrbitControls
                makeDefault
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
            />
        </>
    )
}