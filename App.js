import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import { connect } from "react-redux";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";

import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from "./src/store/actions/index";
import asd from "./src/assets/background2.jpg";

import { createStackNavigator } from 'react-navigation';

class App extends Component {
 state = {
   places: [],
   selectedPlace: null
 };

 placeAddedHandler = (placeName, placeDate) => {
  this.props.onAddPlace(placeName, placeDate);
};
placeDeletedHandler = () => {
  this.props.onDeletePlace();
};
 
modalClosedHandler = () => {
  this.props.onDeselectPlace();
};
placeSelectedHandler = key => {
this.props.onSelectPlace(key);
};

 render() {
  

   return (
     <ImageBackground source={asd} style={{flex:1, width:"100%", height:"100%"}}>
     <View style={styles.container}>
       <Image source={require("./src/assets/rps.jpg")} style={{width: "75%", height: "45%", borderRadius:60 }}/>
     <PlaceDetail selectedPlace={this.props.selectedPlace}
      onItemDeleted ={this.placeDeletedHandler}
      onModalClosed={this.modalClosedHandler}/>
       <PlaceInput onPlaceAdded={this.placeAddedHandler} />
       <PlaceList
         places={this.props.places}
         onItemSelected={this.placeSelectedHandler}
       />
     </View>
     </ImageBackground>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
  paddingTop:100,
   alignItems: "center",
   justifyContent: "flex-start"
 }
});
const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name, date) => dispatch(addPlace(name, date)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
