import { question } from "readline-sync";

function nhapChieuRong(): number {
	let chieuRong: number;
	do {
		chieuRong = Number(question("Nhap chieu rong "));
		if (chieuRong <= 0) {
			console.log("Vui long nhap lai");
		};
	} while (chieuRong <= 0);
	return chieuRong;
}

function nhapChieuCao(): number {
	let chieuCao: number;
	do {
		chieuCao = Number(question("Nhap chieu cao "));
		if (chieuCao <= 0) {
			console.log("Vui long nhap lai");
		};
	} while (chieuCao <= 0);
	return chieuCao;
}

function tinhDienTich(w: number, h: number): number {
	let S: number = 0;
    S = w * h;
    console.log("Dien tich hinh chu nhat la " + S);
    return S;
}

function cnTinhDienTich(): void {
    const w = nhapChieuRong()
    const h = nhapChieuCao()

    const rectangleArea = {
        width: w,
        heigh: h
    };

    tinhDienTich(w, h);
};

cnTinhDienTich();

export {};