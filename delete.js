const dbConnect = require('./mongodb')
const DeleteData = async () => {
    let data = await dbConnect();
    let result = await data.deleteMany
        ({ name: 'vivo v5' })
    console.warn(result);
    if(result.acknowledged){
          console.log("record deleted");
    }

}
// const insert =()=>{
//     console.log("insert function");
// }
DeleteData();