// alert('hi')
var addButton = document.getElementById('add')
addButton.addEventListener('click',addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

var removeAllButton = document.getElementById('removeAll')
removeAllButton.addEventListener('click',removeAllItem)

var ul = document.getElementById('list')
var li;

function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textNode = document.createTextNode(item);//now this text node will be put in label

    if(item===''){
        return false;//it doesnt will work anything
    }
    else{
        //create li
        li = document.createElement('li')

        //create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check') //we can set id or class to any element with value as second para

        //create label
        var label =document.createElement('label')

        //add these elements on web page
        ul.appendChild(label);
        li.appendChild(checkbox);
        li.appendChild(label);
        
        
        ul.insertBefore(li,ul.childNodes[0]);//takes two para what you want to add and where so at the very first node . 
        li.className = 'visual';
        input.value='';//clearing the input value
    }
}

function removeItem(){
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
    } 
}

function removeAllItem(){
    
     li = ul.children;
    
     for (let index = li.length-1; index>=0; index--) {  //this for loop will not work if iterated from 0 to length-1 because after deleting at index 0 list of index 1 comes at index 1 and hence now that will not be deleted and then at index 2 will be deleted as index 1 
         li[index].remove();
     }
   //ul.remove()
}
