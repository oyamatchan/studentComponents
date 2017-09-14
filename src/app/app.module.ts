import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { InsertComponent } from './insert/insert.component';
import { PrintingComponent } from './printing/printing.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    InsertComponent,
    PrintingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
