import './database'
import Empresa from './app/models/Empresa'

class Playground{
    static async play(){
       try{
            const empresa = await Empresa.findAll({
                attributes:{exclude:["createdAt","updatedAt"]},
                where:{
                    id:1,
                }
               
            })
            console.log(JSON.stringify(empresa, null, 2))
            
       }catch(e){
           console.log('Erro ao criar: '+e)
       }
       
    }
}

Playground.play()
//encontrar
 //const empresas = await Empresa.findAll({
        //    attributes: ["id"]
        //});
       // console.log(JSON.stringify(empresas, null, 2))
//
//criar
 /*      try{
        const empresas = await Empresa.create({
            name: "Avon", site: "https://avon.br"
        }) 
   }catch(e){
       console.log('Erro ao criar: '+e)
   }

   //atualizar
   const empresa = await Empresa.findByPk(5)
            console.log("Antes: ",JSON.stringify(empresa, null, 2))

            const novaEmpresa = await empresa.update({
                status: "ARCHIVED"
            })
            console.log("Depois: ",JSON.stringify(novaEmpresa, null, 2))

//excluir
 const empresa = await Empresa.findByPk(7)
            empresa.destroy()*/