import { question } from "readline-sync";

function hopLe(person: any) {
    if (person['name'] == "")
        return false;
    if (person['yearOfBirth'] <= 0)
        return false;
    return true;
}

function main(): void {
    const person = {
        name: 'Kmin',
        yearOfBirth: 2016,
    };
    if (hopLe(person) == true)
        console.log('person hop le');
    else
        console.log('person khong hop le');
};

main();

export {};