document.addEventListener("DOMContentLoaded", () => {
  // set current year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Simple validation
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      if (!name || !phone) {
        alert("Пожалуйста, заполните обязательные поля: имя и телефон.");
        return;
      }
      alert("Спасибо! Ваша заявка отправлена. Мы скоро свяжемся с вами.");
      bookingForm.reset();
    });
  }
});
