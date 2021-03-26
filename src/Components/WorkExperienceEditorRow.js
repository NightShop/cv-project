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
        let companyName, positionTitle, mainTasks, dateFrom, dateTo;
        ({companyName, positionTitle, mainTasks, dateFrom, dateTo} = this.props.data);
        console.log(this.props);        
        return (
            <tr>
                <td>
                    <label htmlFor="companyName">Company Name:</label>
                    <input onChange={(e) => this.props.updateState(e, this.props.dataID)} id="companyName" value={companyName}></input>
                </td>
                <td>
                    <label htmlFor="positionTitle">Position Title:</label>
                    <input onChange={(e) => this.props.updateState(e, this.props.dataID)} id="positionTitle" value={positionTitle}></input>
                </td>
                <td>
                    <label htmlFor="mainTasks">Main tasks:</label>
                    <input onChange={(e) => this.props.updateState(e, this.props.dataID)} id="mainTasks" value={mainTasks}></input>
                </td>
                <td>
                    <label htmlFor="dateFrom">From:</label>
                    <input onChange={(e) => this.props.updateState(e, this.props.dataID)} id="dateFrom" value={dateFrom}></input>
                </td>
                <td>
                    <label htmlFor="dateTo">To:</label>
                    <input onChange={(e) => this.props.updateState(e, this.props.dataID)} id="dateTo" value={dateTo}></input>
                </td>
                <td>
                    <button onClick={() => this.handleClick()}>{this.props.data.isNew ? "Add" : "Update"}</button>
                </td>
            </tr>
        );
    }
}

export default WorkExperienceEditorRow;