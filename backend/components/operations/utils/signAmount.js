function signAmount(amount, type) {
  if (type === 'Ingreso') {
    const newAmount = amount;
    return (newAmount);
  }
  const newAmount = -amount;
  return newAmount;
}

module.exports = signAmount;
