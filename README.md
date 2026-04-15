# Alchelyst – Portfolio Management Dashboard

A modern financial portfolio management dashboard built with **React 19, Vite, and Tailwind CSS**.  
This single-page application (SPA) enables analysts to monitor NAV workflows, operational tasks, capital events, reports, and transactions through an intuitive and responsive UI powered by a centralized JSON data source.

---

## 🚀 Tech Stack

- **React 19** – Component-based UI development  
- **Vite** – Fast build tool & dev server  
- **Tailwind CSS** – Utility-first styling  
- **React Router DOM** – Client-side routing  
- **XLSX (SheetJS)** – Excel file generation  
- **file-saver** – File download handling  
- **react-toastify** – Toast notifications  

---

## ✨ Features

- 📊 **Comprehensive Dashboard**  
  View NAV workflows, operational tasks, capital events, reports, and payments in a structured layout  

- 📄 **Excel Export**  
  One-click export of NAV workflows into `.xlsx` format  

- 🧩 **Reusable Component Architecture**  
  Modular components like Panel, Modal, Status badges, and Progress bars  

- 🔁 **Client-side Pagination**  
  Efficient data handling using slice-based pagination across multiple panels  

- 📌 **Workflow Detail Modal**  
  Deep dive into workflows with KPI metrics, step tracking, and investor-level data  

- 🧭 **Multi-page Navigation**  
  Dedicated routes for workflows, reports, payments, and profile  

- 📱 **Responsive Design**  
  Optimized for desktop and mobile with adaptive layouts  

---

## 📁 Project Structure

src/
├── pages/ # Dashboard and standalone pages
├── components/ # Navbar, panels, reusable UI components
├── data/ # dummy.json (centralized data source)
├── utils/ # Utility functions (Excel export)


---

## 📤 Excel Export (Key Highlight)

The application provides a seamless export feature for NAV workflows:

- Transforms structured JSON data into a worksheet using (xlsx)**SheetJS**
- Creates a downloadable `.xlsx` file dynamically
- Uses **file-saver** to trigger browser download
- Displays real-time success/error feedback via toastify notifications

---

## ⚙️ Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview