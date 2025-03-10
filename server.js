const express = require('express');
const app = express();
const router = express.Router();
const port = 5000;

app.use(express.json());
app.use('/',router);

router.get('/',(req,res)=>{
    res.send("Fswd CA=2");
});

router.get('/search',(req,res)=>{
    let {title} = req.query;
    
    if(!title){
        return res.status(400).json({message:"title cannot be empty"});
    }
    else{
        return res.status(200).json({message:"title found"});
    }

});

router.get('/find',(req,res) =>{
    let {Description} = req.query;

    if(!Description){
        return res.status(400).json({message:"Description cannot be empty"});
    }
    else{
        return res.status(200).json({message:"Description found"});
    }
});

router.get('/find',(req,res) =>{
    let {Due_date} = req.query;

    if(!Due_date){
        return res.status(400).json({message:"Due date should be a future valid date"});
    }
    else{
        return res.status(200).json({message:"Valid due date"});
    }
});



app.listen(port, () =>{
    console.log(`Server running at "http://localhost:${port}"`);
});