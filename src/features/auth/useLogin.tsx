import { useMutation } from "@tanstack/react-query"
import { loginApi } from "../../services/apiAuth"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {
    const navigate = useNavigate();
    const { mutate: login, isPending } = useMutation({
        mutationFn: ({ email, password }: { email: string, password: string }) => loginApi({ email, password }),
        onSuccess: () => {
            console.log("You are login");
            navigate("/app")
        },
        onError: () => {
            toast.error("Enter the correct email or password")
        }
    })
    return { login, isPending }
}