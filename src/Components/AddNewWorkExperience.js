import { Component } from "react";

class AddNewWorkExperience extends Component {

    render() {
        return (
            <tr>
                <td colSpan="5">
                    <button type="button" onClick={() => this.props.addNewRow()}>Add New</button>
                </td>
            </tr>
        );
    }
}

export default AddNewWorkExperience;