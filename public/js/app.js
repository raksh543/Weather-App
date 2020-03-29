console.log('Client side javascript file is running')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })



const weatherForm = document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')



weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    messageOne.textContent='Loading...'
    messageTwo.textContent=''

    const location = search.value
    // fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
            messageOne.textContent=data.error
            messageTwo.textContent=''
        }else{
            console.log(data.location)
            console.log(data.forecast)
            messageOne.textContent=data.location
            messageTwo.textContent='It is '+data.forecast.summary+'With temperature '+data.forecast.temperature+' degree Celcius.'
        }
        
    })
})
})