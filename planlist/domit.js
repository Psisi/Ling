let priceList = document.querySelectorAll('.pricing-price');

for(let i = 0; i < priceList.length; i++) {
    priceList[i].onmouseenter = function() {
        let price = priceList[i].innerHTML;
        if (price !== 'FREE') {
        priceList[i].innerText = "$100 for the first month";  
        priceList[i].style.color = 'red';
        priceList[i].style.fontSize = '25PX';
        };
    };  
}

