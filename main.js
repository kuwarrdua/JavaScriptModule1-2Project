//JavaScript
let ul = document.querySelector('ul');


//function-1 
/*
Used for
-Creating li, para for putting the value of input field, checkbox and button
-Used for setting attributes like class and onclick properties
-Used for appending the fields created into the ul
-Finally the last statement used to clear the input field after adding the task
*/

function newListItem() {
    let li = document.createElement('li');
    li.setAttribute('id', 'carlist');
    let chkbox = document.createElement('input');
    chkbox.setAttribute('type', 'checkbox');
    chkbox.setAttribute('class', 'tickbox');
    chkbox.setAttribute('onclick', 'playSound()');
    li.appendChild(chkbox);
    let delBtn = document.createElement('button');
    delBtn.innerHTML = 'Delete';
    delBtn.setAttribute('class', 'delete');
    delBtn.setAttribute('onclick', 'removeItem()');
    let input = document.getElementById('inputfield').value;
    let p = document.createElement('p');
    p.setAttribute('class', 'racing');
    p.innerHTML = input;
    li.appendChild(p);
    li.appendChild(delBtn);
    ul.appendChild(li);
    document.getElementById('inputfield').value = '';
}

//used for seleting the button to add the list items
let addbtn = document.getElementById('addtask');
addbtn.addEventListener('click', newListItem);

//function describing
/*
-The way to remove the list element from the list generated
-IMP!! -- Just one thing that WE HAVE TO CLICK THE BUTTON TWICE FOR THE FIRST TIME TO REMOVE THAT AND AFTER THAT IT WORKS ON A SINGLE CLICK
*/
function removeItem() {
    let delBtnClick = document.getElementsByClassName('delete');
    for (let j = 0; j < delBtnClick.length; j++) {
        delBtnClick[j].addEventListener('click', justRemove);

        function justRemove() {
            let parent = this.parentElement;
            parent.classList.toggle('fade');
            parent.remove();
        }
    }
}


//Function-3
/*
DESCRIBING
- The way to add sound when the checkbox is ticked and works pretty fine
-The styling of the text when the checkbox is ticked will work after tick and untick on the 3rd time(REASON NOT FOUND)
-The position of the checked li to the bottom and will work after tick and untick on the 2nd time(REASON UNIDENTIFIED)
*/
function playSound() {
    var selectedText = document.getElementsByClassName('tickbox');
    for (let i = 0; i < selectedText.length; i++) {
        selectedText[i].addEventListener('click', styleText);

        function styleText(e) {
            let xy = e.target.nextElementSibling;
            if (selectedText[i].checked) {
                xy.style.textDecoration = 'line-through';
                ul.appendChild(xy.parentNode);
            } else {
                xy.style.textDecoration = 'none';
            }

        }

        var myAudio = new Audio('https://instrumentalfx.co/wp-content/upload/11/Ding-Sound-Effect.mp3');
        myAudio.play();
    }
}


//COMMENTS DESCRIBING MY ATTEMPTS FOR THE SUCCESSFUL WORKING OF THE PROJECT

//Tried to              USE THE FADE EFFECTS IN GENERAL
// function justRemove() {
//             let parent = this.parentElement;
//             parent.classList.toggle('fade');
//             parent.remove();


/*                          --- TO STYLE THE LIST ITEM
var selectedText = document.getElementsByClassName('tickbox');
  for(let i =0; i < selectedText.length; i++){
    selectedText[i].addEventListener('click', styleText);
    function styleText(){
      let ph = document.querySelectorAll('li p');
      for(let k = 0; k < ph.length; k++){
        ph[i].style.textDecoration = 'line-through';
      }
    }
  }
  */

/*                                      TO REMOVE THE LIST ITEM
function removeItem(){
  let liSelected = document.querySelectorAll('li');
  for(let i = 0; i < liSelected.length; i++){
    liSelected[i].remove();
  }
}
*/

/*                                       TO REMOVE JUST A DIFFERENT FUNCTION USED
document.getElementById('delete').onclick = removeItem;

function removeItem(e){
  e.target.parentNode.remove();
  }
  */


/*
let checkboxChange = document.querySelector('#tickbox');
console.log(checkboxChange);
for (let i = 0; i < checkboxChange.length; i++) {
    checkboxChange.addEventListener('change', addStyle)
}

function addStyle(e){
  let p = document.querySelector('p');
  if(document.getElementById('tickbox').checked == true){
    e.target.nextSibling.style.textDecoration = 'line-through'; 
  }
  }
  */

/*                --- FOR REMOVING THE LIST ITEM--- DIFFERENT FUNCTION USED
  let delBtnClick = document.getElementsByClassName('delete');  
for (let j = 0; j < delBtnClick.length; j++) {
    delBtnClick[j].addEventListener('click', removeItem);
}

function removeItem(){
  let createdLi = document.querySelector('li');
  createdLi.parentNode.removeChild(createdLi);
  }
  */




/*                --- FOR ADDING A STYLE--- AGAIN A DIFFERENT METHOD USED

let checkboxChange = document.querySelectorAll('#tickbox');
console.log(checkboxChange);
for (let i = 0; i < checkboxChange.length; i++) {
    checkboxChange[i].addEventListener('change', addStyle)
}

function addStyle(e){
  if(checkboxChange.checked){
    e.target.nextElementSibing.style.textDecoration = 'line-through'; 
  }
}
*/

/*                            --- STYLING THE PARA
 var selectedText = document.getElementsByClassName('tickbox');
  for(let i =0; i < selectedText.length; i++){
    selectedText[i].addEventListener('click', styleText);
    function styleText(e){
      let xy = this.nextElementSibing;
      xy.style.color = 'red';
    }
    */




/*
function removeItem() {
    
}

let delBtnClick = document.getElementsByClassName('delete');
console.log(delBtnClick); 
for (let j = 0; j < delBtnClick.length; j++) {
    delBtnClick[j].addEventListener('click', removeItem);
}
*/




/*
                ---FOR THE CREATION OF THE ELEMENTS

let li = document.createElement('li');
  let p = document.createElement('p');
  p.innerHTML = '';
 
  li.appendChild(p);
  ul.appendChild(li);

  let p = document.createElement('p');
   p.setAttribute('class','racing');
   p.innerHTML = input;
   
   let chkbox = document.createElement('input');
  chkbox.setAttribute('type', 'checkbox');
  li.appendChild(chkbox);
   li.appendChild(p);
   ul.appendChild(li);

  
*/