function checkInput() {
  var input1 = document.getElementById('mdp1').value;
  var input2 = document.getElementById('mdp2').value;

  if(input1 === input2 && input1 + input1 != ''){
    document.getElementById('mdp1').style.border = document.getElementById('mdp2').style.border = '4px solid green';
}else {
  document.getElementById('mdp1').style.border = document.getElementById('mdp2').style.border = '4px solid red';
}
}
