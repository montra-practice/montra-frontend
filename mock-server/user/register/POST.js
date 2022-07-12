module.exports = (req, res) => {
  return res.status(201).send({
    id: Date.now(),
    ...req.body,
  })
}
