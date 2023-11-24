import { Outlet, Link } from "react-router-dom";

const Tasks = () => {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/task1">Task 1</Link>
                    </li>
                    <li>
                        <Link to="/task2">Task 2</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Tasks;