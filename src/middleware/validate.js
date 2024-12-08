const validate = (schema) => (req, res, next) => {
  try {
    const data = { ...req.body, ...req.params };
    schema.parse(data);
    next();
  } catch (err) {
    res.status(400).json({ error: err.errors });
  }
};

module.exports = validate;
