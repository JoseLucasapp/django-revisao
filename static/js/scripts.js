document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[data-confirm]').forEach(function (el) {
    el.addEventListener('click', function (ev) {
      ev.preventDefault();

      const url = el.getAttribute('href');
      const msg = el.getAttribute('data-confirm') || 'Tem certeza?';

      Swal.fire({
        title: 'Confirmação',
        text: msg,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = url;
        }
      });
    });
  });

  const firstInput = document.querySelector('form input, form select, form textarea');
  if (firstInput) firstInput.focus();
});