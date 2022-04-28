var arr = [];
document.getElementById("btnThemNguoiDung").onclick = function() {
    var h4 = "Thêm người dùng";
    document.getElementById("header").innerHTML = h4;
    var footer = ` <button class="btn btn-success" onclick="add()">Thêm</button>`;
    document.getElementById("btn-footer").innerHTML = footer;
}

function add() {
    //Dom from data value
    var name = document.getElementById("TenSP").value;
    var price = document.getElementById("GiaSP").value;
    var imgProduct = document.getElementById("HinhSP").value;
    var descrip = document.getElementById("description").value;
    //Tạo đối tượng product từ lớp đối tượng product
    var product = new Product("", name, price, imgProduct, descrip);
    console.log(product);
    //Gọi lại function addProduct từ đối tượng services
    services.addProduct(product).then(function(result) {
            getListProducts();
            //Tat modal 
            document.getElementById("close").click();
        })
        .catch(function(error) {
            console.log(error);
        });
}