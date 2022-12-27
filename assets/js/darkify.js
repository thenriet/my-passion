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

const darkButton = document.querySelector("#darkTrigger");
darkButton.addEventListener('click', () => {
    if (darkButton.style.backgroundColor === 'white') {
        darkButton.style.backgroundColor = 'black';
    } else {
        darkButton.style.backgroundColor = 'white';
    }
}
)