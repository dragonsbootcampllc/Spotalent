import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { login, AuthResponse } from "../services";
import { useUserStore } from "../state";

interface LoginError {
    message: string;
}

const useLogin = (): UseMutationResult<
    AuthResponse,
    LoginError,
    { email: string; password: string }
> => {
    const setUser = useUserStore((state) => state.setUser);

    return useMutation<
        AuthResponse,
        LoginError,
        { email: string; password: string }
    >({
        mutationFn: login,
        onSuccess: (data: AuthResponse) => {
            console.log("Login successful:", data);
            setUser(data.user);
            // TODO: Save token on cookies or local storage
        },
        onError: (error: LoginError) => {
            console.error("Login failed:", error);
            // Handle error
        },
    });
};

export default useLogin;