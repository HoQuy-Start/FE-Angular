import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    isSearchClicked: boolean = false;

    toggleSearchOverlay() {
        this.isSearchClicked = !this.isSearchClicked;
    }
}
