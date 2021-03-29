

function AddNewWorkExperience(props) {
    return (
        <tr>
            <td colSpan="5">
                <button type="button" onClick={() => props.addNewRow()}>Add New</button>
            </td>
        </tr>
    );
}

export default AddNewWorkExperience;