document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Cachito',
            tamano: 'Mediano/Grande',
            idctl: 421,
            imagen: 'img/cachito.webp'
        },
        {
            id: 2,
            nombre: 'Tomate',
            tamano: 'Mediano/Grande',
            idctl: 355,
            imagen: 'img/tomate.webp'
        },
        {
            id: 3,
            nombre: 'Mimi',
            tamano: 'Chico',
            idctl: 374,
            imagen: 'img/mimi.webp'
        },
        {
            id: 4,
            nombre: 'Toro',
            tamano: 'Grande',
            idctl: 411,
            imagen: 'img/toro.webp'
        },
        {
            id: 5,
            nombre: 'Lulú',
            tamano: 'Grande',
            idctl: 453,
            imagen: 'img/lulu.webp'
        },
        {
            id: 6,
            nombre: 'Pedro',
            tamano: 'Grande',
            idctl: 431,
            imagen: 'img/pedro.webp'
        },
        {
            id: 7,
            nombre: 'Indira',
            tamano: 'Mediano',
            idctl: 433,
            imagen: 'img/indira.webp'
        },
        {
            id: 8,
            nombre: 'Eren',
            tamano: 'Chico',
            idctl: 473,
            imagen: 'img/eren.webp'
        }

    ];

    const idn = 'ID #';
    const DOMitems = document.querySelector('#items');

    // Funciones

    /**
    * Dibuja todos los items a partir de la base de datos.
    */
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Tamaño
            const miNodoTamano = document.createElement('p');
            miNodoTamano.classList.add('card-text');
            miNodoTamano.textContent = info.tamano;
            // IdCtl
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${idn} ${info.idctl}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-pri');
            miNodoBoton.textContent = 'Me gusta';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', like);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoTamano);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }
    function like(evento){
        //por ahora no hace nada
    }


    // Inicio
    renderizarProductos();
    
  });