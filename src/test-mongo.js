const { MongoClient } = require('mongodb');

async function testConn() {
    const uri = "mongodb+srv://betterAuthDBUser:niAQ5oeFc9kw6NMi@cluster0.0zmykqn.mongodb.net/?appName=Cluster0";
    const client = new MongoClient(uri);
    try {
        console.log("Connecting...");
        await client.connect();
        console.log("Connected!");
        const db = client.db("Nur_PH13_A8_tiles");
        const colls = await db.listCollections().toArray();
        console.log("Collections:", colls.map(c => c.name));
    } catch (e) {
        console.error("Error:", e);
    } finally {
        await client.close();
    }
}

testConn();
