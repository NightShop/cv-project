import { Component } from "react";

class EducationRowEditor extends Component {

    render() {
        return (
            <tr>
                <td>
                    <label htmlFor="schoolName">School Name:</label>
                    <input id="schoolName" onChange={(e) => this.props.updateState(e, this.props.dataKey)} value={this.props.data.schoolName}></input>
                </td>
                <td>
                    <label htmlFor="titleOfStudy">Title Of Study:</label>
                    <input id="titleOfStudy" onChange={(e) => this.props.updateState(e, this.props.dataKey)} value={this.props.data.titleOfStudy}></input>
                </td>
                <td>
                    <label htmlFor="graduationYear">Year Of Graduation:</label>
                    <input id="graduationYear" onChange={(e) => this.props.updateState(e, this.props.dataKey)} value={this.props.data.graduationYear}></input>
                </td>
                <td>
                    <button onClick={() => this.props.toggleEditor(this.props.dataKey)}>Save</button>
                </td>
            </tr>
        );
    }
}

export default EducationRowEditor;