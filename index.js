const { program } = require("commander");

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);
    default:
      console.log("Unknown action type");
  }
};

program.option("-a, --action , <type>");
program.option("-i, --id , <type>");
program.option("-n, --name , <type>");
program.option("-e, --email , <type>");
program.option("-p, --phone , <type>");

program.parse();

const options = program.opts();
invokeAction(options);
