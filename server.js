import express, { response } from 'express';
// Gets app the acess the every express function
const app = express();
console.log("IT WORKSSSSS");



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})