import { Component } from "react";

class WorkExperienceRow extends Component {

    render() {
        let companyName, positionTitle, titleOfStudy, dateFrom, dateTo;
        ({companyName, positionTitle, titleOfStudy, dateFrom, dateTo} = this.props.data);
        return (
            <tr>
                <td>
                    {companyName}
                </td>
                <td>
                    {positionTitle}
                </td>
                <td>
                    {titleOfStudy}
                </td>
                <td>
                    {dateFrom}
                </td>
                <td>
                    {dateTo}
                </td>
                <td>
                    <button onClick={(e) => this.props.toggleEditor(this.props.dataID)}>
                        Edit
                    </button>
                </td>
            </tr>
        );
    }
}

export default WorkExperienceRow;