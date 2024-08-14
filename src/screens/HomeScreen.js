import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {fetchWeather} from '../redux/reducers/weatherSlice';
import LinearGradient from 'react-native-linear-gradient';
import {image} from '../helper/images';

export default function HomeScreen() {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const weather = useSelector(state => state.weather.weather);
  const status = useSelector(state => state.weather.status);
  const error = useSelector(state => state.weather.error);
  console.log('error', error);

  const searchWeather = () => {
    dispatch(fetchWeather(city));
  };

  return (
    <LinearGradient
      colors={['#02FDBA', '#70b2d9']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>
      <View style={styles.text_input_container}>
        <TextInput
          onChangeText={setCity}
          value={city}
          placeholder="Enter city name"
          style={styles.text_input}
        />
        <TouchableOpacity onPress={searchWeather}>
          <Image
            style={{height: 24, aspectRatio: 1}}
            source={require('../assets/search.png')}
          />
        </TouchableOpacity>
      </View>

      {status === 'loading' && <Text>Loading...</Text>}
      {error && status != 'loading' && (
        <View style={styles.error_container}>
          <Text style={{color: 'black', fontSize: 20}}>
            Error Fetching Data
          </Text>
        </View>
      )}
      {!error && status != 'loading' && weather.main && (
        <View style={{marginHorizontal: 20}}>
          {/* city name */}
          <Text style={{fontSize: 40, alignSelf: 'center', marginVertical: 70}}>
            {weather?.name}
          </Text>

          {/* Temprature */}
          <View style={styles.tmp_container}>
            <Text style={{fontSize: 120, color: 'black'}}>
              {`${Math.round(weather?.main?.temp - 273)}`}
            </Text>
            <Text style={{fontSize: 35, lineHeight: 50, color: 'black'}}>
              °C
            </Text>
          </View>

          {/* condition icon & name  */}

          <View style={styles.cond_icon_container}>
            <Image
              style={{height: 100, width: 100, resizeMode: 'contain'}}
              source={image(weather.weather[0].icon)}
            />
            <View>
              <Text style={{fontSize: 30, color: 'black'}}>
                {weather.weather[0].main}
              </Text>
              <Text>Condition: {weather.weather[0].description}</Text>
            </View>
          </View>

          {/* Detail screen navigation */}

          <TouchableOpacity
            onPress={() => navigation.navigate('WeatherDetails')}
            style={styles.detail_btn}>
            <Text style={{fontSize: 20, color: 'white'}}> Details</Text>
          </TouchableOpacity>
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  text_input_container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 5,
    borderRadius: 15,
    marginHorizontal: 20,
  },
  detail_btn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'black',
    marginTop: 220,
  },
  cond_icon_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  tmp_container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text_input: {
    width: '80%',
    padding: 8,
  },
  error_container: {justifyContent: 'center', alignItems: 'center', flex: 1},
});
