function isEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function containsUppercase(password: string) {
  const uppercaseRegex = /[A-Z]/;
  return uppercaseRegex.test(password);
}

function containsLowercase(password: string) {
  const lowercaseRegex = /[a-z]/;
  return lowercaseRegex.test(password);
}

function containsNumber(password: string) {
  const numberRegex = /[0-9]/;
  return numberRegex.test(password);
}

function containsSpecialCharacter(password: string) {
  const specialCharacterRegex = /[^A-Za-z0-9]/;
  return specialCharacterRegex.test(password);
}

export {
  isEmail,
  containsUppercase,
  containsLowercase,
  containsNumber,
  containsSpecialCharacter,
};
