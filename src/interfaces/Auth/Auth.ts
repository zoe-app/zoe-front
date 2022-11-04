export interface LoginPayload {
  token: string;
  userId: string;
}

export interface RegisterDto {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  lastName: string;
  email: string;
  points: number;
  id: string;
}
