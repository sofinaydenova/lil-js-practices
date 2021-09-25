// customizable weekplan
const dayOff = function(day) {
  if(day === 'Monday') {
    return true }
  else {
    return false }  
}

dayOff('Tuesday')
console.log(dayOff('Tuesday'))