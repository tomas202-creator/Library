const input = document.querySelector('input')
const input_title = document.querySelector('.title')
const input_author = document.querySelector('.author')
const input_pages = document.querySelector('.pages')
const input_read = document.getElementById('read')
const button = document.querySelector('button')
const div = document.querySelector('.library')
input_title.addEventListener('click', () =>{
  input_title.value = '';
})
input_author.addEventListener('click', () =>{
  input_author.value = '';
})
input_pages.addEventListener('click', () =>{
  input_pages.value = '';
})
button.addEventListener('click', () =>{
  const myText = input_title.value;
  const myAuthor = input_author.value;
  const PagesRead = input_pages.value;
  
  input_title.value = '';
  input_author.value = '';
  input_pages.value = '';
  
  const box = document.createElement('div')
  box.setAttribute('class', 'card')
  div.appendChild(box)
  const title = document.createElement('h1')
  title.textContent = myText;
  box.appendChild(title)
  const author = document.createElement('span')
  author.textContent = 'Author: ' + myAuthor;
  box.appendChild(author)
  console.log(author)
  const pages = document.createElement('span')
  pages.textContent = 'Pages read: ' + PagesRead;
  box.appendChild(pages)
  const read = document.createElement('button')
  read.setAttribute('class', 'btn2')
  read.addEventListener('click', () => {
  if (read.textContent === 'READ') {
       read.textContent = 'NOT READ';
       read.setAttribute('style', 'border: solid rgb(155, 39, 39) 3px; color: rgb(155, 39, 39);')
   } else {
       read.textContent = 'READ';
       read.setAttribute('style', 'border: solid rgb(42, 126, 39) 3px; color: rgb(42, 126, 39);')
   }
 });
  if(input_read.checked){
    read.textContent = 'READ';
    read.setAttribute('style', 'border: solid rgb(42, 126, 39) 3px; color: rgb(42, 126, 39);')
  }
  else if(!input_read.checked){
    read.textContent = 'NOT READ'
    read.setAttribute('style', 'border: solid rgb(155, 39, 39) 3px; color: rgb(155, 39, 39);')
  }
  box.appendChild(read)
  const btn = document.createElement('button')
  btn.setAttribute('style', 'margin-left: 10px;')
  btn.setAttribute('class', 'btn')
  btn.textContent = 'DELETE'
  box.appendChild(btn)

  btn.addEventListener('click', () =>{
   div.removeChild(box)
});

  input.focus;
});
