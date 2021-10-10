import { useHistory, useLocation } from "react-router";
import { useAuth } from "../../../hooks";

export default function Profile() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let logout = () => {
    auth.signout(() => {
      history.replace(from);
    });
  };

  return (
    <>
      <section className='section-profile'>
        <div className='container flex-column flex-center'>
          <h1>This is profile page</h1>
          <button className='btn btn-round btn-logout' onClick={logout}>Log Out</button>
        </div>
      </section>
    </>
  )
}
