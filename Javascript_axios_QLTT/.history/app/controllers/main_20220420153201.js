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
    // console.log(123);
    var title = "Thêm người dùng";
    document.getElementById("header").innerHTML = title;
    var button = "<button class='btn btn-success' onclick='addUser()'>Thêm</button>";
    document.getElementById("btn-footer").innerHTML = button;
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
                <button class="btn btn-success" onclick="update(${user.id})" data-toggle="modal" data-target="#myModal">Sửa</button>
                <button class="btn btn-danger" onclick="delet(${user.id})">Xóa</button>
            </td>
        </tr>
        `
    }
    document.getElementById("tblDanhSachNguoiDung").innerHTML = content;
}
/**
 * Thêm user
 */
function addUser() {
    //Dom tới các thẻ input lấy value
    var account = getEle("TaiKhoan").value;
    var fullname = getEle("HoTen").value;
    var pass = getEle("MatKhau").value;
    var email = getEle("Email").value;
    var image = getEle("HinhAnh").value;
    var classifica = getEle("loaiNguoiDung").value;
    var language = getEle("loaiNgonNgu").value;
    var description = getEle("MoTa").value;
    // Tạo đối tượng user từ lớp đối tượng User
    var user = new User("", account, fullname, pass, email, classifica, language, description, image);
    // Gọi tới phương thức services để gửi user lên server
    services
        .addUserAPI(user)
        .then(function() {
            getlistUser();
            // Tắt model
            document.getElementsByClassName("close")[0].click();
        })
        .catch(function(error) {
            console.log(error);
        });
}
/**
 * Xóa
 */
function Delet(id) {
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