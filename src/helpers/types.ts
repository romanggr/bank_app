export interface IRegisterData {
    email: string;
    password: string;
    name: string;
    surname: string;
    phone: string;
    avatar?: any;
    adress: string;
}
export interface IUpdateData {
    fullName: string;
    phone: string;
    avatar: any;
    adress: string;
}
export interface IRegisterData {
    email: string;
    password: string;
    name: string;
    surname: string;
    phone: string;
    avatar?: any;
    address: string;
}

export interface ICardForm {
    fullName: string;
    number: number;
    pin: number;
    style: string;
}

export interface ICard {
    id: number;
    fullName: string;
    number: number;
    limitPerWeek: number;
    date: string;
    cvv: number;
    pin: number;
    style: string;
    balance: number;
    history: number[];

}

export interface IAuth{
    data:string,
    error:string
}

export interface IAuthDateOfBirth{
    data:Date,
    error:string
}

export interface IAuthPhoto{
    data:any,
    error:string
}