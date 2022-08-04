const { MongoClient, ObjectId } = require('mongodb')

class productService {

    constructor() {
        const uri = 'mongodb+srv://UsuarioAlmacen:7F0JE9pMWI4t8zHo@almacencluster.rvkptll.mongodb.net/?retryWrites=true&w=majority'
        const client = new MongoClient(uri)
        client.connect()
        const db = client.db('werehause')
        this.collection = db.collection('products')
    }

    async list() {
        try {
            var result = await this.collection.find().toArray()
            return result
        } catch (error) {
            console.log(error)
            return
        }
    }

    async get(id) {
        try {
            var objetId = new ObjectId(id)
            var result = await this.collection.find({ "_id": objetId }).toArray()
            return result
        } catch (error) {
            console.log(error);
            return
        }
    }

    async getByName(name) {
        try {
            var result = await this.collection.find({ "name": name }).toArray()
            return result
        } catch (error) {
            console.log(error);
            return
        }
    }

    async delete(id) {
        try {
            var result = await this.collection.deleteOne({ '_id': new ObjectId(id) })
            return (result.acknowledged == true && result.deletedCount == 1)
        } catch (error) {
            console.log(error);
            return
        }
    }

    async save(product) {
        try {
            var result = await this.collection.insertOne(product)
            return result.insertedId
        } catch (error) {
            console.log(error);
            return
        }
    }

    async update(id, product) {
        try {
            var objetId = new ObjectId(id)
            var result = await this.collection.updateOne({ '_id': objetId }, { $set: product })
            return (result.acknowledged == true && result.modifiedCount == 1)
        } catch (error) {
            console.log(error);
            return
        }
    }
}

module.exports = productService
