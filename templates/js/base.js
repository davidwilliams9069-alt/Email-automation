// initialization

const defaultToast = document.getElementById("error-toast");

// Null-safe tooltip initialization
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
if (tooltipTriggerList && tooltipTriggerList.length > 0) {
    const tooltipList = [].slice.call(tooltipTriggerList).map(function (tooltipTriggerEl) {
        if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        }
        return null;
    }).filter(Boolean);
}

// Null-safe password toggle initialization
const passwordInputs = document.querySelectorAll('input[type="password"]');

if (passwordInputs && passwordInputs.length > 0) {
    passwordInputs.forEach((passwordInput) => {
        // Create a container div 
        const container = passwordInput.parentElement;
        if (!container) return;
        
        // Create a toggle button
        const toggleButton = document.createElement('button');

        toggleButton.classList.add("btn", "btn-outline-secondary", "toggle-password");
        toggleButton.innerHTML = '<i class="bi bi-eye-slash"></i>';
        
        // Append the elements to the container
        container.appendChild(toggleButton);
      
        toggleButton.addEventListener('click', (e) => {
            e.preventDefault();
            togglePasswordVisibility(toggleButton, passwordInput);
        });
    });
}

function togglePasswordVisibility(toggleButton, inputElement) {
    if (!toggleButton || !inputElement) return;
    
    if (inputElement.type === "password") {
        inputElement.type = "text";
        toggleButton.innerHTML = '<i class="bi bi-eye"></i>';
    } else {
        inputElement.type = "password";
        toggleButton.innerHTML = '<i class="bi bi-eye-slash"></i>';
    }
}
