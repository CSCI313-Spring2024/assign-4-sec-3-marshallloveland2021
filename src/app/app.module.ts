import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactService } from './contact.service';

@NgModule({
  declarations: [AppComponent, ContactListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
