//const app = require('./app')
import app from "./app"
app.listen(3000)



/*const express = require('express')

const app = express()

app.use(express.json())

let empresas = [
    {id: 1, name: "facebook", site: "http://facebook.com"},
    {id: 2, name: "google", site: "http://google.com"},
]
// /////////////////funcionario/////////////////////////////
let funcionarios = [
    {id: 1 ,name:"ana",empresa:"facebook"}
]
// ////////////////////////////////////////////////////////
app.get("/empresas", (req, res) => {
    res.json(empresas)
})

app.get("/funcionarios", (req, res) => {
    res.json(funcionarios)
})

app.get("/empresas/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const empresa = empresas.find(itens => itens.id === id)
    const status = empresa ? 200:404

    return res.status(status).json(empresa)
})
// /////////////////funcionario/////////////////////////////
app.get("/funcionarios/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const empresa = empresas.find(itens => itens.id === id)
    const status = empresa ? 200:404

    return res.status(status).json(funcionarios)
})
// ////////////////////////////////////////////////////////

app.post("/empresas", (req,res)=>{
    const {name, site} = req.body
    const id = empresas[empresas.length - 1].id + 1
    const novaEmpresa = {id, name, site}

    empresas.push(novaEmpresa)
    return res.status(201).json(novaEmpresa)
})
// /////////////////funcionario/////////////////////////////
app.post("/funcionarios", (req,res)=>{
    const {name, empresa} = req.body
    const id = funcionarios[funcionarios.length - 1].id + 1
    

    const empres = empresas.find(item => item.name === empresa)

    if(empres != undefined){
        const novoFuncionario= {id, name, empresa}
        funcionarios.push(novoFuncionario)
        return res.status().json(novoFuncionario)
    }
  
})
// ///////////////////////////////////////////////////////
app.put("/empresas/:id", (req,res)=>{
    const {name, site} = req.body
    const id = parseInt(req.params.id)

    const index = empresas.findIndex(item => item.id === id)
    const status = index >= 0 ? 200:400

    if(index >= 0){
        empresas[index] = {id:parseInt(id), name, site}
    }

    return res.status(status).json(empresas[index])
})

app.delete("/empresas/:id", (req,res)=>{
    const id = parseInt(req.params.id)

    const index = empresas.findIndex(item => item.id === id)
    const status = index >= 0 ? 200:400

    if(index >= 0){
        empresas.splice(index, 1)
    }

    return res.status(status).json()
})
// /////////////////funcionario/////////////////////////////
app.delete("/funcionarios/:id", (req,res)=>{
    const id = parseInt(req.params.id)

    const index = funcionarios.findIndex(item => item.id === id)
    const status = index >= 0 ? 200:400

    if(index >= 0){
        funcionarios.splice(index, 1)
    }

    return res.status(status).json()
})
// ///////////////////////////////////////////////////////
app.listen(7000)
*/
