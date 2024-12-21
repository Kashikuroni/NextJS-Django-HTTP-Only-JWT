export interface SigninData {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
  username: string;
  first_name: string;
  last_name: string;
}

interface SuccessResponse {
  message: string;
}

interface ErrorResponse {
  detail: string; // Django часто возвращает это поле для ошибок
  [key: string]: string | string[]; // Возможны другие поля с деталями ошибок
}

export type ApiResponse = SuccessResponse | ErrorResponse | unknown;

export interface ChangePassword {
  current_password: string;
  new_password: string;
}
