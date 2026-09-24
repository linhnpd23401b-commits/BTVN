import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CatalogService {
  // Giá mẫu (VND) cho bài tập, không phải giá bán thực tế.
  datas = [
    {
      Cateid: 'cate1',
      CateName: 'Túi xách tay',
      Products: [
        {
          ProductId: 'p1',
          ProductName: 'Túi xách LESAC màu kem',
          Price: 790000,
          Image: 'assets/-hieu-tui-xach-noi-tieng-o-viet-nam-1_84778f7edd4b4d63a3f34ad8c0b88833_grande.jpg',
        },
        {
          ProductId: 'p2',
          ProductName: 'Túi xách Coach phối màu',
          Price: 4590000,
          Image: 'assets/tui-xach-my-5.jpg',
        },
        {
          ProductId: 'p3',
          ProductName: 'Túi xách ELLY ET205',
          Price: 1890000,
          Image: 'assets/tui-xach-nu-cao-cap-da-that-elly-et205-17.webp',
        },
      ],
    },
    {
      Cateid: 'cate2',
      CateName: 'Túi đeo vai và đeo chéo',
      Products: [
        {
          ProductId: 'p4',
          ProductName: 'Túi đeo chéo Gucci màu be',
          Price: 32900000,
          Image: 'assets/images (2).jpg',
        },
        {
          ProductId: 'p5',
          ProductName: 'Túi đeo vai Coach họa tiết',
          Price: 3990000,
          Image: 'assets/thuong-hieu-tui-xach-nu-1_52d03de5bc07469495fb674ef5919c12_grande.webp',
        },
        {
          ProductId: 'p6',
          ProductName: 'Túi đeo vai họa tiết NY',
          Price: 1290000,
          Image: 'assets/tui-xach-thoi-trang-2-1675186430.jpg',
        },
      ],
    },
  ];

  constructor() { }

  getCategories() {
    return this.datas;
  }
}
