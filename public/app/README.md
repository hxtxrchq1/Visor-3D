# 📦 Carpeta de Modelo 3D

## Instrucciones

Coloca tu archivo de modelo 3D aquí con el nombre **`model.glb`** o **`model.gltf`**.

### Requisitos del archivo:

- **Nombre**: `model.glb` (recomendado) o `model.gltf`
- **Tamaño**: Hasta 100MB
- **Formato**: GLB (binario) o GLTF (JSON)
- **Compatibilidad**: Opcionalmente comprimido con DRACO

### Pasos para agregar tu modelo:

1. Renombra tu archivo 3D a `model.glb`
2. Reemplaza cualquier archivo existente en esta carpeta
3. Ejecuta `npm run dev` para verlo localmente
4. O ejecuta `npm run build` para generar el build de producción

### Ejemplo de estructura:

```
public/
  └── app/
      ├── model.glb       ← Tu archivo 3D aquí
      └── README.md       ← Este archivo
```

### Dónde conseguir modelos de prueba:

- **Khronos glTF Samples**: https://github.com/KhronosGroup/glTF-Sample-Models
- **Sketchfab**: https://sketchfab.com (modelos con licencia CC)
- **Poly Haven**: https://polyhaven.com/models

### Notas:

- El visor cargará automáticamente el archivo al iniciar
- No se requiere subir nada desde el navegador
- El modelo se carga desde la ruta `/app/model.glb`
- Compatible con compresión DRACO automáticamente

---

⚠️ **Importante**: Solo debe haber UN archivo de modelo en esta carpeta.
