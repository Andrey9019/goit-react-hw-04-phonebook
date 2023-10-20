import React from 'react';
import { FormInput, Label } from "./Filter.style"


export const Filter = ({value,onChange}) => {
    return (
        <Label>
            Find Contacts: 
            <FormInput type="text" name="filter" value={value} onChange={onChange}></FormInput>
        </Label>
    )
}