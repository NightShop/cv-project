function GeneralInfoDisplay(props) {

    return (
        <div style={{ border: "1px solid black" }}>
            <div>
                <span>First Name:</span>
                <span id="firstName">{props.generalInfo.firstName}</span>
            </div>
            <div>
                <span>Last Name:</span>
                <span id="lastName">{props.generalInfo.lastName}</span>
            </div>
            <div>
                <span>Email:</span>
                <span id="email">{props.generalInfo.email}</span>
            </div>
            <div>
                <span>Phone No.:</span>
                <span id="phoneNumber">{props.generalInfo.phoneNumber}</span>
            </div>
            <button type="button" onClick={props.toggleEditor}>Edit</button>
        </div>
    )

}

GeneralInfoDisplay.whyDidYouRender = true;

export default GeneralInfoDisplay;