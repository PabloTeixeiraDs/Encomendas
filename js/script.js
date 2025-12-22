document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('button').forEach(function (btn) {
            if (btn.textContent && btn.textContent.indexOf('$') !== -1) {
                btn.disabled = true;
                btn.classList.add('price-disabled');
                btn.setAttribute('aria-disabled', 'true');
            }
        });
    });