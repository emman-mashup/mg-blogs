export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type UserAPIResponse = {
  id: string;
  type: string;

  attributes: User;
};
