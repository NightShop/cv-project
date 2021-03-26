import { Component } from "react";

class EducationRow extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.data.schoolName}</td>
                <td>{this.props.data.titleOfStudy}</td>
                <td>{this.props.data.graduationYear}</td>
                <td><button onClick={() => this.props.toggleEditor(this.props.dataKey)}>Edit</button></td>
            </tr>
        );
    }
}

export default EducationRow;