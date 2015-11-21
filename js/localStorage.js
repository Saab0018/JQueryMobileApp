var page = {
    pageNumber: 1
}
$(document).on("mobileinit", function(ev) {});
$(document).on("ready", function(ev) {
    $(".start").on("click", function(ev) {
        ev.preventDefault();
        if (localStorage.getItem("step")) {
            page = JSON.parse(localStorage.getItem("step"));
        }
        var returnPage = "#firstdrink" + page.pageNumber.toString();
        $.mobile.pageContainer.pagecontainer("change", returnPage);
    });
    $(".nextB").on("click", function(ev) {
        page.pageNumber += 1;
        localStorage.setItem("step", JSON.stringify(page));
    });
    $(".backB").on("click", function(ev) {
        page.pageNumber -= 1;
        localStorage.setItem("step", JSON.stringify(page));
    })
});