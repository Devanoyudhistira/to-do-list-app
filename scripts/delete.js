for(let i = 0; i < localStorage.length; i++ ){
const deletekey = localStorage.key(i);

const deleteid = JSON.parse(localStorage.getItem(deletekey))

console.log(deleteid)
}

const deletebutton = document.querySelector('.deletebutton');

console.log(deletebutton)