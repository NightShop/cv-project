import { Component } from "react";

class WorkExperienceRow extends Component {

    render() {
        return (
            <tr key={this.props.data.key}>
                <td>
                    company NAme
                </td>
                <td>
                    position title
                </td>
                <td>
                    title of study
                </td>
                <td>
                    date from
                </td>
                <td>
                    date to
                </td>
                <td>
                    <button onClick={(e) => this.props.toggleEditor(this.props.data.key)}>
                        Edit
                    </button>
                </td>
            </tr>
        );
    }
}

export default WorkExperienceRow;