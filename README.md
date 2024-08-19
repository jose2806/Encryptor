# Encriptador de Texto

## Descripción

El **Encriptador de Texto** es una aplicación web interactiva que permite a los usuarios encriptar y desencriptar mensajes utilizando reglas de sustitución específicas. Este proyecto fue desarrollado para demostrar habilidades en desarrollo web, incluyendo HTML, CSS, y JavaScript.

## Funcionalidades

### 1. Encriptación de Texto
- **Entrada**: El usuario ingresa un texto en un `textarea`. Solo se permiten letras minúsculas y espacios sin acentos.
- **Reglas de Encriptación**:
  - `e` se convierte en `enter`
  - `i` se convierte en `imes`
  - `a` se convierte en `ai`
  - `o` se convierte en `ober`
  - `u` se convierte en `ufat`
- **Salida**: El texto encriptado se muestra en la sección de resultados.

### 2. Desencriptación de Texto
- **Entrada**: El usuario ingresa un texto encriptado.
- **Reglas de Desencriptación**:
  - `enter` se convierte en `e`
  - `imes` se convierte en `i`
  - `ai` se convierte en `a`
  - `ober` se convierte en `o`
  - `ufat` se convierte en `u`
- **Salida**: El texto desencriptado se muestra en la sección de resultados.

### 3. Copiar Texto al Portapapeles
- Una vez que el texto encriptado o desencriptado se muestra en la sección de resultados, el usuario puede copiarlo al portapapeles presionando el botón "Copiar".

### 4. Validación de Entrada
- El sistema valida que la entrada solo contenga letras minúsculas y espacios. Cualquier carácter que no cumpla con estas condiciones es automáticamente removido.

### 5. Responsividad
- La interfaz está diseñada para ser responsiva y funciona bien en dispositivos de diferentes tamaños, incluyendo tablets y teléfonos móviles.

## Estructura del Proyecto

- `index.html`: Contiene la estructura principal del sitio web.
- `styles/style.css`: Archivo CSS para los estilos y diseño de la aplicación.
- `app.js`: Archivo JavaScript que maneja la lógica de encriptación, desencriptación y copiado del texto.
- `assets/`: Carpeta que contiene imágenes y otros recursos utilizados en la aplicación.

## Uso

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/encriptador-de-texto.git

## Autor

- Jose Rodriguez Cruz - Desarrollador Jr
