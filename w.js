
const city = "Lahore";
const apiKey ="78c1c5420707c81092c314cd239c293b";
const apiUrl = `https://api.openwathermap.org/data/2.5/weather?units=metric&q=${city}`;


let promise = new Promise(async function(resolve,reject){
    const response = await fetch(apiUrl +`&appid=${apiKey}`);
    const data = await response.json();

    if(data){
        resolve(`city : ${data.name}\nTemp:${data.main.temp}C\nHumidity: ${data.main.humidity}%\nwind:${data}`);
    }
    else{
        reject("Failed to fetch data");
    }

})

promise.then((data)=>{
    console.log(data);
})
