require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');
const app = express();
const port = 3000;

const JWT_SECRET = process.env.JWT_SECRET || 'asd';
const JWT_SECRET = process.env.JWT_SECRET;

app.use(cors());
app.use(express.json());
app.use(express.static('media'));

// MySQL connection

    const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'webshop'
})




db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Get all products
app.get('/productList', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json(results);
  });
});
app.get('/fruitList', (req, res) => {
  db.query('SELECT * FROM products WHERE category = "fruit"', (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json(results);
  });
});
app.get('/vegetableList', (req, res) => {
  db.query('SELECT * FROM products WHERE category = "vegetable"', (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json(results);
  });
});
app.get('/meatList', (req, res) => {
  db.query('SELECT * FROM products WHERE category = "meat"', (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json(results);
  });
});
app.get('/dairyList', (req, res) => {
  db.query('SELECT * FROM products WHERE category = "dairy"', (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json(results);
  });
});
app.get('/specialtyList', (req, res) => {
  db.query('SELECT * FROM products WHERE category = "specialty"', (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json(results);
  });
});


// Get products by category
/*app.get('/:categoryList', (req, res) => {
  const category = req.params.categoryList.replace('List', '');
  db.query('SELECT * FROM products WHERE category = ?', [category], (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json(results);
  });
});
*/
// Filtered products
app.get('/filteredProducts', (req, res) => {
    
    const q = req.query.q || '';
    db.query('SELECT * FROM products WHERE LOWER(name) LIKE ?',[`%${q.toLowerCase()}%`],(err,rows)=>{
    if (err){
    console.log(err);
   res.status(500).json({ message: 'DB error' })
        
      }
    console.log(rows)
    res.json(rows)
    }
)
    console.log('search query', q)

})

// Signup
app.post('/signup', (req, res) => {
    console.log("received signup data: ",req.body)
  const {NULL, email, password, firstName, lastName, phoneNumber, birthDate } = req.body;
  if (!email || !password || !firstName || !lastName || !phoneNumber || !birthDate) {
    return res.status(400).json({ message: 'fill out all the fields' });
  }

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    if (results.length > 0) {
      return res.status(409).json({ message: 'Email already in use.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    db.query(
      'INSERT INTO users (email, password, firstName, lastName, phoneNumber, birthDate) VALUES (?, ?, ?, ?, ?, ?)',
      [email, hashedPassword, firstName, lastName, phoneNumber, birthDate],
      (err) => {
        if (err) return res.status(500).json({ message: 'DB error' });

        const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ message: 'user registered successfully', token, email });
      }
    );
  });
});

// Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    if (results.length === 0) {
      return res.status(400).json({ message: 'user doesnt exist' });
    }

    const user = results[0];
    const matching = await bcrypt.compare(password, user.password);
    if (!matching) {
      return res.status(400).json({ message: 'invalid credentials' });
    }

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ message: 'login successful', token, email });
  });
});

// Get user profile
app.get('/user/profile', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    db.query('SELECT id, email, firstName, lastName, phoneNumber, age FROM users WHERE email = ?', [decoded.email], (err, results) => {
      if (err) return res.status(500).json({ message: 'DB error' });
      if (results.length === 0) return res.status(404).json({ message: 'User not found' });
      res.json(results[0]);
    });
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
