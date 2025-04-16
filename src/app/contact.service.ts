import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      phone: '555-1234',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      phone: '555-5678',
      email: 'jane.smith@example.com',
    },
  ];

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(contact: Contact): void {
    contact.id = Math.max(...this.contacts.map((c) => c.id), 0) + 1;
    this.contacts.push(contact);
  }

  updateContact(updatedContact: Contact): void {
    const index = this.contacts.findIndex((c) => c.id === updatedContact.id);
    if (index > -1) {
      this.contacts[index] = { ...updatedContact };
    }
  }

  deleteContact(contactId: number): void {
    this.contacts = this.contacts.filter((c) => c.id !== contactId);
  }
}
