import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

export default class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'EARPHONES',
          imageUrl:
            'https://images.unsplash.com/photo-1564632516593-e1be25b7ee33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3451&q=80',
          id: 1,
          linkUrl: 'shop/smartphones'
        },
        {
          title: 'TABLETS',
          imageUrl:
            'https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2940&q=80',
          id: 2,
          linkUrl: 'shop/tablets'
        },
        {
          title: 'BLUETOOTH SPEAKERS',
          imageUrl:
            'https://images.unsplash.com/photo-1518671678551-911467efe539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80',
          id: 3,
          linkUrl: 'shop/speakers'
        },
        {
          title: 'SMARTPHONES',
          imageUrl:
            'https://images.unsplash.com/photo-1514996550219-62672472d03b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80',
          size: 'large',
          id: 4,
          linkUrl: 'shop/earphones'
        },
        {
          title: 'LAPTOPS',
          imageUrl:
            'https://images.unsplash.com/photo-1553532646-968536ab10e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3449&q=80',
          size: 'large',
          id: 5,
          linkUrl: 'shop/laptops'
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
