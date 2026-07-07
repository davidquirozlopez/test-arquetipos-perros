// Base de datos de preguntas
const questionsDatabase = [
    // BLOQUE 1: El Insatisfecho
    { id: 1, text: "Cuando le impiden acceder a algo que desea (comida, salir, saludar, perseguir), insiste aumentando la intensidad (ladra, gruñe, tira de la correa, se impacienta o muerde).", archetype: "Insatisfecho", type: "+" },
    { id: 2, text: "Si una actividad se interrumpe (juego, paseo, exploración), le cuesta bajar revoluciones y \"pide más\".", archetype: "Insatisfecho", type: "+" },
    { id: 3, text: "Ante una puerta, reja o ventana cerrada, \"no se rinde\" (rasca, empuja, llora, ladra o gruñe) hasta lograr lo que quiere.", archetype: "Insatisfecho", type: "+" },
    { id: 4, text: "Si no puede alcanzar un estímulo (un perro, una persona, un objeto), redirige la excitación a la correa, a la ropa o a objetos, mordiéndolos, rascándolos o saltando sobre ellos.", archetype: "Insatisfecho", type: "+" },
    { id: 5, text: "Cuando hay comida o premio visible, pero no disponible, se frustra rápido (ladra, gruñe, golpea, salta o muerde).", archetype: "Insatisfecho", type: "+" },
    { id: 6, text: "En el paseo, si no puede ir donde quiere, tira de la correa con insistencia, ladra, gruñe, salta o muerde.", archetype: "Insatisfecho", type: "+" },
    { id: 7, text: "Si una persona deja de interactuar con él, el perro reclama su atención con más intensidad (empuja, golpea con las patas o con el hocico, insiste).", archetype: "Insatisfecho", type: "+" },
    { id: 8, text: "En contextos de espera (fila, semáforo, recepción veterinaria), se inquieta y le cuesta tolerar la pausa.", archetype: "Insatisfecho", type: "+" },
    { id: 9, text: "Tras un episodio de frustración (en el que no obtuvo lo que quería), queda \"encendido\" y tarda en recuperar la calma.", archetype: "Insatisfecho", type: "+" },
    { id: 10, text: "Si algo le incomoda físicamente o en el ambiente, se muestra más impaciente y cambia de postura o de lugar constantemente.", archetype: "Insatisfecho", type: "+" },
    { id: 11, text: "Cuando no obtiene lo que quiere, puede rendirse sin escalar la conducta (se retira y se queda tranquilo).", archetype: "Insatisfecho", type: "-" },
    { id: 12, text: "Si le ponen límites claros (barrera física, orden, regaño), aunque le incomode, los acepta sin necesidad de insistirle demasiado.", archetype: "Insatisfecho", type: "-" },
    { id: 13, text: "En la casa, cuando tienes su juguete favorito o comida deliciosa en tus manos y no se lo entregas, el perro permanece tranquilo sin exigirte que le des el objeto.", archetype: "Insatisfecho", type: "-" },
    { id: 14, text: "Cuando hay una puerta cerrada o una barrera que le bloquea el paso, la respeta y busca otra actividad.", archetype: "Insatisfecho", type: "-" },
    { id: 15, text: "En los paseos, explora y olfatea sin tensar la correa, incluso ante elementos atractivos del entorno (perros, personas, juguetes, otros animales, etc.).", archetype: "Insatisfecho", type: "-" },

    // BLOQUE 2: El Inseguro
    { id: 16, text: "Ante ruidos inesperados (portazo, moto, grito), se sobresalta y busca alejarse o esconderse.", archetype: "Inseguro", type: "+" },
    { id: 17, text: "Con personas desconocidas prefiere aumentar la distancia y evita el contacto directo.", archetype: "Inseguro", type: "+" },
    { id: 18, text: "Si alguien se acerca de forma directa o rápida, se agacha, baja su cola, se queda inmóvil o se retira, evitando el contacto.", archetype: "Inseguro", type: "+" },
    { id: 19, text: "En lugares nuevos explora poco, se esconde o se queda cerca de la familia o de las personas conocidas.", archetype: "Inseguro", type: "+" },
    { id: 20, text: "En exteriores con tráfico o mucha actividad, se muestra inquieto, intranquilo, atento a cualquier movimiento o le cuesta relajarse.", archetype: "Inseguro", type: "+" },
    { id: 21, text: "Al encontrarse con otros perros, los evita o intenta pasar lejos aunque el otro sea amistoso.", archetype: "Inseguro", type: "+" },
    { id: 22, text: "Cuando no puede escapar (correa corta, espacio reducido), su incomodidad aumenta notablemente (llora, tiembla, orina o defeca), con su cuerpo agachado y trata de evitar el contacto.", archetype: "Inseguro", type: "+" },
    { id: 23, text: "En casa, si oye sonidos del exterior (pasos, voces, ascensor), se muestra alerta (se tensiona, ladra, gruñe, observa atentamente o se eriza), permaneciendo en el sitio, con su cola abajo y sus orejas hacia atrás, o busca dónde esconderse.", archetype: "Inseguro", type: "+" },
    { id: 24, text: "Le cuesta recibir comida, snacks o juguetes directamente de la mano de personas que no conoce.", archetype: "Inseguro", type: "+" },
    { id: 25, text: "Si durante un paseo algo lo asusta, intenta regresar inmediatamente a su lugar seguro (la casa, el auto, sus tutores).", archetype: "Inseguro", type: "+" },
    { id: 26, text: "Si aparece algo nuevo en el entorno, se aproxima con curiosidad a olfatearlo y explorarlo.", archetype: "Inseguro", type: "-" },
    { id: 27, text: "Puede permanecer en un lugar transitado (vía pública, centro comercial, reunión social, visitantes en casa), sin estar pendiente de las salidas y sin intentar esconderse.", archetype: "Inseguro", type: "-" },
    { id: 28, text: "Cuando se acerca otro perro o una persona nueva, mantiene una postura relajada (cuerpo sin rigidez o sin tensión) o busca interactuar de forma amistosa.", archetype: "Inseguro", type: "-" },
    { id: 29, text: "Si se asusta o sobresalta, se recupera rápido (menos de 1 minuto) sin quedar afectado por la experiencia y continúa su actividad tranquilamente.", archetype: "Inseguro", type: "-" },
    { id: 30, text: "En espacios cerrados (pasillo, ascensor), tolera la cercanía de los desconocidos, sin dar señales de incomodidad o estrés.", archetype: "Inseguro", type: "-" },

    // BLOQUE 3: El Dependiente
    { id: 31, text: "Si su figura de apego (humano, animal u objeto) se mueve por la casa, el perro la sigue constantemente y se inquieta si no lo logra.", archetype: "Dependiente", type: "+" },
    { id: 32, text: "Si una barrera física (puerta, reja, jaula, atado a un sitio) lo separa de su figura de apego (humano, animal u objeto), aumenta su inquietud (ladra, gime, llora, aúlla, rasca la puerta/barrera) o intenta escapar para reunirse con ella.", archetype: "Dependiente", type: "+" },
    { id: 33, text: "En exteriores busca contacto frecuente (miradas constantes, se pega a las piernas, contacto físico, cercanía) con su figura de apego (humano, animal u objeto) para sentirse seguro.", archetype: "Dependiente", type: "+" },
    { id: 34, text: "Cuando está incómodo, solicita activamente apoyo humano (se sube encima, empuja, pide que lo carguen, pide atención, llora o gime).", archetype: "Dependiente", type: "+" },
    { id: 35, text: "Si se queda solo en un lugar, intenta activamente recuperar la compañía (llora, aúlla, los busca) y no se tranquiliza hasta que lo consigue.", archetype: "Dependiente", type: "+" },
    { id: 36, text: "En presencia de otras personas o de otros perros, prefiere mantenerse junto a su figura de apego (humano, animal u objeto) antes que explorar o interactuar libremente.", archetype: "Dependiente", type: "+" },
    { id: 37, text: "Si su figura de apego (humano o animal) interactúa con otro perro o persona, interrumpe o se interpone entre ellos para recuperar su atención.", archetype: "Dependiente", type: "+" },
    { id: 38, text: "El perro necesita mantener contacto visual constante con su figura de apego (humano, animal u objeto) y evita perderla de vista.", archetype: "Dependiente", type: "+" },
    { id: 39, text: "Frente a elementos nuevos en el entorno, mira a su figura de apego (humano o animal) para decidir qué hacer, en lugar de actuar por iniciativa propia.", archetype: "Dependiente", type: "+" },
    { id: 40, text: "El perro busca acostarse o sentarse pegado o encima de su figura de apego (humano, animal u objeto) de forma constante.", archetype: "Dependiente", type: "+" },
    { id: 41, text: "Puede quedarse en una habitación distinta o separado de sus tutores, de otros perros de la familia o alejado de sus objetos favoritos, sin protestar.", archetype: "Dependiente", type: "-" },
    { id: 42, text: "En los paseos, explora y olfatea sin estar chequeando a sus tutores o a otros perros de su familia todo el tiempo.", archetype: "Dependiente", type: "-" },
    { id: 43, text: "Si el humano u otro perro no responde a sus solicitudes de atención, el perro puede autorregularse sin insistencia prolongada.", archetype: "Dependiente", type: "-" },
    { id: 44, text: "Acepta interactuar tranquilamente (caricias, juego, recibir comida, pasear) con otras personas, sin necesitar la presencia de sus tutores o de otro perro de su familia.", archetype: "Dependiente", type: "-" },
    { id: 45, text: "Puede descansar relajado a distancia (sin contacto físico) aun cuando sus tutores u otros perros de la familia están presentes.", archetype: "Dependiente", type: "-" },

    // BLOQUE 4: El Irascible
    { id: 46, text: "Si alguien se acerca a uno de sus recursos (cama, comida, juguete, los tutores), bloquea el acceso (se interpone, mira fijamente, se tensa, gruñe, se eriza, etc.).", archetype: "Irascible", type: "+" },
    { id: 47, text: "Cuando se le pide hacer algo que no quiere, responde con señales de oposición (rigidez, gruñidos, muestra los dientes, ladra o se resiste).", archetype: "Irascible", type: "+" },
    { id: 48, text: "Si un perro o persona invade su espacio, pasa rápidamente a amenazar (ladra, embiste, muestra los dientes, gruñe o ataca) sin medir las consecuencias.", archetype: "Irascible", type: "+" },
    { id: 49, text: "Cuando va con la correa y se acerca un perro o una persona desconocida, busca imponerse y \"controlar la situación\" de forma intensa, en lugar de evitarla.", archetype: "Irascible", type: "+" },
    { id: 50, text: "Cuando está incómodo o adolorido, se vuelve más intolerante a la manipulación o a la cercanía, mordiendo a quien lo intente tocar.", archetype: "Irascible", type: "+" },
    { id: 51, text: "Si se le restringe o se le controla físicamente (sujetarlo, cargarlo o inmovilizarlo), forcejea y puede amenazar para detener la interacción.", archetype: "Irascible", type: "+" },
    { id: 52, text: "Ante movimientos repentinos cerca (niños o perros corriendo, gente gesticulando), intenta detenerlos ladrando, interponiéndose, embistiendo o amenazando.", archetype: "Irascible", type: "+" },
    { id: 53, text: "Si otro perro lo desafía o se le acerca de forma rápida y directa, responde con postura desafiante (orejas hacia adelante, cuerpo rígido, cola arriba, puede erizarse) e intenta montar su cabeza y patas delanteras sobre él.", archetype: "Irascible", type: "+" },
    { id: 54, text: "En casa, si oye sonidos del exterior (pasos, voces, ascensor), se muestra alerta (se tensiona, ladra, gruñe, observa atentamente o se eriza), se acerca a la puerta con una postura erguida (extremidades extendidas, orejas hacia adelante, cola arriba) y permanece allí hasta que el sonido desaparece.", archetype: "Irascible", type: "+" },
    { id: 55, text: "Cuando una persona hace algo que le incomoda (lo asusta, lo toca, le quita algo, etc.), el perro amenaza (gruñe, enseña los dientes, mira fijamente) o intenta morder inmediatamente.", archetype: "Irascible", type: "+" },
    { id: 56, text: "Si algo le incomoda, prefiere retirarse antes que confrontar.", archetype: "Irascible", type: "-" },
    { id: 57, text: "Tolera el contacto físico (revisión veterinaria, secado, cepillado, limpieza) sin rigidez ni señales de amenaza.", archetype: "Irascible", type: "-" },
    { id: 58, text: "Cuando otro perro o persona se acerca directamente, el perro mantiene su cuerpo relajado y permite la interacción.", archetype: "Irascible", type: "-" },
    { id: 59, text: "Si otro perro le gruñe o lo amenaza de forma directa, prefiere evitar el conflicto y se aleja o lo ignora.", archetype: "Irascible", type: "-" },
    { id: 60, text: "En casa, al pasar cerca del perro o al intentar moverlo de su lugar de descanso, él lo permite sin oponerse ni protestar.", archetype: "Irascible", type: "-" }
];

