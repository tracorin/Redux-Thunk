import { useEffect } from "react";
import { getUser } from "./redux/actions/User";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const users = useSelector((state) => state.userReducer.users);

  return <div className="App"></div>;
};

export default App;
