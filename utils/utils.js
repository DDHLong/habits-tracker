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

export function formatTime(hour, minute) {
  // Convert hour and minute to strings
  hour = hour.toString();
  minute = minute.toString();

  // Add leading zero if necessary
  if (hour.length === 1) {
    hour = "0" + hour;
  }

  if (minute.length === 1) {
    minute = "0" + minute;
  }

  // Return the formatted time
  return `${hour}:${minute}`;
}
