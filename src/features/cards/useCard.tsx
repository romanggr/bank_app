import { useQuery } from "@tanstack/react-query";
import { getCardApi } from "../../services/cardsApi";
import { useSearchParams } from "react-router-dom";


export function useCard() {
    const [searchParams] = useSearchParams();

    const cardId = Number(searchParams.get("cardId"))

    const { data, isLoading } = useQuery({
        queryKey: ["card", cardId],
        queryFn: () => getCardApi(cardId),


    })
    return { data, isLoading }
}