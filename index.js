const { urlencoded } = require('express');
const express =require('express');
const { url } = require('inspector');
const path=require('path')
const port=8800;
const app=express();

app.set('view engine','ejs');
 app.set('views',path.join(__dirname,'views'));

 app.use(express.urlencoded());


//  Middleware-1
app.use(function(req,res,next){
// console.log('middleware-1 called');
req.myName='Jeetesh'
next();
});
// middleware-2
app.use(function(req,res,next){
    // console.log('middleware-2 called');
    console.log('my-Name from MDW-2',req.myName)
    next();
})

 
 var contactList=[{
    name:"Jeetesh",
    phone:"11111"
 },
 {
    name:"Stark",
    phone:"111222222"
 },
 {
    name:"Tony",
    phone:"4444444"
 }
]

app.get('/home',function(req,res){
    console.log('from the get route controller',req.myName);

    // res.send('<h1>Cool! it is running? or it is</h1>');
    return res.render('home',
    {
        title:"My Contact List",
        contact_List:contactList
    })

});
app.get('/practice',function(req,res){
    return res.render('practice',
    {
        title:"Let's play with ejs"
});
});

app.post('/create-Contact',function(req,res){
    // return res.redirect('/practice')
    // console.log(req.body.my-name);
    contactList.push({
        name:req.body.myname,
        phone:req.body.myphone
    });
    // console.log(req.body)
        // 
    // });
    return res.redirect('back')

})





app.listen(port,function(err){
    if(err){
        console.log("Server running with error",err)
    }
    console.log("Yup!! Express Js Server running up in port:",port)
})