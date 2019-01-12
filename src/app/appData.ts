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
        item: 'Coca-Cola',
        quantity: 15,
        price: 1.3
      },
      {
        item: 'Fanta',
        quantity: 4,
        price: 1.3
      },
      {
        item: 'Fuse Tea',
        quantity: 8,
        price: 2.0
      },
      {
        item: 'Sprite',
        quantity: 5,
        price: 1.3
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
    }
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
}
