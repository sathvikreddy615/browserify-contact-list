const contactCreator = require("./contact");

// Local Storage

module.exports.saveDatabase = function (databaseObject, localStorageKey) {
    const stringifiedDatabase = JSON.stringify(databaseObject);

    localStorage.setItem(localStorageKey, stringifiedDatabase);
};

const saveDB = module.exports.saveDatabase(contactCreator, "Contacts")

module.exports.loadDatabase = function (localStorageKey) {
    const databaseString = localStorage.getItem(localStorageKey);

    return JSON.parse(databaseString);
};

const loadDB = module.exports.loadDatabase("Contacts");