import reactS3 from 'react-s3'
import {Buffer} from 'buffer';
Buffer.from('anything','base64');
window.Buffer = window.Buffer || require("buffer").Buffer;

function fileUpload(file) {
    const config = {
        bucketName:"krida-buck",
        region:"us-east-1",
        ACL: "public-read",
        secretAccessKey:"",
        accessKeyId:process.env.REACT_APP_ACCESS_KEY,
        secretAccessKey: process.env.REACT_APP_ACCESS_SECRET,
    }

    return new Promise((resolve, reject) => {
        reactS3.uploadFile(file,config).then(data => {
            console.log('success !')
            resolve(data);
        }).catch(err => {
            console.log("bucket error",err)
            reject(err)
        }) 
    })
}

export {fileUpload};