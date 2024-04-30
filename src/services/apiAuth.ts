import { supabaseUrl } from "../helpers/consts"
import { IRegisterData, IUpdateData } from "../helpers/types";
import { supabase } from "./supabase";
import { replaceAll } from "../helpers/helpers";


export const loginApi = async ({ email, password }: { email: string, password: string }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })
    if (error) {
        throw new Error(error.message)
    }
    return data
}

export async function getCurrentUser() {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) return null;

    const { data, error } = await supabase.auth.getUser();

    if (error) throw new Error(error.message);
    return data?.user;
}

export const registerApi = async ({ email, password, name, surname, phone, adress }: IRegisterData) => {

    const { data, error } = await supabase.auth.signUp({
        password,
        email,
        options: {
            data: {
                fullName: `${name} ${surname}`,
                avatar: "",
                adress,
                phone,
                cards: [],
                contacts: []
            },
        },
    });
    if (error) {
        console.error(error);
        throw new Error(error.message)
    }

    //login
    const { error: errorLogin } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    if (errorLogin) throw new Error(errorLogin.message);


    return data;
};

export const updateUserDataApi = async ({ fullName, phone, adress, avatar }: IUpdateData) => {
    console.log(avatar);

    const hasImagePath = avatar?.startsWith?.(supabaseUrl);
    const imageName = hasImagePath ? avatar : replaceAll(`${Math.random()}-${avatar.name}`, "/", "")
    const imagePath = hasImagePath ? avatar : `${supabaseUrl}/storage/v1/object/public/avatars/${imageName}`;

    const { data, error } = await supabase.auth.updateUser({
        data: {
            phone,
            fullName,
            avatar: imagePath,
            adress,
        },
    });

    console.log(imagePath, imageName, hasImagePath);


    if (hasImagePath) return data

    const { error: storageError } = await supabase
        .storage
        .from('avatars')
        .upload(imageName, avatar)

    if (storageError) {
        console.error(storageError);
        throw new Error("Avatar couldn't be loaded")
    }

    if (error) {
        console.error(error);
        throw new Error(error.message);
    }

    return data;
};

export const updateUserPassword = async ({ password }: { password: string }) => {
    const { data, error } = await supabase.auth.updateUser({
        password
    });

    if (error) {
        console.error(error);
        throw new Error(error.message)
    }


    return data;
}