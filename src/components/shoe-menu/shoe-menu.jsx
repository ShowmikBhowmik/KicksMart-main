import CategoryItem from '../category-item/category-item';

import './shoe-menu.scss';

const shoes = [
    {
      id: 1,
      title: 'Jordans',
      imageUrl: 'https://p1.pxfuel.com/preview/585/370/573/various-footwear-shoe-shoes.jpg',
      route: 'shop/jordans',
    },
    {
      id: 2,
      title: 'Sneakers',
      imageUrl: 'https://images.theconversation.com/files/303723/original/file-20191126-180279-gvmxgl.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C6989%2C4892&q=45&auto=format&w=926&fit=clip',
      route: 'shop/sneakers',
    },
    {
      id: 3,
      title: 'Boots',
      imageUrl: 'https://www.publicdomainpictures.net/pictures/280000/velka/cowboy-boots-and-hat-on-bench.jpg',
      route: 'shop/boots',
    },
    {
      id: 4,
      title: 'Loafers',
      imageUrl: 'https://images.pexels.com/photos/4593811/pexels-photo-4593811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      route: 'shop/loafers',
    },
    {
      id: 5,
      title: 'Sandals',
      imageUrl: 'https://www.publicdomainpictures.net/pictures/470000/velka/sandals-beautiful-legs-legs-feet-1660572526pdr.jpg',
      route: 'shop/sandals',
    },
  ];

const ShoeMenu = () => {
  return (
    <div className='shoe-menu'>
      {shoes.map((shoe) => (
        <CategoryItem key={shoe.id} shoe={shoe} />
      ))}
    </div>
  );
};

export default ShoeMenu;