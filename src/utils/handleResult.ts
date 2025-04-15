const handleResult = (value: string) => {
  const valueNumber = Number(value)
  if (valueNumber > 5 && valueNumber < 20) {
    return 'Hello World!'
  } else if (valueNumber > 20 && valueNumber < 25 || valueNumber == 30) {
    return '✋😗🤚'
  } else if (valueNumber === 100) {
    return '👉😎👈'
  } else if (valueNumber > 10000 && valueNumber < 50000) {
    return 'Kebanyakan heyy!'
  } else if (valueNumber > 300 && valueNumber < 500) {
    return 'Ehh, coba hitung lagi!'
  } else if (valueNumber >= 50000) {
    return 'Kalkulator ini ga bisa ngitung segitu banyak!'
  } else if (valueNumber < 0) {
    return 'Minus ga ada di kalkulator ini!'
  }
  else {
    return value
  }
}

export default handleResult