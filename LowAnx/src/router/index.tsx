import { BrowserRouter, Route, Routes  } from 'react-router-dom';

import { Suspense, lazy } from 'react'
import { routes } from './routes';

const HomePage = lazy(()=> import('../pages/HomePage'))
const PrincipalPage = lazy(()=> import('../pages/PrincipalPage'))

export const Router = () => {
  return (
    <Suspense>
      <BrowserRouter>
          {/* defining a layout for public routes */}
          <Routes>
            <Route path={routes.home} element={<HomePage/>} />
            <Route path={routes.principal} element={<PrincipalPage/>} />
          </Routes>
      </BrowserRouter>
    </Suspense>
  );
};