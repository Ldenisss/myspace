import { useDispatch } from "react-redux";
import { getProfileFetch } from "../redux/actions";

const GetProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileFetch());
  }, []);
};

export default GetProfile;
