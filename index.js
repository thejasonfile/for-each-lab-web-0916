function iterativeLog(arr){
  arr.forEach(function(element){
    console.log(`${arr.indexOf(element)}: ${element}`);
  })
}

function iterate(callback){
  arr = [1,2,3];
  arr.forEach(callback);
  return arr
}

function doToArray(arr, callback){
  arr.forEach(callback);
}