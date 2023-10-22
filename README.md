
## Description

Holidaze, a new accommodation booking site, tasked us with building a cutting-edge frontend for their application. 
This was the entry point to our final exam at Noroff School of technology and digital media. With a focus on user experience, we needed to develop a modern booking system using the official API documentation. Our project dealt with two aspects. The customer-facing website for holiday bookings and the admin portal for venue and booking management. For customers, the goal was to create a visually appealing interface for easy booking. The admin portal was to offer venue owners hassle-free registration and management options. This project is aimed to show our skills in real-world web development providing the HolidazeApp with a functional and visually appealing frontend. As a user you can sign in, login, search, book venues and change your avatar. If you have registered as a venue manager upon signup, you can list your own homes for rent, edit/update them, delete them and check for bookings under your homes. The user profile was devided into tabs for the user to get a full overview on one page and full control over profile, bookings, added venues and bookings made on them.


## Features
- You can SignUp/login/logout with a @stud.noroff.no account
- You can register as a venue manager on signup
- You can change your avatar on the profile page
- You can search through all the listed Venues and search a venue by ID
- You can book venues with a calendar picker
- You can view available dates and book a venue with a calendar picker
- If you are registered as a venue manager you can create listings and view bookings made on them.
- You may as a venue manager update and/or delete any of your listed venues.


## Built with
- React
- Vite
- Tailwind
- Adobe XD
- GitHub
- Netlify
- html
- jsx
- css
- javascript

## Setting up
1. Clone the repo:
   <input type="text" id="input1" value="URL 1" readonly>
   https://github.com/VaNomad/holidazeApp
   <button onclick="copyToClipboard('input1')">Copy</button>
   
2. Install packages:
   <input type="text" id="input2" value="URL 2" readonly>
   npm i
   <button onclick="copyToClipboard('input2')">Copy</button>
   
3. To run locally:
   <input type="text" id="input3" value="URL 3" readonly>
   npm run dev
   <button onclick="copyToClipboard('input3')">Copy</button>

4. To build locally:
   <input type="text" id="input3" value="URL 3" readonly>
   npm run build
   <button onclick="copyToClipboard('input3')">Copy</button>

<script>
function copyToClipboard(inputId) {
  var copyText = document.getElementById(inputId);
  copyText.select();
  document.execCommand("copy");
}
</script>


## Project overview

| Resource        | URL        |
|-----------------|------------|
| Gantt Chart     | [[URL 1](https://holidaze-sjurhassel.notion.site/ProjectExam2-Holidaze-05ebb56f105a4519ac5339991799c220?pvs=4)]    |
| Design Prototype| [URL 2]    |
| Style Guide     | [URL 3]    |
| Kanban Board    | [[URL 4]](https://holidaze-sjurhassel.notion.site/ProjectExam2-Holidaze-05ebb56f105a4519ac5339991799c220?pvs=4)    |
| Repository       | [[URL 5](https://github.com/VaNomad/holidazeApp/tree/main)]    |
| Hosted Demo     | [[URL 6](https://phenomenal-longma-1eaa5b.netlify.app/)]    |


## Contact
[![Linkedin](https://img.shields.io/badge/Linkedin-Profile-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/sjurhassel/)


# Built using React + Vite + Tailwind

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
