# Trabajo Práctico Final – Desarrollo Web Frontend

Este proyecto es una aplicación de React desarrollada para el curso de la UTN, enfocada en la gestión de usuarios, persistencia de estado con Context API y navegación dinámica.

## Tecnologías Utilizadas
**React 18** y **Vite**.
**React Router Dom** para la gestión de rutas (`/`, `/registro`, `/acerca`).
**Context API** para la persistencia del usuario en toda la app.
**LocalStorage** para mantener la sesión activa al recargar.

## Estructura del Proyecto
 La organización del código sigue las mejores prácticas sugeridas:
* `src/components`: Componentes de interfaz reutilizables (ej. Navbar).
* `src/context`: Lógica del `UserProvider` para el estado global.
* `src/pages`: Vistas principales de la aplicación.
* `root`: Archivos de configuración (`vite.config.js`, `vercel.json`, `package.json`).

## Instrucciones para Ejecución Local
1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar las dependencias.
3. Iniciar el servidor de desarrollo con `npm run dev`.
4. Abrir en el navegador la dirección que indique la terminal (ej. `http://localhost:5173`).

## Instrucciones para el Deploy
 El proyecto está configurado para un deploy automático en **Vercel**:
1. Conectar el repositorio de GitHub con una cuenta de Vercel.
2. El archivo `vercel.json` ya está configurado para manejar el ruteo de React (SPA).
3. Cada "push" a la rama `main` disparará una nueva versión productiva.

## Decisiones de Desarrollo
* Se implementaron **validaciones personalizadas** en el formulario de registro (mínimo de caracteres y formato de email) para asegurar la integridad de los datos según los requisitos.
* Se utilizó una estructura de carpetas modular para facilitar el mantenimiento del código.