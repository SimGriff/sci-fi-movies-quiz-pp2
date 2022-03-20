# Sci-Fi Movies Quiz

![Screenshot of mockup](docs/screenshots/mockup-screenshot.png)

View the deployed site here: https://simgriff.github.io/sci-fi-movies-quiz-pp2/

## Introduction
The Sci-Fi movies Quiz game is a multiple choice quiz that tests your knowledge of science fiction movies. There are ten questions in total with four possible answers for each question. The aim of the website was to build a fun, responsive quiz using JavaScript. It is designed to be responsive and accessible on a range of devices, ensuring that it leads to an engaging user experience. 

## User Experience (UX)
* User Stories 

  * First Time Visitor Goals
    1. As a user I would like to play the quiz.
    2. As a user I want the quiz to be easy to navigate.
    3. As a user I would like to know if my answer is correct or not.    
    4. As a user I would like to view my progress and know how many questions there are.
    5. As a user I would like to view my overall score at the end of the quiz.

  * Returning Visitor Goals
    1. As a Returning Visitor, I want to try to beat my previous score.
    2. As a Returning Visitor, I would like the questions to be shuffled.
    
  * Frequent User Goals
    1. As a Frequent User, I want to add to my existing knowledge of the subject by improving my score.
    

* Design

  * Colour Scheme
    1. All main text for the quiz is white #ffffff as it stands out against the background image, a semi-transparent box contains the quiz itself using rgba(3, 18, 114, 0.3) overlapping the dark background image, ensuring clear readability. 
    2. All text within the buttons is black (#000000), which  contrast against the light neutral background color. With mouseover the border is highlighted with a 3px #ffffff white. On selection the answer buttons change to a semi-transparent green rgba(70, 240, 54, 0.6) or red rgba(255, 0, 0, 0.6) with the dark text standing out well against the background. All text passed on the contrast checker on the [Adobe Color](https://color.adobe.com/create/color-contrast-analyzer) using the corresponding hex values for the  analyser ensuring excellent readability. 

![contrast checker for neutral buttons,black text on grey button](docs/screenshots/contrast-checker-neutral-buttons.png)
![contrast checker for green buttons,black text on green button](docs/screenshots/contrast-checker-green-buttons.png)
![contrast checker for red buttons,black text on red button](docs/screenshots/contrast-checker-red-buttons.png)

* Typography
    1. The Nova Square font from [Google Fonts](https://fonts.google.com/) is the main font used throughout the Quiz with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. The futuristic appearance of the font was chosen as it perfectly matched the science fiction subject matter. The website has imported the Nova Square font into the CSS file from Google Fonts.
    
* Imagery
    1. The main background image of an alien planet is designed to attract new users to the Quiz with its other worldly image.
    2. The main background image used for the quiz is from [pixabay](https://pixabay.com/) with a Free to use license.

## Wireframes
The wireframes for the Sci-Fi Movies Quiz were produced using Balsamiq. 
* Mobile Wireframes:
  - [Start Page](docs/wireframes/start-page-mobile.png)
  - [Questions Page](docs/wireframes/questions-page-mobile.png)
  - [Score Page](docs/wireframes/score-page-mobile.png)

  
* Desktop Wireframes:
  - [Start Page](docs/wireframes/start-page-desktop.png)
  - [Questions Page](docs/wireframes/questions-page-desktop.png)
  - [Score Page](docs/wireframes/score-page-desktop.png)

## Features

The Sci-Fi Movies Quiz is made up of three main sections, the Start Page, Questions and Answers Page and finally, the Results Page.

### Start page

![Screenshot of background image of alien planet](docs/screenshots/screenshot-background-image.png) 

The start page invites the user to begin the game. The background image draws the users attention with the eye catching image displaying a sci fi theme. This immediately conveys the subject of the site.

The title of the quiz is displayed prominantly at the top center of the page in the selected Nova Square font with an added dark shadow to draw the users attention.

![Screenshot of main heading](docs/screenshots/main-heading-screenshot.png) 

The Start button is the first button presented on the page. When the user clicks on the Start Button, they are taken to the question and answers screen. The white text and the same background image, with transparent overlay box, along with the main quiz heading are used on all three pages and provide continuity throughout the quiz pages.

![Screenshot of start screen with start button](docs/screenshots/screenshot-start-page.png) 

### Questions and Answers Page 

![Screenshot of Questions and Answers Page](docs/screenshots/screenshot-questions-page1.png) 

This page provides a single question and multiple choice options for the answer with four answer buttons. 
When the user hovers over the answer buttons they are highlighted with a white border. On selection of an answer button, the user is then provided with instant visual feedback, the selected button turning green for correct or red for incorrect. On selection of an answer button, all other answer buttons are disabled. This prevents multiple answer selection for the same question.

![Screenshot of Selected Button highlighted green](docs/screenshots/screenshot-questions-page-answer.png) 

The user is then presented with the next button underneath the answers that allows them to proceed to the next question.
The users progress through the game is also displayed towards the bottom of the screen, e.g. Question 1 of 10, notifying the user what question they are on and the total number of questions in the quiz.

### Results Page
![Screenshot of Results Page](docs/screenshots/screenshot-results-page.png) 

The user's score is recorded throughout the quiz and displayed to the user on the final screen. There is also a message that is linked to the users success in the quiz, "Better Luck Next Time" for scores under 4/10, "Well done!" for scores over 4/10, and finally "Perfect Score!" for 10/10. The user is also provided with a restart button, inviting the user to try the quiz again.

## Future Features

* Additional levels of difficulty, easy, average and hard, to challenge the users knowledge.
* Additional categories including Sci-Fi TV questions, Sci Fi Literature etc.
* Sound - Audio feedback on button presses, incorrect/correct answers.

## Technologies Used

Mockup Generator (https://techsini.com/multi-mockup/index.php)

### Languages Used

* HTML5
* CSS3
* JavaScript

### Frameworks, Libraries & Programs Used

* [Balsamiq:](https://balsamiq.com/)
Balsamiq was used to create the wireframes during the design process.

* [Google Fonts:](https://fonts.google.com/)
Google fonts were used to import the ‘Oswald’ and ‘Roboto’' fonts into the style.css file which is used on all pages throughout the project.

* [Font Awesome:](https://fontawesome.com/)
Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.

* [Git:](https://git-scm.com/)
Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

* [GitHub:](https://github.com/)
Github was used to host and deploy the website.

## Testing

## Deployment

### GitHub Pages

* The project was deployed to GitHub Pages using the following steps:

1.	Log in to GitHub and locate the GitHub Repository
2.	At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3.	Scroll down the Settings page until you locate the "GitHub Pages" Section.
4.	Under "Source", click the dropdown called "None" and select "Main Branch".
5.	The page will automatically refresh.
6.	Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

* Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps:
1.	Log in to GitHub and locate the GitHub Repository
2.	At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3.	You should now have a copy of the original repository in your GitHub account.

* Making a Local Clone

1.	Log in to GitHub and locate the GitHub Repository
2.	Under the repository name, click "Clone or download".
3.	To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4.	Open Git Bash
5.	Change the current working directory to the location where you want the cloned directory to be made.
6.	Type git clone, and then paste the URL you copied in Step 3.

$ git clone https://github.com/SimGriff/dragon-karate-academy-pp1

7.	Press Enter. Your local clone will be created.

$ git clone https://github.com/SimGriff/dragon-karate-academy-pp1
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
Click [Here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.