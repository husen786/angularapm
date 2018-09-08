import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { BookError } from './bookerror';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pm-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {

  constructor(private book:BookService,private route:ActivatedRoute) { }
 
books:Book[];
filteredBooks:Book[];
_listFilter='';
get listFilter(): string {
  return this._listFilter;
}
set listFilter(value: string) {
  this._listFilter = value;
  this.filteredBooks = this.listFilter ? this.performFilter(this.listFilter) : this.books;
}
performFilter(filterBy: string): Book[] {
  filterBy = filterBy.toLocaleLowerCase();
  return this.books.filter((book: Book) =>
    book.Title.toLocaleLowerCase().indexOf(filterBy) !== -1);
}
  ngOnInit() {
    this.book.getAllBooks().subscribe(
      books => {
        this.books=books
        this.filteredBooks = this.books;
      },
      
    );
    }

    
  }

