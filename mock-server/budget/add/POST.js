module.exports = (req, res) => {
  return res.status(201).send({
    data: req.body,
  })
}
