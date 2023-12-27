function greet() {
  const name = localStorage.getItem('name');
  if (name) {
    document.getElementById('greeting').innerHTML = 'Hello, ' + name + '!';
  }else {
    document.getElementById('greeting').innerHTML = 'Hello, there!';
  }
}  

function save() {
  const name = document.getElementById("name").value;
  localStorage.setItem("name", name);
  greet();
}

function del() {
  const name = localStorage.clear();
  }

const form = document.getElementById('myForm');

       form.addEventListener('submit', function (event) {
        event.preventDefault();
      
         const name = form.elements['name'].value;
      
         console.log('Form submitted with the following data:');
         console.log('Name:', name);
       });