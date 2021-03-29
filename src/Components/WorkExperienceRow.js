function WorkExperienceRow (props) {

        let companyName, positionTitle, mainTasks, dateFrom, dateTo;
        ({companyName, positionTitle, mainTasks, dateFrom, dateTo} = props.data);
        return (
            <tr>
                <td>
                    {companyName}
                </td>
                <td>
                    {positionTitle}
                </td>
                <td>
                    {mainTasks}
                </td>
                <td>
                    {dateFrom}
                </td>
                <td>
                    {dateTo}
                </td>
                <td>
                    <button onClick={() => props.toggleEditor(props.dataID)}>
                        Edit
                    </button>
                </td>
            </tr>
        );
}

WorkExperienceRow.whyDidYouRender = true;

export default WorkExperienceRow;