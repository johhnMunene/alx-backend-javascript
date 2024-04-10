export default function getResponseFromAPI () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const responseData = { message: 'Successfully fetched data from API' }
      resolve(responseData)
    }, 2000)
  })
}
