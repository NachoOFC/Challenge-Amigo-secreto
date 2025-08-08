// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos al array
function agregarAmigo() {
    // Capturar el valor del campo de entrada usando document.getElementById
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar la entrada: asegurarse de que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Actualizar el array de amigos: añadir el nombre usando el método push()
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada: restablecer el campo de texto a una cadena vacía
    inputAmigo.value = '';
    
    // Actualizar la lista visual de amigos
    mostrarAmigos();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para mostrar amigos en la lista HTML usando los requisitos específicos
function mostrarAmigos() {
    // Obtener el elemento de la lista usando document.getElementById()
    const lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente estableciendo innerHTML = ""
    lista.innerHTML = "";
    
    // Iterar sobre el arreglo usando un bucle for
    for (let i = 0; i < amigos.length; i++) {
        // Agregar elementos a la lista: crear un nuevo elemento de lista para cada amigo
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// Función para sortear un amigo de manera aleatoria
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos disponibles para sortear. Por favor, agrega al menos un amigo.');
        return;
    }
    
    // Generar un índice aleatorio usando Math.random() y Math.floor()
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado usando el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado actualizando el contenido del elemento usando document.getElementById() e innerHTML
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `🎉 El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
}
