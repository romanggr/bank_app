import { useMutation } from "@tanstack/react-query"
import { updateUserDataApi } from "../../services/apiAuth"
import { IUpdateData } from "../../helpers/types"
import toast from "react-hot-toast"


export const useUpdateUserData = () => {
    const { mutate: updateUser, isPending } = useMutation({
        mutationFn: ({ fullName, phone, adress, avatar }: IUpdateData) => updateUserDataApi({ fullName, phone, adress, avatar }),
        onSuccess: () => {
            toast.success("User was succesfully updated")
        },
    })
    return { updateUser, isPending }
}