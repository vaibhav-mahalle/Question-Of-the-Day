//question 1 power function 
const power = (a,b) => {
  if(b<0)
    return `error enter positive number`
  if(b>1)
    return a*power(a,b-1);
  else 
    return a;
  
}

console.log(power(2,3));

// question 2 array length function
const arrayLength = (array) => 
  {
    let index = 0;
    while(array[index]){
      index++;
    }
    return index;
  }

let arrayOfNumbers = [1,5,3,7,8];

console.log(arrayLength(arrayOfNumbers));