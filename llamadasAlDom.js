/* En el curso de Manipulación del DOM el profesor nos dice lo malo que es para el 
performance hacer muchas llamadas al DOM por lo que si quieres mejorar esto un poco, 
podrias:

En lugar de insertar en cada llamado al HTML, los almacenamos todos en un array */


const nodes = []

/* y luego en cada llamado lo añadimos al array */

tasks.forEach(({ title, done }) => {
    const element = `
         <li>
          	 <input 
                     type='checkbox' 
                     id='${title}' 
                     name='${title}' 
                     ${done && 'checked'} />
                  <label for='${title}' >${title} </label>   
         </li>`;
nodes.append(element)
});
/* por último añadimos todo el array al DOM */
app.append(nodes)

/* De esta forma reducimos la cantidad de inserciones al DOM, y mejoramos el performance un poco */




/* 
<main>
<section>
    <input type="text" name="taskInput" id="inputTask" placeholder="Agrega tu tarea">
   <button id="addTask" onclick="addTask()">Agregar tarea</button>
</section>
<section>
    <ul id="taskList"></ul>
</section>

</main> */


taskArray = [
]
function myTask(taskName){
    this.taskName = taskName
}
function showTask() {
    const taskList = document.querySelector("#taskList");
    const list = taskArray.map(item => {
        return `<li><input type="checkbox" id="doneTask">${item.taskName}</li>`;
    })
   taskList.innerHTML = list.join(''); 
}
function addTask() {
    const inputTask = document.querySelector("#inputTask");
    const taskValue = inputTask.value;
    if (!taskValue) {return}
    const task = new myTask(taskValue);
    taskArray.push(task);
    console.log(taskArray);
    inputTask.value = '';
    showTask()
}
