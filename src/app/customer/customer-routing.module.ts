import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/Layout/main/main.component';
import { HomeComponent } from './components/Pages/home/home.component';
import { CartComponent } from './components/Pages/cart/cart.component';

const routes: Routes = [
    {
        path: "", component: MainComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'cart', component: CartComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }
