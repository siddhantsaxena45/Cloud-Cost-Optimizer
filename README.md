# Cloud Cost Optimization Tool 💰  

## 🚀 Overview  
A tool to track AWS resource usage and detect cost anomalies. Uses **Kubernetes** for containerized deployment and **Node.js** for backend processing.  

## 🛠 Tech Stack  
- **Backend:** Node.js, Express.js  
- **Cloud:** AWS (EC2, S3, CloudWatch)  
- **DevOps:** Docker, Kubernetes  
- **Database:** MongoDB (for cost tracking)  

## 🔧 Features  
✅ Tracks AWS resource usage (CPU, memory, storage)  
✅ Anomaly detection for unexpected cost spikes  
✅ Kubernetes deployment for auto-scaling  

## 📦 Installation  
```sh
git clone https://github.com/siddhantsaxena45/Cloud-Cost-Optimizer.git
cd Cloud-Cost-Optimizer
npm install
node src/app.js
```

---

#### 🔹 **`package.json`** (Project Dependencies)  
```json
{
  "name": "cloud-cost-optimizer",
  "version": "1.0.0",
  "description": "A tool to track AWS usage and detect cost anomalies.",
  "main": "src/app.js",
  "dependencies": {
    "express": "^4.17.1",
    "aws-sdk": "^2.1040.0",
    "mongoose": "^6.0.12"
  },
  "scripts": {
    "start": "node src/app.js"
  }
}
```
