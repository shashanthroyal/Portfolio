let ResumeButton = Document.getElementById("resume-button");

if (ResumeButton) {
    ResumeButton.addEventListener('click', function() {
        const a = document.createElement('a');
        a.href = "./Resume.pdf";
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.click();
    });
}

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log('Form Data:', data);

  // You would typically send this 'data' to the server here
});



