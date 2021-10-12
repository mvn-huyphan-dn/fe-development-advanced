import { useHistory, useLocation } from "react-router";
import { useAuth } from "../../../hooks";

export default function Login() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <>
      <section className='section-login'>
        <div className='container flex-column flex-center txt-center'>
          <p>You must log in to view the page at {from.pathname}</p>
          <button className='btn btn-round btn-login' onClick={login}>Log in</button>
        </div>
      </section>
    </>
  );
}
