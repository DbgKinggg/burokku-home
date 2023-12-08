import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function generateHash(prefix = "") {
  return (
    (prefix === undefined ? "" : `${prefix}-`) +
    `${Math.random().toString(36).substring(2, 9)}`
  );
}

// function that will take in a string and truncate the middle part of it, the length of starting and ending part are pass in as props
// e.g. "0x1234567890abcdef" => "0x1234...cdef"
function truncateMiddle(str: string, start = 6, end = 6) {
  if (str.length <= start + end) {
    return str;
  }
  return str.slice(0, start) + "..." + str.slice(str.length - end);
}

export {cn, generateHash, truncateMiddle};
