function EducationRow(props) {


    return (
        <tr>
            <td>{props.data.schoolName}</td>
            <td>{props.data.titleOfStudy}</td>
            <td>{props.data.graduationYear}</td>
            <td><button onClick={() => props.toggleEditor(props.dataKey)}>Edit</button></td>
        </tr>
    );

}

export default EducationRow;