/* 1. Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.
 */

function century(year) {
  let str = String(year)
  if(year % 100 === 0) {
    return year / 100
  }
  else{
    return Number(str.slice(0, -2)) + 1
  }
}

console.log(century(1820))
console.log(century(1000))