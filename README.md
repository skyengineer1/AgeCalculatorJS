# 🎂 Age Calculator

This is a simple JavaScript program that calculates age based on the birth year using both function declarations and function expressions. 🕰️📅

## 🚀 Features
- Uses a function declaration to calculate age.
- Uses a function expression to achieve the same functionality.
- Demonstrates calling both functions with a sample birth year.

## 📜 Code Overview
```javascript
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
```

## 🛠️ How to Use
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/age-calculator.git
   ```
2. Open `script.js` in your favorite code editor.
3. Run the script in the browser console or Node.js.

## 📢 Output Example
```
24
24
```

## 📌 Notes
- Function declarations can be called before they are defined.
- Function expressions must be defined before calling them.
- Both methods return the same age calculation.

## 🎯 Future Enhancements
- ✅ Accept user input for birth year.
- ✅ Add support for calculating age dynamically based on the current year.
- ✅ Create a web-based interface for ease of use.

## 📜 Created by
This project was created by **Sky**. ✨

## 📜 License
This project is open-source and available under the MIT License.

---

⭐ Feel free to contribute, fork, or give a star! 🌟
