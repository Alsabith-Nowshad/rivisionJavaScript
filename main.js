

Object.assign===================================================


obj1 ={
    name : "alsabith",
    place : "ktm"
}


obj2 = {
    name:"alsabith nowshad",
    age : "18",
    postions : "CEO"
}


hai = Object.assign(obj1,obj2)


console.log(hai);


object.create============================================================

let newObject = Object.create(obj)

obj.name = "alsabith"

console.log(obj);




object.entries==============================================================

let object1 = {
    name:"alsabith",
    age:18
}

let obejct2 = {
    place:"ktm",
    position :"CEO"
}

let arrayObj = Object.entries(object1)

console.log(arrayObj);


object.fromEntries=====================================================

let object1 = [
    ['name' ,'alsabith'],
    ['age', 18]
]

let arrayObj = Object.fromEntries(object1)

console.log(arrayObj);


object.value=================================================

let object1 = {
    name:"alsabith",
    age:18
}

console.log(Object.values(object1));

