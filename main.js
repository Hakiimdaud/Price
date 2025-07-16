

// const min = document.querySelector(".min");
// const plus = document.querySelector(".plus")
// const one = document.querySelector(".one")
// const count = document.querySelector(".count")

// let Add =1
// let Subt =1

// let starvalue =1;
// const price = 600.75;


// plus.addEventListener("click",() =>{
//     Add ++;
//     one.innerHTML= Add
//     starvalue ++
//     count.innerHTML = "$" + starvalue * price

// })
// min.addEventListener("click",() =>{
//     Subt --;
//     one.innerHTML= Subt
//     starvalue --
//     count.innerHTML = "$" + starvalue * price
  
// })




const min = document.querySelector(".min");
const plus = document.querySelector(".plus");
const one = document.querySelector(".one");
const count = document.querySelector(".count");

let starvalue = 1;
const price = 600.75;


one.innerHTML = starvalue;
count.innerHTML = "$" + (starvalue * price);

plus.addEventListener("click", () => {
    starvalue++;
    one.innerHTML = starvalue;
    count.innerHTML = "$" + (starvalue * price);
});

min.addEventListener("click", () => {
    if (starvalue > 1) { 
        starvalue--;
        one.innerHTML = starvalue;
        count.innerHTML = "$" + (starvalue * price);
    }
});
