import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'corousel';

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
    var k = -1;

    for (var i = 0; k < this.products.length-1; i++) {
      if (i % 3 === 0) {
        j++;
        k=j;
        this.listFormatted[j] = [];
        this.listFormatted[j].push(this.products[k]);
      }
      else {
        k++;
        this.listFormatted[j].push(this.products[k]);
      }
    }
    console.log(this.listFormatted);
  }

}
