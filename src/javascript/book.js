const bookImg = document.getElementById('book-artworks');

let count = 0;

bookImg.addEventListener('click', function () {
    count++;

    if (count >= 10) {
        count = 0;
    }

    bookImg.src = "../../assets/images/physical/book" + count + ".png";
});