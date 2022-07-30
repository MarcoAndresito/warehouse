const { MongoClient } = require('mongodb')

class productService {
    
    collection
    
    constructor() {
        const client = new MongoClient('mongodb://localhost:27017')
        client.connect()
        const db = client.db('werehause')
        this.collection = db.collection('products')
    }



    async list() {
        var result = await this.collection.find().toArray()
        return result
    }


    get() {

    }

    delete() {

    }

    update() {
        
    }

}

module.exports = productService