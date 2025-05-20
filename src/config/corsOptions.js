export const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      "https://tupetshop.vercel.app",
      "http://localhost:5173",
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    callback(new Error("No permitido por la política CORS"));
  },
  credentials: true,
};
