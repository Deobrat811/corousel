import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'corousel';

  products: any = [];
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
    const totalItems = this.products.length;
    //condition to check if array has less then 3 items
    const itemsInGroup = totalItems > 2 ? 3 : totalItems;
    this.listFormatted = [];

     let i =0;
     let j = -1;
     let k = -1;
    while(k < this.products.length - 1){
      if (i % itemsInGroup === 0) {
        j++;
        k = j;
        this.listFormatted[j] = [];
        this.listFormatted[j].push(this.products[k]);
      } else {
        k++;
        this.listFormatted[j].push(this.products[k]);
      }
      i++;
    }
// Commented for loop using while instead
/*     let j = -1;
    let k = -1;

    for (let i = 0; k < this.products.length - 1; i++) {
      if (i % itemsInGroup === 0) {
        j++;
        k = j;
        this.listFormatted[j] = [];
        this.listFormatted[j].push(this.products[k]);
      } else {
        k++;
        this.listFormatted[j].push(this.products[k]);
      }
    } */
    console.log(this.listFormatted);
  }
}
