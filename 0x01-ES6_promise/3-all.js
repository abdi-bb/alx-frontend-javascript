import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((successResponse) => {
      console.log(`${successResponse[0].body} ${successResponse[1].firstName} ${successResponse[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
