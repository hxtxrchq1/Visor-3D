# DRACO Decoder Files

Este directorio debería contener los archivos del decoder DRACO.

## Opción 1: Usar CDN (Recomendado - Ya configurado)

La aplicación ya está configurada para usar los decoders de DRACO desde el CDN de Google:
```
https://www.gstatic.com/draco/versioned/decoders/1.5.6/
```

No necesitas descargar nada adicional.

## Opción 2: Usar archivos locales

Si prefieres usar archivos locales:

1. Descarga los archivos DRACO desde:
   https://github.com/google/draco/tree/master/javascript/example

2. Copia estos archivos a `public/draco/`:
   - draco_decoder.js
   - draco_decoder.wasm
   - draco_wasm_wrapper.js

3. Actualiza la ruta en `src/components/Model.tsx`:
   ```typescript
   dracoLoader.setDecoderPath('/draco/')
   ```

## Verificación

Los decoders DRACO son necesarios para cargar modelos GLB/GLTF comprimidos con DRACO.
Si ves errores de carga, verifica que:
- La URL del CDN es accesible
- O los archivos locales están correctamente ubicados en `/draco/`
