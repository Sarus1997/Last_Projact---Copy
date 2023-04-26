const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const crypto = require('crypto');

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World! Let\'s Working with NoSQL Databases')
})


const {MongoClient} = require("mongodb");
// const uri = "mongodb://Sarus:000000@localhost:27017/?authMechanism=DEFAULT&authSource=admin";
const uri = "mongodb://127.0.0.1:27017";
const connectDB = async () => {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        console.log(`MongoDB connected successfully.`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
connectDB();


// Read All API : USED
app.get('/admin', async (req, res) => {
    const client = new MongoClient(uri);
    await client.connect();
    const objects = await client.db('admin').collection('Restaurant')
        .find({}).sort({"Date received": -1}).limit(50).toArray();

    await client.close();
    res.status(200).send(objects);
})


// Create API : USED
app.post('/admin/create', async (req, res) => {
    const object = req.body;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('admin').collection('Restaurant').insertOne({
        "Name": object.Name,
        "Type": object.Type,
        "Tel": object.Tel,
        "Opening": object.Opening,
        "Status": "noRegis"
    });
    await client.close();
    res.status(200).send({
        "status": "ok",
        "message": "Object is created",
        "object": object
    });
})


// Update API : USED
const {ObjectId} = require('mongodb')
app.put('/admin/update', async (req, res) => {
    const object = req.body;
    const id = object._id;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('admin').collection('Restaurant').updateOne({'_id': ObjectId(id)}, {
        "$set": {
            "_id": ObjectId(id),
            "Name": object.Name,
            "Type": object.Type,
            "Tel": object.Tel,
            "Opening": object.Opening,
        }
    });

    await client.close();
    res.status(200).send({
        "status": "ok",
        "message": "Object with ID = “ + id " + "is updated",
        "object": object
    });
})

// Delete API : USED
app.delete('/admin/delete', async (req, res) => {
    const id = req.body._id;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('admin').collection('Restaurant').deleteOne({'_id': ObjectId(id)});
    await client.close();
    res.status(200).send({
        "status": "ok",
        "message": "Object with ID = " + id + " is deleted"
    });
})

// Read by id API
app.get('/admin/:id', async (req, res) => {
    const id = req.params.id;
    const client = new MongoClient(uri);
    await client.connect();
    const user = await client.db('admin').collection('Restaurant').findOne({"_id": ObjectId(id)});
    await client.close();
    res.status(200).send({
        "status": "ok",
        "message": "Complaint with ID = " + id + " is deleted",
        "object": user
    });
})

// Search by id API
app.get('/admin/findtext/:searchText', async (req, res) => {
    const {params} = req;
    const searchText = params.searchText
    const client = new MongoClient(uri);
    await client.connect();
    const objects = await client.db('admin').collection('Restaurant').find({$text: {$search: searchText}}).sort({"FIELD": -1}).limit(50).toArray();
    await client.close();
    res.status(200).send({
        "status": "ok",
        "searchText": searchText,
        "Complaints": objects
    });
})

// Query by filter API: Search text from Product Name
app.get('/admin/Type/:searchText', async (req, res) => {
    const {params} = req;
    const searchText = params.searchText
    const client = new MongoClient(uri);
    await client.connect();
    const objects = await client.db('admin').collection('Restaurant').find({$text: {$search: searchText}}).sort({"Date received": -1}).limit(10).toArray();
    await client.close();
    res.status(200).send({
        "status": "ok",
        "searchText": searchText,
        "Complaint": objects
    });
})

// Create API assessment
app.post('/admin/Data', async (req, res) => {
    const object = req.body;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('admin').collection('Data').insertOne({
        "id_restaurant": object.id_restaurant,
        "id_type": object.id_type,
        "id_quality": object.id_quality,
        "id_price": object.id_price,
        "id_serve": object.id_serve,
        "id_dress": object.id_dress,
        "id_cleanliness": object.id_cleanliness,
        "id_polite": object.id_polite,
    });

})


// Read All API
app.get('/admin2', async (req, res) => {
    const client = new MongoClient(uri);
    await client.connect();
    const objects = await client.db('admin').collection('Data')
        .find({}).sort({"Date received": -1}).toArray();

    await client.close();
    res.status(200).send(objects);
})

// : USED
app.post('/register', async (req, res) => {
    const object = req.body
    object.r_password = crypto.createHash('sha256').update(object.r_password).digest('hex');
    const client = new MongoClient(uri);
    await client.connect();
    check_user = await client.db('admin').collection('membership').find({"r_username": object.r_username}).toArray();
    if (check_user.length > 0) {
        res.status(200).send({
            "status": "error",
            "message": "User is already exist"
        });
        return;
    } else {
        await client.db('admin').collection('membership').insertOne({
            "r_name": object.r_name,
            "r_username": object.r_username,
            "r_password": object.r_password,
            "r_role": object.r_role
        });
        if (object.r_role == "restaurant") {
            await client.db('admin').collection('Restaurant').updateOne({"Name": object.r_name}, {
                "$set": {"Status": "Registered"}
            });
        }
        await client.close();
        res.status(200).send({
            "status": "ok",
            "message": "Object is created",
            "object": object
        });
    }
})

//Manage Login make Hashed of Pass Then check when the user will check if the code matches or not.
app.post('/login', async (req, res) => {
    const object = req.body;
    object.r_password = crypto.createHash('sha256').update(object.r_password).digest('hex');
    const client = new MongoClient(uri);
    await client.connect();
    results = await client.db('admin').collection('membership').find({
        "r_username": object.r_name,
    }).toArray();
    if (results.length == 0) {
        res.status(200).send({
            "status": "error",
            "message": "Username or Password is incorrect"
        });
    } else {
        if (results[0].r_password == object.r_password) {
            res.status(200).send({
                "status": "ok",
                "message": "Login success",
                "object": [results[0]["r_name"], results[0]["r_role"], results[0]["r_username"]]
            });
        } else {
            res.status(200).send({
                "status": "error",
                "message": "Username or Password is incorrect"
            });
        }
    }
    await client.close();
})

// BK -> read Restaurants Account: USED
app.get('/admin/membership/restaurants', async (req, res) => {
    const client = new MongoClient(uri);
    await client.connect();
    const objects = await client.db('admin').collection('membership').find({"r_role": "restaurant"}).toArray();
    await client.close();
    res.status(200).send(objects);
})

// BK -> read Managers Account: USED
app.get('/admin/membership/managers', async (req, res) => {
    const client = new MongoClient(uri);
    await client.connect();
    const objects = await client.db('admin').collection('membership').find({"r_role": "manager"}).toArray();
    await client.close();
    res.status(200).send(objects);
})

//  BK -> edit Restaurants Account: USED
app.put('/admin/membership/restaurants/', async (req, res) => {
    const object = req.body;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('admin').collection('membership').updateOne({"_id": ObjectId(object._id)}, {
        "$set": {
            "r_username": object.r_username,
            "r_password": crypto.createHash('sha256').update(object.r_password).digest('hex')
        }
    });
    await client.close();
    res.status(200).send({
        "status": "success",
        "message": "Object is updated",
        "object": object
    });
})

// BK -> remove Restaurants Account: USED
app.delete('/admin/membership/restaurants/', async (req, res) => {
    const object = req.body;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('admin').collection('membership').deleteOne({"_id": ObjectId(object._id)});
    await client.db('admin').collection('Restaurant').updateOne({"Name": object.r_name}, {
        "$set": {"Status": "noRegis"}
    });
    await client.close();
    res.status(200).send({
        "status": "success",
        "message": "Object is deleted",
        "object": object
    });
})

// BK -> edit Managers Account: USED
app.put('/admin/membership/managers/', async (req, res) => {
    const object = req.body;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('admin').collection('membership').updateOne({"_id": ObjectId(object._id)}, {
        "$set": {
            "r_username": object.r_username,
            "r_name": object.r_name,
            "r_password": crypto.createHash('sha256').update(object.r_password).digest('hex')
        }
    });
    await client.close();
    res.status(200).send({
            "status": "success",
            "message": "Object is updated",
            "object": object
        }
    );
})

// BK -> remove Managers Account: USED
app.delete('/admin/membership/managers/', async (req, res) => {
    const object = req.body;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('admin').collection('membership').deleteOne({"_id": ObjectId(object._id)});
    await client.close();
    res.status(200).send({
        "status": "success",
        "message": "Object is deleted",
        "object": object
    });
})

// Get data by Restaurant Name: USED
app.post('/restaurants/', async (req, res) => {
    const restaurant_id = req.body.restaurant_id;
    const client = new MongoClient(uri);

    console.log(restaurant_id)

    if (restaurant_id !== ""){
        await client.connect();
        const objects = await client.db('admin').collection('Data').find({"id_restaurant": restaurant_id}).toArray();
        await client.close();
        res.status(200).send(objects);
    } else {
        await client.connect();
        const objects = await client.db('admin').collection('Data').find({}).toArray();
        await client.close();
        res.status(200).send(objects);
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
