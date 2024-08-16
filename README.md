<h1> ENCRIPTADOR DE TEXTO </h1>

# Encriptador/Desencriptador de Texto

Esta es una aplicación web simple que permite encriptar y desencriptar texto. La aplicación está diseñada para funcionar con letras minúsculas solamente, sin acentos ni caracteres especiales.

## Requisitos

- El texto de entrada debe contener solo letras minúsculas y espacios.
- La aplicación permite convertir el texto encriptado a su versión desencriptada y viceversa.

## Tecnologías Utilizadas

- **HTML** para la estructura del contenido.
- **CSS** para el diseño y estilo de la aplicación.
- **JavaScript** para la lógica de encriptación, desencriptación y copia al portapapeles.

## Cómo Usar

1. **Escribe el texto** que deseas encriptar o desencriptar en el campo de entrada.
2. **Selecciona la acción** deseada: encriptar o desencriptar.
3. **Haz clic en el botón "Procesar"** para obtener el resultado.
4. **Haz clic en el botón "Copiar al portapapeles"** para copiar el texto encriptado/desencriptado al portapapeles.

## Encriptación y Desencriptación

La aplicación utiliza un cifrado César simple con un desplazamiento de 3 caracteres para encriptar y desencriptar el texto.

- **Encriptación:** Desplaza cada letra en el alfabeto por 3 posiciones hacia adelante.
- **Desencriptación:** Desplaza cada letra en el alfabeto por 3 posiciones hacia atrás.

## Estructura de Archivos

- `index.html`: Contiene la estructura de la aplicación.
- `styles.css`: Proporciona el diseño y estilo de la aplicación.
- `script.js`: Contiene la lógica para encriptar, desencriptar y copiar texto.
