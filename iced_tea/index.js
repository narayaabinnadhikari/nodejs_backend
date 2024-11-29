import 'dotenv/config'
import express from "express"

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())


let teaData = []
let nextId = 1


//adding a new
app.post("/add-tea", (req,res)=> {

    const {name, price} = req.body
    const newTea = {id: nextId++, name, price}
    teaData.push(newTea)
    res.status(201).send(newTea)
});

//get all in the array.
app.get("/teas", (req,res)=> {
    res.status(200).send(teaData)
});

//get a single one searching by id
app.get("/teas/:id", (req,res)=> {
    const matchedTea = 
    teaData.find(oneTea => oneTea.id === parseInt(req.params.id))
    if( !matchedTea) {
        return res.status(404).send("We don't have that particular tea.")
    }
    res.status(200).send(matchedTea)
});

//updating a tea still search by id 
app.put('teas/:id', (req,res) => {
    const matchedTea = teaData.find(t => t.id === parseInt(req.params.id))
    if( !matchedTea) {
        return res.status(404).send("We don't have that particular tea.")
    }
    const {newName, newPrice} = req.body
    matchedTea.name = newName
    matchedTea.price = newPrice
    res.status(200).send(matchedTea)
})

//deleting a tea from the teaData array.
app.delete('teas/:id', (req,res) => {
   const index =  teaData.findIndex(t => t.id === parseInt(req.params.id))
   if (index === -1) {
    return res.status(404).send("We don't have that particular tea.")
   }
   teaData.splice(index, 1)
   return res.status(204).send("tea was deleted")
})

app.listen(port, ()=> {
    console.log(`Server on port ${port} ...`)
})