function Services() {
    this.fetchData = function() {
        return axios({
            url: "https://625569258646add390d66a94.mockapi.io/api/data",
            method: "GET",
        })
    };
    this.deleteData = function(id) {
        return axios({
            url: "https://625569258646add390d66a94.mockapi.io/api/data/" + id,
            method: "DELETE",
        })
    };
    this.addUserAPI = function(user) {
        return axios({
            url: "https://625569258646add390d66a94.mockapi.io/api/data",
            method: "POST",
            data: user,
        })
    }
    this.getDataAPI = function(id) {
        return axios({
            url: "https://625569258646add390d66a94.mockapi.io/api/data",
            method: "POST",
            data: user,
        })
    }
}