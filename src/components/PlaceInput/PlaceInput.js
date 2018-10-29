import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


class PlaceInput extends Component {
  
 state = {
   placeName: "",
   placeDate: ""
 };

 placeNameChangedHandler = val => {
   this.setState({
     placeName: val
   });
 };

 placeDateChangedHandler = val => {
  this.setState({
    placeDate: val
  });
};

 placeSubmitHandler = () => {
   this.setState({
     placeName:"",
     placeDate:""

   });
   if (this.state.placeName.trim() === "" && this.state.placeDate.trim() === "") {
     return;
   }

   this.props.onPlaceAdded(this.state.placeName, this.state.placeDate);
   
 };

 render() {
  
   return (
     <View style={styles.inputContainer}>
       <TextInput
        keyboardType="numeric"
         placeholder="Place"
         value={this.state.placeName}
         onChangeText={this.placeNameChangedHandler}
         style={styles.placeInput}
      
       />
        <TextInput keyboardType="numeric"
         placeholder="Date"
         value={this.state.placeDate}
         onChangeText={this.placeDateChangedHandler}
         style={styles.placeInputDate}
       />

       <TouchableOpacity >
         <Icon size={30} name={"ios-plane"} color={"red"}
         onPress={this.placeSubmitHandler}/>
       </TouchableOpacity>
         
       
     </View>
   );
 }
}

const styles = StyleSheet.create({
 inputContainer: {
   // flex: 1,
   width: "100%",
   flexDirection: "column",
   justifyContent: "space-between",
   alignItems: "center",
   paddingTop:10
 },
 placeInput: {
   width: "70%"
 },
 placeButton: {
   width: "30%"
 },
 placeInputDate:{
  flexDirection: "column",
  width: "70%",
  paddingTop:20


 }
});

export default PlaceInput;