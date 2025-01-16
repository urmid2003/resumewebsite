# Portfolio Project

## Overview
This portfolio project was developed to showcase my skills and provide a platform where people can learn more about me. Another primary reason for creating this project was to practice various AWS services and gain hands-on experience in cloud computing.

## Features
- **Home Section**: A welcoming introduction to the portfolio.
- **About Section**: Information about myself.
- **Projects Section**: Details of my completed and ongoing projects.
- **Experience Section**: My professional experiences.
- **Contact Section**: A form to allow users to send me messages directly.

## Files and Folder Structure
- **index.html**: The main HTML file containing the structure of the website.
- **index.css**: The CSS file for styling the website.
- **index.js**: The JavaScript file for dynamic functionalities.
- **assets/**: A folder containing images used in the project.

## AWS Services Used
### Amazon DynamoDB
- Used to store the website visit count and details of the "Contact Us" form submissions.

### Amazon SES (Simple Email Service)
- Configured to send an email with the content of the "Contact Us" form when a user submits it.

## Flowchart
Below is the flowchart illustrating the functionality:

### Website Load
1. Fetch visit count from DynamoDB.
2. Display visit count on the home page.

### Contact Form Submission
1. Validate form inputs.
2. Submit data to the API endpoint.
3. Store the data in DynamoDB.
4. Trigger SES to send an email notification.
5. Show a toast notification to the user.

### Diagram
```
[Website Load] --> [Fetch Visit Count from DynamoDB] --> [Display Visit Count]
[Contact Form Submission] --> [Validate Inputs] --> [Submit Data to API]
  --> [Store in DynamoDB] --> [Send Email via SES] --> [Show Toast Notification]
```

## Conclusion
This portfolio project not only showcases my skills but also demonstrates my understanding of integrating frontend and backend services using AWS. Feel free to explore the sections and connect with me through the "Contact" form!

