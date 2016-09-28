# RESETTING THE MYSQL ROOT PASSWORD

1. Make sure the MySQL server is *not* running, then launch a Terminal window.

2. Start the server with unfettered access, but don’t listen on the network port for incoming requests:

        $ sudo mysqld_safe --skip-grant-tables --skip-networking

      Your Terminal will print two or more lines of content, then hang in the upper left hand area. This is good, and is not a sign of something having gone wrong.

3. Open a new Terminal window, then log in to mysql:

        $ mysql

4. Once logged in, choose to use the `mysql` database:

        mysql> use mysql

5. Enter the following command, replacing `NEW PASSWORD` with your own password:

        mysql> UPDATE user SET Password=PASSWORD('NEW PASSWORD') WHERE Host='localhost' AND User='root';

    In MySQL 5.7.x, do the following:

        mysql> UPDATE user SET authentication_string = Password=PASSWORD('NEW PASSWORD') WHERE Host='localhost' AND User='root';


6. Exit MySQL:

        mysql> exit

7. Restart the MySQL server.

8. Log in to MySQL as the root user. You’ll be prompted to enter the password you just set.

        $ mysql -u root -p
