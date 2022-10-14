const db = require("../database");

// Select all posts from the database.
exports.all = async (req, res) => {
  const posts = await db.post.findAll({
    include: [
      {
        model: db.user,
        attributes: ["id", "name", "image"]
      },
      {
        model: db.reply,
        attributes: ["id", "text", "createdAt"],
        include: [
          {
            model: db.user,
            attributes: ["id", "name", "image"]
          }
        ],
        order: [["createdAt", "DESC"]]
      }
    ],
    order: [["createdAt", "DESC"]]
  });

  res.json(posts);
};

// Select a posts by user id.
exports.byUser = async (req, res) => {
  const posts = await db.post.findAll({
    where: {
      userId: req.params.userId
    },
    include: db.user
  });
};

// Create a post in the database.
exports.create = async (req, res) => {
  const newPost = await db.post.create({
    text: req.body.text,
    id: req.body.id,
    image: req.body.image
  });

  const post = await db.post.findByPk(newPost.post_id, {
    include: [
    {
      model: db.user,
      attributes: ["id", "name"]
    }]
  });


  res.json(post);
};
