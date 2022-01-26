import Sequelize, {Model} from "sequelize"

class Contatos extends Model{
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                status: Sequelize.ENUM("ACTIVE", "ARCHIVED")
            }, 
            {
                sequelize,
            }
        )
    }
    static associate(models){
        this.belongsTo(models.Empresa, {foreignKey: "empresa_id"})
    }
    
}
export default Contatos