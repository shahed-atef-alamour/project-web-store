var myButton = document.getElementById("submitBtn")
var myTable = document.getElementById("myTable")

myButton.addEventListener("click", addProductToTable)

var index=1
function addProductToTable() {
    event.preventDefault();
    var productNameInput = document.getElementById("productName")
    var productPriceInput = document.getElementById("productPrice")
    var productImageNameInput = document.getElementById("productImageName")
    var ProductratingInput = document.getElementById("productrating")

    var productName = productNameInput.value;
    var productPrice = productPriceInput.value;
    var productImageName = productImageNameInput.value;
    var Productrating =ProductratingInput.value;

    var myTr=document.createElement("tr")

    var myTd1=document.createElement("td")
    var myTd2=document.createElement("td")
    var myTd3=document.createElement("td")
    var myTd4=document.createElement("td")
    var myTd5=document.createElement("td")
    myTd1.textContent=index;
    index++;
    myTd2.textContent=productName
    myTd3.textContent=productPrice
    myTd4.textContent=productImageName
    myTd5.textContent=Productrating

    myTr.appendChild(myTd1)
    myTr.appendChild(myTd2)
    myTr.appendChild(myTd3)
    myTr.appendChild(myTd4)
    myTr.appendChild(myTd5)
    myTable.appendChild(myTr)}