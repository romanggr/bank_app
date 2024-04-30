import { useMutation } from "@tanstack/react-query"
import { registerApi } from "../../services/apiAuth"
import { useNavigate } from "react-router-dom"
import { IRegisterData } from "../../helpers/types";

export const useSingUp = () => {
    const navigate = useNavigate();
    const { mutate: singUp, isPending } = useMutation({
        mutationFn: ({ email, password, name, surname, phone, adress }: IRegisterData) => registerApi({ email, password, name, surname, phone, adress }),
        onSuccess: () => {
            navigate("/app")
            console.log("register");

        }
    })
    return { singUp, isPending }
}