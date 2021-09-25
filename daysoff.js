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