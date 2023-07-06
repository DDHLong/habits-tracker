export function cb(arr) {
  const combinedObject = {};

  for (let i = 0; i < arr.length; i++) {
    const currentObj = arr[i];

    for (let key in currentObj) {
      if (currentObj.hasOwnProperty(key)) {
        combinedObject[key] = currentObj[key];
      }
    }
  }

  return combinedObject;
}
