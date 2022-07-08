import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_PROFILE = gql`
mutation createProfile($name: String, $age: Int, $school: String) {
    createProfile(name: $name, age: $age, school: $school) {
        _id
        number
        message
    }
}
`
export default function CreateProfile() {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [school, setSchool] = useState("")
    const [createProfile] = useMutation(CREATE_PROFILE)

    const onClickGraphqlApi = async () => {
        const result = await createProfile({
            variables: {
                name: name,
                age:Number(age), 
                school: school
            }
        })
        console.log(result)
        console.log(result.data.createProfile.message)
    }

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeAge = (event) => {
        setAge(event.target.value)
    }

    const onChangeSchool = (event) => {
        setSchool(event.target.value)
    }

    return (
        <>
        이름: <input type="text" onChange={onChangeName}/><br />
        나이 : <input type="text"onChange={onChangeAge}/><br />
        학교 : <input type="text"onChange={onChangeSchool}/><br />
        <button onClick={onClickGraphqlApi}>GraphQL-API 요청하기</button>
        </>

    )
}
