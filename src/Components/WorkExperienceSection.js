import { Component } from "react";
import uniqid from "uniqid";
import WorkExperienceRow from "./WorkExperienceRow";
import AddNewWorkExperience from "./AddNewWorkExperience";
import WorkExperienceEditorRow from "./WorkExperienceEditorRow";

class WorkExperienceSection extends Component {
    constructor() {
        super();

        this.state = {
            exp: [{
                key: uniqid(),
                companyName: "1",
                positionTitle: "1",
                titleOfStudy: "1",
                dateFrom: "1",
                dateTo: "1",
                editorOpen: false
            }, {
                key: uniqid(),
                companyName: "2",
                positionTitle: "2",
                titleOfStudy: "2",
                dateFrom: "2",
                dateTo: "2",
                editorOpen: false
            }]
        }

        this.toggleEditor = this.toggleEditor.bind(this);
    }

    toggleEditor(key) {
        const index = this.state.exp.findIndex(obj => {
            return obj.key === key;
        });
        let experiences = [...this.state.exp];
        let experienceTemp = experiences[index];
        console.log(experiences);
        experienceTemp.editorOpen = !this.state.exp[index].editorOpen;
        this.setState({exp: experiences});
    }

    render() {
        let rows = [];
        this.state.exp.forEach(row => {
            if (row.editorOpen) {
                rows.push(<WorkExperienceEditorRow key={row.key} toggleEditor={this.toggleEditor} data={row} />)
            } else {
                rows.push(<WorkExperienceRow key={row.key} toggleEditor={this.toggleEditor} data={row} />)
            }

        });
        return (
            <table>
                <tbody>
                    <AddNewWorkExperience />
                    {rows}
                </tbody>
            </table>
        )
    }
}

export default WorkExperienceSection;