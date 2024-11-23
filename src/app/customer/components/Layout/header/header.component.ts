import { Component, HostListener, OnInit } from '@angular/core';

interface MenuItem {
    name?: string;
    url?: string;
    active?: boolean;
    children?: MenuItem[];
}
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    //thêm class active cho mobile menu
    public isMobileMenuVisible: boolean = false;
    public toggleMobileMenu(): void {
        this.isMobileMenuVisible = !this.isMobileMenuVisible;
    }
    //click ra ngoài để đóng menu
    public closeMobileMenu(): void {
        this.isMobileMenuVisible = false;
    }
    constructor() { }
    ngOnInit(): void {
    }
    isSearchClicked: boolean = false;

    toggleSearchOverlay() {
        this.isSearchClicked = !this.isSearchClicked;
    }


    /* ___HEADER_MOBILE____ */
    menuItems: MenuItem[] = [
        {
            name: 'Home',
            active: false,
        },
        {
            name: 'Products',
            active: false,
            children: [
                { name: 'Adidas' },
                { name: 'Chanel' },
                { name: 'Docle & Gabbana' },
                { name: 'Ganni' },
                { name: 'Guuci' },
                { name: 'Louis Vuitton' },
                { name: 'Nike' },
                { name: 'Parada' },
                { name: 'Puma' },
                { name: 'Zara' },
            ],
        },
        {
            name: 'Discount',
            active: false,
        },
        {
            name: 'Specials',

            active: false,
            children: [
                { name: 'Adidas' },
                { name: 'Chanel' },
                { name: 'Docle & Gabbana' },
                { name: 'Nike' },
            ],
        },
        {
            name: 'Sale',
            active: false,
        },
    ]


    // -- khó hiểu--
    toggleActive(item: MenuItem): void {
        this.menuItems.forEach((menuItems) => {
            if (menuItems != item) {
                menuItems.active = false;//khi click vào item khác, thì item cũ vừa thao tác không còn là item nữa nên xẽ đổi thành fale
            }
        });
        item.active = !item.active;// khi click xẽ là true

    }




}
