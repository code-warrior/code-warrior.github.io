/* -------------------------------------------------------------------
   CHANGE A USER’S PASSWORD
   ---------------------------------------------------------------- */
mysql -u root;
use mysql;
update user set password=PASSWORD("NEW-PASSWORD-HERE") where User='USER';
flush privileges;

/* -------------------------------------------------------------------
   SHOW WARNINGS FROM A QUERY THAT GENERATED ONE OR MORE WARNINGS
   ---------------------------------------------------------------- */
show warnings;

/* -------------------------------------------------------------------
   LOGGING IN AS ROOT (http://www.youtube.com/watch?v=9NCbFHC7xDc)
   ---------------------------------------------------------------- */
mysql -u root -p

/* -------------------------------------------------------------------
   SELECTING A DATABASE, ONCE LOGGED IN
   ---------------------------------------------------------------- */
use <database_name>;

/* -------------------------------------------------------------------
   CHECK THE STATUS OF MYSQL, INCLUDING THINGS LIKE CURRENT CHARACTER
   SET SETTINGS, MYSQL VERSION, CURRENT DATABASE BEING USED, UNIX
   SOCKET
   ---------------------------------------------------------------- */
status;

/* -------------------------------------------------------------------
   DETERMINE WHICH DATABASE IS BEING USED
   ---------------------------------------------------------------- */
select database();

/* -------------------------------------------------------------------
   SHOW THE TABLES IN A CERTAIN DATABASE
   ---------------------------------------------------------------- */
show tables;

/* -------------------------------------------------------------------
   THREE WAYS TO DESCRIBE A TABLE IN A CERTAIN DATABASE
   ---------------------------------------------------------------- */
show columns from <table_name>;
desc <table_name>;
describe <table_name>;

/* -------------------------------------------------------------------
   SELECT EVERYTHING FROM A CERTAIN TABLE
   ---------------------------------------------------------------- */
select * from <table_name>;

/* -------------------------------------------------------------------
   SELECT A CERTAIN COLUMN FROM A CERTAIN TABLE
   ---------------------------------------------------------------- */
select <column_name> from <table_name>;

/* -------------------------------------------------------------------
   SELECT TWO COLUMNS FROM A CERTAIN TABLE
   ---------------------------------------------------------------- */
select <column_1>, <column_2> from <table_name>;

