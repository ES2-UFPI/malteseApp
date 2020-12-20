import React, {useState}from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import Local from '@react-native-community/geolocation'

export default function(){

	const [latitude,SetLatitude]=useState(0)
	const [longitude,SetLongitude]=useState(0)

	const obterLocal=()=>{
		Local.getCurrentPosition(
			(pos)=>{
				SetLatitude(pos.coords.latitude)
				SetLongitude(pos.coords.longitude)
			},
			(erro)=>{
				alert('Erro: '+erro.message)
			},
			{
				enableHighAccuracy:true,timeout:12000,maximumAge:1000
			}
		)
	}
	
	return(
		<View>
			<TouchableHighlight onPress={ obterLocal }>
				<Text>Ver localizacao</Text>
			</TouchableHighlight>
			<Text>Latitude: {latitude}</Text>
			<Text>Longitude: {longitude}</Text>
		</View>
	)
}