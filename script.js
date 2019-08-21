let ul = document.getElementById('list');
let taskInput = document.getElementById('input');

// Remove clicked <li> onclick
document.getElementById('list').addEventListener('click',function(e) {
  let tgt = e.target;
  if (tgt.tagName == 'LI') {
    tgt.remove()
  }
});

// Adding items to a list when enter is pressed
document.getElementById('input').addEventListener('keydown', function(key) {
  if(key.keyCode == 13) {

    let li = document.createElement('li');
    li.innerHTML = taskInput.value;
    ul.appendChild(li);

    taskInput.value = '';
}
});
