export const commafyNumber = (num) => {
    const number = String(num)
    return number.replace(/(^|[^\w.])(\d{4,})/g, ($0, $1, $2) => {
      return $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, '$&,')
    })
  }
  
  export const removeCommas = (number) => {
    console.log(number.replace(',', ''))
    return number.replace(',', '')
  }