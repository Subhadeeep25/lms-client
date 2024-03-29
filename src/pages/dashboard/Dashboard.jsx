import Navbar from "../../components/Navbar/Navbar";
import Menu from "../../components/Menu/Menu";
import React, { useState } from "react";
import Quizes from "../../components/Quizes";
import Courses from "../../components/Courses";
import AddTrainer from "../../components/Forms/AddTrainer";
import AddTrainee from "../../components/Forms/AddTrainee";
import DeleteTrainer from "../../components/Forms/DeleteTrainer";
import DeleteTrainee from "../../components/Forms/DeleteTrainee";

const Dashboard = () => {
    const [coursesOpen, setCoursesOpen] = useState(false);
    const [quizesOpen, setQuizesOpen] = useState(true);
    const[addTrainer,setAddTrainer]=useState(false);
    const[addTrainee,setAddTrainee]=useState(false);
    const[deleteTrainer,setDeleteTrainer]=useState(false);
    const[deleteTrainee,setDeleteTrainee]=useState(false);
    const functionsList = [
        { func: handleQuizes, state: setQuizesOpen, value: true },
        { func: handleCourses, state: setCoursesOpen, value: true },
        { func: handleAddTrainer, state: setAddTrainer, value: true },
        { func: handleAddTrainee, state: setAddTrainee, value: true },
        { func: handleDeleteTrainer,state:setDeleteTrainer,value:true},
        { func: handleDeleteTrainee,state:setDeleteTrainee,value:true},

    ];
    function handleQuizes() {
        handleState(functionsList[0]);
    }

    function handleCourses() {
        handleState(functionsList[1]);
    }

    function handleAddTrainer() {
        handleState(functionsList[2]);
    }

    function handleAddTrainee() {
        handleState(functionsList[3]);
    }
    function handleDeleteTrainer(){
        handleState(functionsList[4]);
    }
    function handleDeleteTrainee(){
        handleState(functionsList[5]);
    }
    function handleState(item) {
        const newState = {};
        for (const state of functionsList) {
            state.state(state === item ? state.value : false);
        }
        Object.assign(newState, { ...newState });
    }

    return (
        <>
            <div className="bg-dark-purple">
                <Navbar />
            </div>
            <div className="flex">
                <div className={`w-[170px] h-screen bg-dark-purple`}>
                    <Menu
                        openQuizes={handleQuizes}
                        openCourses={handleCourses}
                        addTrainer={handleAddTrainer}
                        addTrainee={handleAddTrainee}
                        deleteTrainer={handleDeleteTrainer}
                        deleteTrainee={handleDeleteTrainee}
                    />
                </div>
                <div>
                    {quizesOpen && <Quizes />}
                    {coursesOpen && <Courses />}
                    {addTrainer &&<AddTrainer/>}
                    {addTrainee && <AddTrainee/>}
                    {deleteTrainer && <DeleteTrainer/>}
                    {deleteTrainee && <DeleteTrainee/>}
                </div>
            </div>
        </>
    );
};

export default Dashboard;
