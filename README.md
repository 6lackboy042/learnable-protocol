# learnable-protocol
A secure financial API built with Node.js, TypeScript, and MongoDB for the Learnable 24 Backend Quest. This project restores a fictional fallen system through five progressive trials covering account creation, virtual cards, encryption, and documentation.
| Trial | Title             | Description                                       |
| ----- | ----------------- | ------------------------------------------------- |
| 1     | Identity          | Create bank accounts with unique 10-digit numbers |
| 2     | Virtual Card      | Generate virtual cards with expiry and CVV        |
| 3     | Encryption        | AES-256-CBC encryption of sensitive fields        |
| 4     | Ledger Access     | View encrypted/decrypted user data                |
| 5     | API Documentation | Full Postman collection                           |

 Tech Stack
Node.js + Express

TypeScript

MongoDB with Mongoose

Crypto (AES encryption)

Zod for data validation

Dotenv for config


Getting Started
# Clone the project
git clone https://github.com/your-username/the-protocol-api.git
cd the-protocol-api

# Install dependencies
yarn install

# Set environment variables
cp .env.example .env

# Run the development server
yarn dev


Environment Setup
Create a .env file with:

PORT=4000
MONGODB_URI=mongodb+srv://tester:passwurd@cluster0.0zldxy6.mongodb.net/
ENCRYPTION_KEY=G3x@v9#QbP8Jz2EwM7R1u6LgN5aV0KcX
IV=F1g9T7c2LpQ4ZxYk

ENCRYPTION_KEY must be 32 characters
IV must be 16 characters

API Endpoints
Create a New Account
POST /api/account

Get Encrypted Accounts
GET /api/accounts/encrypted

Get Decrypted Accounts
GET /api/accounts/decrypted

Get All (Encrypted + Decrypted)
GET /api/accounts/all

Decrypt a Value by Hash
GET /api/reveal/:hash


Postman Collection
All endpoints are documented.
👉 Download Postman Collection

🌐 Deploying on Render
Push your code to GitHub

Visit Render

Select "learnable protocol"

Connect your GitHub repo

Set:

Build Command: yarn

Start Command: yarn build && yarn start

Add environment variables from your .env file

Deploy 🎉

👨‍💻 Author
@6lackboy042
Builder of the Protocol. Restorer of order.