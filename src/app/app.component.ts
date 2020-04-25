import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'corousel';
  event_list = [
    {
      event: ' Event 1',
      eventLocation: 'Bangalore',
      eventDescription: 'In bangalore, first event is going to happen. Please be careful about it',
      img: 'https://picsum.photos/900/500?random&t=1',
      eventStartDate: new Date('2019/05/20'),
      eventEndingDate: new Date('2019/05/24')
    },
    {
      event: ' Event 2',
      eventLocation: 'Dubai',
      eventDescription: 'Dubai is another place to host so,e, first event is going to happen. Please be careful about it',
      img: 'https://picsum.photos/900/500?random&t=3',
      eventStartDate: new Date('2019/07/28'),
      eventEndingDate: new Date('2019/07/30')
    },
    {
      event: ' Event 3',
      eventLocation: 'New York',
      eventDescription: 'NewYork sits on top of event hosting',
      img: 'https://picsum.photos/900/500?random&t=4',
      eventStartDate: new Date('2020/05/20'),
      eventEndingDate: new Date('2020/05/24')
    },
    {
      event: ' Event 4',
      eventLocation: 'Singapore',
      eventDescription: 'Singapore is another great hosting city',
      img: 'https://picsum.photos/900/500?random&t=6',
      eventStartDate: new Date('2018/05/20'),
      eventEndingDate: new Date('2018/05/24')
    },
    {
      event: ' Event 5',
      eventLocation: 'Berlin',
      eventDescription: 'Berlin is best place to hang on',
      img: 'https://picsum.photos/900/500?random&t=7',
      eventStartDate: new Date('2017/07/10'),
      eventEndingDate: new Date('2017/08/14')
    },
    {
      event: ' Event 6',
      eventLocation: 'Mumbai',
      eventDescription: 'Mumbai is hub of startups',
      img: 'https://picsum.photos/900/500?random&t=8',
      eventStartDate: new Date(),
      eventEndingDate: new Date()
    },
    {
      event: ' Event 7',
      eventLocation: 'Barcelona',
      eventDescription: 'Barcelona is another good city',
      img: 'https://picsum.photos/900/500?random&t=6',
      eventStartDate: new Date(),
      eventEndingDate: new Date()
    },
  ];
  past_events = this.event_list.filter(event => event.eventEndingDate < new Date());
  products: any[] = [];
  listFormatted: any[] = [];
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('../assets/products.json')
      .subscribe(
        res => {
          this.products = res;
        },
        err => console.log(err),
        () => this.groupInThree(this.products)
      );
    console.log(this.products);
  }

  groupInThree(products: Array<any>) {
    this.listFormatted = [];
    var j = -1;

    for (var i = 0; i < this.products.length; i++) {
      if (i % 3 === 0) {
        j++;
        this.listFormatted[j] = [];
        this.listFormatted[j].push(this.products[i]);
      }
      else {
        this.listFormatted[j].push(this.products[i]);
      }
    }
    console.log(this.listFormatted);
  }

}
