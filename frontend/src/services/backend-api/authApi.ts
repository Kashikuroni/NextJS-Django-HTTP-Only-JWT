import axios from "axios";
import { BaseApi } from "./baseApi";
import * as types from "./authApi.types";

class AuthApi extends BaseApi {
  /**
   * Функция регистрации пользователя в системе.
   */
  public async login(data: types.SigninData): Promise<any> {
    try {
      const response = await this.post("/api/auth/v1/login/", data);
      return response;
    } catch (error) {
      return error;
    }
  }
  /**
   * Проверка токена на валидность.
   */
  public async checkToken(): Promise<any> {
    // try {
    await this.get("/api/auth/v1/users/");
    // } catch (error) {
    //   if (axios.isAxiosError(error)) {
    //     if (error.status == 401) {
    //       throw new Error("Unauthorized");
    //     }
    //   } else {
    //     throw new Error(`Не известная ошибка! ${error}`);
    //   }
    // }
  }
  /**
   * Функция выхода из системы с удалением токена с базы
   */
  public async logout(): Promise<any> {
    try {
      const response = await this.post("/api/auth/token/logout/", {});
      return response;
    } catch (error) {
      return error;
    }
  }

  /**
   * Функция авторизации пользователя в системе
   */
  public async register(data: types.SignupData): Promise<types.ApiResponse> {
    try {
      const response = await this.post(`api/v1/register/`, data);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.data) {
          const errorMessages = error.response.data;
          if (errorMessages.email || errorMessages.username) {
            throw new Error(
              "Указанные данные уже используются. Пожалуйста, проверьте введенные данные.",
            );
          } else {
            throw new Error(
              "Произошла ошибка. Пожалуйста, попробуйте ещё раз.",
            );
          }
        }
      }
    }
  }

  /**
   * Смена пароля.
   */
  public async changePassword(data: types.ChangePassword): Promise<any> {
    try {
      const response = await this.post("/api/users/set_password/", data);
      return response;
    } catch (error) {
      return error;
    }
  }
}

export default new AuthApi();
