function RickRoll(){
    document.querySelector('body').innerHTML = "<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>";
}

function.checkPass(){
    if(document.querySelector('#input').value == 'Coconut'){
        document.querySelector('#background').classList.add('matrix-effect');
        setTimeout(RickRoll , 5000);
    }
}

//listen for key
document.querySelector('#input').addEventListener('keyup',checkPass);