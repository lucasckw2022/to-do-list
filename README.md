Section A

function calculate(num){
  if(num.toString().split('').length > 1){
    let result = num.toString().split('').map(Number).reduce((a,b)=> a+b)
    return calculate(result)
  } else {
    return num
  }
}
calculate(23935198273);
