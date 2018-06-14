const collectContacts = require("./contactCollection");

collectContacts.saveDatabase();

const appendForm = document.querySelector("#inputForm");
const fragment = document.createDocumentFragment();

const inputCreator = (idVal, typeVal, nameVal) => {
    let newInput = document.createElement("input");

    newInput.setAttribute("class", "inputContact");
    newInput.id = idVal;
    newInput.type = typeVal;
    newInput.name = nameVal
    newInput.placeholder = nameVal;

    fragment.appendChild(newInput);
    appendForm.appendChild(fragment);
}

const inputName = inputCreator("inputName", "text", "Full Name");
const inputPhone = inputCreator("inputPhone", "text", "Phone Number");
const inputAddress = inputCreator("inputAddress", "text", "Address");
const submitBtn = inputCreator("submitBtn", "submit", "Submit");