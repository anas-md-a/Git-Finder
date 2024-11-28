const git=new Git();
const ui= new UI();

const form= document.querySelector("form");

form.addEventListener("submit",(event) =>{
    event.preventDefault();

    const input=document.querySelector("#search-user").value;

    if (input === ""){
        alert("Please fill the input box")
    }else{
        git.getUser(input)
        .then((data) => {
            ui.showProfile(data)
            document.querySelector("#search-user").value=""
        })
        .catch(err => console.log(err))
    }

})

