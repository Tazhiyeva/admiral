import React from 'react'
import { BooleanInput, SelectInput, TextInput, FilePictureInput } from '../../../admiral'

export const editFields = (
    <>
        <SelectInput label="Status" name="status" placeholder="Choose Status" required>
            <SelectInput.Option value="active">Active</SelectInput.Option>
            <SelectInput.Option value="inactive">Inactive</SelectInput.Option>
            <SelectInput.Option value="cancelled">Cancelled by moderator</SelectInput.Option>
            <SelectInput.Option value="moderation">Moderation</SelectInput.Option>
        </SelectInput>
    </>
)
