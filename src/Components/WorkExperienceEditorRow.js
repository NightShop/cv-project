import { Component } from "react";

class WorkExperienceEditorRow extends Component {

    render() {
        return (
            <tr>
                <td>
                    <label htmlFor="companyName">Company Name:</label>
                    <input id="companyName"></input>
                </td>
                <td>
                    <label htmlFor="positionTitle">Company Name:</label>
                    <input id="positionTitle"></input>
                </td>
                <td>
                    <label htmlFor="titleOfStudy">Company Name:</label>
                    <input id="titleOfStudy"></input>
                </td>
                <td>
                    <label htmlFor="dateFrom">From:</label>
                    <input id="dateFrom"></input>
                </td>
                <td>
                    <label htmlFor="dateTo">To:</label>
                    <input id="dateTo"></input>
                </td>
                <td>
                    <button>Save</button>
                </td>
            </tr>
        );
    }
}

export default WorkExperienceEditorRow;