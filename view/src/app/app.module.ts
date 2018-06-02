import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';

import { ModalModule } from 'ngx-bootstrap';

import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/Common/header/header.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { PaymentsComponent } from './Components/payments/payments.component';
import { LocationsComponent } from './Components/locations/locations.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { PromotionsComponent } from './Components/promotions/promotions.component';
import { FoodListComponent } from './Components/food-list/food-list.component';
import { DeleteConfirmationComponent } from './Components/Models/delete-confirmation/delete-confirmation.component';
import { FoodItemAddComponent } from './Components/Models/food-item-add/food-item-add.component';
import { FoodItemEditComponent } from './Components/Models/food-item-edit/food-item-edit.component';
import { LocationCreateComponent } from './Components/Models/location-create/location-create.component';
import { OrderViewComponent } from './Components/Models/order-view/order-view.component';
import { PromotionsViewComponent } from './Components/Models/promotions-view/promotions-view.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    OrdersComponent,
    PaymentsComponent,
    LocationsComponent,
    ReportsComponent,
    SettingsComponent,
    PromotionsComponent,
    FoodListComponent,
    DeleteConfirmationComponent,
    FoodItemAddComponent,
    FoodItemEditComponent,
    LocationCreateComponent,
    OrderViewComponent,
    PromotionsViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  entryComponents: [
    FoodItemAddComponent,
    DeleteConfirmationComponent,
    FoodItemEditComponent,
    LocationCreateComponent,
    OrderViewComponent,
    PromotionsViewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
