export default expenses =>
  expenses.reduce((total, expense) => total + expense.amount, 0);
