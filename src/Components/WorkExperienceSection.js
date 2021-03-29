import { useState } from "react";
import uniqid from "uniqid";
import WorkExperienceRow from "./WorkExperienceRow";
import AddNewWorkExperience from "./AddNewWorkExperience";
import WorkExperienceEditorRow from "./WorkExperienceEditorRow";

function WorkExperienceSection() {
    const [datas, setDatas] = useState({
        [uniqid()]: {
            companyName: "Celtra",
            positionTitle: "Engineer",
            mainTasks: "Creation of templates, data structuring",
            dateFrom: "11/02/2018",
            dateTo: "22/01/2020",
            editorOpen: false
        },
        [uniqid()]: {
            companyName: "Tretton",
            positionTitle: "Software Engineer",
            mainTasks: "Fullstack development",
            dateFrom: "01/01/2012",
            dateTo: "01/01/2018",
            editorOpen: false
        }
    })



    function toggleEditor(Key) {
        console.log("toggleeditor");


        setDatas(prevState => {
            return {
                ...prevState,
                [Key]: {
                    ...prevState[Key],
                    editorOpen: !prevState[Key].editorOpen,
                }
            }
        });
    }

    function updateState(event, key) {


        setDatas(prevState => {
            return {
                ...prevState,
                [key]: {
                    ...datas[key],
                    [event.target.id]: event.target.value
                }
            }
        }
        );

    }

    function addNewRow() {
        let newRowData = {
            companyName: "",
            positionTitle: "",
            mainTasks: "",
            dateFrom: "",
            dateTo: "",
            editorOpen: true,
            isNew: "true",
        }
        setDatas({
            ...datas,
            [uniqid()]: newRowData
        });
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Title of Position</th>
                    <th>Main Taksks</th>
                    <th>From</th>
                    <th>To</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(datas).map(key => {
                    if (datas[key].editorOpen) {
                        return (<WorkExperienceEditorRow key={key} dataID={key} updateState={updateState} toggleEditor={toggleEditor} data={datas[key]} />)
                    } else {
                        return (<WorkExperienceRow key={key} dataID={key} updateState={updateState} toggleEditor={toggleEditor} data={datas[key]} />)
                    }
                })}
                <AddNewWorkExperience addNewRow={addNewRow} />
            </tbody>
        </table>
    )
}

export default WorkExperienceSection;