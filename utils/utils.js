
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getTodayDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const hour = String(today.getHours()).padStart(2, '0');
  const minute = String(today.getMinutes()).padStart(2, '0');
  const second = String(today.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}