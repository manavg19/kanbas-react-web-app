import { FaBell, FaBullhorn, FaBullseye, FaCalendar, FaCircle, FaTimes, FaUpload } from "react-icons/fa";
import ModuleList from "../Modules/List";
import { RxBarChart } from "react-icons/rx";
import "./index.css"


function Home() {
  return (
    <>
        <div className="flex-fill">
            <ModuleList />
        </div>
      
        <div className="flex-grow-0 me-2 d-none d-lg-block width-200">
            <td valign="top"> 
                <h3>Course Status</h3>
                <button type="button">Unpublish</button>
                <button type="button">Published</button>

                
                <button type="button" className="button-text">
                    <a href="#" className= "black-text">
                        <FaUpload/>
                        Import Existing Content
                    </a>
                </button>
                <button type="button" className="button-text">
                    <a href="#" className= "black-text">
                        <FaUpload/>
                        Import From Commons
                    </a>
                </button>
                <button type="button" className="button-text">
                    <a href="#" className= "black-text">
                        <FaBullseye/>
                        Choose Home Page
                    </a>
                </button>
                <button type="button" className="button-text">
                    <a href="#" className= "black-text">
                        <RxBarChart/>
                        View Course Stream
                    </a>
                </button>
                <button type="button" className="button-text">
                    <a href="#" className= "black-text">
                        <FaBullhorn/>
                        New Announcement
                    </a>
                </button>
                <button type="button" className="button-text">
                    <a href="#" className= "black-text">
                        <RxBarChart/>
                        New Analytics
                    </a>
                </button>
                <button type="button" className="button-text">
                    <a href="#" className= "black-text">
                        <FaBell/>
                        View Course Notifications
                    </a>
                </button>

                <h4 className="to-do-top-pad">To Do</h4>
                <hr className="mt-2 mb-3"/>

                <div className="d-flex flex-fill d-block">
                    <div>
                        <a className="red-no-text-dec" href="#">
                            <FaCircle/>&nbsp; Grade A1 - ENV + HTML &nbsp; &nbsp; 
                        </a>
                    </div>
                    <div>
                        <FaTimes style={{color: "gray"}}/>
                    </div>
                </div>
                <div className="small-text">
                    &nbsp; &nbsp; &nbsp; &nbsp; 100 points - Sep 18 at 11:59pm
                </div>
                

                <div className="coming-up-top-pad">Coming Up &nbsp; &nbsp;
                    <a className="red-no-text-dec-size12" href="#">
                        <FaCalendar style={{color: "gray"}}/>
                        View Calendar
                    </a>
                </div>
                <hr className="mt-2 mb-3"/>

                <div className="d-flex flex-fill d-block">
                    <div>
                        <a className="red-no-text-dec" href="#">
                            <FaCalendar style={{color: "gray"}}/>&nbsp; Lecture 
                        </a>
                    </div>
                </div>
                <div className="small-text">
                    &nbsp; &nbsp; &nbsp; &nbsp; CS4550.12631.202410
                </div>
                <div className="small-text">
                    &nbsp; &nbsp; &nbsp; &nbsp; Sep 11 at 11:45am
                </div>

                <div className="d-flex flex-fill d-block">
                    <div>
                        <a className="red-no-text-dec" href="#">
                            <FaCalendar style={{color: "gray"}}/>&nbsp; CS5610 06 SP23 Lecture
                        </a>
                    </div>
                </div>
                <div className="small-text">
                    &nbsp; &nbsp; &nbsp; &nbsp; CS4550.12631.202410
                </div>
                <div className="small-text">
                    &nbsp; &nbsp; &nbsp; &nbsp; Sep 11 at 6pm
                </div>

                <div className="d-flex flex-fill d-block">
                    <div>
                        <a className="red-no-text-dec" href="#">
                            <FaCalendar style={{color: "gray"}}/>&nbsp; CS5610 Web Development 
                        </a>
                    </div>
                </div>
                <div className="small-text">
                    &nbsp; &nbsp; &nbsp; &nbsp; CS4550.12631.202410
                </div>
                <div className="small-text">
                    &nbsp; &nbsp; &nbsp; &nbsp; Sep 11 at 7pm
                </div>
            </td>
        </div>
    
    </>
  );
}
export default Home;