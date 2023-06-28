const { program } = require("commander");

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "getById":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);
    default:
      console.log("Unknown action");
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({
//   action: "add",
//   name: "Jack Manson",
//   email: "mansonj@gmail.com",
//   phone: "(974) 635-2937",
// });
// invokeAction({ action: "remove", id: "8zhkewJf_o4O7pkJ93ITl" });

program.option("-a, --action , <type>");
program.option("-i, --id , <type>");
program.option("-n, --name , <type>");
program.option("-e, --email , <type>");
program.option("-p, --phone , <type>");

program.parse();

const options = program.opts();
invokeAction(options);
