import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { FooterComponent } from './components/Layout/footer/footer.component';
import { HeaderComponent } from './components/Layout/header/header.component';
import { MainComponent } from './components/Layout/main/main.component';
import { HomeComponent } from './components/Pages/home/home.component';
import { CdkMenuModule } from '@angular/cdk/menu';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CartComponent } from './components/Pages/cart/cart.component';
import { BlogComponent } from './components/Pages/blog/blog.component';
import { AboutComponent } from './components/Pages/about/about.component';
import { LoginComponent } from './components/Pages/login/login.component';
import { ContacsComponent } from './components/Pages/contacs/contacs.component';
import { ProductComponent } from './components/Pages/product/product.component';
import { CategoryComponent } from './components/Pages/category/category.component';


@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        MainComponent,
        HomeComponent,
        CartComponent,
        BlogComponent,
        AboutComponent,
        LoginComponent,
        ContacsComponent,
        ProductComponent,
        CategoryComponent
    ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        CdkMenuModule,
        CarouselModule
    ]
})
export class CustomerModule { }
