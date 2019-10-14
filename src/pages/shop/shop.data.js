const SHOP_DATA = [
  {
    id: 1,
    title: 'イヤホン',
    routeName: 'earphones',
    items: [
      {
        id: 1,
        name: 'SONY WF-1000XM3',
        imageUrl: 'https://i.ibb.co/3fXtfDy/1-000000245625.jpg',
        price: 28400
      },
      {
        id: 2,
        name: 'audio-technica ATH-CKS5TW',
        imageUrl: 'https://i.ibb.co/51CyJFh/1-000000256230.jpg',
        price: 19580
      },
      {
        id: 3,
        name: 'JBL REFLECT FLOW',
        imageUrl: 'https://i.ibb.co/mhCNd2M/5-000000258430.jpg',
        price: 12672
      },
      {
        id: 4,
        name: 'Beats by Dr.Dre Powerbeats PRO',
        imageUrl: 'https://i.ibb.co/qr6JqMw/1-000000252720.jpg',
        price: 27280
      },
      {
        id: 5,
        name: 'Klipsch T5 TRUE WIRELESS',
        imageUrl: 'https://i.ibb.co/nnDVfZw/1-000000254917.jpg',
        price: 27368
      },
      {
        id: 6,
        name: 'FOSTEX TM2',
        imageUrl: 'https://i.ibb.co/yq0m6LS/1-000000240306.jpg',
        price: 29700
      }
    ]
  },
  {
    id: 2,
    title: 'タブレット',
    routeName: 'tablets',
    items: [
      {
        id: 1,
        name: 'Samsung Galaxy Tab S6',
        imageUrl: 'https://i.ibb.co/pz17p65/samsung-galaxy-tab-s6-sm-t865.jpg',
        price: 92710
      },
      {
        id: 2,
        name: 'Apple iPad Mini 5th Gen',
        imageUrl: 'https://i.ibb.co/0y3GV5k/apple-ipad-mini-2019-a2133.jpg',
        price: 54320
      },
      {
        id: 3,
        name: 'Amazon Fire HD 8',
        imageUrl: 'https://i.ibb.co/D9YPB84/61-T-HSq-LEWL-AC-SL1000.jpg',
        price: 8980
      },
      {
        id: 4,
        name: 'HUAWEI T3 8',
        imageUrl: 'https://i.ibb.co/qdQ6nwd/61-Xxo-Wu2-Wt-L-AC-SL1500.jpg',
        price: 14296
      }
    ]
  },
  {
    id: 3,
    title: 'Bluetoothスピーカー',
    routeName: 'speakers',
    items: [
      {
        id: 1,
        name: 'JBL FLIP5',
        imageUrl: 'https://i.ibb.co/q5P830b/8-000000257633.jpg',
        price: 9774
      },
      {
        id: 2,
        name: 'Harman Kardon ONYX STUDIO 6',
        imageUrl: 'https://i.ibb.co/x1NVnQf/1-000000255883.jpg',
        price: 30668
      },
      {
        id: 3,
        name: 'Bose Home Speaker 300',
        imageUrl: 'https://i.ibb.co/zNzpcRM/6-000000249620.jpg',
        price: 33000
      },
      {
        id: 4,
        name: 'SONY SRS-XB22',
        imageUrl: 'https://i.ibb.co/gTY8vgf/7-000000236131.jpg',
        price: 14168
      },
      {
        id: 5,
        name: 'DALI KATCH',
        imageUrl: 'https://i.ibb.co/2PxxDS1/9-000000230429.jpg',
        price: 49500
      }
    ]
  },
  {
    id: 4,
    title: 'スマートフォン',
    routeName: 'smartphones',
    items: [
      {
        id: 1,
        name: 'Apple iPhone 11 Pro',
        imageUrl:
          'https://i.ibb.co/H7YFdXV/iphone-11-pro-select-2019-wid-882-hei-1058-fmt-jpeg-qlt-80-op-usm-0-5-0-5.jpg',
        price: 106800
      },
      {
        id: 2,
        name: 'Apple iPhone 11 Pro Max',
        imageUrl:
          'https://i.ibb.co/4J7YQGm/iphone-11-pro-max-select-2019-wid-882-hei-1058-fmt-jpeg-qlt-80-op-usm-0-5-0-5.jpg',
        price: 119800
      },
      {
        id: 3,
        name: 'HUAWEI P30 Lite',
        imageUrl: 'https://i.ibb.co/4NjK9G1/618ixfvbe-FL-AC-SL1000.jpg',
        price: 31400
      },
      {
        id: 4,
        name: 'ASUS ZenFone 6',
        imageUrl: 'https://i.ibb.co/1qvn8r4/81-Mwvfd-GLt-L-AC-SL1500.jpg',
        price: 75000
      },
      {
        id: 5,
        name: 'OPPO K3',
        imageUrl: 'https://i.ibb.co/kMGBRcF/41-ZKB8-CVDFL-AC.jpg',
        price: 29000
      },
      {
        id: 6,
        name: 'Xiaomi Redmi Note 8 Pro',
        imageUrl:
          'https://i.ibb.co/5npw63H/0-40326600-1569998915-xiaomi-redmi-note-8-pro-dual-sim-64gb-green-6gb-ram-global.jpg',
        price: 29400
      },
      {
        id: 7,
        name: 'Xiaomi Black Shark 2 Pro',
        imageUrl:
          'https://i.ibb.co/5YF5q7k/0-86598600-1569514687-xiaomi-black-shark-2-pro-dual-256gb-silver-12gb-ram-free-phone-case-gamepad-2-0.jpg',
        price: 75300
      }
    ]
  },
  {
    id: 5,
    title: 'ノートパソコン',
    routeName: 'laptops',
    items: [
      {
        id: 1,
        name: 'Microsoft Surface Go',
        imageUrl: 'https://i.ibb.co/HXqkBTY/microsoft-surface-go.jpg',
        price: 54000
      },
      {
        id: 2,
        name: 'Microsoft Surface Laptop',
        imageUrl: 'https://i.ibb.co/D78CGDt/microsoft-surface-laptop.jpg',
        price: 87890
      },
      {
        id: 3,
        name: 'Microsoft Surface Pro',
        imageUrl: 'https://i.ibb.co/SKb3G5W/microsoft-surface-pro-2017.jpg',
        price: 72255
      },
      {
        id: 4,
        name: 'Microsoft Surface Book 2',
        imageUrl: 'https://i.ibb.co/TvxZNJp/microsoft-surface-book-2.jpg',
        price: 231520
      }
    ]
  }
];

export default SHOP_DATA;
