import { Component } from "react";
import uniqid from "uniqid";
import WorkExperienceRow from "./WorkExperienceRow";
import AddNewWorkExperience from "./AddNewWorkExperience";
import WorkExperienceEditorRow from "./WorkExperienceEditorRow";

class WorkExperienceSection extends Component {
    constructor() {
        super();

        this.state = {
            idena: {
                companyName: "1",
                positionTitle: "1",
                titleOfStudy: "1",
                dateFrom: "1",
                dateTo: "1",
                editorOpen: false
            },
            iddva: {
                companyName: "2",
                positionTitle: "2",
                titleOfStudy: "2",
                dateFrom: "2",
                dateTo: "2",
                editorOpen: false
            }}
        

        this.toggleEditor = this.toggleEditor.bind(this);
        this.updateState = this.toggleEditor.bind(this);
    }

    toggleEditor(Key) {
        console.log("toggleeditor");
        let temp = {...this.state[Key]};
        const boool = !temp.editorOpen;
        temp.editorOpen = boool;
        this.setState({[Key]: temp});
    }

    updateState(event, key) {
        console.log("in update", key);
        const newValue = event.target.value;
        console.log("in update", newValue);
        let temp = {
            ...this.state[key],
        };
        temp.companyName = newValue;
        console.log("in update", temp);
        
        this.setState({[key]: temp});
        
    }

    render() {
        let rows = [];
        Object.keys(this.state).forEach(key => {
            if (this.state[key].editorOpen) {
                rows.push(<WorkExperienceEditorRow key={key} dataID={key} updateState={this.updateState} toggleEditor={this.toggleEditor} companyName={this.state[key].companyName} data={this.state[key]} />)
                
            } else {
                rows.push(<WorkExperienceRow key={key} dataID={key} updateState={this.updateState} toggleEditor={this.toggleEditor} data={this.state[key]} />)
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