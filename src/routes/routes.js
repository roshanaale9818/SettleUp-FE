
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Main } from '../components/main/Main';
import ErrorPage from '../shared/components/ErrorPage';
import SignIn from '../components/signin/SignIn';
import { Home } from '../components/home/Home';

const routes = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/'
        element={<Main />}
        errorElement={<ErrorPage />}
    >
        <Route index path='/' element={<Home />} replace>
        </Route>
        
        {/* loader={SignInLoader} */}
        <Route  path='/login' element={<SignIn />}  >
        </Route>
        <Route  path='/home' element={<Home />} >
        </Route>
         {/*<Route index path='/home' element={<Home />}>
        </Route>
        <Route path='/skills' element={<Skill />}>
        </Route>
        <Route path='/project' element={<Project />}>
        </Route>
        <Route path='/contact' element={<Contact />}>
        </Route>
        <Route path='/signup' element={<Signup />}>
        </Route>
        <Route path='/admin/login' element={<Login />}>
        </Route>
        <Route path='/unauthorized' element={<h1 className='text-center'>You are not authorized.</h1>}>
        </Route> */}
    </Route>,

    {/* this is something we can do to access the route data to its inners data for example product detail and product edit pages  */}
{/* 
    <Route path=':eventId'
        errorElement={<ErrorPage />}
        loader={SignInLoader}
    >
       <Route index  element={<SignIn />} replace>
        </Route>
    
    </Route>, */}

    </>
))
export { routes };