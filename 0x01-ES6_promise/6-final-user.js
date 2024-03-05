import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    const arr = [];
    for (const result of results) {
      arr.push({ status: result.status, value: result.value || result.reason });
    }
    return arr;
  });
}
