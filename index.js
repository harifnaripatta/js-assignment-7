let number = parseInt(prompt("Please enter a number between 0 and 1,000,000:"));

if (isNaN(number) || number < 0 || number > 1000000) {
  alert("Invalid number");
} else {
  let totalSum = 0;
  for (let i = 1; i <= number; i++) {
    totalSum += i;
  }

  alert(`Sum of numbers up to ${number} is ${totalSum}`);
}
