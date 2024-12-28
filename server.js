
import app from './src/app.js'

// app.listen(3000, () =>{
//     console.log('Running...')
// })

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
