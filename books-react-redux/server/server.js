const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 2500
const app = express()

mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://rip:admin@cluster0-s2lpv.mongodb.net/books?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const BooksSchema = new mongoose.Schema({
    isbn: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
})
const BooksModel = mongoose.model("book", BooksSchema)
const getBooks = async (request, response) => {
    try {
        console.log("getBooks")
        const booksInstance = await BooksModel.find({})
        console.log(booksInstance)
        response.send(booksInstance)

    }
    catch (error) {
        response.status(500).send(error)
    }


}
const postBooks = async (request, response) => {
    try {
        console.log("Post Book")
        var booksInstance = new BooksModel(request.body)
        console.log(booksInstance)
        const created = await BooksModel.create( booksInstance )
        console.log(created)
        response.send(created)

        console.log('created')
    }
    catch (error) {
        response.status(500).send(error)
    }
}

const deleteBooks = async (request, response) => {
    try{
        console.log('deleteBooks')
        var booksInstance = await BooksModel.deleteOne({"_id":request.params.id})
        console.log(booksInstance)
        response.send(booksInstance)

    }
    catch(error){
        response.status(500).send(error)
    }
}
const updateBooks = async (request, response) => {
    try{
        console.log('updateBooks')
        var booksInstance = new BooksModel(request.body)
        console.log(booksInstance)
        const created = await BooksModel.findOneAndUpdate({"_id":request.params.id}, request.body)
        console.log(created)
        response.send(created)
    }
    catch(error){
        response.status(500).send(error)
    }
}


app.route("/books/:id")
    .delete(deleteBooks)
    .put(updateBooks)
app.route("/books")
    .post(postBooks)
    .get(getBooks)
app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})