import { useQuery } from "@tanstack/react-query";
import { getCardsApi } from "../../services/cardsApi";

export function useCards() {
    const { data, isLoading } = useQuery({
        queryKey: ["cards"],
        queryFn: getCardsApi,

    })
    return { data, isLoading }
}