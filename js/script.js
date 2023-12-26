"use strict";
 alert("salom")

// const array ={
//     age: 24,
//     jacket: "black",
//     isLong : false

// }


// console.log(array.age);


// const place= confirm("Are you men?");

// if(place==true){
//     console.log("haha");
// }


// const currentPlace = prompt("Qayerdasan" ," Xorazm");

// const age = prompt("H o a y?");
// console.log(typeof(age));

// const rang = [];

// rang[0]=prompt("1-rang "," ");
// rang[1]=prompt("2-rang " ,"red")

// console.log(rang); 

// const follower = prompt("qaysi ", "xojaniiyozov")

// console.log("https://instagram.com/"+follower);

// console.log(`https://instagram.com/${follower}`);

"use strict"
const numberOFSerias = prompt("nechta serial ko'rdingiz? "," 3");

const seriasDB={
    count:numberOFSerias,
    series:{},
    actors:{},
    genres:[],
    privat: false
}

const savol1= prompt("ohigi marta qaysi serailmni koridngiz?"," dsfdedg"),
 baho1= prompt("nechi","5"),
 savol2= prompt("ohigi marta qaysi serailmni koridngiz?"," dsfdedg"),
baho2= prompt("nechi","4");

// seriasDB.series={
//     savol1:baho1,
//     savol2:baho2
// }



seriasDB.series[savol1]=baho1;
seriasDB.series[savol2]=baho2; 

console.log(seriasDB);

