// Write your solution in this file!

const employee = {
    name: "name",
    streetAddress: "address",
};

function updateEmployeeWithKeyAndValue(obj, key, value){
const newObj = {...obj};
newObj[key] = value;
return newObj
}
updateEmployeeWithkeyAndValue (employee, "name", "Newddress");


function destructivelyUpdateEmployeeWithKeyAndValue (a, key, value){
    employee[key] = value;
    return a
}
destructivelyUpdateEmployeeWithKeyAndValue (Employee, "newName", "newAddress");

function deleteFromEmployeeByKey (obj, key){
const newObj = {...obj};
delete newObj.name;
return newObj
}
deleteFromEmployeeByKey (employee, "Sam",);

function destructivelyDeleteFromEmployeeByKey (obj, key){
delete obj.name;
return obj
}
destructivelyDeleteFromEmployeeByKey (employee, "name");



