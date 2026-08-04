import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());

app.get('/' , (req , res) => {
    res.send('Server is Ready');
});

app.get('/api/jokes' , (req , res) => {
    const jokes = [
  { idx: 1, title: "404", contain: "My motivation not found." },
  { idx: 2, title: "Bug", contain: "It's not a bug, it's an undocumented feature." },
  { idx: 3, title: "Monday", contain: "Monday should be optional." },
  { idx: 4, title: "Code", contain: "First, solve the problem. Then, write code." },
  { idx: 5, title: "Internet", contain: "My internet is faster when I'm not using it." }
];
res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port , (req ,res) => {
    console.log(`Server at http://localhost:${port}`)
});