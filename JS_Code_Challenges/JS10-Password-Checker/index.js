function passwordChecker(password) {
  // Check for minimum length
  if (password.length < 8) {
    return false;
  }

  // Check for lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Check for uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Check for digit
  if (!/\d/.test(password)) {
    return false;
  }

  // Check for special character
  if (!/[^A-Za-z0-9]/.test(password)) {
    return false;
  }

  return true;
}

// Test the password checker
console.log(passwordChecker("Abc123!@")); // true
console.log(passwordChecker("1234abcd")); // false
console.log(passwordChecker("Abcdefg1")); // false
console.log(passwordChecker("Abcdefg1$")); // true