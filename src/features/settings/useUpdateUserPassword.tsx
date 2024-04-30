import { useMutation } from "@tanstack/react-query"
import { updateUserPassword } from "../../services/apiAuth"
import toast from "react-hot-toast"


export const useUpdateUserPassword = () => {
    const { mutate: updatePassword, isPending } = useMutation({
        mutationFn: ({ password }: { password: string }) => updateUserPassword({ password }),
        onSuccess: () => {
            toast.success("Password was succesfully updated")
        },

    })
    return { updatePassword, isPending }
}