console.log("javascript internal property")
console.log("explicit property create")
var person = {};
var explicitProperty = Object.defineProperty(person,"name",{
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
console.log("Accessor properties")
console.log("explicit properties")
var person = {
    year_:2023,
    editor:1
};
Object.defineProperty(person,"year",{
    get(){
        return this.year_;
    },
    set(newValue){
        
        if(newValue > 2023){
            this.year_ = newValue;
            this.editor += newValue - 2023
        }
    }
})
person.year = 2024
console.log(person)
console.log("internal properties operation in multiple properties")
var person = {};
Object.defineProperties(person,{
   name:{
    configurable:false,
    value:"Jahid"
   },
   phone:{
    writable:false,
    value:2345
   }
})
person.name = "akash";
person.phone = 6789;
console.log(person)
console.log("internal properties operation checker")
var person = {};
Object.defineProperties(person,{
   name:{
    configurable:false,
    value:"Jahid"
   },
   phone:{
    writable:false,
    value:2345
   }
})
console.log("internal properties operation checker for one property")
let descriptor = Object.getOwnPropertyDescriptor(person,"name")
console.log(descriptor.configurable)
console.log("internal properties operation checker for multiple property")
let descriptor2 = Object.getOwnPropertyDescriptors(person)
console.log(descriptor2)
