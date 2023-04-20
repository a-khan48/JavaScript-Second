let addTaskButton = document.getElementById('addTask');
let taskContainer = document.getElementById('taskContainer');
let textField = document.getElementById('textField');


addTaskButton.addEventListener('click', function(){
    var text = document.createElement(`p`);
    text.innerHTML = textField.value;
    taskContainer.appendChild(text);
    textField.value = "";
    text.addEventListener('click', function(){
        taskContainer.removeChild(text)
    })
})
