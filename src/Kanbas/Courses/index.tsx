import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import { FaAngleRight, FaGlasses } from "react-icons/fa";
import "../Navigation/index.css"
import Home from "./Home";
import Assignments from "./Assignments";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);

  var reloadName = new String(window.location.href).substring(new String(window.location.href).lastIndexOf("/")+1).replace(/%20/g, " ");
  return (
    <>
    <div className="d-none d-md-block ps-4 pe-4 pt-3">
        <div className="d-flex pb-1 ps-1">
            <div className="d-flex flex-fill">
                <div>
                    <HiMiniBars3 />
                </div>
                <div>
                    <a className="no-dec" style={{color: "red"}}>{course?.name} </a>
                </div>
                <div>
                    <FaAngleRight />
                </div>
                <div>
                    {reloadName}
                </div>
            </div>
            <div className="pe-1">
                <button type="button" className="btn btn-outline-secondary btn-sm"><FaGlasses/>Student View</button>
            </div>
        </div>
        <hr></hr>
    </div>

    <div className="d-flex">
        <div className="navigation-column-2nd d-none d-md-block">
            <CourseNavigation />
        </div>

        <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default Courses;