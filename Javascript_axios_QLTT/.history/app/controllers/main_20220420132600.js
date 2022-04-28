var services = new Services();

function getlistUser() {
    services.fetchData()
        .then(function(result) {
            console.log(result.data);
        })
        .catch(function(error) {
            console.log(error);
        })
}
getlistUser();