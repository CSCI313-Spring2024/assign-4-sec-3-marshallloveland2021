import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  editMode = false;
  currentContact: Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  };
  isNewContact = false;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contacts = this.contactService.getContacts();
  }

  addNewContact(): void {
    this.isNewContact = true;
    this.editMode = true;
    this.currentContact = {
      id: 0,
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    };
  }

  editContact(contact: Contact): void {
    this.isNewContact = false;
    this.editMode = true;

    this.currentContact = { ...contact };
  }

  deleteContact(id: number): void {
    this.contactService.deleteContact(id);
    this.loadContacts();
  }

  saveContact(): void {
    if (this.isNewContact) {
      this.contactService.addContact(this.currentContact);
    } else {
      this.contactService.updateContact(this.currentContact);
    }
    this.editMode = false;
    this.loadContacts();
  }

  cancelEdit(): void {
    this.editMode = false;
  }
}
