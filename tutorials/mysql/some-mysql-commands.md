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
use mysql;
update user set password=PASSWORD("NEW-PASSWORD-HERE") where User='USER';
flush privileges;
```

---

### Show Warnings From a Query That Generated One or More Warnings

```sql
show warnings;
```

---

### Logging in as Root [http://www.youtube.com/watch?v=9NCbFHC7xDc](http://www.youtube.com/watch?v=9NCbFHC7xDc)

```bash
mysql -u root -p
```

---

### Selecting a Database, Once Logged In

```sql
use <database_name>;
```

---

### Check the Status of MySQL, Including Things Like Current Character Set Settings, MySQL Versions, Current Database Being Used, UNIX Socket

```sql
status;
```

---

### Determine Which Database is Being Used

```sql
select database();
```

---

### Show the Tables in a Certain Database

```sql
show tables;
```

---

### Three Ways to Describe a Table in a Certain Database

```sql
show columns from <table_name>;
desc <table_name>;
describe <table_name>;
```

---

### Select Everything from a Certain Table

```sql
select * from <table_name>;
```

---

### Select a Certain Column From a Certain Table

```sql
select <column_name> from <table_name>;
```

---

### Select Two Columns from a Certain Table

```sql
select <column_1>, <column_2> from <table_name>;
```

---

### Delete a Table

```sql
DROP TABLE <table_name>;
```

---
