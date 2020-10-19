window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    setInterval(function(){
        loader.className += " hidden"; // class "loader hidden"
    },10000);
});

