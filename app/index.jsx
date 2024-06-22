import { StatusBar, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Text className='text-3xl text-white font-pblack' >RootLayout</Text>
      <StatusBar style="auto" />
      <Link className='text-sm text-blue-300 ' href="/profile">Go to</Link>
    </View>
  );
}

export default RootLayout
