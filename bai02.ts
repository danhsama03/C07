import { question } from "readline-sync";

function nhapTen(): string {
	let ten: string;
	do {
		ten = question("Nhap ten: ");
		if (ten.length == 0) {
			console.log("Vui long nhap lai");
		};
	} while (ten.length == 0);
	return ten;
}

function nhapMatKhau(): number {
	let matKhau: number;
	do {
		matKhau = Number(question("Nhap mat khau: "));
		if (matKhau <= 0) {
			console.log("Vui long nhap lai");
		};
	} while (matKhau <= 0);
	return matKhau;
}

function nhapEmail(): any {
	let email: any;
	do {
		email = question("Nhap email: ");
		if (email.length == 0) {
			console.log("Vui long nhap lai");
		};
	} while (email.length == 0);
	return email;
}

function nhapSDT(): number {
	let sdt: number;
	do {
		sdt = Number(question("Nhap so dien thoai: "));
		if (sdt <= 100000000) {
			console.log("Vui long nhap lai");
		};
	} while (sdt <= 100000000);
	return sdt;
}

function xuatThongTin(t: string, m: number, e: any, s: number): void {
	console.log(`Ten nguoi dung: ${t}`);
    console.log(`Mat khau nguoi dung: ${m}`);
    console.log(`Email: ${e}`);
    console.log(`So dien thoai: ${s}`);
}

function tinhNutSDT(s: number): number {
    let so1: number = Math.floor(s / 100000000);
    let so2: number = Math.floor((s % 100000000) / 10000000);
    let so3: number = Math.floor((s % 10000000) / 1000000);
    let so4: number = Math.floor((s % 1000000) / 100000);
    let so5: number = Math.floor((s % 100000) / 10000);
    let so6: number = Math.floor((s % 10000) / 1000);
    let so7: number = Math.floor((s % 1000) / 100);
    let so8: number = Math.floor((s % 100) / 10);
    let so9: number = Math.floor(s % 10);

    const soNut: number = (so1 + so2 + so3 + so4 + so5 + so6 + so7 + so8 + so9) % 10;
    console.log("So nut cua so dien thoai la " + soNut);
    return soNut;
}

function cnUser(): void {
    const t = nhapTen();
    const m = nhapMatKhau();
    const e = nhapEmail();
    const s = nhapSDT();

    const User = {
        tenDangNhap: t,
        matKhau: m,
        email: e,
        soDienThoai: s
    };

    xuatThongTin(t, m, e, s);
    tinhNutSDT(s)
};

cnUser();

export {};