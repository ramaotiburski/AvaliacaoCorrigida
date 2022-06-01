var sequelize = require("sequelize")

var conexao = new sequelize("devweb","root","123456",{
    host: "localhost",
    dialect: "mysql"
})

conexao.authenticate().then(
    function(){
        console.log("Conectado ao banco com sucesso!")
    }
).catch(
    function(erro){
        console.log("Erro ao conectar com o banco: "+erro)
    }
)

module.exports = conexao