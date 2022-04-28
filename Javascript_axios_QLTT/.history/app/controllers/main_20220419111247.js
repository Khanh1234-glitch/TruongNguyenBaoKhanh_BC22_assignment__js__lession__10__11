var arr = [];
document.getElementById("btnThemNguoiDung").onclick = function() {
    var h4 = "Thêm người dùng";
    document.getElementById("header").innerHTML = h4;
    var footer = ` <button class="btn btn-success" onclick="add()">Thêm</button>`;
    document.getElementById("btn-footer").innerHTML = footer;
}

function renderHTML(arr) {
    var content = "";
    for (var i = 0; i < arr.length; i++) {
        var product = arr[i];
        content += `
    <tr>
        <td>${i+1}</td>
        <td>${product.taiKhoan}</td>
        <td>${product.matKhau} $</td>
        <td>
            <img width="100px" src="../../assets/img/${arr[i].hinhAnh}" >
        </td>
        <td>${product.moTa}</td>  
        <td>
                <button class= "btn btn-success" data-toggle="modal"
                data-target="#myModal" onclick="fix(${product.id})">Sửa</button>
                <button class= "btn btn-danger" onclick="Delete(${product.id})">Xóa</button>
        </td>  
    </tr>
        `
    }
    document.getElementById("tblDanhSachSP").innerHTML = content;
}