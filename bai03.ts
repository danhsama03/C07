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

function xinChao(ten: string, namSinh: number): number {
	console.log(`Xin chào, mình tên là ${ten}.`);
    console.log(`Mình sinh năm ${namSinh} nha.`);
    console.log('Rất vui được gặp bạn.');

    const tuoi = 2022 - namSinh;
	console.log(`Mình ${tuoi} tuổi.`);
    return tuoi;
}

function cnXinChao(): void {
    const t = nhapTen()
    const n = nhapNamSinh()

    const person = {
        name: t,
        yearOfBirth: n
    };

    xinChao(t, n);
};

cnXinChao();

export {};