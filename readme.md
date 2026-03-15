# 🔐 SecureX Encryption Tool

SecureX is a simple **web-based encryption and decryption tool** that allows users to secure messages using a custom reversible encoding algorithm.

🌐 **Live Website:**
https://securex.sukhad.workers.dev/

The tool visually demonstrates how a message can be transformed into an encrypted form using a key and then restored back to its original message.

---

# ✨ Features

* 🔐 Encrypt text messages using a numeric key
* 🔓 Decrypt messages using the same key
* ⚡ Instant encryption and decryption
* 🎨 Clean dark themed interface
* 📱 Works on both desktop and mobile
* 🌐 Hosted using **Cloudflare Workers**

---

# 🧠 How The Encryption Works

The encryption algorithm follows these steps:

### 1️⃣ Reverse the Message

The input message is first reversed.

Example:
hello → olleh

---

### 2️⃣ Shift Characters Using Key

Each character is shifted inside the **printable ASCII range (32–126)** using the formula:

```
encrypted_char = ((char - 32 + key) % 95) + 32
```

This ensures characters stay within printable ASCII.

---

### 3️⃣ Insert Random Symbols

After encrypting each character, a **random symbol** from the set below is inserted:

```
!@#$%^&*()_+-=<>?/|
```

This increases the length of the encrypted message and makes pattern detection harder.

Example:

```
Original : hello
Encrypted: q@r!u#...
```

---

# 🔓 Decryption Process

Decryption reverses the encryption steps:

1. Remove the inserted random symbols (every second character).
2. Reverse the ASCII shift using the key.
3. Reverse the string again to restore the original message.

Formula used:

```
decrypted_char = ((char - 32 - key + 95) % 95) + 32
```

---

# 🛠 Tech Stack

The project is built using lightweight web technologies.

* HTML
* CSS
* JavaScript
* Cloudflare Workers

No backend database or server is required.

---

# 🚀 Deployment

This project is deployed using **Cloudflare Workers**.

To deploy yourself:

### 1️⃣ Clone the repository

```
git clone https://github.com/yourusername/securex
cd securex
```

---

### 2️⃣ Deploy with Cloudflare

Install Wrangler:

```
npm install -g wrangler
```

Login:

```
wrangler login
```

Deploy:

```
wrangler deploy
```

---

# 📂 Project Structure

```
securex/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# ⚠️ Security Note

This project is intended for **learning and demonstration purposes**.

It is **not meant for real cryptographic security** since the algorithm is reversible and does not use modern encryption standards.

For real-world security applications, use libraries implementing:

* AES
* RSA
* ChaCha20
* TLS

---

# 👨‍💻 Author

**Sukhad Sahay**

Website: https://sukhad.online/

---

# ⭐ Support

If you like this project, consider giving the repository a **star ⭐ on GitHub**.
