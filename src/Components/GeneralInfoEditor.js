function GeneralInfoInput(props) {

    function setGeneralInfo(e) {
        props.updateGeneralInfo(e.target.id, e.target.value);
    }

    return (
        <form>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input id="firstName" onChange={setGeneralInfo} placeholder="First Name" value={props.generalInfo.firstName}></input>
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" onChange={setGeneralInfo} placeholder="Last Name" value={props.generalInfo.lastName}></input>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input id="email" onChange={setGeneralInfo} placeholder="Email" value={props.generalInfo.email}></input>
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone No.:</label>
                <input id="phoneNumber" onChange={setGeneralInfo} placeholder="Phone Number" value={props.generalInfo.phoneNumber}></input>
            </div>
            <button type="button" onClick={props.toggleEditor} >Submit</button>
        </form>
    )

}

GeneralInfoInput.whyDidYouRender = true;

export default GeneralInfoInput;