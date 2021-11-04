const cors = require('cors');               //appel du package pour passer les sécurité 
const mysql = require('mysql2');            //appel du package pour la connexion
const express = require('express');         //appel du package pour faire des api
const app = express();
const port = 3001;
const bcrypt = require ('bcrypt');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded ({extended:true}));


// **************************** CONNEXION **************************** //
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

//CONNEXION
    app.post('/api/connexion/', (req, res) =>{
        const mail = req.body.mail;
        const mdp = req.body.password;
        const sqlQuery = `SELECT * FROM utilisateur WHERE mail="${mail}" `;

        db.query(sqlQuery, (error, result)=>{
            if(result.length === 0){ 
                const passwordHashed = bcrypt.hash(mdp, rounds);                    //Promesses asynchrones
                const mailHashed = bcrypt.hash(mail, rounds);                       //Promesses asynchrones

                Promise.all([mailHashed, passwordHashed]).then(hasheds => {          //attend la répons des promesses
                    const annee = new Date();
                    const idLangue = 1;
                    const deleted = 0;
                    let insertUser = "INSERT INTO `utilisateur`(`mail`, `mdp`, `annee`, `id_langue`, `deleted`) VALUES (?,?,?,?,?)";
                    
                    db.query(insertUser, [hasheds[0], hasheds[1], annee, idLangue, deleted], (error, resultInsert)=>{
                        if(resultInsert != null){
                            res.json(resultInsert);
                        }else{
                            res.json(error);
                        }
                    });
                })

            }else if(result.length >0 && hashPassword(mdp, result[0].mdp) ){
                res.send("bad mdp");
            }else{
                let tab;
                tab.push(mail, mdp);
            }
            // return error + " / " + result;
        })
    }); 






    const rounds = 10;

    async function hashPassword (pass, bddMdp){
        //const hash = await bcrypt.hash(pass, rounds);
        const rst = _isEqual(pass,bddMdp); 
        return rst;
    }




// **************************** METHODE GET  **************************** //
//RECUPERE TOUTES LES QUESTIONS
    app.get('/api/getAllQuestion', (req, res) =>{
        const sqlQuery = "SELECT * FROM question";

        db.query(sqlQuery, (error, result)=>{
            if(result != null){
                res.send(result);
            }else{
                res.send(error);
            }
        })
    });

//RECUPERER TOUTES LES REPONSES (selon les questions) 
    app.get('/api/getAllReponse', (req, res) =>{
        const sqlQuery = "SELECT * FROM question";

        db.query(sqlQuery, (error, result)=>{
            if(result != null){
                res.send(result);
            }else{
                res.send(error);
            }
        })
    });



// **************************** METHODE POST **************************** //
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
    // app.post('/api/inscription', (req, res) =>{
    //     const mail = req.body.mail;
    //     const mdp = req.body.password;
    //     const annee = new Date();
    //     const idLangue = 1;
    //     const deleted = 0;
    //     const insertUser = "INSERT INTO `utilisateur`(`mail`, `mdp`, `annee`, `id_langue`, `deleted`) VALUES (?,?,?,?,?)";

    //     db.query(insertUser, [mail, mdp, annee, idLangue, deleted], (error, result)=>{
    //         if(result != null){
    //             res.json(result);
    //         }else{
    //             res.json(error);
    //         }
    //     });
    // });



// **************************** MESSAGE POUR PORT D'ECOUTE **************************** //
    app.listen(port, () =>{
        console.log(`server is runing on ${port}`);
    })
