import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

export class BaseApi {
  protected api: AxiosInstance;

  constructor() {
    const baseURL =
      process.env.NEXT_PUBLIC_DEVELOPMENT_HOST || "http://localhost:8000";
    this.api = axios.create({
      baseURL,
      withCredentials: true,
    });
  }

  /**
   * Объединение заголовков.
   * @param headers Дополнительные заголовки.
   * @returns Итоговые заголовки.
   */
  private mergeHeaders(
    headers?: Record<string, string>,
  ): Record<string, string> {
    const defaultHeaders: Record<string, string> = {
      "Content-Type": "application/json",
    };

    const token = localStorage.getItem("userToken");
    if (token) {
      defaultHeaders.Authorization = `Token ${token}`;
    }
    // Сначала в конечный headers попадет все что находиться
    // в defaultHeaders, потом все что в headers, причем одинаковые ключи
    // будут перезаписаны значением из headers. Такие как Content-Type например
    return { ...defaultHeaders, ...headers };
  }

  /**
   * Метод для выполнения POST-запроса.
   * @param url URL для запроса.
   * @param data Тело запроса.
   * @param headers Дополнительные заголовки.
   */
  protected async post<D, R>(
    url: string,
    data: D,
    headers?: Record<string, string>,
  ): Promise<R> {
    const config: AxiosRequestConfig = {
      headers: this.mergeHeaders(headers),
    };
    const response = await this.api.post<R>(url, data, config);
    return response.data;
  }

  /**
   * Метод для выполнения GET-запроса.
   * @param url URL для запроса.
   * @param headers Дополнительные заголовки.
   */
  protected async get<R>(
    url: string,
    headers?: Record<string, string>,
  ): Promise<R> {
    const config: AxiosRequestConfig = {
      headers: this.mergeHeaders(headers),
    };
    const response = await this.api.get<R>(url, config);
    return response.data;
  }
  protected handleError = (error: AxiosError) => {
    const simpleError = {
      status: error.status,
      message: error.message,
      data: error.response?.data,
    };
    return simpleError;
  };
}
