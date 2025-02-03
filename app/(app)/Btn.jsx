import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


export default function Btn({ bgColor, btnLabel, textColor, Press }) {
  return (
    <TouchableOpacity
    onPress={Press}
    style={{ 
        backgroundColor: bgColor, 
        borderRadius: 100, 
        alignItems: 'center',
        width: 200,
        paddingVertical: 5,
        marginVertical: 10
        }}>
        <Text style={{color: textColor, fontSize: 22, 
        fontWeight: 'bold'}}>
        {btnLabel}
        </Text>
    </TouchableOpacity>
  );
}