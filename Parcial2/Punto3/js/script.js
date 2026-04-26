document.addEventListener("DOMContentLoaded", () => {

    function mostrarAlerta(mensaje, tipo) {
        const alerta = document.createElement("div");
        alerta.className = `alert alert-${tipo} shadow`;
        alerta.style.position = "fixed";
        alerta.style.top = "90px";
        alerta.style.right = "20px";
        alerta.style.zIndex = "9999";
        alerta.style.minWidth = "250px";
        alerta.style.borderRadius = "10px";
        alerta.innerText = mensaje;
        document.body.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }

    const form = document.getElementById("formulario");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            let telefono = document.getElementById("telefono").value.trim();

            telefono = telefono.replace(/\D/g, "");

            if (nombre.length < 3) {
                mostrarAlerta("El nombre debe tener al menos 3 caracteres", "danger");
                return;
            }

            if (!correo.includes("@")) {
                mostrarAlerta("Correo inválido", "danger");
                return;
            }

            if (telefono.length !== 10) {
                mostrarAlerta("Teléfono inválido", "danger");
                return;
            }

            mostrarAlerta("Cita enviada correctamente", "success");
            form.reset();
        });
    }

    const btnTop = document.createElement("button");
    btnTop.innerHTML = "↑";
    btnTop.className = "btn btn-primary position-fixed bottom-0 end-0 m-4";
    btnTop.style.display = "none";
    btnTop.style.zIndex = "9999";

    document.body.appendChild(btnTop);

    window.addEventListener("scroll", () => {
        btnTop.style.display = window.scrollY > 300 ? "block" : "none";
    });

    btnTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.querySelectorAll("#planes button").forEach(btn => {
        btn.addEventListener("click", () => {
            mostrarAlerta("Plan seleccionado correctamente", "info");
        });
    });

});