// Telefonda "Menü" düğmesi menüyü açıp kapatır.
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('ana-menu');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('acik');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
