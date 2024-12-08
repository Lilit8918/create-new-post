export function validateForm(form) {
    const inputs = Array.from(form.elements).filter(input => input.tagName === 'INPUT');
    for (const input of inputs) {
      if (!input.value.trim()) {
        alert(`Please fill out the ${input.placeholder}`);
        return false;
      }
    }
    return true;
  }
  
  document.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm(e.target)) {
      alert('Form submitted!');
     
    }
  });
  