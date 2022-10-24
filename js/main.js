//1.Ciclo "for" per generare numeri da 1 a 100
//2. Trovare tutti i numeri multipli di 3, 5 e 15
//3.Stampare ai multipli di 3 "Fizz", ai multiplti di 5 "Buzz"  ai multipli sia di 3 e di 5 "FizzBuzz"
"use script"
//1.Ciclo "for" per generare numeri da 1 a 100
const numberContainer=document.querySelector(".container");
for (let i = 1; i<=100;i++){
    const numberBox= document.createElement('div');
    if (i % 15 === 0){
        numberBox.innerHTML= "fizzbuzz";
        numberBox.classList.add("fizzbuzz");
        numberContainer.append(numberBox);
        console.log("fizzbuzz");
    }else if(i % 3 === 0){
        numberBox.innerHTML= "fizz";
        numberBox.classList.add("fizz");
        numberContainer.append(numberBox);
        console.log("fizz");
    }else if(i % 5 === 0){
        numberBox.innerHTML= "buzz";
        numberBox.classList.add("buzz");
        numberContainer.append(numberBox);
        console.log("buzz");
    }else{
        numberBox.innerHTML= i;
        numberBox.classList.remove("fizzbuzz","buzz","fizz");
        numberContainer.append(numberBox);
        console.log(i);
    } 
}

