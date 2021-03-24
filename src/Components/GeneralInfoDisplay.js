import { Component } from "react";

class GeneralInfoDisplay extends Component {
    
    render () {
        return (
            <div style={{border: "1px solid black"}}>
                <div>
                    <span>First Name:</span>
                    <span id="firstName">{this.props.generalInfo.firstName}</span>
                </div>
                <div>
                    <span>Last Name:</span>
                    <span id="lastName">{this.props.generalInfo.lastName}</span>
                </div>
                <div>
                    <span>Email:</span>
                    <span id="email">{this.props.generalInfo.email}</span>
                </div>
                <div>
                    <span>Phone No.:</span>
                    <span id="phoneNumber">{this.props.generalInfo.phoneNumber}</span>
                </div>
                <button type="button" onClick={this.props.toggleEditor}>Edit</button>
            </div>
        )
    }
}

export default GeneralInfoDisplay;