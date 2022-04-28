var services = new Services();

function getlistUser() {
    services.fetchData()
        .then(function(result) {
            console.log(result);
        })
        .catch(function(error) {

        })
}