import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {};

  constructor(
  ) { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    console.log("Add contact has been called", this.newContact);
    // add contact to contacts list
    this.contacts.push(this.newContact);
    this.newContact={}
//   name,
//   email,
//   phoneNumber,
//   image
// })

    // clear inputs
    
  }
}
