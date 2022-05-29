function zooShop(input) {
    let dogFood = Number(input[0]) * 2.50;
    let catFood = Number(input[1]) * 4;
    let final = catFood + dogFood;
    console.log(`${final} lv.`);
   }
   zooShop(["5", "4"]);