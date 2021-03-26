import { Component } from "react";
import uniqid from "uniqid";
import EducationRowEditor from "./EducationRowEditor";
import EducationRow from "./EducationRow";

class EducationSection extends Component {
    constructor() {
        super();

        this.toggleEditor = this.toggleEditor.bind(this);
        this.updateState = this.updateState.bind(this);
        this.state = ({
            [uniqid()]: {
                schoolName: "test1",
                titleOfStudy: "test1",
                graduationYear: "test1",
                editorOpen: false,
            },
            [uniqid()]: {
                schoolName: "test2",
                titleOfStudy: "test2",
                graduationYear: "test2",
                editorOpen: false,
            }
        })
    }

    addNewRow() {
        let newRow = {
            schoolName: "",
            titleOfStudy: "",
            graduationYear: "",
            editorOpen: true,
        }
        this.setState({ [uniqid()]: newRow });
    }

    toggleEditor(key) {
        let temp = {...this.state[key],
        editorOpen: !this.state[key].editorOpen,
        };
        this.setState({
            [key]: temp,
        })
    }

    updateState(e, key) {
        let temp = {...this.state[key],
        [e.target.id]: e.target.value}
        this.setState({
            [key]: temp
        })
    }

    render() {
        let rows = [];
        Object.keys(this.state).forEach(key => {
            if (this.state[key].editorOpen) {
                rows.push(<EducationRowEditor updateState={this.updateState} key={key} toggleEditor={this.toggleEditor} data={this.state[key]} dataKey={key}/>);
            } else {
                rows.push(<EducationRow dataKey={key} key={key} toggleEditor={this.toggleEditor} data={this.state[key]} />);
            }


        });

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>School Name</th>
                        <th>Title of Study</th>
                        <th>Graduation Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                        <tr>
                            <td colSpan="3">
                                <button onClick={() => this.addNewRow()}>Add New</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EducationSection;