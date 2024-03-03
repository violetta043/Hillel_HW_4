/////1 
let string = "";

for(let i = 20; i <= 30; i+=0.5) {
  string += `${i} `;
  
}
console.log(string);

/////2 
for(let i = 0; i<= 100;  i += 10){
  if(i !== 0){
    const dol = 27;
    console.log(`${i}$ = ${i * dol} grn `);
  }
}

////3
const n = 36; 

for(let i = 1; i <=n && i<=100; i++){
  let square = i * i; 
  if(square <= n){
    console.log(i);
  }
}

///////////4
const num = 13; 
let isPrime = true;

if(num <= 1){
  isPrime = false;
}else{
  for(let i=2; i * i <= num; i++){
    if(num % i === 0){
      isPrime = false; 
      break;
    }
  }
}

console.log(isPrime);

///////5
const num = 81;
let raising = false; 

let i = 1;
while(i <= num){
  if(i === num ){
    raising = true; 
    break; 
  }
   i*=3;
}
console.log(raising);