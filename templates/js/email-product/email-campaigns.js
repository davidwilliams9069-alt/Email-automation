// Null-safe element selection
const model = document.getElementById("delete-modal");
const modelForm = document.getElementById("modal-btn-delete");
const modelBody = document.getElementById("modal-body");

// Null-safe Bootstrap Modal initialization
let deleteModal = null;
const modalElement = document.getElementById('myModal');
if (modalElement && typeof window.bootstrap !== 'undefined' && window.bootstrap.Modal) {
    deleteModal = new window.bootstrap.Modal(modalElement);
}

function onDeleteCampaign(url, name) {
    if (!model || !modelForm || !modelBody) {
        console.warn('Delete modal elements not found');
        return;
    }
    
    modelForm.action = url;
    modelBody.innerText = `Are you sure you want to delete campaign "${name}"? This action cannot be undone.`;
    model.classList.remove("!tw-hidden");
}
