"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/backend-api/authApi";
import { BaseInput } from "@/components/ui/Input/Input";
import classNames from "classnames";

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.register(formData);
      router.push("/auth/login");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Не известная ошибка, обратитесь в поддержку");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-xl font-bold mb-3">Регистрация</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
        <BaseInput
          label="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required={true}
        />
        <BaseInput
          label="Имя пользователя"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required={true}
        />
        <BaseInput
          label="Имя"
          type="text"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required={true}
        />
        <BaseInput
          label="Фамилия"
          type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required={true}
        />
        <BaseInput
          label="Пароль"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required={true}
        />
        <div className="flex items-center justify-end mt-4">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Зарегистрироваться
          </button>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <p className="text-gray-400">Если у вас уже есть аккаунт</p>
          <button
            onClick={() => router.push("/auth/login")}
            className="text-gray-700 font-bold border-b border-transparent hover:border-b hover:border-gray-700 transition-all duration-150 ease-in-out"
          >
            Войти
          </button>
        </div>
      </form>
      {error && <div className="text-red-500 text-xs italic mb-4">{error}</div>}
    </div>
  );
};

export default RegisterForm;
