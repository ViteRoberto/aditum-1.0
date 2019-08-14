import { Component, OnInit } from '@angular/core';
import { Contacts, Contact, ContactName, ContactField } from '@ionic-native/contacts/ngx';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];

  myContacts: Contact[] = [];

  constructor(private contacts: Contacts) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  cargarContactos(){
    let options = {
      filter: '',
      multiple: true,
      hasPhoneNumber: true
    };
    this.contacts.find(['*'], options).then((contacts: Contact[]) => {
      this.myContacts = contacts;
      console.log('Contacts: ', contacts);
    });
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
