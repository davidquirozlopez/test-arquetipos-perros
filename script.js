// Base de datos de preguntas SIMPLIFICADAS
const questionsDatabase = [
    // BLOQUE 1: El Insatisfecho
    { id: 1, text: "Al terminar el paseo o un juego, se queda muy inquieto y deambula por la casa hasta que le das otra cosa.", archetype: "Insatisfecho", type: "+" },
    { id: 2, text: "Si ve a otros perros jugar y no puede llegar a ellos, llora y se tensa hasta que lo alejas por completo.", archetype: "Insatisfecho", type: "+" },
    { id: 3, text: "Cuando se retrasa su comida, espera echado y tranquilo en su sitio sin mostrar insistencia ni impaciencia.", archetype: "Insatisfecho", type: "-" },
    { id: 4, text: "Si se queda encerrado en una habitación, rasca o muerde cosas con nerviosismo hasta que le abres la puerta.", archetype: "Insatisfecho", type: "+" },
    { id: 5, text: "Al acabar una sesión de juego con el tutor, salta encima de forma rígida y solo para si se reanuda la actividad.", archetype: "Insatisfecho", type: "+" },
    { id: 6, text: "Si un juguete o premio se le cae donde no llega, se aleja tranquilamente y se tumba a descansar.", archetype: "Insatisfecho", type: "-" },
    { id: 7, text: "Cuando pasa mucho tiempo sin actividad, camina sin rumbo por la casa jadeando hasta caer rendido por cansancio.", archetype: "Insatisfecho", type: "+" },
    { id: 8, text: "Si detecta algo fuera a través de la ventana, rasca el cristal muy tenso y no para hasta que el estímulo desaparece.", archetype: "Insatisfecho", type: "+" },
    { id: 9, text: "Al pedirle que pare una actividad intensa, se detiene al instante con el cuerpo relajado esperando la siguiente orden.", archetype: "Insatisfecho", type: "-" },
    { id: 10, text: "Ante un ruido imprevisto en el hogar, corre ladrando con las orejas hacia delante y solo para al olfatear la zona.", archetype: "Insatisfecho", type: "+" },
    { id: 11, text: "Si su tutor deja de hacerle caso, le empuja las manos con el hocico rígido hasta que recibe caricias o juguetes.", archetype: "Insatisfecho", type: "+" },
    { id: 12, text: "Al terminar un snack duradero, olfatea un momento el suelo relajado y se retira a dormir de forma autónoma.", archetype: "Insatisfecho", type: "-" },
    { id: 13, text: "Al ver que preparas sus cosas de paseo, ladra excitado y tenso, callándose solo cuando la actividad empieza de verdad.", archetype: "Insatisfecho", type: "+" },
    { id: 14, text: "Si encuentra una puerta interior cerrada que suele estar abierta, gime y rasca tenso hasta que le dejas pasar.", archetype: "Insatisfecho", type: "+" },
    { id: 15, text: "Tras limpiarle las patas o cepillarlo, bosteza relajado y se aleja caminando tranquilamente por su cuenta sin pedir más.", archetype: "Insatisfecho", type: "-" },

    // BLOQUE 2: El Inseguro
    { id: 16, text: "Si entra un desconocido a casa, esconde la cola, se encoge y huye a esconderse hasta que la visita se marcha.", archetype: "Inseguro", type: "+" },
    { id: 17, text: "Ante un ruido fuerte en la calle, se agazapa con las orejas plegadas y solo avanza si volvemos hacia casa.", archetype: "Inseguro", type: "+" },
    { id: 18, text: "Frente a un mueble u objeto nuevo en casa, se acerca tranquilo a olfatearlo y se relaja enseguida.", archetype: "Inseguro", type: "-" },
    { id: 19, text: "Cuando un desconocido intenta tocarlo, tiembla con el cuerpo rígido y solo se calma si la persona se aleja.", archetype: "Inseguro", type: "+" },
    { id: 20, text: "Durante una tormenta o pirotecnia, jadea con las pupilas dilatadas bajo los muebles y solo sale cuando todo termina.", archetype: "Inseguro", type: "+" },
    { id: 21, text: "Si se le acerca un perro desconocido en el parque, se mantiene relajado y continúa su camino tras saludarlo brevemente.", archetype: "Inseguro", type: "-" },
    { id: 22, text: "Al ver el arnés o materiales de manejo, retrocede asustado con la cabeza baja hasta que los escondes de su vista.", archetype: "Inseguro", type: "+" },
    { id: 23, text: "En zonas con mucho ruido o tráfico, camina bloqueado tirando de la correa hasta que entramos en una calle silenciosa.", archetype: "Inseguro", type: "+" },
    { id: 24, text: "Si escucha un golpe accidental en casa, levanta la cabeza alerta pero se vuelve a tumbar relajado a los pocos segundos.", archetype: "Inseguro", type: "-" },
    { id: 25, text: "En lugares con mucha gente, lame sus belfos estresado y se bloquea sin avanzar hasta que lo sacas de allí.", archetype: "Inseguro", type: "+" },
    { id: 26, text: "Ante sombras o luces extrañas en la oscuridad, se tensa y clava la mirada hasta que cambia la iluminación ambiente.", archetype: "Inseguro", type: "+" },
    { id: 27, text: "Al dejarlo en un lugar cerrado que no conoce, lo explora tranquilo con movimientos fluidos y se tumba a descansar.", archetype: "Inseguro", type: "-" },
    { id: 28, text: "Cuando toca bañarlo o asearlo, se pega contra la pared totalmente rígido y solo se relaja al acabar el proceso.", archetype: "Inseguro", type: "+" },
    { id: 29, text: "Si intentas acariciarlo mientras descansa en su cama, aparta la cara mostrando los ojos muy abiertos hasta que te alejas.", archetype: "Inseguro", type: "+" },
    { id: 30, text: "Al subir a un coche o ascensor en movimiento, se mantiene de pie con calma y sale tranquilo al detenerse.", archetype: "Inseguro", type: "-" },

    // BLOQUE 3: El Dependiente
    { id: 31, text: "Si el tutor cambia de habitación, lo sigue pegado a sus piernas moviendo la cola de forma baja y rápida hasta que se sienta.", archetype: "Dependiente", type: "+" },
    { id: 32, text: "Al quedarse solo en casa, aúlla y llora de pie junto a la puerta principal hasta que percibe que el tutor regresa.", archetype: "Dependiente", type: "+" },
    { id: 33, text: "Si el juego con otros perros se vuelve muy bruto, se aleja solo y busca un espacio tranquilo sin buscar al tutor.", archetype: "Dependiente", type: "-" },
    { id: 34, text: "Al asustarse o sentir dolor por un golpe menor, busca trepar encima del tutor temblando hasta que este lo abraza.", archetype: "Dependiente", type: "+" },
    { id: 35, text: "Si nota que su tutor está triste o llorando, le lame la cara de forma sumisa hasta que el humano cambia de postura.", archetype: "Dependiente", type: "+" },
    { id: 36, text: "Ante un ruido molesto fuera de la casa, permanece relajado en su colchoneta sin buscar la protección física del tutor.", archetype: "Dependiente", type: "-" },
    { id: 37, text: "Cuando el tutor habla con otras personas, se interpone rígido entre ellos y solo para si le acaricias exclusivamente a él.", archetype: "Dependiente", type: "+" },
    { id: 38, text: "Al despertar de una siesta y no ver a nadie, corre gimiendo por toda la casa hasta que localiza a un familiar.", archetype: "Dependiente", type: "+" },
    { id: 39, text: "Al dejarlo unas horas en una guardería canina, entra tranquilo a jugar y se olvida de la marcha de su tutor.", archetype: "Dependiente", type: "-" },
    { id: 40, text: "Si una valla baja le impide llegar hacia donde está su tutor, llora apoyado en ella hasta que se la quitas.", archetype: "Dependiente", type: "+" },
    { id: 41, text: "Al asustarse por un trueno en casa, corre a refugiarse entre las piernas del tutor hasta recibir contacto físico continuo.", archetype: "Dependiente", type: "+" },
    { id: 42, text: "Al darle un juguete interactivo con comida, se concentra por completo en resolverlo sin buscar la mirada o aprobación del tutor.", archetype: "Dependiente", type: "-" },
    { id: 43, text: "En un entorno nuevo, camina frenando y mirando fijamente al tutor a cada paso, avanzando solo si este le habla o premia.", archetype: "Dependiente", type: "+" },
    { id: 44, text: "Si el tutor abraza a otra persona de la casa, se interpone rascando tenso hasta que los humanos se separan de nuevo.", archetype: "Dependiente", type: "+" },
    { id: 45, text: "Si se siente mal físicamente por enfermedad, prefiere descansar solo en un rincón tranquilo sin demandar atención constante de la familia.", archetype: "Dependiente", type: "-" },

    // BLOQUE 4: El Irascible
    { id: 46, text: "Si alguien se acerca mientras come o tiene un juguete, lo tapa tenso y gruñe hasta que la persona se aleja.", archetype: "Irascible", type: "+" },
    { id: 47, text: "Al cruzarse con otro perro paseando con correa, arremete rígido enseñando los dientes hasta que el otro animal se va.", archetype: "Irascible", type: "+" },
    { id: 48, text: "Si pasas cerca de su colchoneta mientras duerme, se estira relajado y te deja pasar sin mostrar ninguna señal de molestia.", archetype: "Irascible", type: "-" },
    { id: 49, text: "Al intentar limpiarle las patas o tocar una zona sensible, lanza un marcaje al aire deteniéndose solo al retirar tu mano.", archetype: "Irascible", type: "+" },
    { id: 50, text: "Si alguien intenta sentarse donde él está tumbado, se planta firme mirándolo fijamente y gruñe hasta que el tutor interviene.", archetype: "Irascible", type: "+" },
    { id: 51, text: "Al pasar un ciclista o patinete muy cerca corriendo, desvía la mirada y continúa su camino de forma totalmente indiferente.", archetype: "Irascible", type: "-" },
    { id: 52, text: "Cuando suena el timbre de casa, corre a la puerta con el lomo erizado ladrando grave hasta que todo vuelve al silencio.", archetype: "Irascible", type: "+" },
    { id: 53, text: "Si intentas bajarlo de un sofá o de la cama, se tensa y te gruñe mirándote las manos hasta que desistes de moverlo.", archetype: "Irascible", type: "+" },
    { id: 54, text: "Cuando otro perro le ladra enfurecido a través de una valla, continúa caminando tranquilo a tu lado ignorando por completo el desafío.", archetype: "Irascible", type: "-" },
    { id: 55, text: "Si le quitas un juguete de la boca durante el juego, salta a morder la ropa o manos parando solo al recuperar el objeto.", archetype: "Irascible", type: "+" },
    { id: 56, text: "Al revisarle una zona del cuerpo que le duele, se gira rápido intentando morder la mano hasta que detienes la exploración.", archetype: "Irascible", type: "+" },
    { id: 57, text: "Si un niño pasa corriendo muy cerca de su plato de comida, el perro sigue comiendo tranquilo y relajado sin reaccionar.", archetype: "Irascible", type: "-" },
    { id: 58, text: "Si ve un gato o pájaro en el jardín, corre rígido ladrando con fuerza y no para hasta que el animal desaparece de su vista.", archetype: "Irascible", type: "+" },
    { id: 59, text: "Si le bloqueas físicamente el paso hacia un sitio, empuja con el cuerpo rígido bufando hasta que le dejas avanzar.", archetype: "Irascible", type: "+" },
    { id: 60, text: "Durante el corte de uñas o cepillado clínico, se mantiene laxo y permite el manejo pacíficamente de principio a fin.", archetype: "Irascible", type: "-" }
];

