// array with the html spans that represent bars
const bars = Array.from(document.querySelectorAll(".bar"));

// variable to store the fecthed data
let data;

// get data from json file via fecht
const getJsonData = async()=>{
   let promResponse = await fetch("data.json");
   let jsonData = await promResponse.json();
   
   return Array.from(jsonData);
 };

 // asign the height of each bar according to the spending of each day
 const setHeightByAmount = (data)=>{
   let highestAmount = Math.max(...data.map(dayData=>{
      return dayData.amount}));
   
      bars.forEach(bar=>{
         bar.style.height = `${(data.find(dayData=>{
            return bar.id == dayData.day}).amount/highestAmount)*75}%`
      })
 }
 // get the current day and change the color of its respective bar
const setColorOfCurrenDay = ()=>{
   date = new Date();
   bars[date.getDay()].classList.add("current-day");
}

// calling of the functions
(async()=>{
   data = await getJsonData();
   setHeightByAmount(data);
   console.log(data);
   setColorOfCurrenDay();

})();   


