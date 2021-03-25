import { Component } from "react";

class WorkExperienceEditorRow extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        this.props.toggleEditor(this.props.dataID);
    }

    render() {
        let companyName, positionTitle, titleOfStudy, dateFrom, dateTo;
        ({companyName, positionTitle, titleOfStudy, dateFrom, dateTo} = this.props.data);
        return (
            <tr>
                <td>
                    <label htmlFor="companyName">Company Name:</label>
                    <input onChange={(e) => this.props.updateState(e, this.props.dataID)} id="companyName" value={this.props.companyName}></input>
                </td>
                <td>
                    <label htmlFor="positionTitle">Position Title:</label>
                    <input id="positionTitle" value={positionTitle}></input>
                </td>
                <td>
                    <label htmlFor="titleOfStudy">Title Of Study:</label>
                    <input id="titleOfStudy" value={titleOfStudy}></input>
                </td>
                <td>
                    <label htmlFor="dateFrom">From:</label>
                    <input id="dateFrom" value={dateFrom}></input>
                </td>
                <td>
                    <label htmlFor="dateTo">To:</label>
                    <input id="dateTo" value={dateTo}></input>
                </td>
                <td>
                    <button onClick={() => this.handleClick()}>Save</button>
                </td>
            </tr>
        );
    }
}

export default WorkExperienceEditorRow;