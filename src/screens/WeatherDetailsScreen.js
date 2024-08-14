import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import InfoCard from '../components/InfoCard';
import {image} from '../helper/images';

export default function WeatherDetailsScreen() {
  const weather = useSelector(state => state.weather.weather);

  return (
    <LinearGradient
      colors={['#02FDBA', '#70b2d9']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>
      {/* temparature */}

      <View style={styles.temp_container}>
        <Text style={{fontSize: 100, color: 'black'}}>
          {`  ${Math.round(weather?.main?.temp - 273)}`}
        </Text>
        <Text style={{fontSize: 35, lineHeight: 50, color: 'black'}}>°C</Text>
      </View>

      {/* icon and name of condition */}

      <View style={styles.icon_container}>
        <Image
          style={{
            height: 120,
            width: 120,
            resizeMode: 'contain',
            marginRight: 30,
          }}
          source={image(weather.weather[0].icon)}
        />
        <View>
          <Text
            style={{
              fontSize: 35,
              color: 'black',
            }}>
            {weather?.name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
            }}>{`${weather?.weather[0]?.main}`}</Text>
        </View>
      </View>

      {/* detail listing */}

      <View style={styles.detail_container}>
        <InfoCard title="Pressure" value={`${weather.main.pressure} hPa`} />
        <InfoCard title="Wind speed" value={`${weather?.wind?.speed} m/s`} />
        <InfoCard
          title="visibility"
          value={`${weather.visibility / 1000} km`}
        />
        <InfoCard title="Wind degrees" value={`${weather?.wind?.deg}°`} />
        <InfoCard
          title="Temperature"
          value={`${Math.round(weather.main.temp - 273)}°C`}
        />
        <InfoCard title="humidity" value={`${weather.main.humidity}%`} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  detail_container: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: 400,
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 50,
  },
  icon_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  temp_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
});
