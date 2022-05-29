function foodDel(input) {
    let chickenMenu = Number(input[0]) * 10.35;
    let fishMenu = Number(input[1]) * 12.40;
    let veganMenu = Number(input[2]) * 8.15;
    let sumMenu = chickenMenu + fishMenu + veganMenu;
    let des = sumMenu * 0.20;
    let finish = sumMenu + des + 2.50;
   console.log(finish);
   }
   foodDel(["9", "2", "6"]);