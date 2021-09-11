# react-portfolio
![license](https://img.shields.io/badge/license-MIT-blue)

## Table of Contents 
- [Description](#description)
- [Technology](#technology)
- [Installation](#installation)
- [Usage](#usage)
- [Code](#code)
- [Contribution](#contribution)
- [Author](#author)

## Description
This application was created to showcase my portfolio using React. There are 4 sections: About Me, Portfolio, Contact, and Resume. The portfolio section displays 6 of my best projects and assignments that link to the deployed site and GitHub repo. You can use the form to contact me (though it does not work at the moment). You can take a look at my resume and skillset.

## Technology
This app was built using HTML/CSS, Javascript, and React!

## Installation
To install this generator, please download this repo onto your local computer. Then, make sure to go into `cd app` in Terminal:
- Install npm packages with `npm i`

## Usage
To use this application: 
- In Terminal, go into `cd app` and type `npm start`
- It will automatically render in your browser at `http://localhost:3000`

![Demo Walkthrough](./app/public/demo.gif)
Deployed link:

## Code
React has useState that I used to help navigate through the Navbar.
```
const [currentPage, setCurrentPage] = useState('About Me');

const renderPage = () => {
    if (currentPage === 'About Me') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
};
```
Each Navbar tab is a list.
```
<li className="nav-item">
    <a
        href="#"
        onClick={() => handlePageChange('About Me')}
        className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
    >
        About Me
    </a>
    </li>
```