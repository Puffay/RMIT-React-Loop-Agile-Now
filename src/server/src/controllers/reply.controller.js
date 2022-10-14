const db = require("../database");

exports.byId = async (req, res) => {
    const reply = await db.reply.findByPk(req.params.id);
    res.json(reply);
};

exports.create = async (req, res) => {
    const reply = await db.reply.create({
        text: req.body.text,
        post_id: req.body.post_id,
        id: req.body.id
      });
    
      res.json(reply);
};
