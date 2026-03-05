 const listaDeChistes = [
            "— ¿Qué hace una vaca en un terremoto?\n— Leche agitada.",
            "— ¿Qué le dijo una pared a la otra pared?\n— Nos vemos en la esquina.",
            "— ¿Cómo se despiden los panaderos?\n— Con-pan-dre.",
            "— ¿Qué hace un pez?\n— Nada.",
            "— ¿Cuál es el colmo de un jardinero?\n— Que siempre lo dejen plantado.",
            "— ¿Qué le dice una escoba a otra?\n— Barremos luego.",
            "— ¿Qué hace un reloj cuando tiene hambre?\n— Da las horas.",
            "— ¿Cómo se dice pañuelo en japonés?\n— Saka-moko.",
            "— ¿Qué hace una uva cuando la pisan?\n— Nada, pero luego pasa.",
            "— ¿Cómo se llama el campeón de comer lento?\n— Des-pa-cio.",
            "— ¿Qué hace una caja fuerte nadando?\n— Nada, está cerrada.",
            "— ¿Qué le dijo el semáforo al coche?\n— No me mires, me estoy cambiando.",
            "— ¿Cómo se despiden los electricistas?\n— Nos vemos… si hay corriente.",
            "— ¿Qué hace una silla cansada?\n— Se sienta.",
            "— ¿Cuál es el colmo de un sordo?\n— Que le cuenten chistes malos.",
            "— ¿Qué hace un perro con taladro?\n— Taladra.",
            "— ¿Qué le dijo una taza a otra?\n— ¿Qué taza haciendo?",
            "— ¿Cómo se llama un boomerang que no vuelve?\n— Palo.",
            "— ¿Qué hace un lápiz cuando se equivoca?\n— Borra.",
            "— ¿Cuál es el colmo de un libro?\n— Que no tenga historia.",
            "— ¿Qué le dice el mar a la playa?\n— Ola.",
            "— ¿Qué hace una piedra en el espacio?\n— Meteorito.",
            "— ¿Cómo se llama el primo vegano de Bruce Lee?\n— Broco Lee.",
            "— ¿Qué hace un plátano en pijama?\n— Se pela.",
            "— ¿Qué le dijo una cama a otra cama?\n— Descansa.",
            "— ¿Qué hace un zapato en el teléfono?\n— Llama al pie.",
            "— ¿Cuál es el animal más silencioso?\n— El piojo, porque nadie lo oye.",
            "— ¿Qué hace una cuchara en el gym?\n— Levanta sopas.",
            "— ¿Qué le dijo el cero al cero?\n— Nada.",
            "— ¿Cómo se llama un perro mago?\n— Labracadabrador.",
            "— ¿Qué hace una pizza triste?\n— Se deprime.",
            "— ¿Qué le dijo el café al azúcar?\n— Sin ti soy amargo.",
            "— ¿Qué hace una nube cuando está aburrida?\n— Pasa.",
            "— ¿Cómo se llama un oso sin dientes?\n— Osito gomita.",
            "— ¿Qué hace una escoba en una fiesta?\n— Barre el piso.",
            "— ¿Qué le dijo el suelo al pie?\n— Encima.",
            "— ¿Qué hace un tomate en el banco?\n— Hace salsa-dos.",
            "— ¿Cómo se llama el rey del helado?\n— Elado.",
            "— ¿Qué hace una gallina pensativa?\n— Huevos mentales.",
            "— ¿Cuál es el colmo del colmo?\n— Que no tenga gracia.",
            "— ¿Sabes por qué no roban de noche en África?\n— Porque de noche no se ve a nadie 🗣🔥🙀",
            "— ¿Sabes por qué los gringos no juegan ajedrez?\n— Porque les faltan las dos torres.",
            "— ¿Sabes por qué en Inglaterra no juegan ajedrez?\n— Porque le falta la reina.",
            "— ¿Sabes qué le dice un huérfano a otro?\n— ¿Pa’ cuándo los papás? 🙀"
        ];

        // Referencias al DOM
        const jokesContainer = document.getElementById('jokes-container');
        const rodolfoImg = document.getElementById('rodolfo-img');
        const placeholderIcon = document.getElementById('placeholder-icon');

        // Función para cargar los chistes
        function cargarChistes() {
            listaDeChistes.forEach((chiste, index) => {
                // Crear la tarjeta del chiste
                const card = document.createElement('div');
                card.className = "joke-card bg-gray-950 border border-gray-800 p-6 rounded-xl transition-all duration-300 flex flex-col justify-center relative overflow-hidden group";
                
                // Decoración sutil: número de chiste
                const number = document.createElement('span');
                number.className = "absolute top-2 right-4 text-gray-800 text-xs font-mono group-hover:text-gray-600";
                number.innerText = `#${index + 1}`;

                // Texto del chiste
                const text = document.createElement('p');
                text.className = "joke-text text-gray-300 text-lg leading-relaxed font-medium";
                text.innerText = chiste;

                // Armar tarjeta
                card.appendChild(number);
                card.appendChild(text);
                
                // Agregar al contenedor
                jokesContainer.appendChild(card);
            });
        }
        
        // Verificar si se puso una imagen manualmente en el HTML
        function verificarImagen() {
            // Si el src no está vacío, mostramos la imagen y ocultamos el icono
            if (rodolfoImg.getAttribute('src') && rodolfoImg.getAttribute('src').trim() !== "") {
                rodolfoImg.classList.remove('hidden');
                placeholderIcon.classList.add('hidden');
            }
        }

        // Iniciar
        cargarChistes();
        verificarImagen();

        // Botón de chistes antiguos
        const viewOldJokesBtn = document.getElementById('view-old-jokes-btn');
        const supportBanner = document.getElementById('support-banner');
        const mainHeader = document.getElementById('main-header');

        if (viewOldJokesBtn) {
            viewOldJokesBtn.addEventListener('click', () => {
                // Añadir transición de salida al banner
                supportBanner.classList.add('fade-out-banner');
                
                // Esperar a que termine la animación
                setTimeout(() => {
                    supportBanner.style.display = 'none';
                    
                    // Mostrar el contenido principal
                    mainHeader.classList.remove('hidden');
                    jokesContainer.classList.remove('hidden');
                    
                    // Añadir transición de entrada
                    mainHeader.classList.add('fade-in-content');
                    jokesContainer.classList.add('fade-in-content');
                }, 550);
            });
        }
