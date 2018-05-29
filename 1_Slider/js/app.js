/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener("DOMContentLoaded", function () {

    var nextButton = document.getElementById("nextPicture");
    var prevButton = document.getElementById('prevPicture');

    var listEl = document.getElementsByTagName("li");
    var listArr = [];
    var counter = 0;

    for (var i = 0; i < listEl.length; i++) {
        listArr.push(listEl[i])
    }

    listArr[counter].classList.add('visible');

    nextButton.addEventListener('click', function () {
        listArr[counter].classList.remove('visible');
        counter++;
        if (counter >= listArr.length) {
            counter = 0
        }
        listArr[counter].classList.add('visible');
    });

    prevButton.addEventListener('click', function () {
        listArr[counter].classList.remove('visible');
        counter--;
        if (counter < 0) {
            counter = listArr.length - 1
        }
        listArr[counter].classList.add('visible');
    })
});
