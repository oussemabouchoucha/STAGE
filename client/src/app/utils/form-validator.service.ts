// Collection of reusable RegExps
export const regExps: { [key: string]: RegExp } = {
  str: /^[a-zA-Z]/, // Validates only strings
  num: /^\d+$/, // Validates only numbers
  email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/ // Validates email
};

// Collection of reusable error messages
export const errorMessages: { [key: string]: string } = {
  country: 'Required and only strings',
  cases: 'Required and only numbers',
  todayCases: 'Required and only numbers',
  email: 'Please enter a valid email address.'
};
