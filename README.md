# 🚀 Demo Share Ed - Frontend

โปรเจกต์หน้าบ้านของ **Demo Share Ed** พัฒนาด้วย React เสริมพลังด้วย Tailwind CSS และ daisyUI เพื่อความรวดเร็วและความสวยงามของ UI

---

## 🛠 Tech Stack

* **Framework:** [React](https://react.dev/) (Vite)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **UI Library:** [daisyUI](https://daisyui.com/)
* **Routing:** [React Router Dom v6](https://reactrouter.com/)
* **Icons:** [Lucide React](https://lucide.dev/)

---

## 📂 Project Structure

การจัดโครงสร้างโปรเจกต์เน้นความระเบียบ (Organization) แบ่งตามหน้าที่ของไฟล์ดังนี้:



```text
src/
├── assets/         # ไฟล์ Static เช่น รูปภาพ, โลโก้
├── components/     # ส่วนประกอบย่อย (Navbar, Footer, Card, Button)
├── pages/          # หน้าหลักแต่ละหน้า (Home, About, Login)
├── routes/         # การจัดการเส้นทาง (AppRouter.jsx)
├── App.jsx         # จุดเริ่มต้นหลักของแอป
└── main.jsx        # ไฟล์ Render หลัก

🚀 Getting Started
ทำตามขั้นตอนด้านล่างเพื่อติดตั้งและรันโปรเจกต์:

1. ติดตั้ง Dependencies
Bash
npm install
2. รันโปรเจกต์ในโหมด Development
Bash
npm run dev
เปิดเบราว์เซอร์ไปที่: http://localhost:5173

3. Build สำหรับ Production
Bash
npm run build
🧩 ส่วนประกอบสำคัญ
📍 Routes
ระบบเปลี่ยนหน้าใช้ react-router-dom โดยตั้งค่าไว้ที่ src/routes/ เพื่อแยก Logic การนำทางออกจากหน้า UI หลัก

🎨 Tailwind & daisyUI
ใช้ระบบ Utility-first ร่วมกับ Component classes จาก daisyUI ทำให้ปรับแต่ง Theme (Light/Dark mode) ได้ง่ายผ่าน tailwind.config.js

Note: หากต้องการเปลี่ยนธีม ให้เพิ่ม data-theme="cupcake" ที่แท็ก <html> ในไฟล์ index.html

📝 รายการที่ต้องทำ (To-do)
[ ] ออกแบบหน้า Home Page

[ ] เชื่อมต่อ API กับระบบหลังบ้าน

[ ] จัดการระบบ Authentication (Login/Register)

[ ] ทำ Responsive ให้รองรับมือถือ 100%

ผู้พัฒนา: [Share-ed DEV]


---