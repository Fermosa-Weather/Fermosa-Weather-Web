document.addEventListener('DOMContentLoaded', async () => {

  const cerrarSesion = document.getElementById("cerrarSesion")
  const postsDiv = document.getElementById("postsDiv")

  //TRAER TODOS LOS POSTS
  try {
    const response = await fetch('/findAllPosts', {
      method: 'GET'
    });

    if (response) {
      const posts = await response.json();

      postsDiv.innerHTML = '';

      for (const post of posts) {
        postsDiv.innerHTML += `
            <div class="d-flex text-muted pt-3">
            <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff"
                    dy=".3em">32x32</text>
            </svg>
            <p class="pb-3 mb-0 small lh-sm border-bottom">
                <strong class="d-block text-gray-dark">${post.user.user_name}</strong>
                <strong class="d-block text-gray-dark">${post.user.user_email}</strong>
                <strong class="d-block text-gray-dark">${post.post_title}</strong>
                ${post.post_content}
                <br />
                <span>Rubro: ${post.rubro.desc_rubro}</span><br />
                <span>Fecha: ${post.updatedAt}</span>
                </p>
                </div>
          `;
      }
    }
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  }


  //TRAER TODOS LOS USUARIOS
  try {
    const response = await fetch('/findAll', {
      method: 'GET'
    });

    if (response) {
      const users = await response.json();

      usersDiv.innerHTML = '';

      for (const user of users) {
        usersDiv.innerHTML += `
        <div class="d-flex text-muted pt-3">
        <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
            preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff"
                dy=".3em">32x32</text>
        </svg>

        <div class="pb-3 mb-0 small lh-sm border-bottom w-100">


            <div key=${user.id_user} class="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div class="d-flex justify-content-between">
                    <strong class="text-gray-dark">${user.user_name}</strong>
                    <a href="#">Follow</a>
                </div>
                <span class="d-block">@${user.user_email}</span>
                <strong class="text-gray-dark">${user.rol.rol_name}</strong>
            </div>
        </div>
    </div>
          `;

      }
    }
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  }

  //CIERRE DE SESION

  cerrarSesion.addEventListener("click", async () => {
    try {
      const response = await fetch('/cerrar-sesion', {
        method: 'GET'
      });

      if (response.ok) {
        Swal.fire({
          icon: 'Success',
          title: 'Cerrando Sesión',
          text: 'Espere un momento...',
          showConfirmButton: false
        });

        setTimeout(() => {
          window.location.href = '/index';
        }, 2000); // 2 segundos

      } else {
        console.error('Error al cerrar sesión');
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  })
});