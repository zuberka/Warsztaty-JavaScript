/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */


document.addEventListener("DOMContentLoaded", function () {

    var liArray = document.querySelectorAll('.gallery li');
    var bodyEl = document.querySelector('body');

    console.log(liArray);
    console.log(bodyEl);


    for (var i = 0; i < liArray.length; i++) {

        liArray[i].addEventListener('click', function () {

            var src = this.querySelector('img').src;

            var newDiv = document.createElement('div');

            newDiv.classList.add('fullScreen');

            var newImg = document.createElement('img');
            newImg.src = src;
            newDiv.appendChild(newImg);

            var newBtn = document.createElement('button');

            newBtn.classList.add('close');

            newDiv.appendChild(newBtn);

            bodyEl.appendChild(newDiv);

            newBtn.addEventListener('click', function () {

                var div = this.parentElement;

                div.parentElement.removeChild(div);

            })

        });
    }

});


