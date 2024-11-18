document.querySelector("#newsletter-form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const email = document.querySelector("#email-input").value;
  
    
    document.querySelector("#newsletter-form").classList.add("hidden");
    const successMessage = document.querySelector("#success-message");
    successMessage.classList.remove("hidden");
    successMessage.innerHTML = `<p>Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.</p>`;
  });