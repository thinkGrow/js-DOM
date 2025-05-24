const person = {
    name : "hena",
    age : 10,
    country : 'BD'
}

for (let key in person){
    console.log(` keys : ${key}, value: ${person[key]}`)
}

// for (let key of Object.entries(person)){
//     console.log(key)
// }

// for (let [key,value] of Object.entries(person)){
//     console.log(key, value)
// }