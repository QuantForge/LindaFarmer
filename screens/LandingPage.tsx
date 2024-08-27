import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

const LandingPage = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
          <ImageBackground
            source={require('./../assets/farmer.jpg')}
            style={{ height: 400, justifyContent: 'flex-end', padding: 16, paddingBottom: 20 }}
            imageStyle={{ borderRadius: 16 }}
          >
            <View>
              <Text style={{ color: '#FFFFFF', fontSize: 32, fontWeight: '600' }}>
                Farming is hard. We make it easier.
              </Text>
              <Text style={{ color: '#FFFFFF', fontSize: 14, marginTop: 8 }}>
                LindaFarmer provides the tools and resources to help you grow your farm.
              </Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Greeting")}
              style={{ backgroundColor: '#39E079', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 16, marginTop: 16, alignSelf: 'flex-start' }}>
              <Text style={{ color: '#141414', fontWeight: 'bold', fontSize: 16 }}>
                Get started
              </Text>
            </TouchableOpacity>
          </ImageBackground>

          <View style={{ padding: 16 }}>
            <Text style={{ color: '#141414', fontSize: 32, fontWeight: 'bold', marginBottom: 24 }}>
              What we do
            </Text>

            <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
              <View style={{ width: '100%', backgroundColor: '#FFFFFF', padding: 16, borderRadius: 16, borderWidth: 1, borderColor: '#E0E0E0', marginBottom: 16 }}>
                <Text style={{ fontSize: 24 }}>📊</Text>
                <Text style={{ color: '#141414', fontSize: 18, fontWeight: 'bold', marginTop: 8 }}>
                  Data-driven insights
                </Text>
                <Text style={{ color: '#777777', marginTop: 8 }}>
                  We provide real-time data and analysis to help you make informed decisions.
                </Text>
              </View>

              <View style={{ width: '100%', backgroundColor: '#FFFFFF', padding: 16, borderRadius: 16, borderWidth: 1, borderColor: '#E0E0E0', marginBottom: 16 }}>
                <Text style={{ fontSize: 24 }}>🌱</Text>
                <Text style={{ color: '#141414', fontSize: 18, fontWeight: 'bold', marginTop: 8 }}>
                  Optimize your operations
                </Text>
                <Text style={{ color: '#777777', marginTop: 8 }}>
                  Our tools are built to increase efficiency and reduce costs.
                </Text>
              </View>

              <View style={{ width: '100%', backgroundColor: '#FFFFFF', padding: 16, borderRadius: 16, borderWidth: 1, borderColor: '#E0E0E0', marginBottom: 16 }}>
                <Text style={{ fontSize: 24 }}>🚚</Text>
                <Text style={{ color: '#141414', fontSize: 18, fontWeight: 'bold', marginTop: 8 }}>
                  Direct sales and logistics
                </Text>
                <Text style={{ color: '#777777', marginTop: 8 }}>
                  Sell your products directly through LindaFarmer and let us handle the logistics.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingPage;
