document.addEventListener('DOMContentLoaded', function () {
  var qtyInput = document.getElementById('quantity');
  if (qtyInput) {
    qtyInput.addEventListener('change', function () {
      if (Number(qtyInput.value) < 1) qtyInput.value = 1;
    });
  }
});
