import { Component } from "react";
import GeneralInfoInput from "./GeneralInfoInput";

class GeneralInfo extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
        };

        this.updateGeneralInfo = this.updateGeneralInfo.bind(this);
    }

    updateGeneralInfo(id, value) {
        this.setState({
            [id]: value,
        })
        console.log(this.state);
    }

    render() {
        return (
            <GeneralInfoInput updateGeneralInfo={this.updateGeneralInfo} generalInfo={this.state} />
        );
    }
}

export default GeneralInfo;