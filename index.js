// Write your solution in this file!

//employee object
const employee = {
    name: "Radman",
    address: "Turkey"
}

// function makes a copy of the object and make the change in the new object's value of the key
function updateEmployeeWithKeyAndValue(object, key, value){
    const newEmployee = {...object}
    newEmployee[key] = value;
    return newEmployee
}
//console.log(employee)
//console.log(updateEmployeeWithKeyAndValue(employee, "name", "turan"))

// make the change in the value of the key of the orginal object
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key] = value
    return object
}
//console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Ekin"))
//console.log(employee)

// create a copy of the parameter object and delete a key from the copy object
function deleteFromEmployeeByKey(object, key) {
    const newEmployee = {...object}
    delete newEmployee[key]
    return newEmployee
}
//console.log(deleteFromEmployeeByKey(employee, "name"))
//console.log(employee)

// this function delete a key from the parameter object
function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key]
    return object;
}
//console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"))
//console.log(employee)