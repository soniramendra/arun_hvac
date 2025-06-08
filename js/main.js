document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter .btn');
    const items = document.querySelectorAll('.gitem');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-filter');

        items.forEach(item => {
          if (category === 'all' || item.classList.contains(category)) {
            item.style.opacity = 0;

            setTimeout(() => {
              item.style.display = 'block';
              item.style.opacity = 1;
            }, 500);
          } else {
            item.style.opacity = 0;

            setTimeout(() => {
              item.style.display = 'none';
            }, 500);
          }
        });
      });
    });

    filterButtons[0].click(); // Show all items by default
  });




