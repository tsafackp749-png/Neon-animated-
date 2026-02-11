document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;

    if(username === "" || password === ""){
        alert("Veuillez remplir tous les champs");
    } else {
        alert("Connexion réussie !");
    }
});
