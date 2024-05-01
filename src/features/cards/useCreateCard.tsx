import { useMutation } from "@tanstack/react-query"
import { createCardApi } from "../../services/cardsApi";
import { ICardForm } from "../../helpers/types.ts";
import toast from "react-hot-toast";

export const useCreateCard = () => {
    const { mutate: createCard, isPending } = useMutation({
        mutationFn: ({ fullName, number, pin, style }: ICardForm) => createCardApi({ fullName, number, pin, style }),
        onSuccess: () => {
            toast.success("Card was successfully created")
        },
        onError: (error) => {
            toast.error(error.message)

        }
    });
    return { createCard, isPending }
}