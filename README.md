# 🎨 Visor 3D Estático - GLB/GLTF

Visor 3D simple y estático para archivos GLB/GLTF que carga automáticamente un modelo desde `/public/app/`.

![React](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.160-green)

## ✨ Características

- 🎯 **Carga automática** desde `/public/app/model.glb`
- 📦 **Sin inputs**: No requiere subir archivos desde el navegador
- 🗜️ **DRACO**: Soporte automático para compresión
- 📱 **Responsivo**: Funciona en desktop, tablet y móvil
- ⚡ **Optimizado**: Auto-fit, luces profesionales, controles suaves
- 🚀 **Estático**: Build listo para subir a cualquier hosting

## 🚀 Inicio Rápido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Agregar tu modelo 3D

Coloca tu archivo GLB o GLTF en `/public/app/` con el nombre **`model.glb`**:

```
public/
  └── app/
      └── model.glb   ← Tu archivo aquí
```

### 3. Iniciar

```bash
npm run dev
```

Abre http://localhost:5173

## 📦 Agregar tu Modelo

### Paso a paso:

1. Toma tu archivo GLB o GLTF
2. Renómbralo a `model.glb`
3. Colócalo en `public/app/model.glb`
4. Listo!

### Descargar modelo de prueba (PowerShell):

```powershell
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb" -OutFile "public/app/model.glb"
```

### Requisitos del modelo:

- ✅ Formato: GLB (recomendado) o GLTF
- ✅ Tamaño: Hasta 100MB
- ✅ Nombre: `model.glb`
- ✅ Ubicación: `public/app/`

## 🏗️ Build para Producción

```bash
npm run build
```

Los archivos compilados estarán en `/dist/`:

```
dist/
  ├── index.html
  ├── assets/
  └── app/
      └── model.glb
```

## 🌐 Deploy

### Subir a tu hosting:

1. Ejecuta `npm run build`
2. Sube el contenido de `/dist/` a tu servidor
3. Asegúrate de que `dist/app/model.glb` esté en el servidor
4. Accede a tu dominio (ej: `kath-3d.chiqo.site`)

### Opciones de hosting:

- **Vercel**: `vercel --prod`
- **Netlify**: Arrastra carpeta `dist/` al dashboard
- **FTP/cPanel**: Sube contenido de `dist/` a `public_html/`
- **GitHub Pages**: `npm run build` + push a gh-pages branch

## 🎮 Controles

- **Rotar**: Click izquierdo + arrastrar (1 dedo en móvil)
- **Zoom**: Scroll del mouse (pellizcar en móvil)
- **Mover**: Click derecho + arrastrar (2 dedos en móvil)

## 📂 Estructura

```
visor-3d-estatico/
├── public/
│   └── app/
│       ├── model.glb          ← Tu modelo aquí
│       └── README.md
├── src/
│   ├── components/
│   │   ├── Viewer.tsx         ← Canvas 3D
│   │   └── Model.tsx          ← Carga del modelo
│   ├── App.tsx                ← Componente principal
│   └── main.tsx
├── package.json
└── README.md
```

## 🛠️ Stack Tecnológico

- **React 18** - Framework UI
- **TypeScript** - Tipado estático
- **Three.js** - Motor 3D
- **react-three-fiber** - React + Three.js
- **@react-three/drei** - Helpers 3D
- **Vite** - Build tool
- **DRACO** - Compresión automática

## 🎨 Personalización

### Cambiar ruta del modelo:

Edita `src/components/Model.tsx`:

```typescript
const MODEL_PATH = '/app/model.glb' // Cambia aquí
```

### Ajustar luces:

Edita `src/components/Viewer.tsx`:

```typescript
<ambientLight intensity={0.8} />
<directionalLight position={[5, 5, 5]} intensity={1.5} />
```

### Cambiar colores:

Edita `src/App.css`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 📊 Optimizaciones Incluidas

- ✅ Auto-fit (centra y escala modelos)
- ✅ DRACO compression automática
- ✅ Suspense para lazy loading
- ✅ Anisotropía en texturas
- ✅ Shadows opcionales
- ✅ DPR adaptativo `[1, 2]`
- ✅ Preload del modelo

## 🧪 Modelos de Prueba Gratuitos

- **Khronos glTF Samples**: https://github.com/KhronosGroup/glTF-Sample-Models
- **Poly Haven**: https://polyhaven.com/models
- **Sketchfab**: https://sketchfab.com (modelos CC)

## 🐛 Troubleshooting

### "Failed to fetch" o modelo no carga

1. Verifica que `public/app/model.glb` existe
2. Verifica el nombre exacto: `model.glb`
3. Revisa la consola del navegador (F12)

### Modelo se ve negro

1. Verifica que el modelo tiene materiales/texturas
2. Prueba con otro modelo de ejemplo
3. Ajusta las luces en `Viewer.tsx`

### Modelo muy grande o muy pequeño

El auto-fit debería ajustarlo, pero puedes modificar el scale en `Model.tsx`:

```typescript
const scale = 5 / maxDim // Aumenta el número
```

## 📄 Scripts

```bash
npm run dev      # Desarrollo (localhost:5173)
npm run build    # Build producción
npm run preview  # Preview del build
npm run lint     # Lint código
```

## 🎯 Casos de Uso

- ✅ Portfolio de modelos 3D
- ✅ Catálogo de productos
- ✅ Visualización arquitectónica
- ✅ Presentaciones educativas
- ✅ Galería de arte 3D
- ✅ Demos de videojuegos

## 📄 Licencia

MIT

## 🤝 Créditos

- [Three.js](https://threejs.org/)
- [react-three-fiber](https://github.com/pmndrs/react-three-fiber)
- [@react-three/drei](https://github.com/pmndrs/drei)
- [Google DRACO](https://github.com/google/draco)

---

**¿Listo?** Coloca tu `model.glb` en `public/app/` y ejecuta `npm run dev` 🚀
