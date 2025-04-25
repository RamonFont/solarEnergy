import express from 'express';
import batteryStatus from './routes/batteryStatus'; 

const app = express();
app.use(express.json()); 

const PORT = 3000;

app.use('/battery', batteryStatus);  

app.listen(PORT, () => {
  console.log('Server running');
});
