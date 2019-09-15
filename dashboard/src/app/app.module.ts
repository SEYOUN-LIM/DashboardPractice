import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionSalesComponent } from './section/section-sales/section-sales.component';
import { SectionOrdersComponent } from './section/section-orders/section-orders.component';
import { SectionHealthComponent } from './section/section-health/section-health.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { ServerComponent } from './server/server.component';
import { PaginationComponent } from './pagination/pagination.component';

import { SalesDataService } from './services/sales-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionSalesComponent,
    SectionOrdersComponent,
    SectionHealthComponent,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent,
    ServerComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [SalesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
