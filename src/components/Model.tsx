import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// Ruta fija del modelo en /public/app/
const MODEL_PATH = '/app/draco-v1.glb'

function Model() {
  const { camera } = useThree()
  const groupRef = useRef<THREE.Group>(null)

  // Cargar modelo con useGLTF y DRACO
  const gltf = useGLTF(MODEL_PATH, true, true, (loader) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')
    dracoLoader.setDecoderConfig({ type: 'js' })
    ;(loader as GLTFLoader).setDRACOLoader(dracoLoader)
  })

  useEffect(() => {
    if (gltf.scene && groupRef.current) {
      // Calcular bounding box para centrar y escalar
      const box = new THREE.Box3().setFromObject(gltf.scene)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())

      // Centrar modelo y elevarlo del suelo
      const elevation = size.y * 0.02 // Elevar un 2% de su altura
      gltf.scene.position.set(-center.x, -center.y + elevation, -center.z)

      // NO escalar - mantener escala original del modelo
      // Esto permite ver el modelo en su escala real como en renders arquitectónicos

      // Configurar materiales y rendering
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true
          child.receiveShadow = true

          // Mantener materiales originales del glTF
          if (child.material) {
            const materials = Array.isArray(child.material) ? child.material : [child.material]

            materials.forEach((material: any) => {
              // Mejorar rendering de texturas
              if (material.map) {
                material.map.anisotropy = 16
                material.map.encoding = THREE.sRGBEncoding
              }

              // Asegurar que esté en modo sólido y renderice ambos lados
              material.wireframe = false
              material.side = THREE.DoubleSide
              material.needsUpdate = true
            })
          }
        }
      })

      // Ajustar cámara con vista cinematográfica estilo render
      const maxDim = Math.max(size.x, size.y, size.z)
      const distance = maxDim * 2.2
      // Vista desde ángulo superior-frontal más elegante
      camera.position.set(distance * 0.8, distance * 0.6, distance * 0.9)
      camera.lookAt(0, elevation, 0) // Mirar al centro elevado
      camera.updateProjectionMatrix()

      console.log('✅ Modelo cargado:', MODEL_PATH)
      console.log(
        '📦 Dimensiones:',
        `${size.x.toFixed(2)} x ${size.y.toFixed(2)} x ${size.z.toFixed(2)}`
      )
      console.log('📐 Centro:', center)
    }
  }, [gltf, camera])

  return <primitive object={gltf.scene} ref={groupRef} />
}

// Precargar el modelo
useGLTF.preload(MODEL_PATH)

export default Model
