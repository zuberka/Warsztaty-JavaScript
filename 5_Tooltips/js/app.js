/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener("DOMContentLoaded", function () {

    var tooltipArr = document.getElementsByClassName('tooltip');
    console.log(tooltipArr);


   for( var i = 0; i < tooltipArr.length; i++){

       tooltipArr[i].addEventListener('mouseover', function () {

        var newSpan = document.createElement('span');
        newSpan.innerText = this.dataset.text;
        newSpan.classList.add('tooltipText');
        this.appendChild(newSpan);

       });

       tooltipArr[i].addEventListener('mouseout', function () {

           var spanDelete=this.querySelector('span');

           spanDelete.parentElement.removeChild(spanDelete);

       });
   }

});

