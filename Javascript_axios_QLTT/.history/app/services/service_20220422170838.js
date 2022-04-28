function Services() {
    this.fetchData = function() {
        return axios({
            url: "https://625569258646add390d66a94.mockapi.io/api/data",
            method: "GET", //Lấy dữ liệu từ trên server xuống
        })
    };
    this.deleteData = function(id) {
        return axios({
            url: "https://625569258646add390d66a94.mockapi.io/api/data/" + id,
            method: "DELETE", //Xóa
        })
    };
    this.addUserAPI = function(user) {
        return axios({
            url: "https://625569258646add390d66a94.mockapi.io/api/data",
            method: "POST", //thêm vào
            data: user,
        })
    }
    this.getDataAPI = function(id) {
        return axios({
            url: "https://625569258646add390d66a94.mockapi.io/api/data/" + id,
            method: "GET", //Lấy thông tin
        })
    }
    this.updateUser = function(user) {
        return axios({
            url: "https://625569258646add390d66a94.mockapi.io/api/data/" + user.id,
            method: "PUT", //put là cập nhật
            data: user,
        })
    }
}