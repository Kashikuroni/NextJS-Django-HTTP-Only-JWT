(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__0f5378._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[project]/src/services/backend-api/baseApi.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BaseApi": (()=>BaseApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [middleware] (ecmascript)");
;
class BaseApi {
    api;
    constructor(){
        const baseURL = ("TURBOPACK compile-time value", "http://localhost:8000") || "http://localhost:8000";
        this.api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].create({
            baseURL,
            withCredentials: true
        });
    }
    /**
   * Объединение заголовков.
   * @param headers Дополнительные заголовки.
   * @returns Итоговые заголовки.
   */ mergeHeaders(headers) {
        const defaultHeaders = {
            "Content-Type": "application/json"
        };
        return {
            ...defaultHeaders,
            ...headers
        };
    }
    /**
   * Метод для выполнения POST-запроса.
   * @param url URL для запроса.
   * @param data Тело запроса.
   * @param headers Дополнительные заголовки.
   */ async post(url, data, headers) {
        const config = {
            headers: this.mergeHeaders(headers)
        };
        const response = await this.api.post(url, data, config);
        return response.data;
    }
    /**
   * Метод для выполнения GET-запроса.
   * @param url URL для запроса.
   * @param headers Дополнительные заголовки.
   */ async get(url, headers) {
        const config = {
            headers: this.mergeHeaders(headers)
        };
        const response = await this.api.get(url, config);
        return response.data;
    }
    handleError = (error)=>{
        const simpleError = {
            status: error.status,
            message: error.message,
            data: error.response?.data
        };
        return simpleError;
    };
    /**
   * Executes a PUT request to the specified URL with the given data.
   *
   * @template D The type of the request payload.
   * @template R The expected type of the response data.
   * @param {string} url - The URL to send the PUT request to.
   * @param {D} [data] - The payload to be sent in the request body.
   * @param {Record<string, string>} [headers] - Optional additional headers to include in the request.
   * @returns {Promise<R>} A promise resolving to the response data of type R.
   *
   * @throws {Error} Throws an error if the request fails. The error will be formatted by `handleError`.
   */ async put(url, data, headers) {
        const config = {
            headers: this.mergeHeaders(headers)
        };
        try {
            const response = await this.api.put(url, data, config);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }
    /**
   * Executes a DELETE request to the specified URL with optional headers.
   *
   * @template R The expected type of the response data.
   * @param {string} url - The URL to send the DELETE request to.
   * @param {Record<string, string>} [headers] - Optional additional headers to include in the request.
   * @returns {Promise<R>} A promise resolving to the response data of type R, if provided by the server.
   *
   * @throws {Error} Throws an error if the request fails. The error will be formatted by `handleError`.
   */ async delete(url, headers) {
        const config = {
            headers: this.mergeHeaders(headers)
        };
        try {
            const response = await this.api.delete(url, config);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }
}
}}),
"[project]/src/services/backend-api/authApi.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$backend$2d$api$2f$baseApi$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/backend-api/baseApi.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [middleware] (ecmascript)");
;
;
class AuthApi extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$backend$2d$api$2f$baseApi$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["BaseApi"] {
    /**
   * Функция авторизации пользователя в системе
   */ async register(data) {
        try {
            const response = await this.post(`api/auth/v1/register/`, data);
            return response;
        } catch (error) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                if (error.response && error.response.data) {
                    const errorMessages = error.response.data;
                    if (errorMessages.email || errorMessages.username) {
                        throw new Error("Указанные данные уже используются. Пожалуйста, проверьте введенные данные.");
                    } else {
                        throw new Error("Произошла ошибка. Пожалуйста, попробуйте ещё раз.");
                    }
                }
            }
        }
    }
    /**
   * Функция регистрации пользователя в системе.
   */ async login(data) {
        const response = await this.post("/api/auth/v1/login/", data);
        return response;
    }
    /**
   * Функция выхода из системы с удалением токена с базы
   */ async logout() {
        const response = await this.post("/api/auth/v1/logout/");
        return response;
    }
    async deleteAccount() {
        const response = await this.delete("/api/auth/v1/users/delete/");
        return response;
    }
    /**
   * Fetches user data from the backend API.
   *
   * @returns {Promise<any>} The user data returned from the backend.
   *
   * @throws Will throw an error if the API request fails.
   *
   * Note: This function does not handle errors internally.
   * Ensure that you wrap the call to this function in a `try-catch` block
   * or use a `.catch()` method to handle potential errors.
   *
   * Example usage:
   * ```ts
   * try {
   *   const user = await userService.getUser();
   *   console.log(user);
   * } catch (error) {
   *   console.error("Failed to fetch user data:", error);
   * }
   * ```
   */ async getUser() {
        const response = await this.get("/api/auth/v1/users/", {
            "Cache-Control": "no-store"
        });
        return response;
    }
    /**
   * Refreshes the access token using the refresh token stored in cookies.
   *
   * This function sends a POST request to the backend API endpoint
   * to refresh the tokens. It expects the backend to manage tokens via HttpOnly cookies.
   *
   * @returns {Promise<void>} Resolves when the token is successfully refreshed.
   *
   * @throws Will throw an error if the refresh token is missing or the refresh process fails.
   *
   * Note: This function assumes that HttpOnly cookies are automatically handled
   * by the browser or client during the request.
   *
   * Example usage:
   * ```ts
   * try {
   *   await authService.refreshToken();
   *   console.log("Token refreshed successfully.");
   * } catch (error) {
   *   console.error("Failed to refresh token:", error);
   * }
   * ```
   */ async refreshToken() {
        const response = await this.post("/api/auth/v1/refresh/");
        if (!response || typeof response.success !== "boolean") {
            throw new Error("Invalid response format.");
        }
        if (!response.success) {
            throw new Error(response.message || "Failed to refresh token.");
        }
        return response;
    }
    async updateProfile(data) {
        const response = await this.put("/api/auth/v1/users/", data, {
            "Content-Type": "multipart/form-data"
        });
        return response;
    }
    /**
   * Смена пароля.
   */ async changePassword(data) {
        const response = await this.post("/api/users/set_password/", data);
        return response;
    }
}
const __TURBOPACK__default__export__ = new AuthApi();
}}),
"[project]/src/middleware.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$backend$2d$api$2f$authApi$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/backend-api/authApi.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
;
;
const PUBLIC_ROUTES = [
    "/auth/login",
    "/auth/register"
];
const STATIC_ROUTES = [
    "/_next",
    "/favicon.ico"
];
async function middleware(req) {
    const { pathname } = req.nextUrl;
    if (STATIC_ROUTES.some((route)=>pathname.startsWith(route)) || PUBLIC_ROUTES.includes(pathname)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const accessToken = req.cookies.get("access_token")?.value;
    const refreshToken = req.cookies.get("refresh_token")?.value;
    try {
        if (accessToken) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$backend$2d$api$2f$authApi$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["default"].api.defaults.headers.Cookie = `access_token=${accessToken};`;
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$backend$2d$api$2f$authApi$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["default"].getUser();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
        }
        if (refreshToken) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$backend$2d$api$2f$authApi$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["default"].api.defaults.headers.Cookie = `refresh_token=${refreshToken};`;
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$backend$2d$api$2f$authApi$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["default"].refreshToken();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
        }
    } catch (error) {
        console.error("Middleware error:", error);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/auth/login", req.url));
}
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__0f5378._.js.map