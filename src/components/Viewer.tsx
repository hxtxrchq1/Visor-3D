import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei'
import Model from './Model'
import './Viewer.css'

function Viewer() {
  return (
    <div className="viewer-container">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
          toneMapping: 2, // ACESFilmicToneMapping
          toneMappingExposure: 1.3,
        }}
        className="viewer-canvas"
      >
        <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={50} />

        {/* Fondo muy cálido estilo atardecer intenso */}
        <color attach="background" args={['#fef5eb']} />
        <fog attach="fog" args={['#ffe0c1ff', 35, 85]} />

        {/* Iluminación muy cálida estilo atardecer dorado */}
        <ambientLight intensity={0.85} color="#ffd9b3" />

        {/* Luz principal naranja-dorada intensa desde arriba */}
        <directionalLight
          position={[10, 14, 8]}
          intensity={3}
          castShadow
          shadow-mapSize={[4096, 4096]}
          shadow-camera-far={80}
          shadow-camera-left={-15}
          shadow-camera-right={15}
          shadow-camera-top={15}
          shadow-camera-bottom={-15}
          shadow-bias={-0.0001}
          color="#ffcc80"
        />

        {/* Luz de relleno lateral naranja cálida */}
        <directionalLight position={[-8, 10, -5]} intensity={1.5} color="#ffa366" />

        {/* Luz trasera naranja peachy */}
        <directionalLight position={[0, 8, -10]} intensity={0.9} color="#ffb380" />

        {/* Luz hemisférica muy cálida tierra-naranja */}
        <hemisphereLight intensity={1} groundColor="#bf9670" color="#ffebcc" />

        {/* Punto de luz dorada intensa desde arriba */}
        <pointLight position={[0, 12, 0]} intensity={1.2} color="#ffd9a3" distance={50} />

        {/* Luz puntual lateral cálida adicional */}
        <pointLight position={[-5, 6, 8]} intensity={0.7} color="#ffcc99" distance={40} />

        {/* Environment sunset para reflejos cálidos */}
        <Environment preset="sunset" background={false} blur={0.6} />

        {/* Sombras suaves muy sutiles y más abajo */}
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.08}
          scale={30}
          blur={4}
          far={8}
          resolution={512}
          color="#e4e2dfff"
        />

        {/* Modelo 3D con Suspense */}
        <Suspense fallback={<LoadingFallback />}>
          <Model />
        </Suspense>

        {/* Controles orbitales estilo gltf-viewer */}
        <OrbitControls
          makeDefault
          enableDamping
          dampingFactor={0.05}
          minDistance={0.1}
          maxDistance={100}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
          enablePan={true}
          panSpeed={0.5}
          rotateSpeed={0.5}
          zoomSpeed={1}
        />
      </Canvas>

      {/* Indicador de carga */}
      <div className="loading-indicator">
        <div className="loading-spinner"></div>
        <p>Cargando modelo 3D...</p>
      </div>
    </div>
  )
}

// Componente de fallback para Suspense
function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#667eea" wireframe />
    </mesh>
  )
}

export default Viewer
