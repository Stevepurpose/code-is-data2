# substitutions
 still demonstrating how coding is substitutions and moving data around
 we have a `company` object with and array of `people` ,we then create
 a `candidate` object whose values will be filled with different input field
 values. 
 our aim is to replace one of the persons array with the entered candidate
 if his id value matches that of a person in the array. So to achieve this
 we iterate the `people` array with the `forEach` method and if 
 `person.id==candidate.id` we use the `Object.assign` to make a shallow
 copy of the `candidate`to the `person` . we then output the updated people
 array on our webpage.

