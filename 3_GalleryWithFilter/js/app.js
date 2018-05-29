/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function () {


    var imgArr = document.querySelectorAll('img');

    var btnHide = document.getElementById('hideButton');

    var btnShow = document.getElementById('showButton');

    var input = document.getElementById('tagInput');


    btnHide.addEventListener('click', function () {

        var imgTag = input.value;

        input.value = '';

        for (var i = 0; i < imgArr.length; i++) {

            if (imgArr[i].dataset.imgTag.indexOf(imgTag) > -1) {

                imgArr[i].classList.add(('invisible'));
            }
        }

    });


    btnShow.addEventListener('click', function () {

        var imgTag = input.value;

        input.value = '';

        for (var i = 0; i < imgArr.length; i++) {

            if (imgArr[i].dataset.imgTag.indexOf(imgTag) > -1) {

                imgArr[i].classList.remove('invisible');
            }
        }

    });

});

