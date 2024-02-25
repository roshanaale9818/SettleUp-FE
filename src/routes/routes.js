
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Main } from '../components/main/Main';
import ErrorPage from '../shared/components/ErrorPage';
import { Suspense, lazy } from 'react';
import SuspenseLoading from '../shared/layout/SuspenseLoading/SuspenseLoading';
const SignInPage = lazy(() => import('../components/signin/SignIn'));
const HomePage = lazy(() => import('../components/home/Home'))

const routes = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path='/'
            element={<Main />}
            errorElement={<ErrorPage />}
        >
            <Route index path='/' element={<Suspense fallback={
                <SuspenseLoading />
            } >
                <HomePage />
            </Suspense>}>
            </Route>
            <Route index path='/' replace element={<Suspense fallback={
                <SuspenseLoading />
            } >
                <HomePage />
            </Suspense>}>
            </Route>

            <Route path='/login' element={<Suspense fallback={
                <SuspenseLoading />
            }>
                <SignInPage />
            </Suspense>}>
            </Route>

            {/* eager loading */}
            {/* <Route  path='/home' element={<Home />} >
        </Route> */}


            <Route path='/home' element={<Suspense fallback={
                <SuspenseLoading />
            }>
                <HomePage />
            </Suspense>}>
            </Route>
        </Route>,

    </>
))
export { routes };