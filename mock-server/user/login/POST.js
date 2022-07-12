module.exports = (req, res) => {
  return res.status(201).send({
    token: 'tokenString',
    ...req.body,
  })
}
