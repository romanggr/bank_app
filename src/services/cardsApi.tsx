import { generateCvv, generateDate, } from "../helpers/helpers";
import { ICard, ICardForm } from "../helpers/types";
import { balance, limitPerWeek } from "../helpers/consts"
import { supabase } from "./supabase";

export async function createCardApi({ fullName, number, pin, style }: ICardForm) {
    const cvv = generateCvv();
    const date = generateDate();
    const { data, error } = await supabase
        .from('cards')
        .insert([
            { fullName, number, pin, style, cvv, limitPerWeek, balance, date },
        ])
        .select()

    if (error) {
        console.error(error);
        throw new Error(error.message)
    }
    return data
}

export async function getCardsApi(): Promise<ICard[]> {
    const { data, error } = await supabase
        .from('cards')
        .select('*')

    if (error) {
        console.error(error);
        throw new Error(error.message)
    }
    return data
}


export async function getCardApi(id: number): Promise<ICard> {

    const { data, error } = await supabase
        .from('cards')
        .select('*')
        .eq("id", id)
        .single()

    if (error) {
        console.error(error);
        throw new Error(error.message)
    }
    return data
}