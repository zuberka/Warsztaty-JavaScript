/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function () {

    var mainLi = document.querySelectorAll('.nav > ul > li');


    for (var i = 0; i < mainLi.length; i++) {


        mainLi[i].addEventListener('mouseover', function () {


            var ul = this.querySelector('ul');

            if (ul) {

                ul.style.display = 'block';

            }


        });


        mainLi[i].addEventListener('mouseout', function () {


            var ul = this.querySelector('ul');

            if (ul) {

                ul.style.display = 'none';
            }

        });


    }

});





