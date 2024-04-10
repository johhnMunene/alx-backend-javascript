let myPromise = new Promise(function getResponseFromAPI(myResolve,MyReject){
    myResolve();
    MyReject
});
myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
  );