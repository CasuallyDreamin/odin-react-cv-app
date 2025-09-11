# Odin React CV App

A CV builder app inspired by The Odin Project, built using React. This app allows users to create professional CVs dynamically with selectable templates and live previews.
https://cdcvgen.netlify.app/
---
## Deployment

This project is deployed on [Netlify](https://cdcvgen.netlify.app/) — click the link to see it live!

## Features

* **Dynamic CV Builder**: Input your general information, skills, and experience.
* **Template Selection**: Choose from multiple templates (Modern, Classic, Creative) with live preview.
* **Live Preview**: See your CV update in real-time as you fill in the form.
* **Download Option**: Export your generated CV as a PDF
* **Responsive Design**: Mobile-friendly layouts with flexible template cards and forms.
* **Clean UI/UX**: Minimalistic and intuitive interface.

### Form Sections

1. **General Information**

   * Full Name
   * Role / Title
   * Email
   * Phone

2. **Skills**

   * Add multiple skills dynamically
   * Remove skills as needed

3. **Experience**

   * Role, Company, Years, and Description
   * Add multiple experience entries dynamically
   * Remove entries easily

### Templates

* **Modern**: Dark theme with sleek fonts
* **Classic**: Light theme with serif fonts
* **Creative**: Colorful theme with playful fonts

## Installation

### Prerequisites

* Node.js v18+ recommended
* npm or yarn package manager

### Clone the repository

```bash
git clone https://github.com/CasuallyDreamin/odin-react-cv-app.git
cd odin-react-cv-app
```

### Install dependencies

```bash
npm install
# or
yarn install
```

### Run the development server

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
odin-react-cv-app/
├── public/
├── src/
│   ├── assets/        # Images, SVGs, icons
│   ├── components/    # React components (Form, CVPreview, TemplatePreview, Header, Body, Footer)
│   ├── styles/        # CSS files for components
│   ├── App.jsx        # Main application entry
│   └── index.js       # App rendering
├── package.json
└── README.md
```

## Dependencies

* **React**: Front-end library for building UI
* **React DOM**: For rendering components in the browser
* **react-scripts**: React scripts for development and build

* **html2canvas** and **jsPDF**: PDF export

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is open-source and available under the MIT License.

---

### Author

Created by **CasuallyDreamin** as part of Odin's Practice Projects.
