/**
 * Created by Jacek on 2015-12-16.
 */

//1. Znaleźć wszystkie elementy
//2. utworzyc nowy element ktory pojawia się po wprowadzeniu nieprawidlowego taksu
//3. Event na guzik dodajacy nowy task do listy
//4. utworzenie nowych elemnetów li i h1
//5. wartosc inputa przypisac do h1,
//6. warunek if - jezeli wprowadzony task jest prawidlowy to tworzymy btn delete i complete
//7. el pkt 2 to licznik counter
//8. dolaczamy nowe el do DOM
//9. event na btn Complete, zmiana koloru
//10. event na btn Delete - usuniecie tasku
//11. warunek elese - informacja o nieprawidlowo wprowadzonym tasku, konice eventu na guzik pkt 3
//12. event na ostatni guzik


document.addEventListener('DOMContentLoaded', function () {

    var taskEl = document.getElementById('taskInput'); //var text
    var addTaskBtn = document.getElementById('addTaskButton');
    var listEl = document.getElementById('taskList');
    var removeBtn = document.getElementById('removeFinishedTasksButton');

    var counter = 0;

    var errorEl = document.createElement('span');
    listEl.appendChild(errorEl);


    addTaskBtn.addEventListener('click', function () {

        var newLi = document.createElement('li');
        var newH1 = document.createElement('h1');
        newH1.innerText = taskEl.value;


        if (taskEl.value.length > 5 && taskEl.value.length < 100) {

            taskEl.value = '';

            counter++;

            errorEl.innerText = counter;



            var deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Delete';

            var completeBtn = document.createElement('button');
            completeBtn.innerText = 'Complete';

            newLi.appendChild(newH1);
            newLi.appendChild(deleteBtn);
            newLi.appendChild(completeBtn);
            listEl.appendChild(newLi);


            completeBtn.addEventListener('click', function () {


                if (newLi) {
                    newLi.style.color = "red";
                    newLi.classList.add('done');

                }else{
                    newLi.style.color = "black";
                    newLi.classList.remove('done');

                }
            });

            deleteBtn.addEventListener('click', function () {

                newLi.parentElement.removeChild(newLi);

                counter--;

                errorEl.innerText = counter;
            })

        } else {

            errorEl.innerText = 'Please type task witch content min 5 and max 100 characters.';
            errorEl.style.color='red';
        }
    });


    removeBtn.addEventListener('click', function () {

        var delAll = document.querySelectorAll('.done');

        for (var i = 0; i < delAll.length; i++) {
            delAll[i].parentElement.removeChild(delAll[i]);
            counter--;
        }
        errorEl.innerText = counter;
    });
});











