
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
        
        <Route  path='/login' element={<SignIn />} >
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
{/* 
    <Route path='/admin'
        element={<AdminMain />}
        errorElement={<ErrorPage />}
    >
        <Route index path='' element={ <ProtectedRoute component={AdminHome} requiredRole={ROLES.ADMIN} />  }>
        </Route>
        <Route path='/admin/home' element={ <ProtectedRoute component={AdminHome} requiredRole={ROLES.ADMIN} />  }>
        </Route>
        <Route  path='/admin/message'   element={ <ProtectedRoute component={AdminMessage} requiredRole={ROLES.ADMIN}></ProtectedRoute>} >
        </Route>
        <Route path='/admin/personalinfo'element={ <ProtectedRoute component={AdminPersonalInfo} requiredRole={ROLES.ADMIN}></ProtectedRoute>}>
        </Route>
        <Route path='/admin/socialmedia' element={ <ProtectedRoute component={AdminSocialMedia} requiredRole={ROLES.ADMIN}></ProtectedRoute>}>
        </Route>
        <Route path='/admin/users' element={ <ProtectedRoute component={AdminUsers} requiredRole={ROLES.ADMIN}></ProtectedRoute>}>
        </Route>
        <Route path='/admin/projects' element={ <ProtectedRoute component={AdminProject} requiredRole={ROLES.ADMIN}></ProtectedRoute>}>
        </Route>
        <Route path='/admin/skill' element={ <ProtectedRoute component={AdminSkill} requiredRole={ROLES.ADMIN}></ProtectedRoute>} >
        </Route>
        <Route path='/admin/images' element={ <ProtectedRoute component={AdminImage} requiredRole={ROLES.ADMIN}></ProtectedRoute>}>
        </Route>
        <Route path='/admin/resume' element={ <ProtectedRoute component={AdminResume} requiredRole={ROLES.ADMIN}></ProtectedRoute>}>
        </Route>
        
    </Route> */}
    </>
))
export { routes };