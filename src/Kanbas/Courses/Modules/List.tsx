import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>  state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>  state.modulesReducer.module);
  const dispatch = useDispatch();
    const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  return (
    <>
      <div className="div_buttons_mod">
        <button type="button">Collapse All</button>
        <button type="button">View Progress</button>
        <select id="publish-all">
            <option selected value="SCIFI">Publish All</option>
        </select>
        <button className="module_button" type="button">
          <FaPlus/> Module
          </button>
        <button type="button">
          <FaEllipsisV />
          </button>
      </div> 
      <hr></hr>
      <div className="d-flex flex-column flex-fill">
    
          <div className="extra-padding-mod">
            <label> Module Name </label>
            <br></br>
            <input
              className="full-width-input"
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }/>
          </div>
          <div className="extra-padding-mod">
            <label> Module Description </label>
            <br></br>
            <textarea
              className="full-width-input"
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }/>
          </div>
     
        <div className="d-flex">
          <div className="extra-padding-mod">
            <button className="btn btn-primary"
              onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
              Add
            </button>
          </div>
          <div className="extra-padding-mod">
            <button className="btn btn-secondary"
              onClick={() => dispatch(updateModule(module))}>
              Update
            </button>
          </div>
        </div>
      </div>
      <hr></hr>
        <ul className="list-group wd-modules extra-padding-mod">
          
        {moduleList.filter((module) => module.course === courseId).map((module, index) => (
            <li key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}>
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                <button className="btn btn-primary" onClick={() => dispatch(setModule(module))}> Edit </button>
                <button className="btn btn-danger ms-2" onClick={() => dispatch(deleteModule(module._id))}> Delete </button>

                  <FaCheckCircle className="text-success ms-2" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson : any) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      
    </>
  );
}
export default ModuleList;