import { useNavigate } from 'react-router-dom';

import './category-item.scss';

const CategoryItem = ({ shoe }) => {
  const { imageUrl, title, route } = shoe;
  const navigate = useNavigate();

  const navigateHandler = () => navigate(route);

  return (
    <div className='shoes'onClick={navigateHandler}>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='shoe-body'>
        <h2>{title}</h2>
        <p>Enjoy this delight today!</p>
      </div>
    </div>
  );
};

export default CategoryItem;