import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Book } from './book';
import { BookService } from './book.service';
import { OldBook } from './oldbook';

@Component({
  selector: 'pm-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
  
  formBook:FormGroup;
  constructor(private route:ActivatedRoute,private fb:FormBuilder,private bookService:BookService,
  private router:Router) { }
  id=+this.route.snapshot.params['id'];
  books:Book;

  ngOnInit() {
    this.formBook=this.fb.group({
      id:'',
      Title:'',
      Author:'',
      Year:''
    })
    this.bookService.getBookById(this.id).subscribe(
      books=>this.displayBook(books),
      
    );
    
    
  }
  displayBook(books:Book):void{
    this.books=books
    this.formBook.patchValue({
      id:this.books.id,
      Title:this.books.Title,
      Author:this.books.Author,
      Year:this.books.Year
    })

  }

  saveBook(): void {
    
        // Copy over all of the original product properties
        // Then copy over the values from the form
        // This ensures values not on the form, such as the Id, are retained
        const p = { ...this.books, ...this.formBook.value };

        
          this.bookService.updateBook(p)
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
