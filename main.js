const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const dateNumber = document.getElementById('fechaNumero');
const dateText = document.getElementById('fechaTexto');
const dateMonth = document.getElementById('fechaMes');
const dateYear = document.getElementById('fechaAño');




addBtn.addEventListener("click", (e)=>{

    
    e.preventDefault();
    
    const text = input.value;
    if(text !== "") {
        
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;
        p.className= "toDo";
       
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        
        ul.appendChild(li);
        
        input.value="";
        
        empty.style.display = "none";
    }

});

function addDeleteBtn() {

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent ='x';
    deleteBtn.className = 'btn-delete';

    deleteBtn.addEventListener('click', (e) => {

        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll('li');

        if (items.length === 0) {
            empty.style.display = 'block';
            

        }      
    });

    return deleteBtn;

}
const setDate = () => {
    const date = new Date();
    fechaNumero.textContent = date.toLocaleString('es', { day: 'numeric' });
    fechaTexto.textContent = date.toLocaleString('es', { weekday: 'long' });
    fechaMes.textContent = date.toLocaleString('es', { month: 'long' });
    fechaAño.textContent = date.toLocaleString('es', { year: 'numeric' });
};

setDate();