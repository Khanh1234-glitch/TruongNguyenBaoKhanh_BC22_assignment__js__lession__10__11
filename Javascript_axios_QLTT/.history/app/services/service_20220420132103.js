function Services() {
    this.fetchData = function() {
        return axios({
            url: "https://625569258646add390d66a94.mockapi.io/api/data",
            method: "GET",
        })
    }
}