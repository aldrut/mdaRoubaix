const cors = require('cors');               //appel du package pour passer les sécurité 
const mysql = require('mysql2');            //appel du package pour la connexion
const express = require('express');         //appel du package pour faire des api
const app = express();
const port = 3310;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded ({extended:true}));


//Creation du pool de connexion
    const db = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "",
        database: "mda_roubaix",
        port: 3307,
    });

    app.get('/', (req, res) =>{
        res.send('API NODE');
    });


//récupère toute les question
    app.get('/api/getAllQuestion', (req, res) =>{
        const sqlQUery = "SELECT * FROM question";
        db.query(sqlQUery, (error, result)=>{
            res.send(result);
        })
    });


//récupère toute les reponse selon les question
    app.get('/api/getAllReponse', (req, res) =>{
        const sqlQUery = "SELECT * FROM question";
        db.query(sqlQUery, (error, result)=>{
            res.send(result);
        })
    });


//ajout de question
    app.post('/api/AddQuestion', (req, res) =>{
        const enonce = req.body.enonce;
        const ordre = req.body.ordre;
        const editable = req.body.is_editable;

        const insertQuestion = "INSERT INTO `question`(`enonce`, `ordre`, `is_editable`) VALUES (?,?,?)";
        db.query(insertQuestion, [enonce, ordre, editable], (error, result)=>{
            if(result != null){
                res.json(result);
            }else{
                res.json(error);
            }
        });

    });












app.listen(port, () =>{
    console.log(`server is runing on ${port}`);
})
