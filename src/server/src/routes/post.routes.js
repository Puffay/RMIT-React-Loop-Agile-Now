module.exports = (express, app) => {
  const controller = require("../controllers/post.controller.js");
  const router = express.Router();

  // Select all posts.
  router.get("/", controller.all);

  // Create a new post.
  router.post("/", controller.create);

  // Select a single post from user id.
  router.get("/user/:id", controller.byUser);

  // Add routes to server.
  app.use("/api/posts", router);
};