const archetypeData = {
    "Insatisfecho": {
        desc: "Muestra una baja tolerancia a la frustración y a la restricción. Cuando experimenta malestar, busca resolverlo incrementando su actividad y persistencia, lo que desemboca en sobreexcitación al no poder conseguir siempre lo que desea.",
        problems: ["<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Destructividad por frustración o aburrimiento</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Vocalizaciones excesivas y demandas constantes</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Hiperactividad generalizada y tirones de correa</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Dificultad severa para alcanzar estados de calma autónoma</li>"]
    },
    "Inseguro": {
        desc: "Responde a la incertidumbre o el malestar mediante la evitación activa y el aislamiento. Prefiere huir de las situaciones que percibe como amenazantes antes que enfrentarlas, inhibiendo su exploración y limitando sus experiencias.",
        problems: ["<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Miedos generalizados y fobias (ruidos, individuos, objetos o situaciones)</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Eliminación por miedo</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Bloqueos y parálisis durante los paseos</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Agresividad defensiva aguda (si se le acorrala y se le impide huir)</li>"]
    },
    "Dependiente": {
        desc: "Canaliza la gestión emocional exclusivamente a través de sus figuras de apego. Es incapaz de superar el malestar sin la mediación física o atención continua de sus tutores o de su objeto de apego, careciendo de estrategias de afrontamiento independientes.",
        problems: ["<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Trastornos relacionados con la separación (ansiedad, destrozos)</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Hiperapego y demanda física constante</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Interposición, celos o reactividad ante terceros en presencia del tutor</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Falta de autonomía exploratoria y juego en solitario</li>"]
    },
    "Irascible": {
        desc: "Gestiona el estrés imponiéndose al entorno. Intenta controlar activamente el comportamiento de humanos u otros animales mediante presión espacial, amenazas y desafíos, buscando que el entorno ceda a su voluntad para recuperar seguridad.",
        problems: ["<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Protección intensa de recursos (comida, juguetes, atención de las personas)</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Agresividad ofensiva hacia extraños o animales</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Muy baja tolerancia a las manipulaciones físicas (veterinario, aseo)</li>", 
                    "<li class='flex items-start'><span class='mr-2 mt-1'>•</span> Intento de control de pasos y movimientos dentro del hogar</li>"]
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
    const requiredIds = ['dogName', 'dogAge', 'dogSex', 'dogBreed', 'dogStatus', 'ownerName', 'profName', 'evalDate', 'ownerEmail','ownerPhone'];
    let isValid = true;
    requiredIds.forEach(id => {
        const el = document.getElementById(id);
        if(!el.value) {
            isValid = false;
            el.classList.add('border-red-400');
        } else {
            el.classList.remove('border-red-400');
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
                    <input type="radio" id="${id}" name="q${q.id}" value="${opt.value}" class="hidden" ${isChecked ? 'checked' : ''} onchange="saveAnswer(${q.id}, ${opt.value})">
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

function finishTest() {
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

    mostrarResultados(scores);
}

function mostrarResultados(scores) {
    document.getElementById('res-dog-name').innerText = document.getElementById('dogName').value;
    document.getElementById('res-dog-age-sex').innerText = `${document.getElementById('dogAge').value} / ${document.getElementById('dogSex').value} (${document.getElementById('dogStatus').value})`;
    document.getElementById('res-owner').innerText = document.getElementById('ownerName').value;
    const dateStr = new Date(document.getElementById('evalDate').value).toLocaleDateString('es-ES');
    document.getElementById('res-date-prof').innerText = `${document.getElementById('profName').value} - ${dateStr}`;

    const chartsContainer = document.getElementById('charts-container');
    chartsContainer.innerHTML = '';
    
    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const maxScore = sortedScores[0][1];
    
    const primaryArchetypes = sortedScores.filter(item => item[1] === maxScore);
    const primaryArchetypeNames = primaryArchetypes.map(item => item[0]);
    
    const nonPrimaryArchetypes = sortedScores.filter(item => item[1] < maxScore);
    const nextHighestScore = nonPrimaryArchetypes.length > 0 ? nonPrimaryArchetypes[0][1] : 0;
    const scoreDifference = maxScore - nextHighestScore;

    sortedScores.forEach(([arch, score]) => {
        const percentage = (score / 60) * 100;
        const isPrimary = primaryArchetypeNames.includes(arch);
        const barClass = isPrimary ? 'bg-gradient-to-r from-brand to-[#007a8b] print:bg-brand' : 'bg-zinc-200';
        const textColor = isPrimary ? 'text-brand font-bold' : 'text-zinc-500';
        
        chartsContainer.innerHTML += `
            <div>
                <div class="flex justify-between items-end mb-2">
                    <span class="${textColor} text-sm uppercase tracking-wide font-semibold">${arch}</span>
                    <span class="${textColor} text-sm font-bold bg-white px-2 py-0.5 rounded-md shadow-sm border border-zinc-100 print:border-none print:shadow-none">${score} pts</span>
                </div>
                <div class="w-full bg-zinc-100 rounded-full h-2.5 overflow-hidden print:border print:border-zinc-200">
                    <div class="${barClass} h-2.5 rounded-full" style="width: ${percentage}%"></div>
                </div>
            </div>
        `;
    });

    const diagnosticoContainer = document.getElementById('diagnostico-container');
    diagnosticoContainer.innerHTML = '';

    primaryArchetypes.forEach(([arch, score]) => {
        const data = archetypeData[arch];
        diagnosticoContainer.innerHTML += `
            <div class="mb-10 last:mb-0 relative">
                <div class="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 md:w-1.5 bg-accent rounded-r-full print:hidden"></div>
                <h3 class="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
                    <div class="p-2 bg-accent/10 rounded-lg text-accent">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    Tendencia Principal: <span class="text-brand">${arch}</span>
                </h3>
                <p class="text-zinc-600 text-lg leading-relaxed mb-6">${data.desc}</p>
                
                <div class="bg-brand-50 p-6 rounded-2xl print:bg-white print:border print:border-zinc-200">
                    <h4 class="font-bold text-brand mb-4 flex items-center gap-2">
                        <svg class="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        Propensión a problemas conductuales:
                    </h4>
                    <ul class="grid md:grid-cols-2 gap-3 text-zinc-600 text-[15px]">
                        ${data.problems.join('')}
                    </ul>
                </div>
            </div>
        `;
    });

    const mixedNoteEl = document.getElementById('mixed-profile-note');
    mixedNoteEl.className = "hidden font-medium p-4 rounded-xl print:bg-transparent print:p-0 print:border-l-4 print:pl-4";
    
    if (primaryArchetypes.length > 1) {
        const archNamesStr = primaryArchetypeNames.map(name => `<em>${name}</em>`).join(' / ');
        mixedNoteEl.innerHTML = `<strong>⚠️ Empate Detectado:</strong> El animal ha obtenido exactamente la misma puntuación máxima en los arquetipos ${archNamesStr}. Esto indica que utiliza mecanismos de afrontamiento de esos perfiles con igual intensidad y frecuencia, dependiendo del contexto. La pauta terapéutica debe abordar todas las tendencias de manera integrada.`;
        mixedNoteEl.classList.remove('hidden');
        mixedNoteEl.classList.add('bg-brand-50', 'text-brand', 'print:border-brand');
    } else if (scoreDifference > 0 && scoreDifference <= 6 && nonPrimaryArchetypes.length > 0) {
        const secondaryArchetype = nonPrimaryArchetypes[0][0];
        mixedNoteEl.innerHTML = `<strong>⚠️ Perfil de Riesgo Mixto:</strong> Existe una diferencia muy estrecha (${scoreDifference} pts) entre el arquetipo principal (<em>${primaryArchetypeNames[0]}</em>) y la tendencia secundaria (<em>${secondaryArchetype}</em>). Esto indica que el animal combina y alterna entre ambos mecanismos de afrontamiento frente al estrés.`;
        mixedNoteEl.classList.remove('hidden');
        mixedNoteEl.classList.add('bg-zinc-100', 'text-zinc-800', 'print:border-zinc-800');
    }

    document.getElementById('phase-2').classList.add('hidden-phase');
    document.getElementById('phase-3').classList.remove('hidden-phase');
    
    setTimeout(() => {
        document.querySelector('header').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 10);
}
