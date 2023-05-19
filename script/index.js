const addButton = document.getElementById('add-button');
const addFormInput = document.getElementById('add-form-input');
const ulList = document.querySelector('#book-list > ul');
const hideBox = document.getElementById('hide');
const searchInput = document.getElementById('searchBar');

//add book function
const handleAddBook = () => {

    const { value } = addFormInput;
    if(value.trim()) {
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteButton = document.createElement('span');
    
        bookName.innerText = value;
        deleteButton.innerText = 'Delete';
    
        bookName.classList.add('name');
        deleteButton.classList.add('delete');
        li.appendChild(bookName);
        li.appendChild(deleteButton);
        ulList.appendChild(li);
    
        addFormInput.value = '';
    }


}

addButton.addEventListener('click',handleAddBook);

//-------------------------------------------------------
 
//delete functional
const handleDeleteBook = event => {
    const {target} = event;
    if(target.className === 'delete'){
        const li = target.parentElement;
        ulList.removeChild(li);
    }
 
}
 
ulList.addEventListener('click', handleDeleteBook);
 
//--------------------------------------------------------
 
//hide books functional
const handleHideBooks = event => {
    const {target} = event;
    ///1.
    ulList.style.display = target.checked ? 'none' : 'block';     
 
    //2.
    // if(target.checked){
    //     ulList.style.display = 'none'
    // } else {
    //     ulList.style.display = 'block'
    // }
}
hideBox.addEventListener('input', handleHideBooks)
 
//--------------------------------------------------------------
 
//search books functional
const handleSearch = event => {
    const {value} = searchInput;
    console.log(value);
};
 
searchInput.addEventListener('keyup',handleSearch);

