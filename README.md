# Bariatric Support Consulting

Consultancy site aimed at supporting customers through their bariatric surgery journey

---

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)
    * [New Users](#new-users)
    * [Experienced Users](#experienced-users)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)
  * [Bug Fixes](#bug-fixes)
  * [Retro](#retro)

* [Credits](#credits)
  * [Code](#code)
  * [Content](#content)
  * [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

### User Stories

#### New Users:

The site is aimed towards new users who wish to learn more about the services offered for support before, during, and after their bariatric surgery. It is is going to be a single page application with a minimalist design to allow ease of navigation. 

The user should be able to:

* Navigate through the content of the site either by scrolling down the page, or clicking on the links on the navigation bar.
* Read about the procedure itsself, as well as the services offered by the consultancy firm.
* Choose a service and pay for it, which will lead to a PSP (probably Stripe or Lemon Squeezy).
* Upon completion of payment, the user will be directed to the calendar booking system (probably Calendly) ** (this may be reversed depending on the Stripe/Calendly functionality that needs researching, if it's simpler to have a user book an appointment first and then pay)

#### Experienced Users:

Once a user has purchased any plan from the site, they will have an account created with the email address used to make the payment.

The user should be able to:

* Log in to their account using their email address and password
* Request a password change via "Forgot your password?" on the login screen

On their customer profile:

* View the plan/s they have purchased
* View and update their personal information (phone number, contact email, password). (Name, account name aka login email will remain the same)
* Click on a plan to see further information such as meal plans
* Download content such as meal plans, recipes, shopping lists (may come under Future Implementations)

## Design

### Colour Scheme

The consultant wanted something simple that wouldn't distract from the content, and would bring a sense of calm and enhance the feeling that this was a health-related webpage. I am aiming for some green, blue and beige shades, starting with the palette below: 

![bariatric-consulting colour palette](https://github.com/emmy-codes/bariatric-support-consulting/assets/70635859/3fc88c9a-455b-40d9-bb5c-5d3567fbf35e)

### Typography

I found [this article](https://www.thedenizenco.com/journal/8-free-fonts-for-the-wellness-brand) when researching for fonts for health related websites. The font felt well-spaced for easier reading, and I could imagine the company text feeling relaxed and welcoming. The italic version looked great for quotes from future customers.

![regular400](https://github.com/emmy-codes/bariatric-support-consulting/assets/70635859/967b016f-e1b4-478f-81ed-4fc93685b284)
![bold700](https://github.com/emmy-codes/bariatric-support-consulting/assets/70635859/ce8fa2db-f317-4d69-9381-8c386bb63c1e)
![light300italic](https://github.com/emmy-codes/bariatric-support-consulting/assets/70635859/46a756e4-f017-48cb-8448-2dd723bc4c56)


### Imagery



### Wireframes



## Features



### Future Implementations

Thinking ahead, once a user has paid and they are redirected to the calendly booking system, if the user doesn't immediately book the appointment and navigates away from the page, they'll loose the booking page. First iteration will include an FAQ which will tell the user to contact customer service for assistance. In the future I want to add a booking link to the user's personal page. Perhaps Calendly can send an email so the user can book at their convenience, I haven't checked yet.

### Accessibility



## Technologies Used

### Languages Used



### Frameworks, Libraries & Programs Used

#### Programs

[Balsamiq](https://balsamiq.com/) - For creating my wireframes.

[Am I Responsive](https://ui.dev/amiresponsive) - To retrieve good screenshots of responsiveness across devices.

[Github](https://github.com/) - For online storage of code and deployment.

[VS Code](https://code.visualstudio.com/) - For writing my code.

[Coolors](https://coolors.co/) - Used to collect the hexcode colour palette.

[Picresize](https://picresize.com/) - Used to resize images.

## Deployment & Local Development


### Deployment

To deploy my page:

I first signed into Github and chose my XXX repository. Then followed the clicks marked by numbers on the screenshot below:

1. Go to Settings
2. Click on Pages
3. Check that Deploy from a branch is selected (should be automatic)
4. Choose the branch to deploy from (I used main)
5. Save


### Local Development

#### How to Fork

How to fork my repository:

On Github, click my XXX repo.

1. Beside the title there is a Fork button, click straight on there. If you click the dropdown, choose "Create new fork".

 
2. Select the owner if you have multiple organizations connected to your account.
3. Change the name (optional)
4. Change the description (optional)
5. Create the fork

#### How to Clone

To clone the repository, there are a few quick steps.

1. On the main repo page, click the green "code" button
2. Select SSH which will give you the key to clone with.
3. Click on the copy icon to the right of the link.
4. Open your choice of IDE.
5. Open the terminal
6. Type the following: git clone (paste SSH key here)
7. Now you're ready to play around!

## Testing



### Bug fixes 



## Retro



## Credits

[Grammarly](https://app.grammarly.com/) - Used to adjust some grammatical inaccuracies.

### Code



### Content


  
###  Acknowledgments

A big thank you to Kera for the great ReadMe/Testing documentation that I used to template my documentation with! [Kera's project documentation](https://github.com/kera-cudmore/TheQuizArms#Features)
