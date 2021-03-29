import GeneralInfoDisplay from "./GeneralInfoDisplay";
import GeneralInfoEditor from "./GeneralInfoEditor";
import { useState } from "react";

function GeneralInfo() {


    const [genInfo, setGenInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        editorActive: true,
    });

    function updateGeneralInfo(id, value) {
        setGenInfo({...genInfo,
            [id]: value,
        });
        console.log(genInfo);
    }

    function toggleEditor() {
        setGenInfo({...genInfo,
            editorActive: !genInfo.editorActive,
        })
        console.log(genInfo);
    }


    if (genInfo.editorActive) {
        return (
            <GeneralInfoEditor toggleEditor={toggleEditor} updateGeneralInfo={updateGeneralInfo} generalInfo={genInfo} />
        )
    }
    return (
        <GeneralInfoDisplay toggleEditor={toggleEditor} generalInfo={genInfo} />
    )

}

GeneralInfo.whyDidYouRender = true;

export default GeneralInfo;