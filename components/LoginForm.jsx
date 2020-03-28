import React,{useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Button from './Button';
import Input from './Input';
import { connect } from 'react-redux'
import { loginUser } from '../actions'



 const LoginForm = (props) => {
     console.log(props,"loading")
    const [state, setstate] = useState({email: '', password: ''})


    const handleLoginPress = () =>{
        console.log('Button press', state)
        loginUser(state)
      }
      
    //   const handelInputChangeText = (e) => {
    //     console.log('e', e)
    //     //   const { name, value } = e.target
    //     // setstate({
    //     //     [name] : value
    //     // })
    //   }

  return (
      <View style={styles.container}>
        <Text style={styles.text} >login screen!!!!</Text>
        <Input 
          label='Email' 
          placeholder= 'inter your name'
          secureTextEntry= {false}
          name='email'
          onChangeText={value => setstate({...state, email: value})}
        // onChangeText={handelInputChangeText}
        />
         <Input 
          label='Password' 
          placeholder= 'inter your Password'
          secureTextEntry
          nam='password'
          onChangeText={value => setstate({...state, password: value})}
        // onChangeText={handelInputChangeText}
        />
        {props.loading ? <ActivityIndicator size="small" color="#00ff00" /> : <Button title='Login' onPress={handleLoginPress} /> }
      </View>
  );
}

const mapStateToPtops = state => {
    return {
        user: state.auth.user,
        loading: state.auth.loading,
        error: state.auth.error,
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text: {
        color: 'green',
        fontSize: 18,
        fontWeight: '600'
    }
});

export default connect(mapStateToPtops, { loginUser }) (LoginForm)
