import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/orders';
import { SalesDataService } from '../../services/sales-data.service';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.scss']
})
export class SectionOrdersComponent implements OnInit {

  constructor(private _salesData: SalesDataService) { }

  // orders: Order[] = [
  //   { id: 1, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com' }, total: 230, placed: new Date(2019, 9, 14), fulfilled: new Date(2019, 9, 15) },
  //   { id: 2, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com' }, total: 230, placed: new Date(2019, 9, 14), fulfilled: new Date(2019, 9, 15) },
  //   { id: 3, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com' }, total: 230, placed: new Date(2019, 9, 14), fulfilled: new Date(2019, 9, 15) },
  //   { id: 4, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com' }, total: 230, placed: new Date(2019, 9, 14), fulfilled: new Date(2019, 9, 15) },
  //   { id: 5, customer: { id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com' }, total: 230, placed: new Date(2019, 9, 14), fulfilled: new Date(2019, 9, 15) }
  // ];
  orders: Order[];
  total = 0;
  page = 1;
  limit = 10;
  loading = false;

  getOrders() {
    this._salesData.getOrders(this.page, this.limit).subscribe(res => {
      this.orders = res['page']['data'];
      this.total = res['page'].total;
      this.loading = false;
    }, err=> {console.log(err)});
  }

  ngOnInit() {
    this.getOrders();
  }

  goToPrevious(): void {
    // console.log('Previous Button Clicked!');
    this.page--;
    this.getOrders();
  }

  goToNext(): void {
    // console.log('Next Button Clicked!');
    this.page++;
    this.getOrders();
  }

  goToPage(n: number): void {
    this.page = n;
    this.getOrders();
  }

}
