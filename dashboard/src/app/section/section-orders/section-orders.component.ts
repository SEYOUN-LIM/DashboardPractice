import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/orders';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.scss']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {id: 1, customer: {id:1, name:'Main St Bakery', state:'CO', email:'mainst@example.com'}, total:230, placed: new Date(2019, 9, 14), fulfilled: new Date(2019, 9, 15)},
    {id: 2, customer: {id:1, name:'Main St Bakery', state:'CO', email:'mainst@example.com'}, total:230, placed: new Date(2019, 9, 14), fulfilled: new Date(2019, 9, 15)},
    {id: 3, customer: {id:1, name:'Main St Bakery', state:'CO', email:'mainst@example.com'}, total:230, placed: new Date(2019, 9, 14), fulfilled: new Date(2019, 9, 15)},
    {id: 4, customer: {id:1, name:'Main St Bakery', state:'CO', email:'mainst@example.com'}, total:230, placed: new Date(2019, 9, 14), fulfilled: new Date(2019, 9, 15)},
    {id: 5, customer: {id:1, name:'Main St Bakery', state:'CO', email:'mainst@example.com'}, total:230, placed: new Date(2019, 9, 14), fulfilled: new Date(2019, 9, 15)}
  ];

  ngOnInit() {
  }

}