const archetypeData = {
    "Insatisfecho": {
        desc: "Muestra una baja tolerancia a la frustración y a la restricción. Cuando experimenta malestar, busca resolverlo incrementando su actividad y persistencia, lo que desemboca en sobreexcitación al no poder conseguir siempre lo que desea.",
        levels: {
            "Bajo": {
                title: "Bajo",
                messages: [
                    "Tu perro muestra buena tolerancia a la frustración en la mayoría de situaciones. Puede aparecer inquietud o insistencia de forma puntual, pero suele recuperarse rápido.",
                    "Este nivel sugiere que la frustración no es el eje principal del problema actual; podría ser más contextual (momentos específicos del paseo, comida, juego)."
                ]
            },
            "Medio": {
                title: "Moderado",
                messages: [
                    "Tu perro presenta dificultades moderadas para tolerar límites o esperas, y puede insistir o escalar cuando algo no sale como quiere.",
                    "Este nivel indica que la frustración sí influye en su conducta diaria y conviene trabajar su autocontrol para prevenir que la intensidad aumente."
                ]
            },
            "Alto": {
                title: "Alto",
                messages: [
                    "Tu perro muestra alta reactividad por frustración: tiende a escalar rápidamente (tirones, ladridos, redirecciones, mordisqueo) cuando se le bloquea algo que desea.",
                    "Este nivel sugiere que la frustración es un motor central de los problemas actuales. Es recomendable un plan estructurado de manejo y entrenamiento y acompañamiento etológico profesional."
                ]
            }
        }
    },
    "Inseguro": {
        desc: "Responde a la incertidumbre o el malestar mediante la evitación activa y el aislamiento. Prefiere huir de las situaciones que percibe como amenazantes antes que enfrentarlas, inhibiendo su exploración y limitando sus experiencias.",
        levels: {
            "Bajo": {
                title: "Bajo",
                messages: [
                    "Tu perro muestra seguridad adecuada frente a estímulos nuevos o ruidos, con señales de cautela leves y manejables.",
                    "Este nivel sugiere que el miedo no predomina, aunque podría haber situaciones puntuales donde necesite más apoyo."
                ]
            },
            "Medio": {
                title: "Moderado",
                messages: [
                    "Tu perro presenta inseguridad moderada: puede evitar, tensarse o hipervigilar en ciertos contextos (desconocidos, ruidos, espacios nuevos) y le cuesta relajarse.",
                    "Este nivel indica que el miedo sí condiciona su conducta. Conviene aplicar un plan terapéutico que le permita disminuir sus miedos, evitando forzarlo."
                ]
            },
            "Alto": {
                title: "Alto",
                messages: [
                    "Tu perro muestra alto nivel de inseguridad o miedo: tiende a evitar, bloquearse o reaccionar con intensidad en contextos comunes, y puede tener dificultad para recuperarse.",
                    "Este nivel sugiere que el miedo es un factor dominante. Es prioritario reducir su exposición a estímulos detonantes, aumentar su sensación de control/seguridad y trabajar con un etólogo profesional."
                ]
            }
        }
    },
    "Dependiente": {
        desc: "Canaliza la gestión emocional exclusivamente a través de sus figuras de apego. Es incapaz de superar el malestar sin la mediación física o atención continua de sus tutores o de su objeto de apego, careciendo de estrategias de afrontamiento independientes.",
        levels: {
            "Bajo": {
                title: "Bajo",
                messages: [
                    "Tu perro puede buscar cercanía, pero mantiene buena autonomía: tolera separaciones cortas y puede autorregularse sin necesitar contacto constante.",
                    "Este nivel sugiere que el apego no es el problema principal, aunque puede haber hábitos de seguimiento leves que no representan afectaciones."
                ]
            },
            "Medio": {
                title: "Moderado",
                messages: [
                    "Tu perro muestra dependencia moderada: busca contacto frecuente para regularse, puede inquietarse ante separaciones y le cuesta estar por su cuenta.",
                    "Este nivel indica que conviene entrenar su autonomía y reforzar la calma en situaciones de inatención, soledad o separación."
                ]
            },
            "Alto": {
                title: "Alto",
                messages: [
                    "Tu perro presenta alta dependencia/hiperapego: necesita proximidad constante para estar bien y puede angustiarse cuando se separa de su figura de apego.",
                    "Este nivel sugiere que el apego es un factor central. Es recomendable un plan gradual (sin exposiciones bruscas) y apoyo etológico profesional, especialemente si hay signos compatibles con ansiedad intensa (vocalización persistente, destrucción, pánico, autolesiones, etc.)."
                ]
            }
        }
    },
    "Irascible": {
        desc: "Gestiona el estrés imponiéndose al entorno. Intenta controlar activamente el comportamiento de humanos u otros animales mediante presión espacial, amenazas y desafíos, buscando que el entorno ceda a su voluntad para recuperar seguridad.",
        levels: {
            "Bajo": {
                title: "Bajo",
                messages: [
                    "Tu perro suele manejar bien las interacciones y los límites: muestra baja tendencia a controlar o amenazar a otros.",
                    "Este nivel sugiere bajo riesgo desde esta tendencia, aunque siempre es útil mantener prevención haciendo un buen manejo de recursos y garantizando el respeto de espacios."
                ]
            },
            "Medio": {
                title: "Moderado",
                messages: [
                    "Tu perro muestra tendencia moderada a controlar o confrontar en situaciones específicas (recursos, manipulación, invasión de espacio, correa).",
                    "Este nivel indica que hay señales de alerta: conviene ajustar las estrategias de manejo (evitar conflictos, leer señales tempranas) y trabajar habilidades de calma y regulación emocional."
                ]
            },
            "Alto": {
                title: "Alto",
                messages: [
                    "Tu perro presenta alta propensión a respuestas de amenaza/defensa y puede escalar con rapidez ante invasión, manipulación o disputa de recursos.",
                    "Este nivel sugiere riesgo elevado de incidentes si no se gestiona. Es prioritario aplicar medidas de seguridad (prevención, control de entorno, protocolos de manejo) y trabajar con un profesional en etología, especialmente si ya hubo intentos de mordida o agresiones fuertes."
                ]
            }
        }
    }
};

