var services = new Services();

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
            
            </td>
        </tr>
        `
    }
    document.getElementById("tblDanhSachNguoiDung").innerHTML = content;
}