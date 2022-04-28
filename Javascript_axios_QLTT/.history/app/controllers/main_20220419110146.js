var arr = [];
document.getElementById("btnThemNguoiDung").onclick = function() {
    var h4 = "Thêm người dùng";
    document.getElementById("header").innerHTML = h4;
    var footer = ` <button class="btn btn-success" onclick="add()">Thêm</button>`;
    document.getElementById("btn-footer").innerHTML = footer;
}