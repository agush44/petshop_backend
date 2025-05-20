# **Petshop** 🐾

## **Descripción**

**Petshop** es una aplicación web para gestionar una tienda de mascotas, desarrollada con **Node.js, Express.js y MongoDB**.

✔️ **Registro y autenticación de usuarios** con JWT.  
✔️ **Operaciones CRUD** para administrar datos.  
✔️ **Seguridad** con encriptación de contraseñas y protección de endpoints.

---

## **🚀 Tecnologías utilizadas**

- Node.js + Express.js
- MongoDB
- JSON Web Tokens (JWT) para autenticación

---

## **📌 Requisitos previos**

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- **Node.js** (v16 o superior)
- **MongoDB** (local o en la nube, ej. MongoDB Atlas)
- **NPM** o **Yarn** como gestor de paquetes

---

## **⚙️ Instalación y configuración**

### 1️⃣ **Clonar el repositorio**

```bash
git clone https://github.com/agush44/petshop_backend.git
```

---

## **📌 Configuración del Backend**

### 2️⃣ **Instalar dependencias**

```bash
npm install
```

### 3️⃣ **Configurar variables de entorno en el Backend**

Crea un archivo **.env** dentro de la carpeta **backend/** y agrega:

```bash
# Configuración de la base de datos
MONGO_URI=your-mongodb-connection-string

# Clave secreta para autenticación con JWT
JWT_SECRET=your-secret-key

# Puerto del backend
PORT=5000

# URL del frontend para habilitar CORS
FRONTEND_URL=http://localhost:5173
```

### 4️⃣ **Ejecutar el Backend**

```bash
npm run dev
```

---

## **📌 Uso**

Accede a los endpoints de la API para gestión CRUD de productos y usuarios.
Realiza peticiones autenticadas con JWT.

---

## **📄 Licencia**

Este proyecto está bajo la licencia **MIT**.

🚀🐶🐱
