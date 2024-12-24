(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_e95497._.js", {

"[project]/src/services/backend-api/baseApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BaseApi": (()=>BaseApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
class BaseApi {
    api;
    constructor(){
        const baseURL = ("TURBOPACK compile-time value", "http://localhost:8000") || "http://localhost:8000";
        this.api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/backend-api/authApi.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$backend$2d$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/backend-api/baseApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
;
class AuthApi extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$backend$2d$api$2f$baseApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseApi"] {
    /**
   * Функция авторизации пользователя в системе
   */ async register(data) {
        try {
            const response = await this.post(`api/auth/v1/register/`, data);
            return response;
        } catch (error) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/context/AuthProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AuthProvider": (()=>AuthProvider),
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$backend$2d$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/backend-api/authApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AuthProvider = ({ children })=>{
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const refreshUser = async ()=>{
        try {
            const userData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$backend$2d$api$2f$authApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getUser();
            setUser(userData);
            setIsAuthenticated(true);
        } catch (error) {
            console.error("Failed to refresh user data:", error);
            setUser(null);
            setIsAuthenticated(false);
        } finally{
            setLoading(false);
        }
    };
    const clearAuth = ()=>{
        setUser(null);
        setIsAuthenticated(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            refreshUser(); // Загружаем данные пользователя при монтировании провайдера
        }
    }["AuthProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isAuthenticated,
            loading,
            refreshUser,
            clearAuth
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/AuthProvider.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
};
_s(AuthProvider, "MIOyihIJe1jbesOAPrjh1+/HIzc=");
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_refresh__.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_e95497._.js.map