import { question } from "readline-sync";

function nhapTen(): string {
	let ten: string;
	do {
		ten = question("Nhập tên ");
		if (ten == "") {
			console.log("Vui lòng nhập tên lại");
		};
	} while (ten == "");
	return ten;
}

function nhapNamSinh(): number {
	let namSinh: number;
	do {
		namSinh = Number(question("Nhập năm sinh "));
		if (namSinh <= 0) {
			console.log("Vui lòng nhập năm sinh lại");
		};
	} while (namSinh <= 0);
	return namSinh;
}

function xinChao(person: any): number {
	console.log(`Xin chào, mình tên là ${person.name}.`);
    console.log(`Mình sinh năm ${person.dateOfBirth} nha.`);
    console.log('Rất vui được gặp bạn.');

    const tuoi = 2022 - person.dateOfBirth;
	console.log(`Mình ${tuoi} tuổi.`);
    return tuoi;
}

function nhapThongTin(): any {
    const person = {
        name: '',
        dateOfBirth: 0,
    };

    person.name = nhapTen();

    person.dateOfBirth = nhapNamSinh();

    return person;
}

function cnXinChao(): void {
    const p = nhapThongTin();
    xinChao(p);
};

cnXinChao();

export {};