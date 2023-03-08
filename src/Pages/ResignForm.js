import { HandleCancelButtonClicked, HandleConfirmButtonClicked } from './Controllers/ResignFormPageController';
import './Styles/ResignForm.css';

const ResignForm = () =>{
    const formBg = document.createElement('div');
    formBg.classList.add('form-bg');
    formBg.id = 'Resign';

    const form = document.createElement('div');
    form.classList.add('form');

    const text = document.createElement('p');
    text.innerHTML = 'Are you sure you want to <span>Resign</span> ?';

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Resign';
    confirmButton.addEventListener('click', () =>{
        HandleConfirmButtonClicked();
    })


    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'continue player';
    cancelButton.addEventListener('click', () =>{
        HandleCancelButtonClicked();
    })

    buttonsContainer.appendChild(confirmButton);
    buttonsContainer.appendChild(cancelButton);

    form.appendChild(text);
    form.appendChild(buttonsContainer);

    formBg.appendChild(form)

    return formBg;
}

export default ResignForm;