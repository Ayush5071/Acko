import { useRouter } from 'expo-router';
import { Image, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import React from 'react';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

const RootLayout = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-[55vh] px-4 relative">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px] mt-14"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[380px]"
            resizeMode="contain"
          />
          <View className="relative mt-3">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{' '}
              <Text className="text-secondary-200">Acko</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-5 mb-7 text-center">
            Where creativity meets innovation: Embark on journey of limitless exploration
            with Acko
          </Text>
          <CustomButton 
            title="Continue with Email"
            handlePress={() => router.push('(auth)/sign-in')}
            containerStyles="w-full mt-7 p-4"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor={'#161622'} style={'light'} />
    </SafeAreaView>
  );
};

export default RootLayout;
