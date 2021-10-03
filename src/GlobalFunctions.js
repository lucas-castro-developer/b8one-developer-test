export function formatCurrencyValue(param) {
  const formatValue = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(param);

  return formatValue;
}
