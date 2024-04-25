const formPost = document.getElementById('formPost');

formPost.addEventListener('submit', async (e) => {
  e.preventDefault();

  const post_title = document.getElementById("post_title").value;
  const post_content = document.getElementById("post_content").value;

  const postData = {
    id_user: 1,
    post_title,
    post_content,
    id_rubro:5
  }

  const respuesta = await fetch('/createPost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  });

  if (!respuesta.ok) {
    const { message } = await respuesta.json();
    return Swal.fire('Error, al crear el posteo', message, 'error',);
  } else {

    Swal.fire({
      title: "Post creado correctamente.",
      text: "Espere un momento...",
      icon: "success",
      showConfirmButton: false
    });

    // Redireccionar a la vista de tareas
    setTimeout(() => {
      window.location.href = '/inicio';
    }, 2000);
  }
  
});