/* 4. Create a parser to interpret and execute the Deadfish language.

Deadfish operates on a single value in memory, which is initially set to 0.

It uses four single-character commands:

i: Increment the value
d: Decrement the value
s: Square the value
o: Output the value to a result array
All other instructions are no-ops and have no effect.

Examples
Program "iiisdoso" should return numbers [8, 64].
Program "iiisdosodddddiso" should return numbers [8, 64, 3600].
*/

function parse( data ) {
  let value = 0
  let result = []

  for(let a = 0;a < data.length;a++) {
    if(data[a] === "i") {
      value++
    } 
    else if(data[a] === "d") {
      value--
    } 
    else if(data[a] === "s") {
      value *= value
    } 
    else if(data[a] === "o") {
      result.push(value)
    }
  }

  return result;
}

console.log(parse("iiisxxxdoso"))