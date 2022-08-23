type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string, password: string};

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (user.username === sentValue.username) && (user.password === sentValue.password);
}

const bdUser = { username: 'erickson', password: '123455551123'}
const sentUser = { username: 'erickso', password: '123455551123'}
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
