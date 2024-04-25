window.addEventListener('DOMContentLoaded', (event) => {
    const ratingInputs = document.querySelectorAll('.rating input');
    const selectedRating = document.getElementById('selectedRating');
  
    ratingInputs.forEach((input) => {
      input.addEventListener('click', (event) => {
        const rating = event.target.value;
        selectedRating.textContent = 'Calificación seleccionada: ' + rating;
      });
    });
  });