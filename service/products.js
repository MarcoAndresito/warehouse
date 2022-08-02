const { MongoClient, ObjectId } = require('mongodb')

class productService {

    constructor() {
        const client = new MongoClient('mongodb://localhost:27017')
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

    update() {

    }

}

module.exports = productService