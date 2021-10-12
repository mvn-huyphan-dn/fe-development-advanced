import { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import { Footer, Header, PrivateRoute } from "../components";
import { Home, ProductDetail, Products } from './Features'
import { Login } from './Auth'
import { Profile } from "./Account";
import NotFound from "./Features/NotFound";

export default function Page() {
  return (
    <>
      <Header />
      <main className='page-main'>
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            <Route exact path='/' >
              <Home />
            </Route>
            <Route path='/products/:productId'>
              <ProductDetail />
            </Route>
            <Route path='/products'>
              <Products />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <PrivateRoute path='/profile'>
              <Profile />
            </PrivateRoute>
            <Route path='/404' component={NotFound} />
            <Redirect from='/*' to='/404' />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
