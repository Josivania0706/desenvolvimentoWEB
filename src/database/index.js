import Sequelize from 'sequelize'
import config from '../config/database'
import Empresa from '../app/models/Empresa'
import Contato from '../app/models/Contatos'

const models = [Empresa, Contato]

class Database{
    constructor(){
        this.connection = new Sequelize(config)

        this.init()
        this.associate()
    }
    init(){
        //percorrer no array de models
        models.forEach(model => model.init(this.connection))
    }

    associate(){
        models.forEach(model=>{
            if(model.associate){
                model.associate(this.connection.models)
            }
        })
    }
}

export default new Database()

