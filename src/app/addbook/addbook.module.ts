import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddbookComponent } from './addbook.component';
import { RouterModule } from '@angular/router';
import { ListbookComponent } from './listbook.component';
import { HttpClientModule } from '@angular/common/http';
import { EditbookComponent } from './editbook.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BookData } from './book-data';
import { BookresolverServices } from './book-resolver.services';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(BookData,{delay:100}),
    RouterModule.forChild([
      {path:'book',component:AddbookComponent},
      {path:'booklist',component:ListbookComponent},
      {path:'booklist/:id/edit',component:EditbookComponent}
    ]),
    ReactiveFormsModule,
    
  ],
  declarations: [
    AddbookComponent,
    ListbookComponent,
    EditbookComponent
    
  ]
})
export class AddbookModule { }
