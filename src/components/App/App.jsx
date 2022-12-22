import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLauout/SharedLauout';

// import { Mission } from 'components/Mission/Mission';
// import { Team } from 'components/Team/Team';
// import { Reviews } from 'components/Reviews/Reviews';

const About = lazy(() => import('../../pages/About'));
const Home = lazy(() => import('../../pages/Home'));
const ProductDetails = lazy(() => import('../../pages/ProductDetails'));
const Products = lazy(() => import('../../pages/Products'));
const Mission = lazy(() => import('../Mission/Mission'));
const Team = lazy(() => import('../Team/Team'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};
