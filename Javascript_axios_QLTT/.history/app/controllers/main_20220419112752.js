var arr = [];
var services = new Services();

function getListProducts() {
    var promise = services.fetchData()
    promise.then(function(result) {
        renderHTML(result.data);
    }).catch(function(error) {
        console.log(error);
    })
}
getListProducts();
document.getElementById("btnThemNguoiDung").onclick = function() {
    var h4 = "Thêm người dùng";
    document.getElementById("header").innerHTML = h4;
    var footer = ` <button class="btn btn-success" onclick="add()">Thêm</button>`;
    document.getElementById("btn-footer").innerHTML = footer;
}

function add() {
    //Dom from data value
    var account = document.getElementById("TaiKhoan").value;
    var fullname = document.getElementById("HoTen").value;
    var pass = document.getElementById("MatKhau").value;
    var email = document.getElementById("Email").value;
    var image = document.getElementById("HinhAnh").value;
    var classifica = document.getElementById("loaiNguoiDung");
    var language = document.getElementById("loaiNgonNgu");
    var description = document.getElementById("MoTa").value;
    //Tạo đối tượng product từ lớp đối tượng product
    var product = new Product("", account, fullname, pass, email, image, classifica, language, description);
    console.log(product);
    //Gọi lại function addProduct từ đối tượng services
    services.addProduct(product).then(function(result) {
            getListProducts();
            //Tat modal 
            console.log(result);
            document.getElementById("close").click();
        })
        .catch(function(error) {
            console.log(error);
        });
}

function renderHTML(arr) {
    var content = "";
    for (var i = 0; i < arr.length; i++) {
        var product = arr[i];
        content += `
    <tr>
        <td>${i+1}</td>
        <td>${product.taiKhoan}</td>
        <td>${product.matKhau}</td>
        <td>${product.hoTen}</td>
        <td>${product.email}</td>  
        <td>${product.ngonNgu}</td>  
        <td>${product.loaiND}</td>  
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