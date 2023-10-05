console.log("javascript internal property")
console.log("explicit property create")
let person = {};
let explicitProperty = Object.defineProperty(person,"name",{
    value:"Jahid"
})
console.log(explicitProperty)
console.log("property natural behavior change")
Object.defineProperty(person,"name",{
    configurable:false,
    value:"Jahid"
})
console.log("property not change")
person.name = "Akash"
console.log("property not delete")
delete person.name