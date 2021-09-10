import React from 'react'
import {Create, SimpleForm, TextInput,DateInput} from 'react-admin'

const AppointmentCreate = (props) => {
    return (
        <Create title='Create an Appointment'{...props}>
            <SimpleForm>
                <TextInput source='userName' />
                <DateInput source='date' />
                <TextInput source='time' />
                <TextInput source='service' />
                <TextInput source='consumer' />
                <TextInput source='email' />
                <TextInput source='phone' />
            </SimpleForm>
        </Create>

    )
}

export default AppointmentCreate
