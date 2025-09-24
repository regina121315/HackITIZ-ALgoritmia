document.addEventListener('DOMContentLoaded', () => {

    // --- NAVEGACIÓN ENTRE PASOS ---
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const formSteps = document.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.progress-step');
    let currentStep = 0;

    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentStep++;
            updateFormSteps();
            updateProgressBar();
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentStep--;
            updateFormSteps();
            updateProgressBar();
        });
    });

    function updateFormSteps() {
        formSteps.forEach((step, index) => {
            step.classList.toggle('active', index === currentStep);
        });
    }

    function updateProgressBar() {
        progressSteps.forEach((step, index) => {
            if (index < currentStep + 1) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }


    // --- LÓGICA CONDICIONAL PARA NÚMERO DE CONTROL ---
    const escuelaSelect = document.getElementById('escuela');
    const campoControl = document.getElementById('campoControl');

    escuelaSelect.addEventListener('change', () => {
        if (escuelaSelect.value === 'Instituto Tecnológico de Iztapalapa') {
            campoControl.style.display = 'block';
            campoControl.querySelector('input').required = true;
        } else {
            campoControl.style.display = 'none';
            campoControl.querySelector('input').required = false;
        }
    });

    
    // --- LÓGICA PARA AGREGAR INTEGRANTES ---
    const addMemberBtn = document.getElementById('addMemberBtn');
    const integrantesContainer = document.getElementById('integrantesAdicionales');
    let memberCount = 1; // Ya tenemos 1 por defecto

    addMemberBtn.addEventListener('click', () => {
        if (memberCount < 5) {
            memberCount++;
            const newMemberHTML = `
                <div class="integrante-card">
                    <h4>Integrante ${memberCount}</h4>
                    <div class="form-grid">
                        <input type="text" name="nombre_int${memberCount}" placeholder="Nombre(s)" required>
                        <input type="text" name="paterno_int${memberCount}" placeholder="Apellido Paterno" required>
                        <input type="text" name="materno_int${memberCount}" placeholder="Apellido Materno" required>
                        <input type="text" name="alergias_int${memberCount}" placeholder="Alergias">
                        <input type="text" name="discapacidad_int${memberCount}" placeholder="Discapacidad">
                        <input type="text" name="seguridad_social_int${memberCount}" placeholder="Seguridad Social" required>
                        <input type="tel" name="telefono_int${memberCount}" placeholder="Teléfono" required>
                        <input type="hidden" name="talla_playera_int${memberCount}" value="No especificada">
                    </div>
                </div>
            `;
            integrantesContainer.insertAdjacentHTML('beforeend', newMemberHTML);

            if (memberCount === 5) {
                addMemberBtn.style.display = 'none'; // Oculta el botón al llegar al máximo
            }
        }
    });

});