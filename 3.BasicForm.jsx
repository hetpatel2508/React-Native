/* eslint-disable no-trailing-spaces */
import React, { useState } from 'react';
import { Button,  Text, TextInput, TouchableOpacity, View } from 'react-native';

// export default class App extends Component {
export default function App() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState(false);
  
  return (
    <View>

      <Text style={{marginTop: 20, marginBottom: 20,fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}> 
        LogIn Form 
      </Text>


    <TextInput 
      style={{marginBottom: 20,borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10, paddingLeft: 10}}
      placeholder="Enter Your Email" 
      autoCapitalize="none"
      autoCorrect={false}
      value={email}
      onChangeText={(text) => setEmail(text)}
    />


    <View style={{position: 'relative'}}>
      <TextInput
        style={{borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10, paddingLeft: 10}}
        placeholder="Enter Your Password"
        secureTextEntry={!showPassword} // Toggle password visibility
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{position: 'absolute', right: 0, top: 0}}>
        <Text style={{fontSize: 15, fontWeight: '500', textAlign: 'center', marginRight: 20, marginTop: 10}}>{showPassword ? 'Hide' : 'Show'}</Text>          
      </TouchableOpacity>
    </View>

      <View style={{marginTop: 20, marginBottom: 10}}>
        <Button color={'green'} title="Show Data" onPress={() => setData(true)}/>
      </View>

      <View style={{width: "50%", marginLeft:"25%", marginBottom: 10}}>
        <Button  color={'red'} title="Clear Data" onPress={() => {setData(false); setEmail(''); setPassword('');}}/>
      </View>

      {
        data && email && password ? (
          <View>
            <Text style={{marginTop: 20, marginBottom: 10,fontSize: 20, fontWeight: '400', textAlign: 'left'}}>
              Email  =  {email}
            </Text>

            <Text style={{marginTop: 20, marginBottom: 10,fontSize: 20, fontWeight: '400', textAlign: 'left'}}>
              Password  =  {password}
            </Text>
          </View>
        ) : null
      }

    </View>
  );
}