let testQuestions = [];
let userAnswers = {};
let currentPage = 0;
const questionsPerPage = 10;
let totalPages = 0;

const options = [
    { value: 1, label: "Nunca" },
    { value: 2, label: "Pocas veces" },
    { value: 3, label: "Muchas veces" },
    { value: 4, label: "Siempre" }
];

window.onload = function() {
    document.getElementById('evalDate').valueAsDate = new Date();
};

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function startTest() {
    const requiredIds = ['dogName', 'dogAge', 'dogSex', 'dogBreed', 'dogStatus', 'dogOrigin', 'dogAcquisitionAge', 'dogFirstOutingAge', 'ownerName', 'profName', 'evalDate', 'dataConsent'];
    let isValid = true;
    
    requiredIds.forEach(id => {
        const el = document.getElementById(id);
        // Validar diferente si es checkbox o input normal
        if((el.type === 'checkbox' && !el.checked) || (el.type !== 'checkbox' && !el.value)) {
            isValid = false;
            el.classList.add('border-red-400');
            if(el.type === 'checkbox') el.classList.add('outline', 'outline-2', 'outline-red-500'); // Resalta el checkbox
        } else {
            el.classList.remove('border-red-400', 'outline', 'outline-2', 'outline-red-500');
        }
    });

    if(!isValid) {
        document.getElementById('form-error').classList.remove('hidden');
        return;
    }
    document.getElementById('form-error').classList.add('hidden');

    testQuestions = shuffle([...questionsDatabase]);
    totalPages = Math.ceil(testQuestions.length / questionsPerPage);
    currentPage = 0;
    userAnswers = {};

    document.getElementById('phase-1').classList.add('hidden-phase');
    document.getElementById('phase-2').classList.remove('hidden-phase');
    
    renderPage();
    setTimeout(() => {
        document.querySelector('header').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 10);
}

function renderPage() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';

    const startIdx = currentPage * questionsPerPage;
    const endIdx = Math.min(startIdx + questionsPerPage, testQuestions.length);

    for (let i = startIdx; i < endIdx; i++) {
        const q = testQuestions[i];
        
        const questionDiv = document.createElement('div');
        questionDiv.id = `q-container-${q.id}`;
        questionDiv.className = "pb-8 border-b border-zinc-100 last:border-0 last:pb-0";
        
        let html = `<p class="text-lg text-zinc-800 font-medium mb-4 md:mb-5 leading-snug">${q.text}</p>`;
        html += `<div class="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 radio-btn-group">`;
        
        options.forEach(opt => {
            const isChecked = userAnswers[q.id] === opt.value;
            const id = `q${q.id}_opt${opt.value}`;
            html += `
                <div>
                    <input type="radio" id="${id}" name="q${q.id}" value="${opt.value}" class="absolute opacity-0 w-0 h-0" ${isChecked ? 'checked' : ''} onchange="saveAnswer(${q.id}, ${opt.value})">
                    <label for="${id}" class="block w-full text-center py-3 md:py-2.5 px-2 border border-zinc-200 rounded-xl md:rounded-full cursor-pointer text-sm font-medium text-zinc-600 bg-white shadow-sm md:shadow-none hover:bg-zinc-50 transition-colors">
                        ${opt.label}
                    </label>
                </div>
            `;
        });
        
        html += `</div>`;
        questionDiv.innerHTML = html;
        container.appendChild(questionDiv);
    }

    document.getElementById('current-q-num').innerText = endIdx;
    const progress = (Object.keys(userAnswers).length / testQuestions.length) * 100;
    document.getElementById('progress-bar-fill').style.width = `${progress}%`;

    document.getElementById('btn-prev').classList.toggle('hidden', currentPage === 0);
    document.getElementById('btn-next').classList.toggle('hidden', currentPage === totalPages - 1);
    document.getElementById('btn-submit').classList.toggle('hidden', currentPage !== totalPages - 1);
    document.getElementById('test-error').classList.add('hidden');
}

