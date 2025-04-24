/**
 * Middleware para optimizar respuestas JSON
 * Reduce el tamaño de las respuestas eliminando campos innecesarios
 */

const jsonOptimizationMiddleware = (req, res, next) => {
  const originalJson = res.json;

  res.json = function (obj) {
    if (obj == null) {
      return originalJson.call(this, obj);
    }

    if (Array.isArray(obj)) {
      const optimizedArray = obj.map((item) => optimizeObject(item));
      return originalJson.call(this, optimizedArray);
    }

    const optimizedObj = optimizeObject(obj);
    return originalJson.call(this, optimizedObj);
  };

  next();
};

/**
 * Función auxiliar para optimizar un objeto
 * Elimina propiedades con valores null o undefined
 */

function optimizeObject(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const result = { ...obj };

  Object.keys(result).forEach((key) => {
    if (result[key] === null || result[key] === undefined) {
      delete result[key];
    }
  });

  return result;
}

export default jsonOptimizationMiddleware;
