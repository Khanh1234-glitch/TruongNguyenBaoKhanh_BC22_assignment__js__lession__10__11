function Services() {
    this.fetchData = function() {
            return axios({
                url: "https://625569258646add390d66a94.mockapi.io/api/data",
                method: "GET",
            })
        }
        // this.deleteProduct = function(id) {
        //     return axios({
        //         url: "https://625569258646add390d66a94.mockapi.io/api/products/" + id,
        //         method: "DELETE",
        //     })
        // }
        // this.getProduct = function(id) {
        //     return axios({
        //         url: "https://625569258646add390d66a94.mockapi.io/api/products/" + id,
        //         method: "GET",
        //     })
        // }
        // this.UpdateProduct = function(product) {
        //     return axios({
        //         url: "https://625569258646add390d66a94.mockapi.io/api/products/" + product.id,
        //         method: "PUT",
        //         data: product,
        //     })
        // }
        // this.addProduct = function(product) {
        //     return axios({
        //         url: "https://625569258646add390d66a94.mockapi.io/api/products/",
        //         method: "POST",
        //         data: product,
        //     })
        // }
}