var number = prompt("enter a number");
console.log(number)

var arrayString = number.split("");
console.log(arrayString)

var finalCount = []

for (i = 0; i < (number.length); i++) {
    if (i+1 < number.length && Number(arrayString[i]) % 2 === 0 && Number(arrayString[i+1]) % 2 === 0 ) 
    	{
    	finalCount.push(arrayString[i] + "-") }
    else
    	{
    	finalCount.push(arrayString[i])
    	};
    }

 console.log(finalCount);

 console.log(finalCount.join(""));