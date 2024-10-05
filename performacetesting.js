const t1=performance.now()

for(let i=1 ; i<=10 ; i++){
     let e = document.createElement('p')
     e.textContent="i am para "+ i
     document.body.appendChild(e)
     
}
const t2= performance.now()
console.log("the time for frst one "+ (t2-t1))


const t3 = performance.now();
let d = document.createElement('div')
for(let i=1 ; i<=10; i++){
   
    let e = document.createElement('p')
    e.textContent="i am para "+ i
    d.appendChild(e)

}
document.body.appendChild(d)
const t4= performance.now()

console.log("the time for scnd one "+ (t4-t3))


//fragment 
const t5= performance.now()
let frag = document.createDocumentFragment();
for(let i=1 ; i<=10; i++){
   
    let e = document.createElement('p')
    e.textContent="i am para "+ i
    const t6= performance.now()
    // now repaint and no reflow for below line
    frag.appendChild(e)
    //console.log("the time in loop frag loop one "+ (t6-t5))

}
const t7= performance.now()
console.log("the time for frag loop one "+ (t7-t5))
document.body.appendChild(frag)
const t8= performance.now()
console.log("the time for frangment whole one "+ (t8-t5))