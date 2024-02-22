import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlus, FaPlusCircle, FaRegEdit } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      
    <div className="content-column flex-fill">  
    
        <div className="d-flex div_buttons_mod">
            <div className="flex-fill">
                <input id="Search for Assignments" placeholder="Search for Assignments"/>
            </div>
            <button type="button"> <FaPlus/> Group</button>
            <button className="assignment_button" type="button"><FaPlus/> Assignment</button>
            <button type="button">
                <FaEllipsisV/>
            </button>
        </div>
        <hr className="div_buttons_mod mt-2 mb-3"/>
        <ul className="extra-padding-mod list-group wd-modules">
            <li className="list-group-item">
            <div>
                <FaEllipsisV className="me-2" /> ASSIGNMENTS
                <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                </span>
            </div>
            <ul className="list-group">
                {assignmentList.map((assignment) => (
                <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    <FaRegEdit/>&nbsp;&nbsp;
                    <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                    <span className="float-end">
                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                </li>))}
            </ul>
            </li>
        </ul>
    </div>
    </>
);}
export default Assignments;