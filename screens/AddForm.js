import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const initialState = {
  name: '',
  email: '',
  phone: '',
  location: '',
  job: '',
  img: ''
};

const AddForm = () => {
  const [state, setstate] = useState(initialState);

  const pickerFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let imageData = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5
      });
      setstate({ ...state, img: imageData.uri });
    } else {
      Alert('Allow Permission to access Gallery');
    }
  };

  const handleSubmit = () => {
    console.log(state, '><><');
  };

  return (
    <ScrollView style = {{flex:1, backgroundColor: 'white'}}>
      {/* <KeyboardAvoidingView behavior='position' enabled={false} scrollEnabled={false} > */}
        <TextInput
          label="Name"
          value={state.name}
          style={styles.inputStyle}
          onChangeText={value => setstate({ ...state, name: value })}
        />
        <TextInput
          label="Email"
          value={state.email}
          style={styles.inputStyle}
          onChangeText={value => setstate({ ...state, email: value })}
        />
        <TextInput
          label="Phone"
          value={state.phone}
          style={styles.inputStyle}
          keyboardType="number-pad"
          onChangeText={value => setstate({ ...state, phone: value })}
        />
        <TextInput
          label="Location"
          value={state.location}
          style={styles.inputStyle}
          onChangeText={value => setstate({ ...state, location: value })}
        />
        <TextInput
          label="Job"
          value={state.job}
          style={styles.inputStyle}
          onChangeText={value => setstate({ ...state, job: value })}
        //   onFocus = {() => refs['scroll'].scrollTo({y: 60})}
        />
        <Button
          icon="upload"
          mode="contained"
          style={styles.btnStyle}
          onPress={() => {
            pickerFromGallery();
          }}
        >
          Upload Image
        </Button>
        <Button
          icon="content-save"
          mode="contained"
          style={styles.btnStyle}
          onPress={() => {
            handleSubmit();
          }}
        >
          Save
        </Button>
      {/* </KeyboardAvoidingView> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    margin: 3
  },
  btnStyle: {
    margin: 3
  }
});

export default AddForm;
