
// fetch(' https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=5aa91ff3e6e5909b14b21886896d552d')
// .then(response => response.json())
// .then((cities) => {
//     console.log(cities);
//     console.log(cities.weather);

   let buttonToShowWeather = document.getElementById('btn');
   let area = document.getElementById('area');
  
   buttonToShowWeather.addEventListener("click", () => {
    let city = document.getElementById('city').value;
    console.log(city);
    if(city != ''){
    //fetch(' https://api.openweathermap.org/data/2.5/weather?q=denmark&appid=5aa91ff3e6e5909b14b21886896d552d')
      fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city +'&units=metric' + '&APPID=5aa91ff3e6e5909b14b21886896d552d')
      .then(response => response.json())
      .then((cities) => {
          //console.log(cities.weather[0]);
          
          area.innerHTML = ("<h5><table><tr><th> City Name: </th><td>"+city+"</td></tr><tr><th>Weather :</th><td>" + cities.weather[0].main + 
                            "</td></tr><tr><th> Description: </th><td><img src='http://openweathermap.org/img/w/"+ cities.weather[0].icon+".png'/></td><td>" + cities.weather[0].description +
                            "</td></tr><tr><th> Wind Speed: </th><td>" + cities.wind.speed + 
                            "</td></tr><tr><th> Wind Degree: </th><td>" + cities.wind.deg + 
                            "</td></tr><tr><th> Clouds Measure: </th><td>" + cities.clouds.all+ 
                            "</td></tr><tr><th> Temprature: </th><td>" + cities.main.temp +"</td></tr></table></h5>");
                      
         
     }
         

     

   )}});





//  let buttonToShowWeather = document.getElementById('btn');
//    buttonToShowWeather.addEventListener("click", () => {
//       let city = document.getElementById('city').value;

//       if(!city !== ''){
//          ajax({
//             url:'https://api.openweathermap.org/data/2.5/weather?q=' + city +'&units=metric' + '&APPID=5aa91ff3e6e5909b14b21886896d552d',
//             type: "GET",
//             datatype: "jsonp",
//             success:function(data){
//                let area = show(data);
//                document.getElementById('area').innerHTML=  area; 
              
//             }

//          }) 
//       }
//    });
//    function show(data){
//       return "<h3>"+ data.weather[0].main +"</h3>";
  