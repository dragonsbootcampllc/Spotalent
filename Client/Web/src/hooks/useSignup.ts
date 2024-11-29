import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { signup, AuthResponse } from "../services";
import { useUserStore } from "../state";

interface SignupError {
    message: string;
}

const useSignup = (): UseMutationResult<
    AuthResponse,
    SignupError,
    { name: string; email: string; password: string }
> => {
    const setUser = useUserStore((state) => state.setUser);
    return useMutation<
        AuthResponse,
        SignupError,
        { name: string; email: string; password: string }
    >({
        mutationKey: ["signup"],
        mutationFn: signup,
        onSuccess: (data: AuthResponse) => {
            console.log("Signup successful:", data);
            setUser(data.user);
            // TODO: Save token on cookies or local storage
        },
        onError: (error: SignupError) => {
            console.error("Signup failed:", error);
            // Handle error
        },
    });
};

export default useSignup;