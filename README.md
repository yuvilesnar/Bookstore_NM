    # Bookstore E-Commerce Platform with MERN Stack

## Project Overview
Team ID: NM2024TMID17582 
###Team Members:###<br/>
Yuvaraj T- Project Lead & Full Stack Developer (NMID:0C8D9B5D25C79949BD4479F404622D06)<br/>
Yuthikshaa M- Full Stack Developer 
(NM Id:B5FED8ABE50BCBBBA3443AC9F279BC8B)<br/>
Jayaram A- Full Stack Developer  
(NM ID: 6A0CE125F42887DB29744CF9951E3948)<br/>
Priyadarshini V- Full Stack Developer (NM ID: 25C2F60BF322A0C8F5E40122BA5C7616) 
<br/>

### Purpose  
To create a platform for managing books, enhancing customer accessibility, and streamlining operations for store owners. Features include:  
- Book management  
- User registration and profiles  
- Shopping cart and secure checkout  
- Recommendations and reviews  
- Admin dashboard with inventory management  

---

## Features

- Book Management: Add, edit, and categorize books.  
- Search & Browse: Search by title/author and filter results.  
- User Management: Profiles, wish lists, and order history.  
- Shopping Cart: Add books and proceed with secure payments.  
- Inventory Management: Stock tracking with admin notifications.  
- Admin Dashboard: Manage users, inventory, and view analytics.  
- Multi-format Support: Physical and e-books.  
- Responsive Design: Compatibility across all devices.  

---

## Architecture  

### Frontend
- Technologies: React.js, HTML, CSS, JavaScript  
- Styling: Tailwind CSS and Bootstrap  

### Backend
- Frameworks: Node.js with Express  
- Authentication: JWT for secure token-based authentication  
- API Design: RESTful services for client-server communication  

### Database
- Database: MongoDB with Mongoose for ODM  

---

## Setup Instructions

### Prerequisites
1. Install [Node.js](https://nodejs.org/en/download/) and npm.  
2. Install [MongoDB](https://www.mongodb.com/try/download/community).  
3. Install Git for version control.  

### Installation
1. Clone the repository:  
   ```bash
   git clone <repository-link>
2. Navigate to the project directory:
   ```bash
   cd Book-Store-NM
3. Install dependencies:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
4. Start Servers:
   ```bash
   npm start
   npm start
# API Documentation

## Authentication

### POST /auth/login
- Request:
  ```json
  {
    "username": "user123",
    "password": "securepassword"
  }
# API Documentation

## Books

### GET /books
- Fetch all books with optional filters like genre and author.

### POST /books (Admin only)
- Add new books to inventory.

---

## Orders

### POST /orders
- Place an order with user and item details.

### GET /orders/{orderId}
- Retrieve specific order details.

---

# Testing

## Types of Testing
1. Functional Testing: Verify features like login, search, and checkout.
2. Unit Testing: Validate individual components (e.g., calculating totals).
3. Integration Testing: Ensure frontend-backend communication.
4. Security Testing: Protect sensitive data with tools like OWASP ZAP.

---

## Test Tools
- Functional and Integration Testing: Selenium, JMeter.
- Security Testing: OWASP ZAP for vulnerability assessments.

---

# Known Issues
1. Search Functionality: Multi-word queries may yield inaccurate results.
2. Page Loading Speed: Slower for pages with large inventories.
3. Payment Gateway: Occasional delays during peak hours.
4. Wishlist Sync: Changes across devices may not reflect immediately.
5. Browser Compatibility: Minor alignment issues in older browsers.

---

# Future Enhancements
1. AI-powered Recommendations: Advanced search and personalized suggestions.
2. Multi-language Support: Cater to a global audience.
3. Dedicated Mobile App: Support offline access and enhanced usability.
4. Subscription Models: Unlimited e-book access with tiered pricing.
5. Social Media Integration: Share reviews and wishlists directly to platforms.
6. Loyalty Programs: Points-based rewards to improve customer retention.
