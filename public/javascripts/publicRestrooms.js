const fetch = require('node-fetch');

var getToilets = () =>{
    return new Promise((resolve,reject) => {
        fetch('https://gist.githubusercontent.com/andracs/e09f344f810d30b6c7bb8930df3d4bdf/raw/2ad18f7a3a063001f49eda0e2e8ba6b1444ec2c2/toiletter.json')
        .then(response => response.json())
        .then(data => {
          resolve(data)
        })
        .catch(err => {
            if(err){
                reject(err) 
                throw err

                
            }
        })
      
    })

}

module.exports.getToilets = getToilets;