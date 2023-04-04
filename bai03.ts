import { question } from "readline-sync";

function nhapTenMay(): string {
	let ten: string;
	do {
		ten = question("Nhap ten laptop: ");
		if (ten.length == 0) {
			console.log("Vui long nhap lai");
		};
	} while (ten.length == 0);
	return ten;
}

function nhapNamSX(): number {
	let namSX: number;
	do {
		namSX = Number(question("Nhap nam san xuat: "));
		if (namSX <= 0) {
			console.log("Vui long nhap lai");
		};
	} while (namSX <= 0);
	return namSX;
}

function nhapRam(): number {
	let RAM: number;
	do {
		RAM = Number(question("Nhap RAM: "));
		if (RAM <= 0) {
			console.log("Vui long nhap lai");
		};
	} while (RAM <= 0);
	return RAM;
}

function nhapHDD(): number {
	let HDD: number;
	do {
		HDD = Number(question("Nhap HDD: "));
		if (HDD <= 0) {
			console.log("Vui long nhap lai");
		};
	} while (HDD <= 0);
	return HDD;
}

function nhapChieuRongManHinh(): number {
	let w: number;
	do {
		w = Number(question("Nhap chieu rong man hinh: "));
		if (w <= 0) {
			console.log("Vui long nhap lai");
		};
	} while (w <= 0);
	return w;
}

function nhapChieuCaoManHinh(): number {
	let h: number;
	do {
		h = Number(question("Nhap chieu cao man hinh: "));
		if (h <= 0) {
			console.log("Vui long nhap lai");
		};
	} while (h <= 0);
	return h;
}

function xuatThongTin(t: string, n: number, r: number, p: number, w: number, h: number): void {
	console.log(`Ten may: ${t}`);
    console.log(`Nam san xuat may: ${n}`);
    console.log(`RAM: ${r}`);
    console.log(`HDD: ${p}`);
	console.log(`Chieu rong man hinh: ${w}`);
	console.log(`Chieu cao man hinh: ${h}`);
}

function tuoiLaptop(n: number): number {
	const tuoiLaptop: number = 2023 - n;
	console.log("May da san xuat " + tuoiLaptop + " nam");
	return tuoiLaptop;
}

function diemLaptop(r: number, p: number): number {
	const diemLaptop: number = (3 * r + 2 * p) / 5;
	console.log("Diem cua laptop la: " + diemLaptop + " diem");
	return diemLaptop;
}

function cnLaptop(): void {
    const t = nhapTenMay();
    const n = nhapNamSX();
    const r = nhapRam();
    const p = nhapHDD();
	const w = nhapChieuRongManHinh();
	const h = nhapChieuCaoManHinh();

    const User = {
        tenMay: t,
        namSX: n,
        cauHinh: {
			RAM: r,
			HDD: p,
			manHinh: {
				chieuRong: w,
				chieuCao: h,
			},
		},
    };

    xuatThongTin(t, n, r, p, w, h);
    tuoiLaptop(n);
	diemLaptop(r, p)
};

cnLaptop();

export {};