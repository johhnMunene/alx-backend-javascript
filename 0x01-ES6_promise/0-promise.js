export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // You can make your API call or perform any asynchronous operation here
        
        // For example, let's simulate an API call with a setTimeout
        setTimeout(() => {
            // Simulating a successful response
            const responseData = { message: "Successfully fetched data from API" };
            
            // Resolve the promise with the data
            resolve(responseData);
            
            // If there's an error, you can reject the promise
            // reject(new Error("Failed to fetch data from API"));
        }, 2000); // Simulating a 2-second delay
    });
}
