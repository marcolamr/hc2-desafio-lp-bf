(function () {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let targetDate = 'Nov 26, 2021 23:59:00';
  let countDown = new Date(targetDate).getTime();

  let x = setInterval(function() {    
    let now = new Date().getTime();
    let distance = countDown - now;
    let digits = Math.floor(distance / (day)).toString().length;

    document.getElementById('days').innerText = ((digits > 2 ? '00' : '0') + Math.floor(distance / (day))).slice(digits > 2 ? -3 : -2);
    document.getElementById('hours').innerText = ('0' + Math.floor((distance % (day)) / (hour))).slice(-2);
    document.getElementById('minutes').innerText = ('0' + Math.floor((distance % (hour)) / (minute))).slice(-2);

    if (distance < 0) {
      document.getElementById('headline').innerText = "Chegou!";
      document.getElementById("days").innerText = '00';
      document.getElementById("hours").innerText = '00';
      document.getElementById("minutes").innerText = '00';

      clearInterval(x);
    }
  }, 1000)
}());