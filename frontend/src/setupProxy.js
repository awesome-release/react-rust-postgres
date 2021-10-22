const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  const api = process.env.BACKEND_INGRESS_URL || "http://backend:8000";
  app.use(
    "/api",
    createProxyMiddleware({
      target: api,
      pathRewrite: { "^/api": "" }
    })
  );
};
