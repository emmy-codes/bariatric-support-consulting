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

I wanted to use images containing fresh, simple and healthy ingredients, whilst avoiding imagery with too much food on it since the site is for people who will not be able to eat much at each meal. This is to help the users to relate to the content and feel more confident to buy the services.

![header idea background](https://github.com/emmy-codes/bariatric-support-consulting/assets/70635859/53e0d875-d2b3-4ea0-8b43-de7c8fc61305)
![rsz_1rsz_1rsz_pexels-the-lazy-artist-gallery-1332313](https://github.com/emmy-codes/bariatric-support-consulting/assets/70635859/b9d01bd3-77c9-43cc-a829-e5a6ec89a0e1)

Some images are designed to work as backgrounds on the page so they can have text or purchase sections in the foreground:

![rsz_1rsz_1rsz_1pexels-pixelme-stock-photography-2818656](https://github.com/emmy-codes/bariatric-support-consulting/assets/70635859/ec7e4356-5d71-46d1-a89d-e424002553b0)
![rsz_1rsz_1pexels-lukas-616401](https://github.com/emmy-codes/bariatric-support-consulting/assets/70635859/92c84ff8-b5eb-46bf-bc99-36ec4559a95c)
![rsz_2rsz_11rsz_pexels-ella-olsson-1640773](https://github.com/emmy-codes/bariatric-support-consulting/assets/70635859/c598135d-6586-465d-9ac0-ee19756f86a9)



### Wireframes

* The desktop layout:
* ![desktop_wireframe](https://github.com/emmy-codes/bariatric-support-consulting/assets/70635859/9979e16d-631a-4b95-8000-9694f12ccb43)
* The tablet layout:
* ![ipad_wireframe](https://github.com/emmy-codes/bariatric-support-consulting/assets/70635859/5c8bfd00-765a-4356-85ed-71677988798e)
* The phone layout:
* ![phone_wireframe](https://github.com/emmy-codes/bariatric-support-consulting/assets/70635859/15057241-567d-42e8-8547-862575bc6a9b)


## Features

There will be several pages to the site:

1. Homepage, which will consist of a few sections describing the consultant and her journey, along with before and after photos of her progress. Then there will be a section detailing the service/s she will be offering, as well as their cost. Finally there will be CTAs for any service packages we create.
2. Next will be an FAQ section where the questions will come in dropdown format: you will see each question, and then clicking on it will open up the part that shows the answer.
* ![ytfaq](https://github.com/emmy-codes/bariatric-support-consulting/assets/70635859/e667f182-8873-4231-a3cb-52d88d082b15)
* ![ytfaqclicked](https://github.com/emmy-codes/bariatric-support-consulting/assets/70635859/66178b5b-28a3-42a6-b842-04dcfc314959)
3. A contact page with a form that will connect to an email account of the consultant's, as well as the direct email address, and any social media links.
4. Customer login page - if a customer has ordered a package/service they will receive an email with login details and thus have access to content on the website that is unique to them. Here the customer will be able to log in with their personal info or reset their password if needed.
5. Customer profile page - authenticated: once the user has validated themselves they will be able to see their customer page with basic details about their account that are relevant to their health program (such as their unique user ID, name, email, age & gender((which matter when it comes to planning nutrition as we metabolize things differently), dietary requirements, as well as any meal plans that have been purchased. Below is an estimation of how the data that will be stored in the backend, and which fields will be shown to the user.
* ![user_table](https://github.com/emmy-codes/bariatric-support-consulting/assets/70635859/afb1a73f-91bb-4d41-b292-baece095e59c)
7. Inside each meal plan will be title of the plan, a description, the user ID which connects the plan to the unique user (user_id on the MealPlan table is the same as the id on the User Table), as well as duration of the plan in days.
* ![meal_plan_table](https://github.com/emmy-codes/bariatric-support-consulting/assets/70635859/94c08579-181b-45df-ad48-6d3c758c9ce6)
8. Finally there will be a recipe table containing the name of the recipe, day the recipe is for (ie meal plan day 3), meal type (breakfast, lunch, dinner, snack), an image of the food (path, I do not plan on implementing image upload to the database in this or near future iterations), and the faithful user_id to connect the recipe table to the meal plan.
* ![recipe table](https://github.com/emmy-codes/bariatric-support-consulting/assets/70635859/47cf35d5-df87-4288-9c41-d46440afdca4)


### Future Implementations

Thinking ahead, once a user has paid and they are redirected to the calendly booking system, if the user doesn't immediately book the appointment and navigates away from the page, they'll loose the booking page. First iteration will include an FAQ which will tell the user to contact customer service for assistance. In the future I want to add a booking link to the user's personal page. Perhaps Calendly can send an email so the user can book at their convenience, I haven't checked yet.

### Accessibility



## Technologies Used

### Languages Used



### Frameworks, Libraries & Programs Used

#### Programs

[Balsamiq](https://balsamiq.com/) - For creating my wireframes.

[Mycolor](https://mycolor.space/) - To generate a colour palette.

[Am I Responsive](https://ui.dev/amiresponsive) - To retrieve good screenshots of responsiveness across devices.

[Github](https://github.com/) - For online storage of code and deployment.

[VS Code](https://code.visualstudio.com/) - For writing my code.

[Google Fonts](https://fonts.google.com/) - For finding a replacement font that everyone would have access to.

[Convertico.co](https://convertio.co/) - For converting images to webp.

[Picresize](https://picresize.com/) - Used to resize images.

[Pexels](https://www.pexels.com/) - Collecting free stock images for website.

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
