const contactForm = document.querySelector("#contact-form");
const messageField = document.querySelector("#message");
const characterCount = document.querySelector("#character-count");
const formStatus = document.querySelector("#form-status");

messageField.addEventListener("input", () => {
    characterCount.textContent = `${messageField.value.length} / ${messageField.maxLength}`;
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
        return;
    }

    const name = contactForm.elements.name.value.trim();
    formStatus.textContent = `Thanks, ${name}! Your message was not sent because this demo form isn't connected to a mail service.`;
});
