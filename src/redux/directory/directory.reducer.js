const INITIAL_STATE = {
  sections: [
    {
      title: 'イヤホン',
      imageUrl:
        'https://images.unsplash.com/photo-1536435316746-a0b5a1665819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
      id: 1,
      linkUrl: 'shop/earphones'
    },
    {
      title: 'タブレット',
      imageUrl:
        'https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2940&q=80',
      id: 2,
      linkUrl: 'shop/tablets'
    },
    {
      title: 'Bluetoothスピーカー',
      imageUrl:
        'https://images.unsplash.com/photo-1542193810-9007c21cd37e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      id: 3,
      linkUrl: 'shop/speakers'
    },
    {
      title: 'スマートフォン',
      imageUrl:
        'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80',
      size: 'large',
      id: 4,
      linkUrl: 'shop/smartphones'
    },
    {
      title: 'ノートパソコン',
      imageUrl:
        'https://images.unsplash.com/photo-1553532646-968536ab10e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3449&q=80',
      size: 'large',
      id: 5,
      linkUrl: 'shop/laptops'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
