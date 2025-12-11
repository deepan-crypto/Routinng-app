import { useParams } from "react-router-dom";

const Dashboard = () => {
    const { res } = useParams();
    console.log(res);
    
    return (
        <div>
            <h1>Dashboard Page</h1>
        </div>
    );
}
export default Dashboard;
