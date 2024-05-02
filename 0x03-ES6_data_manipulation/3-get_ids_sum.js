export default function getStudentIdsSum(arrayOfObjects) {
  return arrayOfObjects.reduce((accumulator, object) => accumulator + object.id, 0);
}
