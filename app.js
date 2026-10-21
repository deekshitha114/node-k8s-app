
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Node.js Docker CI/CD application is running!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    application: "node-k8s-app"
  });
});

app.get("/info", (req, res) => {
  res.json({
    name: "node-k8s-app",
    version: "1.0.0",
    environment: "Docker"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