function saveAnswer(qId, value) {
    userAnswers[qId] = value;
    const progress = (Object.keys(userAnswers).length / testQuestions.length) * 100;
    document.getElementById('progress-bar-fill').style.width = `${progress}%`;
    
    const qContainer = document.getElementById(`q-container-${qId}`);
    qContainer.classList.remove('border-red-400', 'bg-red-50', 'p-4', 'rounded-2xl');
}

function changePage(direction) {
    if (direction > 0) {
        const startIdx = currentPage * questionsPerPage;
        const endIdx = Math.min(startIdx + questionsPerPage, testQuestions.length);
        let allAnswered = true;
        
        for (let i = startIdx; i < endIdx; i++) {
            const q = testQuestions[i];
            if (!userAnswers[q.id]) {
                allAnswered = false;
                const el = document.getElementById(`q-container-${q.id}`);
                el.classList.add('border-red-400', 'bg-red-50', 'p-4', 'rounded-2xl');
            }
        }

        if (!allAnswered) {
            document.getElementById('test-error').classList.remove('hidden');
            return;
        }
    }

    currentPage += direction;
    renderPage();
    setTimeout(() => {
        document.querySelector('header').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 10);
}

async function finishTest() {
    const startIdx = currentPage * questionsPerPage;
    const endIdx = Math.min(startIdx + questionsPerPage, testQuestions.length);
    let allAnswered = true;
    for (let i = startIdx; i < endIdx; i++) {
        if (!userAnswers[testQuestions[i].id]) {
            allAnswered = false;
            document.getElementById(`q-container-${testQuestions[i].id}`).classList.add('border-red-400', 'bg-red-50', 'p-4', 'rounded-2xl');
        }
    }
    if (!allAnswered) {
        document.getElementById('test-error').classList.remove('hidden');
        return;
    }

    const scores = { "Insatisfecho": 0, "Inseguro": 0, "Dependiente": 0, "Irascible": 0 };
    testQuestions.forEach(q => {
        const rawVal = userAnswers[q.id];
        const finalVal = q.type === '-' ? (5 - rawVal) : rawVal; 
        scores[q.archetype] += finalVal;
    });

    const btnSubmit = document.getElementById('btn-submit');
    const originalText = btnSubmit.innerHTML;
    btnSubmit.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Analizando datos...`;
    btnSubmit.disabled = true;

    const payload = {
        fecha: document.getElementById('evalDate').value,
        perro: document.getElementById('dogName').value,
        edad: document.getElementById('dogAge').value,
        sexo: document.getElementById('dogSex').value,
        raza: document.getElementById('dogBreed').value,
        estado: document.getElementById('dogStatus').value,
        procedencia: document.getElementById('dogOrigin').value,
        edad_adquisicion: document.getElementById('dogAcquisitionAge').value,
        edad_primera_salida: document.getElementById('dogFirstOutingAge').value,
        tutor: document.getElementById('ownerName').value,
        email: document.getElementById('ownerEmail').value,
        telefono: document.getElementById('ownerPhone').value,
        insatisfecho: scores["Insatisfecho"],
        inseguro: scores["Inseguro"],
        dependiente: scores["Dependiente"],
        irascible: scores["Irascible"],
        respuestas: JSON.stringify(userAnswers)
    };

    try {
        const googleUrl = "https://script.google.com/macros/s/AKfycbzGDtDNpHNiCMwWoS-2Mnx2AroFEGZHWQjDOjuqre4-qu4sbEaRfUO2nKoNpmPPDk8geQ/exec"; 
        
        await fetch(googleUrl, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
    } catch (error) {
        console.error("Error al guardar en la base de datos", error);
    }

    btnSubmit.innerHTML = originalText;
    btnSubmit.disabled = false;
    mostrarResultados(scores);
}

function mostrarResultados(scores) {
    document.getElementById('res-dog-name').innerText = document.getElementById('dogName').value;
    document.getElementById('res-dog-age-sex').innerText = `${document.getElementById('dogAge').value} / ${document.getElementById('dogSex').value} (${document.getElementById('dogStatus').value})`;
    document.getElementById('res-owner').innerText = document.getElementById('ownerName').value;
    const dateStr = new Date(document.getElementById('evalDate').value).toLocaleDateString('es-ES');
    document.getElementById('res-date-prof').innerText = `${document.getElementById('profName').value} - ${dateStr}`;

    const diagnosticoContainer = document.getElementById('diagnostico-container');
    diagnosticoContainer.innerHTML = '';
    
    // Ordenar puntajes de mayor a menor
    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const maxScore = sortedScores[0][1];
    
    // Variables para las consideraciones etológicas (Riesgo mixto / Empate)
    const primaryArchetypes = sortedScores.filter(item => item[1] === maxScore);
    const primaryArchetypeNames = primaryArchetypes.map(item => item[0]);
    const nonPrimaryArchetypes = sortedScores.filter(item => item[1] < maxScore);
    const nextHighestScore = nonPrimaryArchetypes.length > 0 ? nonPrimaryArchetypes[0][1] : 0;
    const scoreDifference = maxScore - nextHighestScore;

    // Renderizar TODAS las tendencias en orden descendente combinando distribución y descripciones
    sortedScores.forEach(([arch, score], index) => {
        const percentage = (score / 60) * 100;
        
        // NUEVO: Formatear el porcentaje para mostrar 1 decimal y reemplazar el punto por coma
        const formattedPercentage = percentage.toFixed(1).replace('.', ',') + ' %';
        
        const data = archetypeData[arch];
        
        // Determinar el Nivel de Afectación
        let levelKey;
        if (score <= 30) levelKey = "Bajo";
        else if (score <= 45) levelKey = "Medio";
        else levelKey = "Alto";

        const levelData = data.levels[levelKey];
        
        // Estilos visuales según si es la tendencia principal o secundaria
        const isPrimary = score === maxScore;
        const headerTextColor = isPrimary ? 'text-brand' : 'text-zinc-700';
        const barClass = isPrimary ? 'bg-gradient-to-r from-brand to-[#007a8b] print:bg-brand' : 'bg-gradient-to-r from-zinc-400 to-zinc-500 print:bg-zinc-500';
        const svgIcon = isPrimary 
            ? `<svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
            : `<svg class="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;

        // Construcción de la tarjeta de la tendencia
        diagnosticoContainer.innerHTML += `
            <div class="mb-10 last:mb-0 relative border border-zinc-100 rounded-3xl p-6 md:p-8 bg-white print:border-none print:p-0 print:mb-8">
                ${isPrimary ? '<div class="absolute -left-4 md:-left-8 top-10 bottom-10 w-1 md:w-1.5 bg-accent rounded-r-full print:hidden"></div>' : ''}
                
                <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4">
                    <h3 class="text-2xl font-bold ${headerTextColor} flex items-center gap-3">
                        <div class="${isPrimary ? 'p-2 bg-accent/10 rounded-lg' : ''}">
                            ${svgIcon}
                        </div>
                        ${arch}
                    </h3>
                    <span class="text-lg font-bold bg-zinc-50 px-3 py-1 rounded-lg border border-zinc-200 print:border-none print:bg-transparent">${formattedPercentage}</span>
                </div>

                <div class="w-full bg-zinc-100 rounded-full h-3 mb-6 print:border print:border-zinc-200">
                    <div class="${barClass} h-3 rounded-full" style="width: ${percentage}%"></div>
                </div>

                <p class="text-zinc-600 text-[15px] md:text-base leading-relaxed mb-6">${data.desc}</p>
                
                <div class="bg-brand-50/50 border border-brand/10 p-5 md:p-6 rounded-2xl print:bg-white print:border print:border-zinc-200">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-xs uppercase tracking-widest font-bold text-zinc-400">Nivel de Afectación:</span>
                        <span class="font-bold text-brand bg-white px-2.5 py-0.5 rounded-md shadow-sm text-sm">${levelData.title}</span>
                    </div>
                    <div class="space-y-3 text-zinc-700 text-sm md:text-[15px]">
                        ${levelData.messages.map(msg => `<p class="flex items-start"><span class="mr-2 text-brand mt-1">•</span> <span>${msg}</span></p>`).join('')}
                    </div>
                </div>
            </div>
        `;
    });

    // Lógica para empate o perfil mixto
    const mixedNoteEl = document.getElementById('mixed-profile-note');
    mixedNoteEl.className = "hidden font-medium p-4 rounded-xl print:bg-transparent print:p-0 print:border-l-4 print:pl-4";
    
    if (primaryArchetypes.length > 1) {
        const archNamesStr = primaryArchetypeNames.map(name => `<em>${name}</em>`).join(' / ');
        mixedNoteEl.innerHTML = `<strong>⚠️ Empate Detectado:</strong> El animal ha obtenido exactamente la misma puntuación máxima en las tendencias ${archNamesStr}. Esto indica que utiliza mecanismos de afrontamiento de esos perfiles con igual intensidad y frecuencia, dependiendo del contexto. La pauta terapéutica debe abordar todas las tendencias de manera integrada.`;
        mixedNoteEl.classList.remove('hidden');
        mixedNoteEl.classList.add('bg-brand-50', 'text-brand', 'print:border-brand');
    } else if (scoreDifference > 0 && scoreDifference <= 6 && nonPrimaryArchetypes.length > 0) {
        const secondaryArchetype = nonPrimaryArchetypes[0][0];
        mixedNoteEl.innerHTML = `<strong>⚠️ Perfil de Riesgo Mixto:</strong> Existe una diferencia muy estrecha (${scoreDifference} pts) entre la tendencia principal (<em>${primaryArchetypeNames[0]}</em>) y la tendencia secundaria (<em>${secondaryArchetype}</em>). Esto indica que el animal combina y alterna entre ambos mecanismos de afrontamiento frente al estrés.`;
        mixedNoteEl.classList.remove('hidden');
        mixedNoteEl.classList.add('bg-zinc-100', 'text-zinc-800', 'print:border-zinc-800');
    }

    document.getElementById('phase-2').classList.add('hidden-phase');
    document.getElementById('phase-3').classList.remove('hidden-phase');
    
    setTimeout(() => {
        document.querySelector('header').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 10);
}
