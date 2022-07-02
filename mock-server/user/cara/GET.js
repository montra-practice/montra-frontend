module.exports = (req, res) => {
  res.status(200).json({
    id: Date.now(),
    name: req.params.name,
    email: `${req.params.name}@email.com`,
    password: req.params.name
  })
}
