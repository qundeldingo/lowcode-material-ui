import React from 'react'
import { Field as FormikField } from 'formik'
import EntityListView from '../Entity/EntityListView'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'

export const ArrayFormat = ({ value, relationshipName, index }) => {
  return (
    <FormCard title={'FIELD'}>
      <FormikField name={'FIELD'}>
        {({ field }: any) => {
          return <EntityListView data={field?.value} />
        }}
      </FormikField>
    </FormCard>
  )
}