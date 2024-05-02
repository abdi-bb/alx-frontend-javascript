export default function cleanSet(set, startString) {
  const cleanedValues = [];

  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const value of set) {
    if (value && value.startsWith(startString)) {
      cleanedValues.push(value.slice(startString.length));
    }
  }

  return cleanedValues.join('-');
}
