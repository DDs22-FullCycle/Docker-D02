import { PrismaClient } from '@prisma/client'
import express from "express"

const app = express()
const prisma = new PrismaClient()

app.get('/', (req, res) => {

    main().then((result) => {

      var retorno = `<h1>Full Cycle Rocks!</h1>
      <h2>Douglas dos Santos.</h2>
      <h3>Minha família:</h3>`
          for (const iterator of result) {
            retorno += "<h4>❤️ "+ iterator + "</h4>"   
          }

      return res.send(retorno)

    }).catch((err) => {
      
    })

})

app.listen(3000, ()=> {
    console.log("Rodando na porta : 3000")
})

async function main() {
    const peoples = await prisma.peoples.findMany()

     var lista = [];
     for (const key in peoples) {
       if (Object.hasOwnProperty.call(peoples, key)) {
         const element = peoples[key].peopleName;
         lista.push(element)
       }
     }

    return lista
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
  
  export default prisma