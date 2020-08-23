import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote[]=[
    new Quote(1,'The secret of getting ahead is getting started.','Provide description here', new Date(2019,9,14)),
    new Quote(2,'Only the paranoid survive.','Provide description here', new Date(2019,9,14)),
    new Quote(3,'Everything you can imagine is real.','Provide description here', new Date(2019,9,14)),
    new Quote(4,'Do what you feel in your heart to be right','Provide description here', new Date(2019,9,14)),
    new Quote(5,'Happiness is not something ready made. It comes from your own actions.','Provide description here', new Date(2019,9,14)),
    new Quote(6,'Whatever you are, be a good one..','Provide description here', new Date(2019,9,14)),
  ]; 

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
    
  }
  addNewQuote(quote){
    let goalLength = this.quotes.length;
    quote.id = goalLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
