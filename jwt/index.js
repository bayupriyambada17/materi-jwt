// const jwt = require('jsonwebtoken');
// const secretKey = 'smktibazma';
// const payload = { userId: 12345, username: 'john_doe' };
// const token = jwt.sign(payload, secretKey);
// console.log(token);

const jwt = require('jsonwebtoken');
const secretKey = 'smktibazma';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMzQ1LCJ1c2VybmFtZSI6ImpvaG5fZG9lIiwiaWF0IjoxNzE0NjIxOTU2fQ.pr7Q50LOHatNRSp_GIslCHLL4-0gOJzgkNFoY_9kt1I'; // Token JWT dari klien
jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error('Token tidak valid');
  } else {
    console.log('Token valid');
    console.log(decoded); // Menampilkan payload JWT
  }
});