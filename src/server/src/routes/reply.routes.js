module.exports = (express, app) => {
    const controller = require("../controllers/reply.controller.js");
    const router = express.Router();
  
    // Create a new reply.
    router.post("/", controller.create);
  
    // Select a single reply.
    router.get("/:id", controller.byId);
  
    // Add routes to server.
    app.use("/api/replies", router);
  };
  