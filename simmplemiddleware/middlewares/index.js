exports.validate = (req, res, next) => {
  if (req.body.username && req.body.password && req.body.age) {
    next();
  } else {
    res.json({ message: "Data missing" });
  }
};
