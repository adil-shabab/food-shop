

var typed = new Typed('.animate', {
    strings: [
                "Your Favourite Dishes",
                "In Your Door Step",
                "Order Now From Our Shop",
                "Enjoy Your Food"

            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
});



function add() {
    document.querySelector('.box-1').classList.toggle('.active')
}