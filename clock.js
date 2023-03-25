function showTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    const time = `${hours}:${minutes}:${seconds} ${amOrPm}`;
    
    document.getElementById('clock').innerHTML = time;
  }
  
  setInterval(showTime, 1000);
  