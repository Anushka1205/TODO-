let inputTag=document.getElementById("input");
let $todoList=document.getElementById("todolist");
let todoListArr=[]


function AddToList(){
    let task=inputTag.value;
    todoListArr.push(task);
    console.log(todoListArr);
    
    showlist();

    inputTag.value="";

}

function showlist(){

    $todoList.innerHTML=null;

    todoListArr.forEach((ele,idx)=>{

        let li=document.createElement("li");
        li.style.position="relative";
        let text=document.createElement("span");
        let box=document.createElement("span");
        box.style.scrollMarginLeft="150px";
        box.style.position="absolute";
        box.style.right="15px";
        let span1=document.createElement("span");
        span1.addEventListener("click", function(){
            deleteTask(idx)
        })
        let span2=document.createElement("span");
        let span3=document.createElement("span");
        span3.addEventListener("click",function(){
            editTask(idx);
        })

        text.innerText= ele;

        
        span1.innerHTML="<span>&times<span/>"
        span2.innerText="|";
        span3.innerText="Edit";
        box.append(span1,span2,span3);
        li.append(text,box);
        $todoList.append(li);
    
    });

   

}

    function deleteTask(index){
        todoListArr.splice(index,1,);
        console.log(todoListArr);
        showlist()
    }


    function editTask(index){
        let newTask=prompt("Edit the to-do List");
        if(newTask==""){
            alert("please update the task");
        }
        todoListArr.splice(index,1,newTask);
        // console.log(todoListArr);
        showlist();
    }