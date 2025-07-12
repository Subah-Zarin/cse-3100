# Rick & Morty Explorer – Assignment 1

An engaging, responsive single-page React application to search, filter, and explore characters from the Rick and Morty universe using the public API. Built as part of CSE-3100: Software Development Lab.


---
## Wakatime-
[![wakatime](https://wakatime.com/badge/user/145cad6d-8c1b-4198-8921-1fa83c455eb5/project/ecc176c5-85b3-4686-8fda-32d70c6d3d4c.svg)](https://wakatime.com/badge/user/145cad6d-8c1b-4198-8921-1fa83c455eb5/project/ecc176c5-85b3-4686-8fda-32d70c6d3d4c)

## Implemented Features 

###  Character Search & Filter
- Search by name  
- Filter by status (Alive / Dead / Unknown)  
- State saved in `localStorage` to persist preferences  

###  Character Details Page
- Accessed via dynamic routing (`/character/:id`)  
- Displays full character info: name, image, status, species, origin, last known location  
- Shows number of episodes with a list of episode titles  
- Includes a **View All / View Less** toggle for episode list  

###  Pagination
- 10 characters per page (UI-level slicing)  
- Next / Previous buttons using API’s built-in pagination  
- Prevents navigating past first/last page  

###  Navigation
- Custom responsive **Navbar** with back button  
- Sticky, becomes transparent on scroll  
- Links to **Home**, **About Us**, and **Contact Us**  

###  Contact Us Page
- Stylish and responsive form layout  
- Includes form validation (name, email, message)  

###  About Us Page
- Provides project overview, purpose, and persona info   


---

##  Improvements

-  Redesigned UI for a clean, modern look
-  Fully responsive design across devices
-  New and consistent font for better readability

---

##  Known Issues

- Spamming the **"Prev"** / **"Next"** buttons may cause layout glitches
- Clicking on **"Rick & Morty Explorer"** in the navbar doesn't clear active filters (query params persist)

---

##  AI Tools & Usage

- **Tools Used:** ChatGPT (OpenAI), Google Gemini  
- **Usage:**
  - Generated initial templates for React components
  - Suggested filter logic and pagination handling
  - Provided references during bug fixes and UI enhancements

>  All code was manually reviewed and modified. Bug fixes, styling, and integration were handled independently or with help from online documentation and forums.

---

##  Tech Stack

- **React** with **Vite**
- **React Router** for navigation
- **Bootstrap** for styling
- **WakaTime** (VSCode extension) for tracking development time
- **Public API:** [Rick and Morty API](https://rickandmortyapi.com)