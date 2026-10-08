const api ="https://api.open-meteo.com/v1/forecast?latitude=25.3960&longitude=68.3570&current=temperature,relative_humidity_2m,wind_speed_10m&timezone=Asia%2FKarachi";

const temp = document.getElementById("temp")
const time = document.getElementById("time")



async function data(){
    const response = await fetch(api);

    const json = await response.json();

    const temperature2 = json.current.temperature;

    const time2 = json.current.time;

    temp.innerText = temperature2;
    time.innerText = time2;
}
data()