//!Lớp đối tượng:

function NhanVien(taiKhoan, ten, email, matKhau, ngayLam, luongCB, chucVu, gioLam) {
    this.taiKhoan = taiKhoan;
    this.name = ten;
    this.email = email;
    this.pass = matKhau;
    this.ngayLam = ngayLam;
    this.salary = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;   
    
    this.tinhTongLuong=  function () {
        var tongLuong = 0;
        const selectValue= document.getElementById("chucvu").value;
        if (selectValue === "sep"){
            tongLuong = document.getElementById("luongCB").value* 3;
        } else if(selectValue==="truongPhong") 
        {
            tongLuong= (document.getElementById("luongCB").value)*2;
        }else if (selectValue ==="nhanVien"){
            tongLuong= document.getElementById("luongCB").value;
        }
        return tongLuong; 
    }

    this.xepLoaiNV ="";
    this.xepLoai= function () {
        var gioLam= document.getElementById("gioLam").value;
        if (gioLam >=192){
            return "Nhân viên xuất sắc";
        }else if(gioLam >=176){
            return "Nhân viên giỏi";
        }else if(gioLam >=160){
            return "Nhân viên khá";
        }else if(gioLam <160){
            return "Nhân viên trung bình";
        }
    }
}