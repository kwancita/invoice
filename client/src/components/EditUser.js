import { useState } from "react"

function EditUser({currentUser}) {
    const [errors, setErrors] = useState([])
    const [formData, setFromData] = useState({
        logo: currentUser.logo,
        company: currentUser.company,
        name: currentUser.name,
        email: currentUser.email,
        phone_number: currentUser.phone_number,
        address: currentUser.logo.address,
    });

    return (
        <div>
            <form>

            </form>
        </div>
    )
}

export default EditUser
