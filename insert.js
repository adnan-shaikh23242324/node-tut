const dbConnect = require('./mongodb')
const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            { name: 'vivo v3', brand: 'vivo', price: 5000, category: 'mobile' },
            { name: 'vivo v5', brand: 'vivo', price: 8000, category: 'mobile' },
            { name: 'vivo v7', brand: 'vivo', price: 10000, category: 'mobile' }
        ]
    );
    if (result.acknowledged) {
        console.log("data inserted");
    }
}
// const insert =()=>{
//     console.log("insert function");
// }
insert();