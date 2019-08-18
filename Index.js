let primeira=[-1,-7,1,5,-5,0];
let segunda=[4,6,7];

function calculo(numero){
  let quantidade=100000;
  let i;
  for (i=0;i<numero.length;i++){
    if (numero[i]<quantidade){
       quantidade=numero[i]
    }
  }
  return quantidade;
}
console.log(calculo(primeira))