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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        `
    }
}