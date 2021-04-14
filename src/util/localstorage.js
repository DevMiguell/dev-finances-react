const storage = {
  get() {
    const transactions = localStorage.getItem("finances.react")

    return JSON.parse(transactions) || []
  },

  set(transactions) {
    const transactionsJson = JSON.stringify(transactions)

    localStorage.setItem("finances.react", transactionsJson)
  },
}

export default storage
