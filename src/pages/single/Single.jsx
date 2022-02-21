import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";
import { useParams, useLocation} from "react-router-dom";

export default function Single(props) {
  const { id } = useParams();
  const data = useLocation();
  return (
    <div className="single">
      <SinglePost id={id} data={data.state} />
      <Sidebar />
    </div>
  );
}
