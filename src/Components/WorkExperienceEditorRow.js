function WorkExperienceEditorRow(props) {

    function handleClick() {
        props.toggleEditor(props.dataID);
    }

    let companyName, positionTitle, mainTasks, dateFrom, dateTo;
    ({ companyName, positionTitle, mainTasks, dateFrom, dateTo } = props.data);
    console.log(props);
    return (
        <tr>
            <td>
                <label htmlFor="companyName">Company Name:</label>
                <input onChange={(e) => props.updateState(e, props.dataID)} id="companyName" value={companyName}></input>
            </td>
            <td>
                <label htmlFor="positionTitle">Position Title:</label>
                <input onChange={(e) => props.updateState(e, props.dataID)} id="positionTitle" value={positionTitle}></input>
            </td>
            <td>
                <label htmlFor="mainTasks">Main tasks:</label>
                <input onChange={(e) => props.updateState(e, props.dataID)} id="mainTasks" value={mainTasks}></input>
            </td>
            <td>
                <label htmlFor="dateFrom">From:</label>
                <input onChange={(e) => props.updateState(e, props.dataID)} id="dateFrom" value={dateFrom}></input>
            </td>
            <td>
                <label htmlFor="dateTo">To:</label>
                <input onChange={(e) => props.updateState(e, props.dataID)} id="dateTo" value={dateTo}></input>
            </td>
            <td>
                <button onClick={() => handleClick()}>{props.data.isNew ? "Add" : "Update"}</button>
            </td>
        </tr>
    );
}

export default WorkExperienceEditorRow;