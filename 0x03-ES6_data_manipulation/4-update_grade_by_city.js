export default function updateStudentGradeByCity(arrayOfObjects, city, newGrades) {
  return arrayOfObjects.filter((object) => object.location === city)
    .map((object) => {
      const matchingGrade = newGrades.find((grade) => grade.studentId === object.id);
      return { ...object, grade: matchingGrade ? matchingGrade.grade : 'N/A' };
    });
}
