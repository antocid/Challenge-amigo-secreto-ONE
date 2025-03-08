/function generarAmigoSecreto() {
    let amigoSecreto = listaAmigoSorteados[listaAmigoSorteados.length - 1];
    console.log(amigoSecreto);
    console.log(listaAmigoSorteados);    
    
    if (listaAmigoSorteados.length == agregarAmigo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los amigos posibles');
    } else {
        
        if (listaAmigoSorteados.includes(amigoSecreto)) {
            return amigoSecreto(); 
        } else {
            listaAmigoSorteados.push(amigoSecreto);
            return amigoSecreto;
        }
    }
}



function agregarAmigo() {
   
    const amigoInput = document.getElementById('amigo');
    const nombreAmigo = amigoInput.value.trim(); 

    
    if (nombreAmigo !== '') {
        
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = nombreAmigo; 
       
        const listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.appendChild(nuevoAmigo);

       
        amigoInput.value = '';
    } else {
        alert('Por favor, escribe un nombre.');
    }
}
function sortearAmigo() {
    
    const listaAmigos = document.getElementById('listaAmigos');
    const amigos = listaAmigos.getElementsByTagName('li'); 

    
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    
    const amigoSorteado = amigos[indiceAleatorio].textContent;

    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 
    const nuevoResultado = document.createElement('li');
    nuevoResultado.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(nuevoResultado);
}

function reiniciar() {
    
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    
    const amigoInput = document.getElementById('amigo');
    amigoInput.value = ''; 
}
