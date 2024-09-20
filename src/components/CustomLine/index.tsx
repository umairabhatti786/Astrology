import React from 'react'
import { colors } from '../../utils/colors'
import { View } from 'react-native'

type Props = {}

const CustomLine = ({backgroundColor,height,width}:any) => {
    return (
        <View style={{ height:height ||1.5, width: width||"100%",backgroundColor: backgroundColor ||colors.white }} />
    )
}

export default CustomLine