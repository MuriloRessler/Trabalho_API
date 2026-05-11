require('dotenv').config();
const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const connectDB = require('./src/config/database');

const app = express();

// Conectar ao banco
connectDB();

// Middlewares globais
app.use(express.json());
app.use(mongoSanitize()); // 🛡️ Proteção contra NoSQL Injection

// Rotas
app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/products', require('./src/routes/productRoutes'));

// Rota de verificação
app.get('/', (req, res) => res.json({ message: 'API Catálogo de Produtos funcionando! 🚀' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));