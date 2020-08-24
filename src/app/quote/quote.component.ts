import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote[]=[
    new Quote(1,'The secret of getting ahead is getting started.','Provide description here','Ronoh Wycliffe', new Date(2019,9,14)),
    new Quote(2,'Only the paranoid survive.','Provide description here','Brian Muchera', new Date(2019,9,14)),
    new Quote(3,'Everything you can imagine is real.','Provide description here', 'Rose Kimodo',new Date(2019,9,14)),
    new Quote(4,'Do what you feel in your heart to be right','Provide description here','Ruth Jomo', new Date(2019,9,14)),
    new Quote(5,'Happiness is not something ready made. It comes from your own actions.','Provide description here','Albert Byron', new Date(2019,9,14)),
    new Quote(6,'Whatever you are, be a good one.','Provide description here', 'Thomas Ingasia',new Date(2019,9,14)),
  ]; 

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
