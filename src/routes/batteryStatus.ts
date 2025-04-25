import express from 'express';
import { getBatteryStatus, chargeBattery, dischargeBattery, getBatteryHistory } from '../services/batteryService';

const router = express.Router();

router.get('/status', (req, res) => {
  const status = getBatteryStatus();  
  res.json(status);
});

router.post('/charge', (req, res) => {
  const { amount } = req.body;
  res.json(chargeBattery(amount));  
});

router.post('/discharge', (req, res) => {
  const { amount } = req.body;
  res.json(dischargeBattery(amount)); 
});

router.get('/history', (req, res) => {
  res.json(getBatteryHistory()); 
});

export default router;
