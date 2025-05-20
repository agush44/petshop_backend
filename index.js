import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import { connectDB } from "./src/config/mongo.js";
import { corsOptions } from "./src/config/corsOptions.js";
import performanceLogger from "./src/middleware/perfomanceLogger.js";
import compressionFilter from "./src/middleware/compressionFilter.js";
import errorMiddleware from "./src/middleware/errorMiddleware.js";
import { productRoutes } from "./src/routes/productRoutes.js";
import { userRoutes } from "./src/routes/userRoutes.js";

const PORT = process.env.PORT || 5001;
const app = express();

app.disable("x-powered-by");
app.set("etag", "strong");

// Middleware
app.use(performanceLogger);
app.use(express.static("public", { maxAge: "1y" }));
app.use(compression({ threshold: 1024, level: 6, filter: compressionFilter }));
app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());

// DB connection
connectDB();

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// Error handler
app.use(errorMiddleware);

// Start server
app.listen(PORT, () =>
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
);
