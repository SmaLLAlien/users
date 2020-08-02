export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  month?: string;
}

export interface IMonth {
  month: string;
  usersQuantity: number;
}
