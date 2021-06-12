/** Bài 1 tính lương nhân viên
 * Input: - nhập số ngày đã làm
 * Process: -Bắt sự kiện nút tính lương
 *          -Lấy giá trị số ngày đã làm
 *          -Tính tong lương = số ngày * 100000
 * Output:  -Hiện tổng lương ra màn hình
 */

document.getElementById("tinh__luong").onclick = function () {
  var soNgay = document.getElementById("so__ngay");
  var valueNgay = so__ngay.value;
  var tongLuong = valueNgay * 100000;
  document.getElementById("tong__luong").innerHTML = tongLuong;
};

/**Bài 2 tính trung bình tổng 5 số bất kỳ
 * Input: Nhập vào 5 số bất kỳ
 * Process: -Bắt sự kiện nút tính giá trị
 *          -Lấy dữ liệu 5 số
 *          -Tính trung bình tổng 5 số
 * Output: - Hiện trung bình tổng 5 số
 */

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

/**Bài 3 Đổi tiền
 * Input: -Số tiền usd cần đổi sang VND
 * Process: -Bắt sự kiện nút đổi tiền
 *          -Lấy giá trị của số tiền cần đổi
 *          -Đổi tiền = giá trị tiền cần đổi * 23500
 * Output: -Hiện ra số tiền đã đổi sang VND
 */

document.getElementById("doi__tien").onclick = function () {
  var soTien = document.getElementById("so__tien");
  var valTien = so__tien.value;

  var doiTien = valTien * 23500;
  document.getElementById("tien__vnd").innerHTML = doiTien;
};

/**Bài 4 Tính CV và DT
 *Input: chiều dài, chiều rộng
 * Process: - CV = (D+R)*2
 *          - DT = D*R
 * Output: -CV và DT
 */

document.getElementById("cv__dt").onclick = function () {
  var chieuDai = document.getElementById("chieu__dai");
  var valDai = +chieu__dai.value;

  var chieuRong = document.getElementById("chieu__rong");
  var valRong = +chieu__rong.value;

  var cv = (valDai + valRong) * 2;
  var dt = valDai * valRong;

  document.getElementById("chu__vi").innerHTML = cv;
  document.getElementById("dien__tich").innerHTML = dt;
};

/** Bài 5 tính tổng 2 ký số trong 1 chữ số bất kỳ
 * Input: Nhập vào 1 số bất kỳ gồm 2 chữ số
 * Process: Lấy số hàng chục = số /10
 *          Lấy số hàng đơn vị = số %10 và xét nếu số âm thì giá trị tuyệt đối thành số dương
 *          Tổng = sốhang chục + số hàng đv
 * Ouput: Xuất ra số tổng 2 ký số
 */

document.getElementById("tinh__tong").onclick = function () {
  var soTunhien = document.getElementById("ky__so");
  var valSo = ky__so.value;
  var so__hangdv = Math.abs(valSo % 10);
  var so__hangchuc = parseInt(valSo / 10);
  tong2So = so__hangdv + so__hangchuc;
  document.getElementById("tong__2so").innerHTML = tong2So;
};
