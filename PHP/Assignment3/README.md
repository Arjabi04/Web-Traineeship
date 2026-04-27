# PHP - Assignment 3
This assignment consists of a landing page, a login system, and a registration system with secure password hashing.

---
database.php : It connects to MySQL, starts the session, and automatically creates the required database(php_assignment_3) and table(users) if they do not exist.

register.php: Allows new users to create an account. It hashes passwords using the password_hash() for security before saving them.

login.php: Verifies user credentials. If successful, it saves the username to a session and redirects to landing page.

landing-page.php : This file checks for an active session; if a user is not logged in, they are redirected back to login.php.

---

Steps to Set Up

Start server: open your XAMPP and turn on Apache and MySQL

Open database.php and verify the $host, $user, and $pass variables.

The script is configured to use 127.0.0.1 and the user root with no password by default.

Run the Project:

Start your Apache and MySQL modules.

Open browser and navigate to http://localhost/register.php to create the first user.

Once registered, use the login page to access the protected landing page.