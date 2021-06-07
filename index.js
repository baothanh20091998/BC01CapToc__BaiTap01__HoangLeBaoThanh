document.getElementById("tinh__luong").onclick = function () {
  var soNgay = document.getElementById("so__ngay");
  var valueNgay = so__ngay.value;
  var tongLuong = valueNgay * 100000;
  document.getElementById("tong__luong").innerHTML = tongLuong;
};

document.getElementById("tinh__giatri").onclick = function () {
  var sothuNhat = document.getElementById("so__mot");
  var sothuHai = document.getElementById("so__hai");
  var sothuBa = document.getElementById("so__ba");
  var sothuTu = document.getElementById("so__bon");
  var sothuNam = document.getElementById("so__nam");

  var valNhat = +so__mot.value;
  var valHai = +so__hai.value;
  var valBa = +so__ba.value;
  var valTu = +so__bon.value;
  var valNam = +so__nam.value;

  var trungBinh = (valNhat + valHai + valBa + valTu + valNam) / 5;

  document.getElementById("trung__binh").innerHTML = trungBinh;
};

document.getElementById("doi__tien").onclick = function () {
  var soTien = document.getElementById("so__tien");
  var valTien = so__tien.value;

  var doiTien = valTien * 23500;
  document.getElementById("tien__vnd").innerHTML = doiTien;
};

document.getElementById("cv__dt").onclick = function () {
  var chieuDai = document.getElementById("chieu__dai");
  var valDai = chieu__dai.value;

  var chieuRong = document.getElementById("chieu__rong");
  var valRong = chieu__rong.value;

  var cv = valDai * 2 + valRong * 2;
  var dt = valDai * valRong;

  document.getElementById("chu__vi").innerHTML = cv;
  document.getElementById("dien__tich").innerHTML = dt;
};

document.getElementById("tinh__tong").onclick = function () {
  var soTunhien = document.getElementById("ky__so");
  var valSo = ky__so.value;

  var so__hangdv = valSo % 10;
  var so__hangchuc = Math.floor(valSo / 10);
  tong2So = so__hangdv + so__hangchuc;
  document.getElementById("tong__2so").innerHTML = tong2So;
};
