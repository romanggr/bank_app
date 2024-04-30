import toast from "react-hot-toast";

export function replaceAll(input: string, search: string, replacement: string): string {
    const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedSearch, 'g');
    return input.replace(regex, replacement);
}

export function numberForCard(number: number) {
    let string = number.toString();
    let res: string[] = [];
    for (let i = 0; i < string.length; i++) {
        if (i % 4 === 0) {
            res.push(" ")
        }
        res.push(string[i])

    }
    return res.join("");
}

export function cardStringToNum(string: string) {
    let res: string[] = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            res.push(string[i])
        }

    }
    return Number(res.join(""))
}

export function generateCvv() {
    let cvv: number = Math.round(Math.random() * 1000)
    return cvv
}

export function generateNumber() {
    let number: number = Math.round(Math.random() * 1000000000000)
    let string: string = "5025" + number
    return Number(string)
}

export function generateDate() {
    const currentDate = new Date();
    const futureDate = new Date(currentDate.getFullYear() + 4, currentDate.getMonth());
    const formattedDate = `${(futureDate.getMonth() + 1).toString().padStart(2, '0')}/${futureDate.getFullYear()}`;

    return formattedDate;
}

export const copyToClipboard = (text: string, alertText: string) => {
    toast.success(alertText)
    let textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
}

export function formatBalance(balance: number) {
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    const formattedBalance = formatter.format(balance);
    return formattedBalance;
}





