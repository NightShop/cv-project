import { Component } from "react";

class GeneralInfoInput extends Component {

    constructor (props) {
        super(props);

        this.setGeneralInfo = this.setGeneralInfo.bind(this);
    };
    

    setGeneralInfo (e) {
        this.props.updateGeneralInfo(e.target.id, e.target.value);
    }

    render() {
        return (
            <form>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input id="firstName" onChange={this.setGeneralInfo} placeholder="First Name" value={this.props.generalInfo.firstName}></input>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input id="lastName" onChange={this.setGeneralInfo} placeholder="Last Name" value={this.props.generalInfo.lastName}></input>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" onChange={this.setGeneralInfo} placeholder="Email" value={this.props.generalInfo.email}></input>
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone No.:</label>
                    <input id="phoneNumber" onChange={this.setGeneralInfo} placeholder="Phone Number" value={this.props.generalInfo.phoneNumber}></input>
                </div>
                <button type="button" onClick={this.props.toggleEditor} >Update</button>
            </form>
        )
    }
}

export default GeneralInfoInput;