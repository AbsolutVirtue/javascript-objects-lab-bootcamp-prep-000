var recipes = {};

<<<<<<< HEAD
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
 var newObj = Object.assign({}, object)
 delete newObj[key]
 return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
=======
function updateObjectWithKeyAndValue(recipies, key, value){
  recipies[key] = value;
  
  return recipies;
}

function 
>>>>>>> 5047782358f2b5645f9b7999413822e60b1bde8e
