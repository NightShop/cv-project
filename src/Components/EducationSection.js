import { useState } from "react";
import uniqid from "uniqid";
import EducationRowEditor from "./EducationRowEditor";
import EducationRow from "./EducationRow";

function EducationSection() {

    const [datas, setDatas] = useState({
        [uniqid()]: {
            schoolName: "test1",
            titleOfStudy: "test1",
            graduationYear: "test1",
            editorOpen: false,
        },
        [uniqid()]: {
            schoolName: "test2",
            titleOfStudy: "test2",
            graduationYear: "test2",
            editorOpen: false,
        }
    })


    function addNewRow() {
        let newRow = {
            schoolName: "",
            titleOfStudy: "",
            graduationYear: "",
            editorOpen: true,
        }
        setDatas({
            ...datas,
            [uniqid()]: newRow
        });
    }

    function toggleEditor(key) {
        let temp = {
            ...datas[key],
            editorOpen: !datas[key].editorOpen,
        };
        setDatas({
            ...datas,
            [key]: temp,
        })
    }

    function updateState(e, key) {
        let temp = {
            ...datas[key],
            [e.target.id]: e.target.value
        }
        setDatas({
            ...datas,
            [key]: temp
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>School Name</th>
                        <th>Title of Study</th>
                        <th>Graduation Year</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(datas).map(key => {
                        if (datas[key].editorOpen) {
                            return <EducationRowEditor updateState={updateState} key={key} toggleEditor={toggleEditor} data={datas[key]} dataKey={key} />
                        } else {
                            return <EducationRow dataKey={key} key={key} toggleEditor={toggleEditor} data={datas[key]} />;
                        }
                    })}
                    <tr>
                        <td colSpan="3">
                            <button onClick={addNewRow}>Add New</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default EducationSection;