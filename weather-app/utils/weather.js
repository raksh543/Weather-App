const request=require('request')

const weather=(latitude,longitude,callback)=>{
    const url='https://api.darksky.net/forecast/cc24bd7e3706fd0293170604381b60e2/'+encodeURIComponent(latitude)+","+encodeURIComponent(longitude)+'?units=us&lang=es'
    // request({url:url,json:true},(error,response)=>{
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect',undefined)
        // }else if(response.body.error){
        }else if(body.error){
            console.log('Unable to locate',undefined)
        }else{
            callback(undefined,{
                summary : body.daily.data[0].summary ,//in palce of response.body_______
                temperature: body.currently.temperature}) 
        }
    })
}

module.exorts=weather