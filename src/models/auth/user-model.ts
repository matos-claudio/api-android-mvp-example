export interface IUser {
  username: string;
  password: string;
}

const mockUser: IUser = {
  username: "user",
  password: "1234",
};

export const authenticate = (username: string, password: string): boolean => {
  return username === mockUser.username && password === mockUser.password;
};
