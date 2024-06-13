# Al Phoronya Services Website

Welcome to the Al Phoronya Services website. This website offers various services such as translation for governmental papers, liquidation, visa travel, business setup, and more. The website supports three languages: Arabic, English, and Russian using i18n for translation.

## Table of Contents

-   [Project Structure](#project-structure)
-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Scripts](#scripts)
-   [Dependencies](#dependencies)
-   [Contributing](#contributing)
-   [License](#license)

## Project Structure

-   **/.firebaserc** - Firebase configuration
-   **/.gitignore** - Git ignore file
-   **/firebase.json** - Firebase settings
-   **/firestore.indexes.json** - Firestore indexes
-   **/firestore.rules** - Firestore security rules
-   **/package-lock.json** - Lock file for npm
-   **/package.json** - Project metadata and dependencies
-   **/README.md** - Project overview and documentation
-   **/tree.py** - Script for generating directory tree
-   **/.firebase/** - Firebase hosting cache
    -   **hosting.YnVpbGQ.cache**
-   **/public/** - Publicly accessible files
    -   **/favicon.ico** - Favicon for the website
    -   **/index.html** - Main HTML file
    -   **/logo192.png** - Logo image
    -   **/manifest.json** - Web app manifest
    -   **/robots.txt** - Instructions for web crawlers
    -   **/locales/** - Localization files
        -   **/ar/** - Arabic translations
            -   **translation.json**
            -   **New folder/** - Example nested folder
                -   **translation.json**
            -   **updated/** - Example nested folder
                -   **translation.JSON**
        -   **/en/** - English translations
            -   **translation.json**
        -   **/ru/** - Russian translations
            -   **translation.json**
-   **/src/** - Source code
    -   **app.css** - Global CSS
    -   **App.js** - Main App component
    -   **index.js** - Entry point of the application
    -   **reportWebVitals.js** - Performance reporting
    -   **responsive.js** - Responsive design utilities
    -   **/components/** - Reusable components
        -   **/about-sections/** - About page sections
            -   **/heading-section/** - Heading section component
                -   **HeadingSection.js**
            -   **/statement-section/** - Statement section component
                -   **Statement.js**
        -   **/attestation-services/** - Attestation services sections
            -   **/heading-section/** - Heading section component
                -   **HeadingSection.js**
            -   **/statement-section/** - Statement section component
                -   **Statement.js**
        -   **/contact-section/** - Contact section component
            -   **ContactSection.js**
        -   **/contact-us/** - Contact Us page sections
            -   **FirstSection.js**
            -   **SecondSection.js**
        -   **/freezone/** - Freezone services sections
            -   **/heading-section/** - Heading section component
                -   **HeadingSection.js**
            -   **/statement-section/** - Statement section component
                -   **Statement.js**
        -   **/home-sections/** - Home page sections
            -   **/fifth-section/** - Fifth section component
                -   **fifth-section.css**
                -   **FifthSection.js**
            -   **/first-section/** - First section component
                -   **first-section.css**
                -   **FirstSection.js**
            -   **/fourth-section/** - Fourth section component
                -   **fourth-section.css**
                -   **FourthSection.js**
            -   **/second-section/** - Second section component
                -   **second-section.css**
                -   **SecondSection.js**
            -   **/third-section/** - Third section component
                -   **third-section.css**
                -   **ThirdSection.js**
        -   **/liquidation-services/** - Liquidation services sections
            -   **/heading-section/** - Heading section component
                -   **HeadingSection.js**
            -   **/statement-section/** - Statement section component
                -   **Statement.js**
        -   **/llc/** - LLC services sections
            -   **/heading-section/** - Heading section component
                -   **HeadingSection.js**
            -   **/statement-section/** - Statement section component
                -   **Statement.js**
        -   **/local-sponsor/** - Local sponsor services sections
            -   **/heading-section/** - Heading section component
                -   **HeadingSection.js**
            -   **/statement-section/** - Statement section component
                -   **Statement.js**
        -   **/mainland/** - Mainland services sections
            -   **/heading-section/** - Heading section component
                -   **HeadingSection.js**
            -   **/statement-section/** - Statement section component
                -   **Statement.js**
        -   **/offshore/** - Offshore services sections
            -   **/heading-section/** - Heading section component
                -   **HeadingSection.js**
            -   **/statement-section/** - Statement section component
                -   **Statement.js**
        -   **/privacy-policy/** - Privacy policy page
            -   **Statement.js**
        -   **/pro-services/** - PRO services sections
            -   **/heading-section/** - Heading section component
                -   **HeadingSection.js**
            -   **/statement-section/** - Statement section component
                -   **Statement.js**
        -   **/react-footer/** - Footer component
            -   **footer.css**
            -   **Footer.js**
        -   **/react-navbar/** - Navbar component
            -   **react-navbar.css**
            -   **ReactNavbar.js**
        -   **/translation-services/** - Translation services sections
            -   **/heading-section/** - Heading section component
                -   **HeadingSection.js**
            -   **/statement-section/** - Statement section component
                -   **Statement.js**
        -   **/visa-services/** - Visa services sections
            -   **/heading-section/** - Heading section component
                -   **HeadingSection.js**
            -   **/statement-section/** - Statement section component
                -   **Statement.js**
    -   **/fonts/** - Font files
        -   **Sanchez-Italic.ttf**
        -   **Sanchez-Regular.ttf**
    -   **/helpers/** - Helper files
        -   **config.js** - Configuration file
        -   **i18n.js** - i18n setup
    -   **/imgs/** - Image assets
        -   **attestation.jpg**
        -   **background.jpeg**
        -   **Businessman.png**
        -   **creative.jpg**
        -   **design.jpg**
        -   **dubai.jpg**
        -   **egary.jpg**
        -   **full-logo.png**
        -   **images.jpg**
        -   **invertedBackground.jpg**
        -   **left-egary.jpg**
        -   **liquidation.jpg**
        -   **logo-bg.jpg**
        -   **logo.png**
        -   **meeting.jpg**
        -   **mid-egary.jpg**
        -   **mixedBackground.jpg**
        -   **passport.jpg**
        -   **secondSectionLeftImage.png**
        -   **shaking.jpg**
        -   **slogan.png**
        -   **tabl1.png**
        -   **tabl2.png**
        -   **teamwork.jpg**
        -   **three-businessmen.jpg**
        -   **translation-home.jpg**
        -   **translation.jpg**
    -   **/pages/** - Application pages
        -   **About.js** - About page
        -   **AttestationServices.js** - Attestation Services page
        -   **Contact.js** - Contact page
        -   **FreezoneCompany.js** - Freezone Company page
        -   **Home.js** - Home page
        -   **LiquidationServices.js** - Liquidation Services page
        -   **LLCCompany.js** - LLC Company page
        -   **LocalSponsor.js** - Local Sponsor page
        -   **MainLandCompany.js** - Mainland Company page
        -   **NotFound.js** - 404 Not Found page
        -   **OffshoreCompany.js** - Offshore Company page
        -   **PrivacyPolicy.js** - Privacy Policy page
        -   **ProServices.js** - PRO Services page
        -   **TranslationServices.js** - Translation Services page
        -   **VisaServices.js** - Visa Services page

## Features

-   Multi-language support (Arabic, English, Russian) using i18n
-   Responsive design
-   Various business services including translation, liquidation, visa, and business setup

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Mohamed3allam/al-phoronya.git
    cd al-phoronya
    ```
2. Install dependencies:
    ```bash
        npm install
    ```

## Usage

    Start the development server:

    ```bash

    npm start

    Open your browser and navigate to http://localhost:3000.

```
## Scripts

    npm start: Starts the development server
    npm run build: Builds the app for production
    npm test: Runs the test suite
    npm run eject: Ejects the app from Create React App configuration

## Dependencies

    React
    React Router
    i18next
    Firebase
    ...and other dependencies listed in package.json

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
License

This project is licensed under the MIT License. See the LICENSE file for details.

For more information, visit Al Phoronya.


Feel free to modify the details as per your project's specifics.
```
