## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What is the purpose of using _sessions_?

--> Sessions keep a user's data persistent between page requests. Part of that key data stored is a user's authorization, which can be stored for a set period of time.

- [ ] What does bcrypt do to help us store passwords in a secure manner.

--> bcrypt salts and hashes our passwords!

- [ ] What does bcrypt do to slow down attackers?

--> it adds a salt to each hashed password *and* lets us set a time complexity (number of times the password is hashed) to help prevent simple, quick rainbow table-esque attacks

- [ ] What are the three parts of the JSON Web Token?

--> 1. header
    2. payload
    3. verify signature