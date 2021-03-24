import { Component } from "react";
import GeneralInfoDisplay from "./GeneralInfoDisplay";
import GeneralInfoEditor from "./GeneralInfoEditor";

class GeneralInfo extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            editorActive: true,
        };

        this.updateGeneralInfo = this.updateGeneralInfo.bind(this);
        this.toggleEditor = this.toggleEditor.bind(this);
    }

    updateGeneralInfo(id, value) {
        this.setState({
            [id]: value,
        })
        console.log(this.state);
    }

    toggleEditor () {
        this.setState({
            editorActive: !this.state.editorActive,
        })
        console.log(this.state);
    }

    render() {
        if(this.state.editorActive) {
            return (
                <GeneralInfoEditor toggleEditor={this.toggleEditor} updateGeneralInfo={this.updateGeneralInfo} generalInfo={this.state} />
            )
        }
        return (
            <GeneralInfoDisplay toggleEditor={this.toggleEditor} generalInfo={this.state}/>
        )
    };
}

export default GeneralInfo;