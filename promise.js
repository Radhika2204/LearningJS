

let frstprms = new Promise((resolve, reject)=>{
    setTimeout(()=>{console.log("hi i am fun")}, 10000)
    //resolve("resolved");
    reject("rejected")
})

frstprms.then( (m)=>{
    console.log("i am in frst then")
    return "yes";}
).then((message)=>{
    
    console.log("i am in second then" + message)}

).catch((ex)=>{
    console.log(ex)
}).finally(()=>{
    console.log("i am in finally")
})

//promise all

let p1= new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve("p1 resolved")}, 1000)
})

let p2= new Promise((resolve, reject)=>{
    setTimeout(reject, 1000, "p2")
})

Promise.all([p1,p2]).then((message)=>{
 console.log(message);
}).catch((m)=>{
    console.log(m)
}).finally(()=>{
    console.log("i am in finally")
})