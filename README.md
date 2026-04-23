
```markdown
# 🏥 Clinico – Full Stack Doctor Appointment Booking Platform

**Clinico** is a high-end, premium healthcare management ecosystem designed to bridge the gap between patients and medical professionals. Built on the **MERN Stack**, it features AI-driven consultations, real-time video visits with voice transcription, and an enterprise-grade administrative node.

---

## ✨ Project Highlights & Features

### 👤 Patient Portal
- **OTP-Based Secure Login:** Real-time email verification using Nodemailer.
- **AI Medical Engine:** Advanced symptom analysis with precise medicine and cure practice recommendations.
- **Smart Booking Flow:** Interactive doctor search from a directory of 11 specialists, including date/time selection.
- **Integrated Payment Gateway:** Premium pop-up payment interface with bank-grade encryption simulation.
- **Join Video Visit:** High-fidelity video consultations with live chat and synchronized doctor interaction.
- **Medical Records:** Detailed history of clinical reports, surgeries, and prescriptions.

### 👨‍⚕️ Doctor Dashboard
- **Professional Identity Management:** Fully editable profile (Speciality, Fees, Gender, Bio).
- **Interactive Vitals:** Real-time tracking of ratings, experience (12Y+), and patient count.
- **Clinical Interaction:** Dedicated video visit portal with live camera feed and speech-to-text dialogue logging.
- **Patient Database:** One-click access to complete patient medical history and past visit records.

### 🛡️ Admin Command Center (Priyanshu - System Architect)
- **Enterprise Overview:** Live platform metrics for Revenue, Physician count, and Global Visits.
- **System Diagnostics:** Functional AI-driven infrastructure health scanner.
- **Physician Directory:** Administrative power to Approve, Verify, or Purge medical profiles.
- **Global Ledger:** A consolidated view of all platform transactions and appointments.

---

## 🚀 Tech Stack

- **Frontend:** React.js, Tailwind CSS, Framer Motion (Animations), Lucide React (Icons).
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB (Atlas).
- **Security & APIs:** JWT, Bcrypt.js, Nodemailer (Email/OTP), Web Speech API.

---

## 🛠️ Installation & Setup

### 1. Prerequisites
- Node.js installed on your machine.
- A MongoDB Atlas account and URI.
- Gmail App Password for OTP services.

### 2. Clone the Repository
```bash
git clone https://github.com/yourusername/clinico.git
cd clinico
```

### 3. Backend Configuration
- Navigate to the `backend` folder.
- Install dependencies:
  ```bash
  npm install
  ```
- Create a `.env` file in the `backend` directory and add:
  ```env
  PORT=5000
  MONGO_URI=your_mongodb_connection_string
  EMAIL_USER=your-email@gmail.com
  EMAIL_PASS=your-16-digit-app-password
  ```
- Start the server:
  ```bash
  node server.js
  ```

### 4. Frontend Configuration
- Navigate to the `frontend` folder.
- Install dependencies:
  ```bash
  npm install
  ```
- Start the application:
  ```bash
  npm start
  ```

---

## 📸 System Architecture

```text
MedConnect/
├── backend/
│   ├── config/ (Database Connection)
│   ├── models/ (User, Doctor, Appointment Schemas)
│   ├── routes/ (Auth, OTP, Data APIs)
│   └── server.js (Main Entry Point)
├── frontend/
│   ├── src/
│   │   ├── components/ (Sidebar, InteractiveLogo, Navbar)
│   │   ├── pages/ (Dashboards, VideoVisit, SignIn, SignUp)
│   │   └── context/ (AuthContext for Global State)
│   └── tailwind.config.js (Premium Styling)
```

---

## 🛡️ Security & Privacy
- **HIPAA Inspired:** Secure data persistence and role-based access control.
- **Encrypted Visits:** End-to-end simulated encryption for video consultations.
- **Verified Professionals:** Manual admin approval flow for all onboarded doctors.

---

## 👨‍💻 Developed By
- **Priyanshu** - *System Architect & Lead Developer*
- Project submitted for the award of **Bachelor of Technology (2022-2026)**.

---
© 2026 Clinico Healthcare Systems. All Rights Reserved.
