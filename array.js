let a = [3,5,6,5,2,1,4,9]

let b = [1,2,3,4,5,6,7,8]

//map
let c = b.map((index, number)=>{
    console.log(number)

    return index*number;
})
console.log(c)
//filter

let d = b.filter((number)=>{
    if(number%2==0)return true;
    return false;
})
console.log(d)

//reduce

let e = b.reduce((number, cur)=>{
    return number+cur;
},1)

console.log(e)


//foreach

d.forEach(element => {
    console.log(element)
});
// for of
for (const element of d) {
    console.log(element)
}
