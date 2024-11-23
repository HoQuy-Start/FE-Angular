import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface Banner {
    image?: string;
    price?: number;
    title?: string;
}

interface Guide {
    image?: string;
    title?: string;
    content?: string;
}
interface Carousel {
    image?: [
        {
            image_active?: string;
            image_hover?: string;
        }

    ];
    sale?: number;
    title?: string;
    price?: [
        {
            before?: number;
            current?: number;
        }
    ];
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    //menu ul-bycats
    isUlShow = false;
    toggleUlClass() {
        this.isUlShow = !this.isUlShow;
    }
    //update-Selected-Value
    selectedValue: string = 'Sweater';
    updateSelectedValue(newValue: string) {
        this.selectedValue = newValue;
        this.isUlShow = false;
    }

    /* carousel */
    customOptions: OwlOptions = {
        loop: true, /* Cho phép trượt vòng lặp vô hạn.*/
        mouseDrag: true, /* Tắt điều hướng kéo chuột.*/
        touchDrag: true, /* Tắt điều hướng kéo bằng cảm ứng*/
        pullDrag: false, /* Tắt điều hướng kéo kéo.*/
        dots: true, /* Ẩn dấu chấm điều hướng.*/
        navSpeed: 700, /*  Đặt tốc độ của hoạt ảnh điều hướng thành 700 mili giây.*/
        navText: ['', ''], /*  Ghi đè văn bản điều hướng mặc định bằng các chuỗi trống (không có văn bản).*/
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            740: {
                items: 1
            },
            940: {
                items: 1
            }
        },
        // nav: true//Hiển thị mũi tên điều hướng.
    }
    /* Arirvalse-carousel */
    ArirvalseOptions: OwlOptions = {
        margin: 30,
        loop: true, /* Cho phép trượt vòng lặp vô hạn.*/
        mouseDrag: true, /* Tắt điều hướng kéo chuột.*/
        touchDrag: true, /* Tắt điều hướng kéo bằng cảm ứng*/
        pullDrag: false, /* Tắt điều hướng kéo kéo.*/
        dots: false, /* Ẩn dấu chấm điều hướng.*/
        navSpeed: 700, /*  Đặt tốc độ của hoạt ảnh điều hướng thành 700 mili giây.*/
        navText: ['<i class="ri-arrow-left-line"></i>', '<i class="ri-arrow-right-line"></i>'], /*  Ghi đè văn bản điều hướng mặc định bằng các chuỗi trống (không có văn bản).*/
        center: true,  // Căn giữa slide hiện tại
        responsive: {
            0: {
                items: 1,
                center: false,
            },
            640: {
                items: 3,
                center: false,
            },
            992: {
                items: 4,
                center: false,
            },
        },
        nav: true//Hiển thị mũi tên điều hướng.
    }
    /* Banner*/
    Banners: Banner[] = [
        {
            image: 'assets/all-image/slider_01.jpg',
            price: 39,
            title: 'Feel the tosca color'
        },
        {
            image: 'assets/all-image/slider_02.jpg',
            price: 65,
            title: 'Inner world of brown'
        },
        {
            image: 'assets/all-image/slider_03.jpg',
            price: 95,
            title: 'What a mix of colors'
        }
    ]
    /* Guide*/
    guides: Guide[] = [
        {
            image: 'assets/all-image/guide_01.png',
            title: 'The Blue Ocean MX',
            content: ''
        },
        {
            image: 'assets/all-image/guide_02.png',
            title: 'The Blue Ocean MX',
            content: ''
        },
        {
            image: 'assets/all-image/guide_03.png',
            title: 'The Blue Ocean MX',
            content: ''
        }
    ]
    carousel: Carousel[] = [
        {
            image: [
                {
                    image_active: 'assets/all-image/product_03.jpg',
                    image_hover: 'assets/all-image/product_03b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },
        {
            image: [
                {
                    image_active: 'assets/all-image/product_03.jpg',
                    image_hover: 'assets/all-image/product_03b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },
        {
            image: [
                {
                    image_active: 'assets/all-image/product_03.jpg',
                    image_hover: 'assets/all-image/product_03b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },
        {
            image: [
                {
                    image_active: 'assets/all-image/product_03.jpg',
                    image_hover: 'assets/all-image/product_03b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },
        {
            image: [
                {
                    image_active: 'assets/all-image/product_03.jpg',
                    image_hover: 'assets/all-image/product_03b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },
        {
            image: [
                {
                    image_active: 'assets/all-image/product_03.jpg',
                    image_hover: 'assets/all-image/product_03b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },

    ]
    /* áo len*/
    sweater: Carousel[] = [
        {
            image: [
                {
                    image_active: 'assets/all-image/product_01.jpg',
                    image_hover: 'assets/all-image/product_01b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },
        {
            image: [
                {
                    image_active: 'assets/all-image/product_01.jpg',
                    image_hover: 'assets/all-image/product_01b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },
        {
            image: [
                {
                    image_active: 'assets/all-image/product_01.jpg',
                    image_hover: 'assets/all-image/product_01b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },
        {
            image: [
                {
                    image_active: 'assets/all-image/product_01.jpg',
                    image_hover: 'assets/all-image/product_01b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },
        {
            image: [
                {
                    image_active: 'assets/all-image/product_01.jpg',
                    image_hover: 'assets/all-image/product_01b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },
    ]
    /* áo Hoodie*/
    hoodie: Carousel[] = [
        {
            image: [
                {
                    image_active: 'assets/all-image/product_02.jpg',
                    image_hover: 'assets/all-image/product_02b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },
        {
            image: [
                {
                    image_active: 'assets/all-image/product_02.jpg',
                    image_hover: 'assets/all-image/product_02b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },
        {
            image: [
                {
                    image_active: 'assets/all-image/product_02.jpg',
                    image_hover: 'assets/all-image/product_02b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },
        {
            image: [
                {
                    image_active: 'assets/all-image/product_02.jpg',
                    image_hover: 'assets/all-image/product_02b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },
        {
            image: [
                {
                    image_active: 'assets/all-image/product_02.jpg',
                    image_hover: 'assets/all-image/product_02b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },

    ]
    /* áo Shirt*/
    shirt: Carousel[] = [
        {
            image: [
                {
                    image_active: 'assets/all-image/product_03.jpg',
                    image_hover: 'assets/all-image/product_03b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },
        {
            image: [
                {
                    image_active: 'assets/all-image/product_03.jpg',
                    image_hover: 'assets/all-image/product_03b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },
        {
            image: [
                {
                    image_active: 'assets/all-image/product_03.jpg',
                    image_hover: 'assets/all-image/product_03b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },
        {
            image: [
                {
                    image_active: 'assets/all-image/product_03.jpg',
                    image_hover: 'assets/all-image/product_03b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },
        {
            image: [
                {
                    image_active: 'assets/all-image/product_03.jpg',
                    image_hover: 'assets/all-image/product_03b.jpg'
                }

            ],
            sale: 25,
            title: 'The Sweater in Tosca',
            price: [
                {
                    before: 62.00,
                    current: 45.00,
                }
            ]
        },

    ]



}
