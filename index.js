//dark mode
const modeToggleBtn = document.getElementById('mode-toggle');
const html = document.querySelector('html')
let toggleButtonClick = 0;
modeToggleBtn.addEventListener('click',()=>{
    modeToggleBtn.children[0].classList.toggle('hidden')
    modeToggleBtn.children[1].classList.toggle('hidden')
    html.classList.toggle('dark')
})

//adding tasks
const addTaskBtn = document.getElementById('add-task-btn');
const addTaskBox = document.getElementById('add-task-box');
const taskList = document.getElementById('task-list');
const closeButtons = document.getElementsByClassName('close');
const noTasks = document.querySelector('#no-task');
let i = 0;
addTaskBtn.addEventListener('click',addTask);
function addTask(){
    if(addTaskBox.value === ''){
        alert('Please provide a Task name');
    }else{
        const colors = ['bg-pink-500','bg-teal-500','bg-sky-500','bg-violet-500']
        const taskname = addTaskBox.value;
        taskList.innerHTML += `
        <div class="task relative grid grid-cols-12 items-center justify-start w-full rounded-lg shadow-md px-5 py-3 bg-white dark:bg-slate-800">
            <span class="h-4 w-4 rounded-full ${colors[i]} col-span-1"></span>
            <h1 class="text-lg dark:text-gray-300 col-span-10">${taskname}</h1>
            <svg class="close w-6 h-6 text-gray-800 dark:text-white col-span-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
        </div>
        `;
        i++;
        if(i==colors.length){i = 0;};
        addTaskBox.value = '';
        noTasks.classList.add('hidden')
    }
}

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('close')) {
        const taskItem = event.target.closest('.task'); // Find the closest parent task element
        if (taskItem) {
            taskItem.remove(); // Remove the task element from the DOM
        }
    }
    if(document.querySelectorAll('.task').length === 0){
        noTasks.classList.remove('hidden');
    }
});

