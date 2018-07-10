var button_contentbl1 = document.querySelector('n1');
button_contentbl1.addEventListener('click',updateName1);
function updateName1() {
  var name = prompt('Enter name');
  button_contentbl1.textContent=name;
}

var button_contentbl2 = document.querySelector('s1');
button_contentbl2.addEventListener('click',updateScore1);
function updateScore1() {
  var score1 = prompt('Enter Score');
  button_contentbl2.textContent=score1;
}

var button_contentred1 = document.querySelector('n2');
button_contentred1.addEventListener('click',updateName2);
function updateName2() {
  var name = prompt('Enter name');
  button_contentred1.textContent=name;
}

var button_contentred2 = document.querySelector('s2');
button_contentred2.addEventListener('click',updateScore2);
function updateScore2() {
  var score2 = prompt('Enter score');
  button_contentred2.textContent=score2;
}

var button_contentgr1 = document.querySelector('n3');
button_contentgr1.addEventListener('click',updateName3);
function updateName3() {
  var name = prompt('Enter name');
  button_contentgr1.textContent=name;
}

var button_contentgr2 = document.querySelector('s3');
button_contentgr2.addEventListener('click',updateScore3);
function updateScore3() {
  var score3 = prompt('Enter score');
  button_contentgr2.textContent=score3;
}
updateScore1();
updateScore2();
updateScore3();
var avg = (Number(score1) + Number(score2) + Number(score3))/3);
var button_contentavg = document.querySelector('avg');
button_contentavg.addEventListener('click',updateAverage);
function calcAverage() {
  var average = alert(avg)
}





