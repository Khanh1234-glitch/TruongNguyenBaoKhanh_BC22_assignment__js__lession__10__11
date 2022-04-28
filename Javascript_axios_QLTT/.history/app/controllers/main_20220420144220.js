var services = new Services();

function getEle(id) {
    return document.getElementById(id);
}

function getlistUser() {
    services.fetchData()
        .then(function(result) {
            console.log(result.data);
            renderHTML(result.data);
        })
        .catch(function(error) {
            console.log(error);
        })
}
getlistUser();
getEle("btnThemNguoiDung").addEventListener("click", function() {
    console.log(123);
})

function renderHTML(data) {
    // console.log(data);
    var content = "";
    for (var i = 0; i < data.length; i++) {
        var user = data[i];
        content += `
        <tr>
            <td>${i+1}</td>
            <td>${user.taiKhoan}</td>
            <td>${user.matKhau}</td>
            <td>${user.hoTen}</td>
            <td>${user.email}</td>
            <td>${user.ngonNgu}</td>
            <td>${user.loaiND}</td>
            <td>
                <button class="btn btn-success">Sửa</button>
                <button class="btn btn-danger" onclick="Delete(${user.id})">Xóa</button>
            </td>
        </tr>
        `
    }
    document.getElementById("tblDanhSachNguoiDung").innerHTML = content;
}

/**
 * Xóa
 */
function Delete(id) {
    console.log(id);
    services
        .deleteData(id)
        .then(function(result) {
            console.log(result);
            // gọi lại hàm getlist
            getlistUser();
        })
        .catch(function(error) {
            console.log(error);
        })
}