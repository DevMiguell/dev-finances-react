export const formatAmount = (value) => {
  value = Number(value) * 100

  return (value)
}

export const formatDate = (date) => {
  const splittedDate = date.split("-")

  return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
}

export const formatCurrency = (value) => {
  const signal = Number(value) < 0 ? "-" : ""

  value = String(value).replace(/\D/g, "")

  value = Number(value) / 100

  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })

  return signal + value
}
