const {MongoClient} = require('mongodb');
async function main(){
    const uri = "mongodb+srv://mandadi:mandadi@cluster0.cbimz.mongodb.net/movies?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try{
        await client.connect();
        console.log(" Connection Happened here ")
    } catch(e){
        console.error(e);
    } finally{
        await client.close();
        console.log(" We closed our connection")
    }
}
main();
