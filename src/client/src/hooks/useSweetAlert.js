export const useSweetAlert = (alert, customMessage, icon) => {

    if (customMessage != null) {
        return Swal.fire({
            title: customMessage || "¡Correcto!",
            text: alert.message,
            icon: icon,
            showConfirmButton: false,
            timer: 2000
        })
    } else {
        Swal.fire({
            title: "Se produjo un error",
            text: alert.message,
            icon: icon,
            showConfirmButton: true,
            confirmButtonText: "Aceptar"
        })
    }
}