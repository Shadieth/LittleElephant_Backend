# 🐘 Backend de Little Elephant

Repositorio del backend de **Little Elephant**, desarrollado en **Node.js**, con conexión a **MongoDB** usando **Mongoose**.

---

## 📦 Clonación del proyecto

```bash
git clone https://github.com/Shadieth/LittleElephant_Backend.git
cd LittleElephant_Backend
```

---

## ⚙️ Requisitos previos

Asegúrate de tener instalado:

- **Node.js** (versión recomendada: ≥ 18.x)  
- **npm** (Node Package Manager)  
- **MongoDB** (local o en la nube, como MongoDB Atlas)

---

## 📥 Instalación de dependencias

Instala las dependencias del proyecto:

```bash
npm install
```

Además, instala los paquetes necesarios para MongoDB:

```bash
npm install mongoose dotenv
```

> \`dotenv\` se usa para cargar variables de entorno desde un archivo \`.env\`.

---

## 🧪 Variables de entorno

Crea un archivo \`.env\` en la raíz del proyecto con el siguiente contenido:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/littleelephant
```

> Reemplaza \`MONGO_URI\` con tu propia cadena de conexión si usas MongoDB Atlas u otro servidor.

---

## 🛠️ Ejecución del backend

Primero compila el proyecto:

```bash
npm run build
```

Luego inicia el servidor:

```bash
npm run start
```

> Este script suele usar \`nodemon\` si está configurado.

---

## 🧱 Tecnologías utilizadas

- **Node.js**  
- **Express.js**  
- **MongoDB**  
- **Mongoose**  
- **dotenv**  
- **TypeScript**

---

## 📬 Contacto

Desarrollado por [Shadieth](https://github.com/Shadieth)

