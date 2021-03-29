function EducationRowEditor (props) {

        return (
            <tr>
                <td>
                    <label htmlFor="schoolName">School Name:</label>
                    <input id="schoolName" onChange={(e) => props.updateState(e, props.dataKey)} value={props.data.schoolName}></input>
                </td>
                <td>
                    <label htmlFor="titleOfStudy">Title Of Study:</label>
                    <input id="titleOfStudy" onChange={(e) => props.updateState(e, props.dataKey)} value={props.data.titleOfStudy}></input>
                </td>
                <td>
                    <label htmlFor="graduationYear">Year Of Graduation:</label>
                    <input id="graduationYear" onChange={(e) => props.updateState(e, props.dataKey)} value={props.data.graduationYear}></input>
                </td>
                <td>
                    <button onClick={() => props.toggleEditor(props.dataKey)}>Save</button>
                </td>
            </tr>
        );
}

export default EducationRowEditor;