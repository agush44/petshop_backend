import express from "express";
import helmet from "helmet";
import cors from "cors";
import { connectDB } from "./src/config/mongo.js";
import { productRoutes } from "./src/routes/productRoutes.js";
import { userRoutes } from "./src/routes/userRoutes.js";
import errorMiddleware from "./src/middleware/errorMiddleware.js";
import compression from "compression";
import jsonOptimizationMiddleware from "./src/middleware/jsonOptimizationMiddleware.js";

// const FRONTEND_URL = process.env.FRONTEND_URL;

const PORT = process.env.PORT || 5001;

const app = express();

app.disable("x-powered-by"); // Deshabilitar el encabezado "X-Powered-By"

// Configuración de ETag para validación de caché
app.set("etag", "strong");

// Middleware para monitoreo de rendimiento
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} - ${duration}ms`);
  });
  next();
});

// Servir archivos estáticos con caché de 1 año
app.use(express.static("public", { maxAge: "1y" }));

// Compresión mejorada con filtro para tipos de contenido
app.use(
  compression({
    threshold: 1024,
    level: 6,
    filter: (req, res) => {
      if (req.headers["x-no-compression"]) {
        return false;
      }
      const contentType = res.getHeader("Content-Type") || "";
      return !/^(image|video|audio)/i.test(contentType);
    },
  })
);

// Configuración de CORS
const allowedOrigins = [
  "https://tupetshop.vercel.app",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("No permitido por la política CORS"));
      }
    },
    credentials: true,
  })
);

// Middleware de seguridad
app.use(helmet());

app.use(express.json());

connectDB();

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log("Servidor en escucha por el puerto http://localhost:" + PORT);
});
