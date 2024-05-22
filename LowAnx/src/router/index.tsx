import { BrowserRouter, Route, Routes  } from 'react-router-dom';

import { Suspense, lazy } from 'react'
import { routes } from './routes';

const HomePage = lazy(()=> import('../pages/HomePage'))
const PrincipalPage = lazy(()=> import('../pages/PrincipalPage'))
const AboutPage = lazy(()=> import ('../pages/AboutPage'))
const BookPage = lazy(()=> import ('../pages/BookPage'))
const ConfigPage = lazy(()=> import ('../pages/ConfigPage'))
const GuidePage = lazy(()=> import ('../pages/GuidePage'))
const LoginPage = lazy(()=> import ('../pages/LoginPage'))
const ProfilePage = lazy(()=> import ('../pages/ProfilePage'))
const SearchPage = lazy(()=> import ('../pages/SearchPage'))
const SignupPage = lazy(()=> import ('../pages/SignupPage'))
const MinigamesPage = lazy(()=> import ('../pages/MinigamesPage'))
const ChatBotPage = lazy(()=> import ('../pages/ChatBotPage.tsx'))

export const Router = () => {
  return (
    <Suspense>
      <BrowserRouter>
          {/* defining a layout for public routes */}
          <Routes>
            <Route path={routes.home} element={<HomePage/>} />
            <Route path={routes.principal} element={<PrincipalPage/>} />
            <Route path={routes.about} element={<AboutPage/>} />
            <Route path={routes.book} element={<BookPage/>} />
            <Route path={routes.config} element={<ConfigPage/>} />
            <Route path={routes.guide} element={<GuidePage/>} />
            <Route path={routes.login} element={<LoginPage/>} />
            <Route path={routes.profile} element={<ProfilePage/>} />
            <Route path={routes.search} element={<SearchPage/>} />
            <Route path={routes.signup} element={<SignupPage/>} />
            <Route path={routes.minigames} element={<MinigamesPage/>} />
            <Route path={routes.chatbot} element={<ChatBotPage/>} />
          </Routes>
      </BrowserRouter>
    </Suspense>
  );
};