export default class AppData {
  data: any = {
    currentModal: '',
    userStatus: 'admin',
    gameState: 'home',
    WidgetContent: [
      {
        id: 'shop',
        iconClass: 'pe-7s-cart',
        color: '#0000ff',
        currency: '₾',
        title: 'მაღაზიის შემოსავალი',
        value: 0
      },
      {
        id: 'console',
        iconClass: 'pe-7s-monitor',
        color: '#00ff00',
        currency: '₾',
        title: 'კონსოლების შემოსავალი',
        value: 0
      }
    ],
    tableContent: [
      {
        id: 5634,
        name: 'Don Kote',
        product: 'iStore',
        quantity: 123,
        status: 'complete'
      },
      {
        id: 5634,
        name: 'Don Zauri',
        product: 'iStore',
        quantity: 123,
        status: 'pending'
      },
      {
        id: 5634,
        name: 'Don Vito',
        product: 'iStore',
        quantity: 123,
        status: 'complete'
      },
      {
        id: 5634,
        name: 'Don Elguja',
        product: 'iStore',
        quantity: 123,
        status: 'pending'
      },
      {
        id: 5634,
        name: 'Don Mamazagli',
        product: 'iStore',
        quantity: 123,
        status: 'complete'
      }
    ],
    tableHeading: 'თანამშრომელთა სია',
    computers: [
      {
        id: 1,
        name: 'Standart Console',
        type: 'standart',
        state: 'free',
        users: 0,
        maxUsers: 4,
        maxTime: 0,
        currentTime: 0,
        fixedTime: true,
        timerActive: true,
        defaultPrice: 4,
        currentPrice: 8
      },
      {
        id: 2,
        name: 'Standart Console',
        type: 'standart',
        state: 'free',
        users: 0,
        maxUsers: 4,
        maxTime: 0,
        currentTime: 0,
        fixedTime: true,
        timerActive: true,
        defaultPrice: 4,
        currentPrice: 8
      },
      {
        id: 3,
        name: 'Standart Console',
        type: 'standart',
        state: 'free',
        users: 0,
        maxUsers: 4,
        maxTime: 0,
        currentTime: 0,
        fixedTime: true,
        timerActive: true,
        defaultPrice: 4,
        currentPrice: 8
      },
      {
        id: 4,
        name: 'Standart Console',
        type: 'standart',
        state: 'free',
        users: 0,
        maxUsers: 4,
        maxTime: 0,
        currentTime: 0,
        fixedTime: true,
        timerActive: true,
        defaultPrice: 4,
        currentPrice: 8
      },
      {
        id: 5,
        name: 'Standart Console',
        type: 'standart',
        state: 'free',
        users: 0,
        maxUsers: 4,
        maxTime: 0,
        currentTime: 0,
        fixedTime: true,
        timerActive: true,
        defaultPrice: 4,
        currentPrice: 8
      },
      {
        id: 6,
        name: 'Standart Console',
        type: 'standart',
        state: 'free',
        users: 0,
        maxUsers: 4,
        maxTime: 0,
        currentTime: 0,
        fixedTime: true,
        timerActive: true,
        defaultPrice: 4,
        currentPrice: 8
      },
      {
        id: 7,
        name: 'VIP Console',
        type: 'vip',
        state: 'free',
        users: 0,
        maxUsers: 4,
        maxTime: 0,
        currentTime: 0,
        fixedTime: true,
        timerActive: true,
        defaultPrice: 8,
        currentPrice: 8
      },
      {
        id: 8,
        name: 'VIP Console',
        type: 'vip',
        state: 'free',
        users: 0,
        maxUsers: 4,
        maxTime: 0,
        currentTime: 0,
        fixedTime: true,
        timerActive: true,
        defaultPrice: 8,
        currentPrice: 8
      },
      {
        id: 9,
        name: 'Standart Console',
        type: 'standart',
        state: 'free',
        users: 0,
        maxUsers: 4,
        maxTime: 0,
        currentTime: 0,
        fixedTime: true,
        timerActive: true,
        defaultPrice: 4,
        currentPrice: 8
      }
    ],
    controllers: [
      { value: 1, name: '1 ჯოისტიკი' },
      { value: 2, name: '2 ჯოისტიკი' },
      { value: 3, name: '3 ჯოისტიკი' },
      { value: 4, name: '4 ჯოისტიკი' }
    ],
    time: [
      { value: 0, name: 'მიმდინარე' },
      { value: 5, name: 'ნახ. საათი' },
      { value: 1, name: '1 საათი' },
      { value: 2, name: '2 საათი' },
      { value: 3, name: '3 საათი' }
    ],
    shopContent: [
      {
        id: 5634,
        name: 'კოკა კოლა',
        price: 1.3,
        currency: '₾',
        quantity: 30,
        danger: false,
        icon: '../assets/images/shop/cola.svg',
        class: 'badge badge-complete',
        status: 'მარაგშია'
      },
      {
        id: 5635,
        name: 'არსი კოლა',
        price: 1.2,
        currency: '₾',
        quantity: 30,
        danger: false,
        icon: '../assets/images/shop/cola.svg',
        class: 'badge badge-complete',
        status: 'მარაგშია'
      },
      {
        id: 5636,
        name: 'ფანტა ლიმონის',
        price: 1.1,
        currency: '₾',
        quantity: 30,
        danger: true,
        icon: '../assets/images/shop/cola.svg',
        class: 'badge badge-complete',
        status: 'მარაგშია'
      },
      {
        id: 5638,
        name: 'პეპსი',
        price: 1.0,
        currency: '₾',
        quantity: 0,
        danger: true,
        icon: '../assets/images/shop/cola.svg',
        class: 'badge badge-danger',
        status: 'ამოიწურა'
      }
    ],
    modalParams: {
      confirmSaleModal: {
        type: 'shopModal',
        name: 'Confirm Sale',
        buttons: [
          {
            text: 'დახურვა',
            type: 'decline'
          },
          {
            text: 'დადასტურება',
            type: 'accept'
          }
        ],
        info: []
      },
      stopTimerModal: {
        type: 'timeModal',
        name: 'Stop Timer',
        buttons: [
          {
            text: 'დახურვა',
            type: 'decline'
          },
          {
            text: 'დადასტურება',
            type: 'accept'
          }
        ],
        info: []
      }
    },
    promotions: [
      {
        id: 1,
        title: 'აქცია 2+1',
        shortInfo: '2სთ. = 3სთ.',
        consoles: ['კონსოლი 1', 'კონსოლი 2', 'კონსოლი 3'],
        allTime: false,
        allTimeText: 'უვადო',
        dateFrom: '15 იანვ.',
        dateTo: '15 თებ.',
        price: 4,
        currency: '₾',
        fullInfo:
          'აქციის ფარგლებში ყველა კომპიუტერზე 2 საათის ჩართვის შემთხვევაში მიიღებთ მესამე საათს უფასოდ.'
      },
      {
        id: 2,
        title: 'ღამის აქცია',
        shortInfo: '1სთ. = 2₾',
        consoles: ['კონსოლი 1', 'კონსოლი 2'],
        allTime: true,
        allTimeText: 'უვადო',
        dateFrom: '',
        dateTo: '',
        price: 2,
        currency: '₾',
        fullInfo:
          'ყოველდღე ღამის 1 საათის შემდეგ ყველა კომპიუტერზე გარდა VIP ტიპის კონსოლებისა 1 საათის ღირებულება არის 2₾.'
      }
    ]
  };

  changeState(val: string): void {
    this.data.gameState = val;
  }

  increaseValue(id: string, value: number): void {
    this.data.WidgetContent.forEach(widget => {
      if (widget.id === id) {
        widget.value += value;
      }
    });
  }

  removePromotion(id: number) {
    this.data.promotions = this.data.promotions.filter(
      promo => id !== promo.id
    );
  }
  addProduct(vall: any) {
    this.data.shopContent.push(vall);
  }
}
