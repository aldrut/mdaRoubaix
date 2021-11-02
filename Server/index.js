const cors = require('cors');               //appel du package pour passer les sécurité 
const mysql = require('mysql2');            //appel du package pour la connexion
const express = require('express');         //appel du package pour faire des api
const app = express();
const port = 3001;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded ({extended:true}));


//POOL DE CONNEXION
    const db = mysql.createPool({
        host: "localhost",
        // host: "10.115.58.226",
        user: "root",
        password: "",
        database: "mda_roubaix",
        port: 3307,
    });

    app.get('/', (req, res) =>{
        res.send('API NODE');
    });


//RECUPERE TOUTES LES QUESTIONS
    app.get('/api/getAllQuestion', (req, res) =>{
        const sqlQUery = "SELECT * FROM question";
        db.query(sqlQUery, (error, result)=>{
            res.send(result);
        })
    });


//CONNEXION
    app.get('/api/connexion/:mail', (req, res) =>{
        const mail = req.params.mail;
        const sqlQUery = `SELECT * FROM utilisateur WHERE mail="${mail}" `;
        db.query(sqlQUery, (error, result)=>{

            // if(result.length === 0 ){
            //    return (false);
            // }else if(result.mail === req.params.mail && result.mdp !== password){
            //     alert("mdp incorect");
            // }else{
            //     alert("connexion ok");
            // }

            res.send(result);
        })
    });


//RECUPERER TOUTES LES REPONSES SELON LES QUESTIONS 
    app.get('/api/getAllReponse', (req, res) =>{
        const sqlQUery = "SELECT * FROM question";
        db.query(sqlQUery, (error, result)=>{
            res.send(result);
        })
    });


//AJOUT DE QUESTION
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


//INSCRIPTION
    app.post('/api/inscription', (req, res) =>{
        const mail = req.body.mail;
        const mdp = req.body.password;
        const annee = new Date();
        const idLangue = 1;
        const deleted = 0;

        const insertUser = "INSERT INTO `utilisateur`(`mail`, `mdp`, `annee`, `id_langue`, `deleted`) VALUES (?,?,?,?,?)";
        db.query(insertUser, [mail, mdp, annee, idLangue, deleted], (error, result)=>{
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
