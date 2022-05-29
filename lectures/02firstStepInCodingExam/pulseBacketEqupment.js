function bascet(input) {
    let yearTax = Number(input[0]);
    let basBoots = yearTax * 0.40;
   let sumBot = yearTax - basBoots;
    let basSet = sumBot * 0.20;
   let sumSet = sumBot - basSet;
    let basBall = sumSet / 4;
    let basAcc = basBall / 5;
  let finish = yearTax + sumBot + sumSet + basBall + basAcc;
   console.log(finish);
   }
   bascet(["550"]);