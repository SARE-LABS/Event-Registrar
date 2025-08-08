# 🌱 Society of Agricultural Robotics Engineers — Events Registrar

The **SARE Events Registrar** is a simple yet powerful event registration platform designed for the **Society of Agricultural Robotics Engineers (SARE)** to manage participant sign-ups for webinars, workshops, and conferences.  

This project provides:
- A clean, responsive webpage showcasing event details.
- An easy-to-use registration form for collecting participant **full name**, **phone number**, and **email address**.
- Automatic storage of registrations into a **Google Spreadsheet** for easy tracking.
- Automatic **confirmation email** to each participant after registration.


## 📌 Features
- **Event Details Section**
  - Displays event topic, date, time, and description.
  - Includes information about the **facilitator/instructor**.
  - Clean, modern UI for a professional look.

- **Registration Form**
  - Collects:
    - Full Name
    - Phone Number
    - Email Address
  - Validates inputs to prevent incomplete submissions.
  - Connects to Google Apps Script for:
    - **Data storage in Google Sheets**
    - **Sending confirmation emails** with event details.

- **Responsive Design**
  - Works seamlessly on desktop, tablet, and mobile devices.


## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla JS)
- **Backend/Data Handling:** Google Apps Script (No server required)
- **Database:** Google Spreadsheet
- **Email Service:** Google `MailApp` (via Apps Script)


## 📂 Project Structure
```

sare-events-registrar/
│
├── index.html       # Main event landing and registration page
├── style.css        # Styling for the page
├── script.js        # Form validation and submission logic
├── README.md        # Project documentation
└── apps-script.gs   # Google Apps Script backend for Sheets + Emails