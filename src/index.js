module.exports = function solveEquation(equation) {
  var equationArr=equation.split(' ');
  console.log(equationArr);
  var a=equationArr[0];
  var b=equationArr[4];
  var c=equationArr[8];
    if(equationArr[3]=='-'){
    b=-b;
    }
    if(equationArr[7]=='-'){
    c=-c;
    }
  var d = b*b-4*a*c;
  var x1=(-b+Math.sqrt(d))/2/a;
  var x2=(-b-Math.sqrt(d))/2/a;
  x1=Math.round(x1);
  x2=Math.round(x2);
  var result=[x1,x2];
  if(x1>x2){
    result=[x2,x1];
  }
  return result;
  
}
