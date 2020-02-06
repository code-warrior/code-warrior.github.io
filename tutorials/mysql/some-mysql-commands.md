### Reset root password in MySQL 5.7

```bash
sudo mysqld_safe --skip-grant-tables --skip-networking
```

Then, in another Terminal window:

```bash
mysql -u
```
```sql
UPDATE mysql.user SET authentication_string=PASSWORD("YOUR-NEW-PASSWORD") WHERE User='root';
ALTER USER 'root'@'localhost' IDENTIFIED BY 'YOUR-NEW-PASSWORD';
```

---

### Change a User’s Password

```bash
mysql -u root;
```
```sql
USE mysql;
UPDATE user SET password=PASSWORD("NEW-PASSWORD-HERE") WHERE User='USER';
FLUSH PRIVILEGES;
```

---

### Show Warnings From a Query That Generated One or More Warnings

```sql
SHOW WARNINGS;
```

---

### Logging in as Root [http://www.youtube.com/watch?v=9NCbFHC7xDc](http://www.youtube.com/watch?v=9NCbFHC7xDc)

```bash
mysql -u root -p
```

---

### Selecting a Database, Once Logged In

```sql
USE <database_name>;
```

---

### Check the Status of MySQL, Including Things Like Current Character Set Settings, MySQL Versions, Current Database Being Used, UNIX Socket

```sql
STATUS;
```

---

### Determine Which Database is Being Used

```sql
SELECT database();
```

---

### Show the Tables in a Certain Database

```sql
SHOW TABLES;
```

---

### Three Ways to Describe a Table in a Certain Database

```sql
SHOW COLUMNS FROM <table_name>;
DESC <table_name>;
DESCRIBE <table_name>;
```

---

### Select Everything from a Certain Table

```sql
SELECT * FROM <table_name>;
```

---

### Select a Certain Column From a Certain Table

```sql
SELECT <column_name> FROM <table_name>;
```

---

### Select Two Columns from a Certain Table

```sql
SELECT <column_1>, <column_2> FROM <table_name>;
```

---

### Delete a Table

```sql
DROP TABLE <table_name>;
```

---
