# BBI Portfolio Website

Welcome to my personal portfolio website.  
This project is a central place where you can explore my work, view my projects, and access direct links to all my social media profiles.

The site is built with performance, animations, and scalability in mind while keeping the design clean and modern.

---

## Tech Stack
<p align="left">
  <img src="https://simpleskill.icons.workers.dev/svg?i=next.js,mongodb,tailwindcss,mailtrap" height="40" />
  &nbsp;
  <img src="/public/img/motion.svg" height="40" />
  &nbsp;
  <img src="/public/img/giscus.svg" height="40" />
</p>

---

## Features

Modern UI with smooth animations using Framer Motion

Server side rendering and routing with Next.js App Router

Dynamic content handling with MongoDB

Responsive design for all devices

Admin and utility pages for managing content

SEO friendly structure

Mailtrap is used for handling email testing and delivery.

---

## Project Structure

Below is an overview of the main project structure used in this repository.

```bash
ROOT
├── data/
├── posts/
├── src/
│   ├── app/
│   │   ├── api/
│   │   └── page.tsx
│   ├── components/
│   ├── lib/
│   │   ├── db/
│   │   └── models/
│   ├── styles/
│   └── utility/
├── public/
│   ├── docs/
│   ├── favicon.ico
│   └── img/
├── COPYING
├── README.md
└── vercel.json
```

---

## Getting Started

Clone the repository

```bash
git clone https://github.com/BIGBEASTISHANK/bigbeastishank.com
```

Install dependencies

```bash
yarn install
```

Run the development server

```bash
yarn dev
```

Open your browser and visit

```bash
http://localhost:3000
```

---

## Environment Variables

Create a `.env.local` file and add your required keys for MongoDB and Mailtrap.

Example

```bash
MONGODB_URI=""
ADMIN_USERNAME=""
ADMIN_PASSWORD=""
TOTP_SECRET=""
JWT_SECRET=""
MAILTRAP_TOKEN=""
```

---

## License

This project is licensed under the terms defined in the COPYING file.
