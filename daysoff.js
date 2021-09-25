// customizable weekplan
const dayOff = function(day) {
  if(day === 'Monday') {
    return true }
  else {
    return false }  
}

dayOff('Tuesday')
console.log(dayOff('Tuesday'))

// arrow function
const dayOff = (day) => {
  if(day === 'Monday') {
    return true }
  else {
    return false }  
}

dayOff('Friday')
console.log(dayOff('Friday'))

// concise body
const dayOff = day => day === 'Wednesday' ? true : false; 
// removed return bc we have only one line
// concise body + ternary operator