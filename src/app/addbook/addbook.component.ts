import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BookService } from './book.service';
import { Router } from '@angular/router';
import { Book } from './book';

@Component({
  selector: 'pm-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  formBook:FormGroup
  constructor(private fb:FormBuilder,private bookService:BookService,private router:Router) { }
  books:Book;
  ngOnInit() {
    this.formBook=this.fb.group({
      id:'',
      Title:'',
      Author:'',
      Year:''
    });
  }
  
  saveBook(): void {
   
        const p = { ...this.books, ...this.formBook.value };

        
          this.bookService.createBook(p)
            .subscribe(
              () => this.onSaveComplete(),
              
            );
        
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.formBook.reset();
    this.router.navigate(['/booklist']);
  }

}
