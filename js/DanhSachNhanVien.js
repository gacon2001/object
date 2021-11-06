function DanhSachNhanVien() {
    this.mangNV = [];
    this.themNV = function (nv) {
        this.mangNV.push(nv);
    }

    this.timvViTri= function (taiKhoan) {
        var viTri= -1;
        this.mangNV.map(function (nv, index) {
            if (nv.taiKhoan == taiKhoan){
                viTri= index;
            }
        })
        return viTri;
    }
    this.xoaNV = function (taiKhoan) {
        var viTri= this.timvViTri(taiKhoan);
        if (viTri > -1){
            this.mangNV.splice(viTri,1)
        }
    }

    this.capNhatNV = function (nv) {
        var viTri= this.timvViTri(nv.taiKhoan);
        if(viTri > -1){
            this.mangNV[viTri] = nv;
        }else{
            console.log("Không tìm thấy");
        }
    }
}