module.exports = (req, res) => {
  res.status(201).json([
    {
      budgetId: 1,
      categoryId: '1',
      categoryName: 'Shopping',
      budgetTarget: 1000,
      realCost: 1200,
    },
    {
      budgetId: 2,
      categoryId: '4',
      categoryName: 'Transportation',
      budgetTarget: 700,
      realCost: 350,
    },
  ])
}
