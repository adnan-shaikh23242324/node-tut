const dbConnect = require('./mongodb')
const UpdateData = async () => {
    let data = await dbConnect();
    let result = await data.updateMany(
        
            { name: 'vivo v3'},{
                $set:{name:'vivo v5',price:6000}
            }
        
    );
    console.warn(result);
  
}
// const insert =()=>{
//     console.log("insert function");
// }
UpdateData();