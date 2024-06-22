const search = () => {
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("product-list");
    const products = storeItems.getElementsByClassName("product");
    const pname = storeItems.getElementsByTagName("h2");

    for (var i = 0; i < pname.length; i++) {
        let match = products[i].getElementsByTagName('h2')[0];

        if (match) {
            let textValue = match.textContent || match.innerHTML;

            if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                products[i].style.display = "";
            } else {
                products[i].style.display = "none";
            }
        }
    }
}