let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();
})

let formValidation = ()=>{
    if(input.value === ""){
        msg.innerHTML = "Post cannot be blank";
        console.log("failure")
    }else{
        console.log("success");
        msg.innerHTML = "Voila";
        acceptData();
    }
}

let data = [];

let acceptData = ()=> {
    data["text"] = input.value;
    console.log(data);
    createPost();
}

let createPost = () => {
    posts.innerHTML += 
    `<div class="card">
    <p>${data.text}</p>
    <span class="options">
    <i onClick="editPost(this)" class="bi bi-pencil-square"></i>
    <i onClick="deletePost(this)" class="bi bi-trash3-fill"></i>
    </span>   
</div>`
 input.value = "";

}

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}

let editPost = (e) => {
 input.value = e.parentElement.previousElementSibling.innerHTML;
 e.parentElement.parentElement.remove(); 
}