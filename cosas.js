console.log(document);


$btnTheme = document.querySelector("#btn-theme");

$btnTheme.addEventListener("click", (e) => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    e.target.innerText = "💪";
  } else {
    document.body.classList.add("dark-mode");
    e.target.innerText = "🤏";
  }
});


document.addEventListener("click", (e) => {
  if (!e.target.matches(`input[name = "theme"]`)) {
    return false;
  }

  $themeCSS = document.querySelector("#theme");
  $themeCSS.href = e.target.dataset.theme;
});

let timerId;

function showTime(){
  
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  

  let time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

}

function clockStart()
{
  if(!timerId){
    timerId=setInterval(showTime,1000);
  }
  showTime();
}

function clockStop()
{
  clearInterval(timerId);
  timerId = null;
}


