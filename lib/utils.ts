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

export {cn, generateHash};
