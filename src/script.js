function imgChanger(img){
    document.querySelector(".hero-img").src=img;

    document.querySelectorAll("box-img").forEach(function(box){
        box.style.borderColor="transparent";
    });

    document.querySelectorAll(".box-img").forEach(function(box) {
        if (box.querySelector("img").src === img) {
            box.style.borderColor = "1px solid black";
        }
    });
}

