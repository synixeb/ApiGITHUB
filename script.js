btn.onclick = () => {
    fetch ( "https://api.github.com/users/"+champ.value)
        .then(reponse => reponse.json())
        .then(data => {
        output.texContent = "";
        output.textContent = data.name;
        const img = document.createElement("img") ;
        img.src = data.avatar_url ;
        img.width = "100" ;
        output.appendChild(img) ;
    })
}