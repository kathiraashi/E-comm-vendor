import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { PaymentsComponent } from './Components/payments/payments.component';
import { LocationsComponent } from './Components/locations/locations.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { PromotionsComponent } from './Components/promotions/promotions.component';
import { FoodListComponent } from './Components/food-list/food-list.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { ReviewsComponent } from './Components/reviews/reviews.component';

const appRoutes: Routes = [
    { path: '',
        component: LoginPageComponent,
        data: {
            animation: { value: 'Login', }
        }
    },
    { path: 'Dashboard',
        component: DashboardComponent,
        data: {
            animation: { value: 'Dashboard', }
        }
    },
    { path: 'FoodList',
        component: FoodListComponent,
        data: {
            animation: { value: 'FoodList', }
        }
    },
    { path: 'Orders',
        component: OrdersComponent,
        data: {
            animation: { value: 'Orders', }
        }
    },
    { path: 'Payments',
        component: PaymentsComponent,
        data: {
            animation: { value: 'Payments', }
        }
    },
    { path: 'Locations',
        component: LocationsComponent,
        data: {
            animation: { value: 'Locations', }
        }
    },
    { path: 'Promotions',
        component: PromotionsComponent,
        data: {
            animation: { value: 'Promotions', }
        }
    },
    { path: 'Reviews',
        component: ReviewsComponent,
        data: {
            animation: { value: 'Reviews', }
        }
    },
    { path: 'Settings',
        component: SettingsComponent,
        data: {
            animation: { value: 'Settings', }
        }
    },
    { path: 'Login',
        component: LoginPageComponent,
        data: {
            animation: { value: 'Login', }
        }
    }
];

@NgModule({
    declarations: [ ],
    imports: [ RouterModule.forRoot(appRoutes,
        { enableTracing: true }
      )],
    providers: [],
    bootstrap: []
  })
  export class AppRoutingModule { }
