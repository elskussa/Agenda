const dias = document.querySelector('.dias');
const dia = document.querySelectorAll('.dia');
const notas = document.querySelector('.Notas');
const nota = document.querySelectorAll('.Nota');
const anotaciones = document.querySelectorAll('.anotaciones')
const botonCerrar = document.querySelectorAll('.doneButton');
const botonAñadir = document.querySelectorAll('.añadir');
const botonComentario = document.querySelectorAll('.botonComentario');
const botonMarcarImportante = document.querySelectorAll('.botonImportante');
const botonEliminar = document.querySelectorAll('.eliminar');
const botonEliminarTodas = document.querySelectorAll('.eliminarTodas');
const botonEditar = document.querySelectorAll('.editar');

dia.forEach((dia, index) => {
    const notaCorrespondiente = nota[index];
    const mostrarNota = () => {
        dias.style.display = 'none';
        notas.style.display = 'block';
        nota.forEach((n) => n.style.display = 'none');
        botonCerrar.forEach((botonCerrar) => {botonCerrar.style.display = 'block'})
        notaCorrespondiente.style.display = 'block';
    };
    dia.removeEventListener('click', mostrarNota);
    dia.addEventListener('click', mostrarNota);
});

botonCerrar.forEach((botonCerrar) => {
    const cerrar = () => {
        notas.style.display = 'none';
        dias.style.display = 'grid';
        nota.forEach((n) => {
            n.style.display = 'none';
        });
        botonCerrar.style.display = 'none'
    };
    botonCerrar.removeEventListener('click', cerrar);
    botonCerrar.addEventListener('click', cerrar);
});

botonAñadir.forEach((nota, i) => {
    const añadirNota = () =>{
        const notaCorrespondienteABotonAñadir = anotaciones[i];
        const anotacion = document.createElement('div');
        anotacion.className = 'anotacion';

        const checkboxTextoDiv = document.createElement('div');
        checkboxTextoDiv.className = 'checkboxTextoDiv';
        const comentarioDiv = document.createElement('div');
        comentarioDiv.className = 'comentario';
        const marcaImportanteDiv = document.createElement('div');
        marcaImportanteDiv.className = 'importante';

        if (notaCorrespondienteABotonAñadir.children.length < 7) {

            notaCorrespondienteABotonAñadir.appendChild(anotacion);
            anotacion.appendChild(checkboxTextoDiv);
            anotacion.appendChild(comentarioDiv);
            anotacion.appendChild(marcaImportanteDiv);

        }        
    
        const textoContainer = document.createElement('div');
        textoContainer.className = 'textoContainer';
        checkboxTextoDiv.appendChild(textoContainer);
        const text = document.createElement('input');
        text.type = 'text';
        text.className = 'texto';
        checkboxTextoDiv.appendChild(text)

        text.addEventListener('blur', () => {
            textoContainer.textContent = ' ';
            const textArray = text.value.split('');

            textArray.forEach((letra, index) => {
                setTimeout(() => {
                    textoContainer.textContent += letra;
                }, index * 110)
            })
            text.remove()
        });

        const seleccionado = () => {
            anotacion.addEventListener('click', () => {
                anotacion.classList.toggle('selected');
            });

        }
        anotacion.removeEventListener('click', seleccionado);
        anotacion.addEventListener('click', seleccionado);   
        
        const marcarImportante = () => {
            const anotacionSeleccionada = document.querySelector('.selected');
            if(anotacionSeleccionada) {
                if(marcaImportanteDiv.textContent === "importante") {
                marcaImportanteDiv.textContent = " ";
                } else {
                    marcaImportanteDiv.textContent = "importante";
                }
            }
        }
        botonMarcarImportante.forEach((boton) => {
            boton.removeEventListener('click', marcarImportante);
            boton.addEventListener('click', marcarImportante);
        });

        const añadirComentario = () => {
            const comentarioSeleccionado = document.querySelector('.selected');
            const comentarioInput = document.createElement('input');
            comentarioInput.type = 'text';
            comentarioInput.className = 'inputComentario';
            if(comentarioSeleccionado) {
                comentarioDiv.appendChild(comentarioInput);
            }

            comentarioInput.addEventListener('blur', () => {
                const comentarioInputArray = comentarioInput.value.split('');
                comentarioInputArray.forEach((letraComentario, index) => {
                    setTimeout(() => {
                        comentarioDiv.textContent += letraComentario;
                    }, index * 110);
                });
            });
        };
        
        botonComentario.forEach((botonComentario) => {
            botonComentario.removeEventListener('click', añadirComentario);
            botonComentario.addEventListener('click', añadirComentario);
        });
        
        const eliminarNota = () => {
            const notaEliminar = document.querySelector('.anotacion.selected');
            notaEliminar.remove()
        }
        botonEliminar.forEach((botonEliminar) => {
            botonEliminar.removeEventListener('click', eliminarNota);
            botonEliminar.addEventListener('click', eliminarNota);
        });

        const eliminarNotas = () => {
            const notasEliminar = document.querySelector('.anotacion');
            notasEliminar.remove()
        }
        botonEliminarTodas.forEach((botonEliminarTodas) => {
            botonEliminarTodas.removeEventListener('click', eliminarNotas);
            botonEliminarTodas.addEventListener('click', eliminarNotas);
        });

        const editarNotas = () => {
            const textoSeleccionado = document.querySelector('.selected');
            const textoAnterior = document.querySelector('.textoContainer');
            const texto = textoAnterior.textContent;
            const textoNuevo = prompt('Edición de nota', texto);

            const textoNuevoArray = textoNuevo.split('');
            if(textoSeleccionado) {
                textoAnterior.textContent = "";
                textoNuevoArray.forEach((l, index) => {
                    setTimeout(() => {
                        textoContainer.textContent += l;
                    }, index * 110)
                });
            }
        }
        botonEditar.forEach((botonEditar) => {
            botonEditar.removeEventListener('click', editarNotas);
            botonEditar.addEventListener('click', editarNotas);
        })
    }
    nota.removeEventListener('click', añadirNota);
    nota.addEventListener('click', añadirNota);
});
