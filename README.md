# Biblioteca de funciones de texto

## Cómo ejecutarlo

Instala dependencias con `npm ci`; usa `npm start`, `npm test`, `npm run lint`, `npm run format` y `npm run format:check`.

## Salida

```text
1. Ñandú
2. El Señor De Los Anillos
3. 3 palabras
4. 5202 CEWD
5. true · false
6. Desarrollo web…
7. Desarrollo we...
8. No seas ***** que eso es ***
9. Ana · Ana y Luis · Ana, Luis y Eva
10. ❌ RangeError: Longitud máxima no válida: 0
```

## Tests

El conjunto tiene 17 tests verdes; cubre texto vacío/espacios, emoji, palíndromo vacío, límite justo y longitud inválida de `truncar`, cierres independientes y enumeración vacía.

| `describe` | Caso límite |
|---|---|
| `capitalizar` | Cadena vacía |
| `capitalizarPalabras` | Cadena vacía |
| `contarPalabras` | Solo espacios |
| `invertir` | Emoji astral |
| `esPalindromo` | Solo espacios |
| `truncar` | Longitud exacta y longitud no válida |
| `crearCensurador` | Dos cierres aislados |
| `unirConY` | Sin elementos |

## ¿Detectan errores tus tests?

| Cambio | Test que falla |
|---|---|
| `truncar` sin `trimEnd` | `truncar > quita espacio junto a la marca` |
| Censurador sin conversión a minúsculas | `crearCensurador > censura sin distinguir capitalización` |

## Herramientas

`npm run lint` termina sin errores. `npm run format:check` informa `All matched files use Prettier code style!`.

## Integración continua (opcional)

Workflow `.github/workflows/ci.yml` para push y pull request a `main`; instala por `npm ci` y ejecuta ESLint, Prettier y Vitest. La ejecución local está verificada. No se ha publicado porque el repositorio personal con ese nombre ya existe y es público; se conserva intacto hasta confirmar el destino privado.
