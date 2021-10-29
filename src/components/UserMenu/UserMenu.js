import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import authSelectors from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <Navbar>
      <p className="greetings">Hi, {name},how are you today? </p>
      <button
        className="btn-logout"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log off
      </button>
    </Navbar>
  );
}
