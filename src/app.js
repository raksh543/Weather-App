const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const weather=require('./utils/weather')

// console.log(__dirname)
// console.log(path.join(__dirname,'../public')) 

const app=express()

//setting uo heroku
const port=process.env.PORT || 3000

const publicDirectoryPath=path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

//setting up handlers
app.set('view engine','hbs')

//setting path for views
app.set('views',viewPath)

hbs.registerPartials(partialsPath)

//app.use is a way to customize your server
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather',
        name: 'Rakshita Jain '
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'Provide an address'
        })
    }
    addr = req.query.address
    geocode(addr,(error,{latitude,longitude,location}={})=>{    
        if(error){
                 return(res.send('Error:' + error))
             }
           
             weather(latitude,longitude,(error,forecastData)=>{
                 if(error){
                     return(res.send('Error:' + error))
                 }
                 console.log(addr)
                 console.log(forecastData)
 
 
    res.send({
        forecast:forecastData,
        location,
        address: req.query.address
    })
})
})
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products:[]
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        name:'Rakshita Jain',
        title:'About me'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        helpText: 'This is some helpful text',
        title:'Help',
        name: 'Rakshita Jain'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Rakshita Jain',
        errorMessage:'Help article not found'
    })
})
//using wild charachter * to match everything that haven't been matched so far
app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Rakshita Jain',
        errorMessage:'Page not found'
    })
})

//what server should do when a client is accessing a resource
//This get method takes in two arguements(route,function)

// app.get('',(req,res)=>{
//     res.send('<h1>Hello express</h1>')
// })

// app.get('/help',(req,res)=>{
//     res.send([{
//         name:'Andrew',
//         age:27
//     },{
//         name:'sarah'
//     }])
// })
// app.get('/about',(req,res)=>{
//     res.send('<h1>About</h1>')
// })
// app.get('/weather',(req,res)=>{
//     res.send({
//         forecast:'It is snowing',
//         location:'Philadelphia'
//     })
// })


//app.com
//app.com/help
//app.com/about

//To start the server
//port 3000 is for local developement environment
app.listen(port,()=>{
    console.log('Server is up on the port '+ port)//This msg is never gonna display
})
