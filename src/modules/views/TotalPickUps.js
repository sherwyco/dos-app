import React from 'react'
import { QueryRenderer } from '@cubejs-client/react'
import { cubeJsApi } from '../../modules/api/'
import { useSelector } from 'react-redux'
import { renderChart, numberRender } from '../components/Chart'

function TotalPickUps () {
  const state = useSelector((state) => state.userInfo)
  const values = [state.email]
  return (
    <QueryRenderer
      query={{
        measures: ['UsersPickupinfo.count'],

        filters: [
          {
            dimension: 'UsersCustomuser.email',
            operator: 'equals',
            values: values
          }
        ]
      }}
      cubejsApi={cubeJsApi}
      render={renderChart(numberRender)}
    />
  )
}

export default TotalPickUps