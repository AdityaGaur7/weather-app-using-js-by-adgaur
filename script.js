const apikey ="4fc6b5ee81988a4611f706919d9b3593";
const apilink = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


// const search1 = document.querySelector('.formfill input');
// const button1 = document.getElementById("btn");


const images =["img/clouds.png","img/clear.png","img/rainy.png","img/haze.png","img/sunny.png",

"img/stormy.png","img/sun-rain.png","img/thunder.png","img/clouds.png"];

async function weather(ct){
	let response = await fetch(apilink + ct + `&appid=${apikey}`);
	let data = await response.json();
	console.log(data);
	
	

	document.getElementById("cityname").innerHTML=data.name;
	// document.getElementById("type").innerHTML=data.weather[0].main;
	
	

	document.getElementById("temp").innerHTML=Math.round(data.main.temp) + '°C';
	document.getElementById("wind").innerHTML=data.wind.speed + 'km/hr';
	document.getElementById("humid").innerHTML=data.main.humidity + '%';

	document.querySelector(".box").style.display="block";
// if(data.weather[0].main=="Clear")


if(data.weather[0].main=="Clouds"){
	document.querySelector(".w img").src=images[4];

}else if(data.weather[0].main=="Clear"){
	document.querySelector(".w img").src=images[1];

}else if(data.weather[0].main=="Rain"){
	document.querySelector(".w img").src=images[2];

}else if(data.weather[0].main=="Haze"){
	document.querySelector(".w img").src=images[3];

}

 
}


let f1=()=>{
	weather(city.value);


}













