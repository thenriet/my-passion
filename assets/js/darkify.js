$("#darkTrigger").click(function () {
    if ($("main").hasClass("dark")) {
        $("main").removeClass("dark");
        $(".navbar").removeClass("dark");
    }
    else {
        $(".navbar").addClass("dark");
        $("main").addClass("dark");
    }
});