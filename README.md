# Landing maestra — Educación Financiera FENACREP

## Concepto
La identidad permanente es FENACREP + Escuela de Educación y Formación Cooperativa.
La Semana de la Educación Financiera funciona como contexto de campaña y puede reemplazarse en futuras activaciones.

## GitHub Pages
Sube a la raíz del repositorio:
- index.html
- styles.css
- coopacs.js
- app.js
- carpeta assets/

## Personalización
Ejemplo:
`?coopac=sancristobal`

La ficha de cada COOPAC está en `coopacs.js`:
- `nombre`: nombre visible
- `subdominio`: subdominio real del Aula Virtual
- `participa`: controla si aparece y si su enlace personalizado funciona
- `logo`: ruta del logo, por ejemplo `assets/coopacs/sancristobal.png`

## Logos de cooperativas
Crea `assets/coopacs/` y coloca allí los logos originales.
Luego completa el campo `logo` de cada ficha. La retícula se genera automáticamente.

## Campañas futuras
Para Semana Mundial del Ahorro u otra activación:
1. cambia la tarjeta contextual del hero;
2. sustituye el sello/logo de campaña;
3. conserva intactos curso, COOPAC, personalización y franja de participantes.

Los archivos de marca suministrados se incluyen sin alterar.


## Video del curso
La sección del curso incluye el video oficial alojado en Vimeo:
`https://vimeo.com/723585801`

Se utiliza el reproductor embebido responsive 16:9. El contenido permanece alojado en Vimeo.


## Ruta de inscripción
La V4 implementa dos estados:

1. **Landing general**: el visitante selecciona una COOPAC participante y luego se habilita `Continuar con mi inscripción`.
2. **Enlace personalizado** (`?coopac=sancristobal`): se omite el selector y aparece directamente `Solicitar inscripción`, enlazando al Aula Virtual correspondiente.

Las COOPAC mostradas en el selector dependen de `participa:true` en `coopacs.js`.
