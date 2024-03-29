const db = require("../database");
const argon2 = require("argon2");

// Select all users from the database.
exports.all = async (req, res) => {
  const users = await db.user.findAll();

  res.json(users);
};

// Select one user from the database.
exports.one = async (req, res) => {
  const user = await db.user.findByPk(req.params.id);

  res.json(user);
};

// Select one user from the database if username and password are a match.
exports.login = async (req, res) => {
  const users = await db.user.findAll({
    where: {
      email: req.query.email,
    }
  });

  if (users.length === 0) {
    res.status(400).json({ message: "User not found" });
  } else {
    const user = users[0];

    if (await argon2.verify(user.password_hash, req.query.password) === false)
      // Login failed.
      res.json(null);
    else
      res.json(user);
  }
};

// Create a user in the database.
exports.create = async (req, res) => {
  const hash = await argon2.hash(req.body.password, { type: argon2.argon2id });

  const user = await db.user.create({
    email: req.body.email,
    name: req.body.name,
    password_hash: hash,
  });

  res.json(user);
};

// Update a user in the database.
exports.update = async (req, res) => {
  const user = await db.user.findByPk(req.params.id);

  const newUser = await user.update({
    email: req.body.email,
    name: req.body.name,
  });

  res.json(user);
}

// Delete a user from the database.
exports.delete = async (req, res) => {
  const user = await db.user.findByPk(req.params.id);

  await user.destroy();

  res.json(user);
}