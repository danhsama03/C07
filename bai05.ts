import { question } from "readline-sync";

function hopLe(person: any) {
    if (person.address.city == "Ho Chi Minh")
        return true;
    return false;
}

function main(): void {
    const person = {
        name: 'Kmin',
        yearOfBirth: 2016,
        address: {
            houseNumber: 231,
            street: 'Le Hong Phong',
            ward: 4,
            distric: 5,
            city: "Ho Chi Minh"
        }
        
    };
    if (hopLe(person) == true)
        console.log('person hop le');
    else
        console.log('person khong hop le');
};

main();

export {};