const express=require('express');

const app=express();


app.get('/anwar',(req,res)=>{
    res.send('fucker')
})



const port=300||process.env.PORT
app.listen(port,()=>{
    console.log('fucker runinig')
})