var comum = 0; 
var por5 = 0;
var por3 = 0;
for(numero=1;numero<=100;numero++){
	if(numero % 3 == 0 && numero % 5 == 0){
		console.log("FizzBuzz");
		comum+=1;
	}
	else if(numero % 3 == 0){
		console.log("Fizz");
		por3+=1;
	} else if(numero % 5 == 0){
		console.log("Buzz");
		por5+=1;
	}else{
		console.log(numero);
	}
	
}
console.log("FizzBuzz was logged " + comum + " times, Fizz was logged " + por3 + " times and Buzz was logged " + por5 + " times.")

