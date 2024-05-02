export default function cleanSet(set, startString) {
  // If startString is an empty string, return an empty string
  if (startString === '') {
    return '';
  }

  // Initialize an empty string to store the result
  let result = '';

  // Iterate over each element in the set
  set.forEach((element) => {
    // Check if the element starts with the startString
    if (element.startsWith(startString)) {
      // If it does, append the substring after the startString to the result string
      result += `${element.substring(startString.length)}-`;
    }
  });

  // Remove the trailing '-' and return the result
  return result.slice(0, -1);
}
