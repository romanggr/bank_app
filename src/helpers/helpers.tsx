import toast from "react-hot-toast";

export function replaceAll(input: string, search: string, replacement: string): string {
    const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedSearch, 'g');
    return input.replace(regex, replacement);
}

export function numberForCard(number: number) {
    const string = number.toString();
    const res: string[] = [];
    for (let i = 0; i < string.length; i++) {
        if (i % 4 === 0) {
            res.push(" ")
        }
        res.push(string[i])

    }
    return res.join("");
}

export function cardStringToNum(string: string) {
    const res: string[] = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            res.push(string[i])
        }

    }
    return Number(res.join(""))
}

export function generateCvv() {
    return Math.round(Math.random() * 1000)
}

export function generateNumber() {
    const number: number = Math.round(Math.random() * 1000000000000)
    const string: string = "5025" + number
    return Number(string)
}

export function generateDate() {
    const currentDate = new Date();
    const futureDate = new Date(currentDate.getFullYear() + 4, currentDate.getMonth());
    return `${(futureDate.getMonth() + 1).toString().padStart(2, '0')}/${futureDate.getFullYear()}`;
}

export const copyToClipboard = (text: string, alertText: string) => {
    toast.success(alertText)
    const textField = document.createElement('textarea')
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
    return formatter.format(balance);
}

export function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}

export function validatePassword(password: string) {
    const hasNumber = /\d/;
    const hasLetter = /[a-zA-Z]/;
    const minLength = 8;

    return hasNumber.test(password) &&
        hasLetter.test(password) &&
        password.length >= minLength;
}

export function formatTime(data: string) {
    let time: string = "";

    for (let i = 0; i < data.length; i++) {
        if (i > 9) {
            time += data[i];
        }
    }

    return time
}

export function formatDays(inputDate: string): string {
    let days: string = "";

    for (let i = 0; i < 10; i++) {
            days += inputDate[i];

    }

    const partsString: string[] = days.split('.');

    const parts: number[] = partsString.map(part => Number(part));

    const date = new Date(parts[2], parts[1] - 1, parts[0]);

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = monthNames[date.getMonth()];

    return parts[0] + ' ' + monthName + ' ' + parts[2];
}

