/*""""""""""""""""""""""""""""""""""""""""*/
/*""""""""""""""" Variable """""""""""""""*/
/*""""""""""""""""""""""""""""""""""""""""*/
let input_name = document.getElementById("input_name")
let input_add = document.getElementById("input_add")
let name_target = undefined
let tasks = document.getElementById("tasks")
let tasks_todo = document.getElementsByClassName("todo")



/*""""""""""""""""""""""""""""""""""""""""*/
/*""""""""""""""" GetInput """""""""""""""*/
/*""""""""""""""""""""""""""""""""""""""""*/
input_name.addEventListener("keypress", event => {
    name_target = event.target
    if (event.key === "Enter") {
        input_add.click()
    }
})
input_add.addEventListener("click", event => {
    if (name_target.value.trim()){
        todo(name_target.value.trim())
        // console.log(name_target.value.trim())
        name_target.value = ''
    }
})



/*""""""""""""""""""""""""""""""""""""""""*/
/*"""""""""""""""  Tasks   """""""""""""""*/
/*""""""""""""""""""""""""""""""""""""""""*/
const todo = (value) => {
    let div = document.createElement("div")
    div.className = "todo"
    let input = document.createElement("input")
    input.className = "name"
    input.type = "text"
    input.value = value
    input.disabled = true
    let div2 = document.createElement("div")
    div2.className = "action"
    let edit = document.createElement("button")
    edit.className = "edit"
    edit.innerHTML = "Edit"
    let remove = document.createElement("button")
    remove.className = "remove"
    remove.innerHTML = "Remove"

    /* */
    div2.appendChild(edit)
    div2.appendChild(remove)
    div.appendChild(input)
    div.appendChild(div2)
    tasks.appendChild(div)

    ;[...tasks_todo].forEach(v0 => {
        ;[v0.children].forEach(v1 => {
            ;[v1[1].children].forEach(v2 => {
                /////////////////////////////////
                v2[0].addEventListener("click", eventEdit => {
                    v0.children[0].disabled = false
                    v0.children[0].addEventListener("keypress", eventEdit1 => {
                        if (eventEdit1.key === "Enter") {
                            v0.children[0].disabled = true
                        }
                    })
                })
                /////////////////////////////////
                v2[1].addEventListener("click", eventEdit => {
                    v0.remove()
                })
            })
        })
    })
}