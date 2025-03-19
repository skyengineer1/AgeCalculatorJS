// Function declaration
function calculateAge(birthYear) {
  return 2025 - birthYear;
}

const age1 = calculateAge(2001);
console.log(age1);

// Function expression
const age2 = function calculateAge(birthYear) {
  return 2025 - birthYear;
}

console.log(age2(2001));
