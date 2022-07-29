export class View {
    renderAddForm(phonebookContainerId) {
        const phonebookContainer = document.getElementById(phonebookContainerId);
        const formElement = document.createElement('form');

        formElement.classList.add('contact_form');
        formElement.setAttribute('id', 'add_form');
        formElement.innerHTML = `
                <input placeholder="Name" class="contact_name">
                <input placeholder="Phone number" type="tel" class="contact_number">
                <input placeholder="Position" class="contact_position">
                <button class="btn_add" type="submit">Add contact</button>`;
        phonebookContainer.append(formElement);
    }
}
