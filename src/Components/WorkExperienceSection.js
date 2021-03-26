import { Component } from "react";
import uniqid from "uniqid";
import WorkExperienceRow from "./WorkExperienceRow";
import AddNewWorkExperience from "./AddNewWorkExperience";
import WorkExperienceEditorRow from "./WorkExperienceEditorRow";

class WorkExperienceSection extends Component {
    constructor() {
        super();

        this.state = {
            [uniqid()]: {
                companyName: "Celtra",
                positionTitle: "Engineer",
                mainTasks: "Creation of templates, data structuring",
                dateFrom: "11/02/2018",
                dateTo: "22/01/2020",
                editorOpen: false
            },
            [uniqid()]: {
                companyName: "Tretton",
                positionTitle: "Software Engineer",
                mainTasks: "Fullstack development",
                dateFrom: "01/01/2012",
                dateTo: "01/01/2018",
                editorOpen: false
            }
        }


        this.toggleEditor = this.toggleEditor.bind(this);
        this.updateState = this.updateState.bind(this);
        this.addNewRow = this.addNewRow.bind(this);
    }

    toggleEditor(Key) {
        console.log("toggleeditor");
        let temp = {
            ...this.state[Key],
            editorOpen: !this.state[Key].editorOpen,
        };

        delete temp.isNew;
        this.setState({ [Key]: temp });
    }

    updateState(event, key) {
        const newValue = event.target.value;
        let temp = {
            ...this.state[key],
            [event.target.id]: newValue,
        };

        this.setState({ [key]: temp });

    }

    addNewRow() {
        let newRowData = {
            companyName: "",
            positionTitle: "",
            mainTasks: "",
            dateFrom: "",
            dateTo: "",
            editorOpen: true,
            isNew: "true",
        }
        this.setState({[uniqid()] : newRowData});
    }

    render() {
        let rows = [];
        Object.keys(this.state).forEach(key => {
            if (this.state[key].editorOpen) {
                rows.push(<WorkExperienceEditorRow key={key} dataID={key} updateState={this.updateState} toggleEditor={this.toggleEditor} data={this.state[key]} />)

            } else {
                rows.push(<WorkExperienceRow key={key} dataID={key} updateState={this.updateState} toggleEditor={this.toggleEditor} data={this.state[key]} />)
            }

        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Title of Position</th>
                        <th>Main Taksks</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                    <AddNewWorkExperience addNewRow={this.addNewRow} />
                </tbody>
            </table>
        )
    }
}

export default WorkExperienceSection;