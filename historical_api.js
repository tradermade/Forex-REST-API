var requestOptions = {
method : 'GET',
redirect : 'follow'
};

fetch( 'https://marketdata.tradermade.com/api/v1/historical?currency=EURUSD%2CGBPUSD&date=2019-10-09&api_key=api_key', requestOptions)
.then(response => response.text())
.then(result =>  console.log(result))
.catch(error =>  console.log( 'error', error));
