import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

async function generateContacts(count = 5) {
  const oldContacts = await readContacts();
  const newContacts = Array.from({ length: count }, createFakeContact);
  const updatedContacts = [...oldContacts, ...newContacts];
  await writeContacts(updatedContacts);
}

generateContacts();
