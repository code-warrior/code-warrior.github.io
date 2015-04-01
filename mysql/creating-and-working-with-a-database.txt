--------------------------------------------------------------------------------
PREAMBLE
--------------------------------------------------------------------------------
This tutorial will show you how to
1. create a MySQL database
2. create a user to access and modify the database
3. add a table to the database
4. insert data into the database’s table
5. retrieve data from the database’s table

Note: to follow this tutorial, you’ll require

1. a working MAMP stack.
2. an installation of the Bash environment files from Tuesday’s class. (If you
   haven’t installed the files, download them from the code section of our
   online syllabus.)

--------------------------------------------------------------------------------
TUTORIAL

Note: when asked to enter input into The Terminal, do not type “[prompt ~ $]” or
      “mysql>”. These are simply to indicate what your prompt might look like.
--------------------------------------------------------------------------------

1.  Launch/start The Terminal.

2.  Start the MySQL server. (You’ll be asked for the MySQL root user password,
    not the Apple Mac OS root user password.)

    [prompt ~ $] startmysql

3.  You’ll likely see two statements appear in The Terminal, followed by a
    hanging prompt. Your MySQL server has started.

4.  Open a new Terminal window.

5.  Log in to MySQL as the root user, telling MySQL to ask you for your MySQL
    root user password:

    [prompt ~ $] mysql -u root -p

6.  Create a database called “web3_database” that uses the UTF-8 character set:

    mysql> CREATE DATABASE `web3_database` DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

7.  Make sure the database was created by asking MySQL to show you all the
    databases to which the root user has access, which is all of them:

    mysql> show databases;

8.  Create a user called “einojuhani” and grant him privileges on all the tables
    in the web3_database with password “rautavaara”:

    mysql> GRANT ALL PRIVILEGES ON web3_database.* to 'einojuhani'@'localhost' IDENTIFIED BY 'rautavaara';

9. Log out of MySQL:

    mysql> exit

10. Log back in to MySQL, this time as the einojuhani user, and go directly to
    the web3_database:

    [prompt ~ $] mysql -u einojuhani -p web3_database

11. Now that a database has been created and a user attached to it, let’s create
    a table and add entries to the database.

12. Create a new table by copying and pasting the following — including the
    newline at the end of the command — into the MySQL terminal window:

    mysql> CREATE TABLE IF NOT EXISTS `student` (
       `email`        VARCHAR(45) PRIMARY KEY,
       `first_name`   VARCHAR(127),
       `last_name`    VARCHAR(127),
       `password`     VARCHAR(123),
       `registration` DATETIME
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8;

13. Populate the student table with some entries:

    mysql> INSERT INTO student
    (email, first_name, last_name, registration)
    VALUES
    ("arvo@part.ee", "Arvo", "Pärt", "1970-01-02 12:00:00"),
    ("nadia@boulanger.fr", "Nadia", "Boulanger", "1913-01-01 10:15:00"),
    ("silvestre@revueltas.mx", "Silvestre", "Revueltas", "1920-02-01 11:15:00"),
    ("leader@fugazi.com", "Ian", "MacKaye", "1980-01-01 04:30:15"),
    ("blixa@bargeld.de", "Einstürzende", "Neubauten", "1981-06-05 12:14:15");

14. From the student table, select all the information associated with first
    names matching “Arvo”:

    mysql> SELECT * FROM student WHERE first_name = "Arvo";

15. Retrieve the first name and last name of people with emails in Germany:

    mysql> SELECT first_name, last_name FROM student WHERE email LIKE "%de";

16. Retrieve the first and last names of people who registered between 1900 and
    1920:

    mysql> SELECT first_name, last_name FROM student WHERE registration > "1900" AND registration < "1920";

17. Add a single entry:

    mysql> INSERT INTO student
    (email, first_name, last_name, registration)
    VALUES
    ("ian@kingcrimson.com", "Ian", "McDonald", "1968-01-02 12:00:00");

18. Retrieve everything from the table for people with a first name of “ian”:

    mysql> SELECT * FROM student WHERE first_name = "ian";

19. Update Ian MacKaye’s password:

    mysql> UPDATE student SET password="8zq5JjwiuM2lpx65JOSDsd" WHERE email="leader@fugazi.com";

20. Update Blixa Bargeld’s password:

    mysql> UPDATE student SET password="lsuxoiwoi1838ufd8" WHERE email="blixa@bargeld.de";

21. Let’s remind ourselves of the fields inside the student table:

    mysql> DESC student;

22. Let’s change the field marked “email” to “user_email”:

    mysql> ALTER TABLE student CHANGE email user_email VARCHAR( 45 ) NOT NULL;

23. Retrieve everything from the database in ascending alphabetical order.

    mysql> SELECT * FROM student ORDER BY user_email ASC;

24. MySQL’s default is to list items in ascending alphabetical order, so leaving
    out “ASC” is the same as including it

    mysql> SELECT * FROM student ORDER BY user_email;

25. Now, let’s see everything ordered in descending alphabetical order:

    mysql> SELECT * FROM student ORDER BY user_email DESC;

26. Delete Nadia Boulanger from the table:

    DELETE FROM student WHERE user_email="nadia@boulanger.fr";

27. Add a middle name field, because we forgot to add it during our initial
    setup. We’ll add this field between first_name and last_name:

    mysql> ALTER TABLE student ADD middle_name VARCHAR( 127 ) AFTER first_name;

28. Type “exit” to leave MySQL.

29. And finally, make a backup of the web3_database, naming the backup file
    web3_database.sql:

    [prompt ~ $] mysqldump --user=root --password=<YOUR_PASSWORD> --result-file=web3_database.sql web3_database
