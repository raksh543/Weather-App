const request=require('request')
const geocode=require('./utils/geocode')
const geocode=require('./utils/weather')
//  const yargs=require('yargs')

// const url='https://api.darksky.net/forecast/cc24bd7e3706fd0293170604381b60e2/37.8267,-122?units=us&lang=es'
// request({url:url, json:true },(error,response)=>{
//    if(error){
//        console.log('Unable to connect to weather service')
//    } else if(response.body.error){
//         console.log('Unable to find location')
//    }  else{
//      console.log(response.body.daily.data[0].summary + 'It is currently '+ response.body.currently.temperature + ' degrees out.')
//    }
//     // const data=JSON.parse(response.body)
// })
 
// //Geocoding
// // Address ->lat/Long ->weather

// const geocodeurl='https://api.mapbox.com/geocoding/v5/mapbox.places/india.json?access_token=pk.eyJ1IjoicmFrc2hpdGFqYWluIiwiYSI6ImNrNmtjNHBqMTAya3QzZHA2djI5b2pqemkifQ.MAh32uOz2p54i5QpPncXvQ&limit=1'

// request({url:geocodeurl, json:true}, (error, response)=>{
//     if(error){
//         console.log('Unable to connect to location services')
//     } else if(response.body.features.length==0){
//         console.log('Unable to loacte')
//     } else{
//     const long=response.body.features[0].center[0]
//     const lat=response.body.features[0].center[1]
//     console.log(long,lat)
//     }
    
// })

// yargs.parse()
// //remember installing yargs

// yargs.command({
//     command:getWeatherReport,
//     describe:'Enter location to get weather reports',
//     Builder:{
//         location:{
//             describe:'Location',
//             type:String,
//             demandOption: true
//         }
//     },
//     handler:
// })
const location=process.args[2]
if(!location){
    console.log('Please provide a location')
}else{
    // geocode(location,(error,data)=>{
        geocode(location,(error,{latitude,longitude,location})=>{    
    if(error){
             return(console.log('Error:' + error))
         }
        //  console.log('Data:'+data)
         weather(latitude,longitude,(error,forecastData)=>{
             if(error){
                 return(console.log('Error:' + error))
             }
             console.log(loaction)
             console.log(forecastData)
         })
     })
}














// console.log('Starting')

// setTimeout(()=>{
//     console.log('2 Second Timer')
// },2000)

// setTimeout(()=>{
//     console.log('0 Second Timer')
// },0)


// console.log('Stopping')