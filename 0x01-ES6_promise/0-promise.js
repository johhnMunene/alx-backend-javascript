export default function getResponseFromAPI () {
  return new Promise((resolve, reject) => {
    // You can make your API call or perform any asynchronous operation here
    setTimeout(() => {
      const responseData = { message: 'Successfully fetched data from API' }
      resolve(responseData)
    }, 2000) // Simulating a 2-second delay
  })
}
