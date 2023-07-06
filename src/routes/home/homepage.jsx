import { Outlet } from 'react-router-dom';

import ShoeMenu from '../../components/shoe-menu/shoe-menu';

const HomePage = () => {
  

  return (<div>
  <ShoeMenu  />
  <Outlet/>
  </div>
  );
};

export default HomePage;