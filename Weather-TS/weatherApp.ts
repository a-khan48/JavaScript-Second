const API_Key: string = "7a01ab910036810cd95b8d212861cc2a";
const zipSubmit = document.getElementById("zipSubmit")!;
const displayData = document.getElementById("display")!;
const date = Date.now();
const currentDate = new Date(date);
const zipcodeEnter = document.getElementById("zipcodeEnter")! as HTMLInputElement;

zipSubmit.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();
  const zipcode = (document.getElementById("zipcode") as HTMLInputElement).value;   
  let fetchURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${API_Key}&units=imperial`;
  fetch(fetchURL)
    .then((response: Response) => response.json())
    .then((data: any) => {
      let fetchData = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${API_Key}&units=imperial`;
      document.querySelector('#cityData')!.innerHTML = "City: " + data.name;
      document.querySelector('#dateData')!.innerHTML = "Date: " + currentDate.toDateString();
      document.querySelector('#tempData')!.innerHTML = "Temperature: " + Math.round(data.main.temp) + '°F';
      document.querySelector('#hiLoData')!.innerHTML = 'High of ' + Math.round(data.main.temp_max) + '°F' + ' and a low of ' + Math.round(data.main.temp_min) + '°F.';
      document.querySelector('#conditionData')!.innerHTML = "Condition: " + data.weather[0].main;
      document.getElementById("head")!.style.display = "none"; 
      displayData.style.display = "block"; 
    })
})

zipcodeEnter.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    const zipcode = zipcodeEnter.value;
    let fetchURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${API_Key}&units=imperial`;
    fetch(fetchURL)
      .then((response: Response) => response.json())
      .then((data: any) => {
        let fetchData = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${API_Key}&units=imperial`;
        document.querySelector('#cityData')!.innerHTML = "City: " + data.name;
        document.querySelector('#dateData')!.innerHTML = "Date: " + currentDate.toDateString();
        document.querySelector('#tempData')!.innerHTML = "Temperature: " + Math.round(data.main.temp) + '°F';
        document.querySelector('#hiLoData')!.innerHTML = 'High of ' + Math.round(data.main.temp_max) + '°F' + ' and a low of ' + Math.round(data.main.temp_min) + '°F.';
        document.querySelector('#conditionData')!.innerHTML = "Condition: " + data.weather[0].main;
        document.getElementById("head")!.style.display = "none";
        displayData.style.display = "block";
      })
  }
});

  
  