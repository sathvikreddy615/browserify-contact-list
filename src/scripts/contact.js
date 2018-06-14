const contacts = {};

// Contact Template

const Contact = Object.create({}, {
    name: {
        value: "",
        writable: true,
        enumerable: true
    },
    phone: {
        value: "",
        writable: true,
        enumerable: true
    },
    address: {
        value: "",
        writable: true,
        enumerable: true
    }
});

const contactCreator = (name, phone, address) => {

    const newContact = Object.create(Contact)

    newContact.name = name;
    newContact.phone = phone;
    newContact.address = address;

    contacts[name] = newContact

}

// Add Dummy Contacts

contactCreator("Sathvik Reddy", "615-123-4567", "123 Nashville TN");
contactCreator("Jordan Finley", "412-133-4567", "321 Nashville TN");
contactCreator("Marcus Mariota", "912-321-4567", "123 Hawaii St");

module.exports = contactCreator;