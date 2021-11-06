//GLOBAL:
var dsnv = new DanhSachNhanVien();
var validation = new Validation();

function setLocalStorage(mangNV) {
  localStorage.setItem("DSNV", JSON.stringify(mangNV));
}
function getLocalStorage() {
  if (localStorage.getItem("DSNV")) {
    dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
  }
}
getLocalStorage();

function getELE(id) {
  return document.getElementById(id);
}
function informationNV() {
  var taiKhoan = getELE("tknv").value;
  var ten = getELE("name").value;
  var email = getELE("email").value;
  var matKhau = getELE("password").value;
  var ngayLam = getELE("datepicker").value;
  var luongCB = getELE("luongCB").value;
  var chucVu = getELE("chucvu").value;
  var gioLam = getELE("gioLam").value;

  var isValid = true;
  isValid &=
    validation.checkEmpty(taiKhoan, "Không được để trống nhé!", "tbTKNV") &&
    validation.checkTrung(
      taiKhoan,
      "Tài khoản không được trùng nha!",
      "tbTKNV",
      dsnv.mangNV
    )

  isValid &=
    validation.checkEmpty(ten, "Không được để trống nhé!", "tbTen") &&
    validation.checkName(ten, "Tên phải là dạng chữ", "tbTen");

  isValid &=
    validation.checkEmpty(email, "Không được để trống nhé!", "tbEmail") &&
    validation.checkEmail(email, "Email phải đúng định dạng", "tbEmail");

  isValid &=
    validation.checkEmpty(matKhau, "Không được để trống nhé!", "tbMatKhau") &&
    validation.checkPass(matKhau, "Pass phải đúng định dạng", "tbMatKhau");

  isValid &=
    validation.checkEmpty(ngayLam, "Không được để trống nhé!", "tbNgay") &&
    validation.checkDate(ngayLam, "Phải đúng định dạng ngày", "tbNgay");

  isValid &=
    validation.checkEmpty(luongCB, "Không được để trống nhé!", "tbLuongCB") &&
    validation.checkLuongCB(
      luongCB,
      "Từ 1.000.000 đến 20.000.000",
      "tbLuongCB"
    );

  isValid &= validation.checkSelect(
    "chucvu",
    "Phải chọn chức vụ hợp lệ",
    "tbChucVu"
  )

  isValid &=
    validation.checkEmpty(gioLam, "Không được để trống nhé!", "tbGiolam") &&
    validation.checkGioLam(gioLam, "Từ 80 đến 200", "tbGiolam");

  if (isValid) {
    var nv = new NhanVien(
      taiKhoan.trim(),
      ten,
      email,
      matKhau,
      ngayLam,
      luongCB,
      chucVu,
      gioLam
    );
    nv.salary= nv.tinhTongLuong(); 
    nv.xepLoaiNV= nv.xepLoai();

    console.log(nv);
    dsnv.themNV(nv);

    hienThiTable(dsnv.mangNV);
    setLocalStorage(dsnv.mangNV);
  }
}

function hienThiTable(mangNV) {
  var content = "";
  console.log(mangNV);
  for (var i = 0; i < mangNV.length; i++) {
    var tr = `<tr>
        <td>${mangNV[i].taiKhoan}</td>
        <td>${mangNV[i].name}</td>
        <td>${mangNV[i].email}</td>
        <td>${mangNV[i].pass}</td>
        <td>${mangNV[i].ngayLam}</td>
        <td>${mangNV[i].salary}</td>
        <td>${mangNV[i].chucVu}</td>
        <td>${mangNV[i].gioLam}</td>
        <td>${mangNV[i].xepLoaiNV}</td>
        <td>
            <button onclick="deleteNhanVien('${mangNV[i].taiKhoan}')" class="btn btn-danger">Xoá</button>
        </td>
        <tr>`;
    content += tr;
  }
  console.log(content);
  getELE("tableDanhSach").innerHTML = content;
}
function deleteNhanVien (taiKhoan) {
    dsnv.xoaNV(taiKhoan);
    setLocalStorage(dsnv.mangNV);
    hienThiTable(dsnv.mangNV);
}

function capNhatNV () {
  var taiKhoan = getELE("tknv").value;
  var ten = getELE("name").value;
  var email = getELE("email").value;
  var matKhau = getELE("password").value;
  var ngayLam = getELE("datepicker").value;
  var luongCB = getELE("luongCB").value;
  var chucVu = getELE("chucvu").value;
  var gioLam = getELE("gioLam").value;

  var nv = new NhanVien(
    taiKhoan.trim(),
    ten,
    email,
    matKhau,
    ngayLam,
    luongCB,
    chucVu,
    gioLam
  );

  dsnv.capNhatNV(nv);
  setLocalStorage(dsnv.mangNV);
  hienThiTable(dsnv.mangNV);
}

hienThiTable(dsnv.mangNV);