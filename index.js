// Add your functions here
function map(sourceArray, callback) {
  const newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArray.push(callback(sourceArray[i]));
  }
  return newArray;
}

function reduce(sourceArray, callback, startingPoint) {
  let total;
  let i;
  if (startingPoint) {
    total = startingPoint;
    i = 0;
  } else {
    total = sourceArray[0];
    i = 1;
  }

  for (i; i < sourceArray.length; i++) {
    total = callback(sourceArray[i], total);
  }
  return total;
}