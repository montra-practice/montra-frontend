module.exports = (req, res) => {
  res.status(200).json({
    id: Date.now(),
    type: req.params.req,
    value: 'JPY',
  })
}
