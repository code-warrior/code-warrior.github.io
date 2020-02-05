### Reset root password in MySQL 5.7

```bash
sudo mysqld_safe --skip-grant-tables --skip-networking
```

Then, in another Terminal window:

```bash
mysql -u
UPDATE mysql.user SET authentication_string=PASSWORD("YOUR-NEW-PASSWORD") WHERE User='root';
ALTER USER 'root'@'localhost' IDENTIFIED BY 'YOUR-NEW-PASSWORD';
```

---

### CHANGE A USER’S PASSWORD

```bash
mysql -u root;
use mysql;
update user set password=PASSWORD("NEW-PASSWORD-HERE") where User='USER';
flush privileges;
```

---

### SHOW WARNINGS FROM A QUERY THAT GENERATED ONE OR MORE WARNINGS

```sql
show warnings;
```

---

### LOGGING IN AS ROOT [http://www.youtube.com/watch?v=9NCbFHC7xDc](http://www.youtube.com/watch?v=9NCbFHC7xDc)

```bash
mysql -u root -p
```

---

### SELECTING A DATABASE, ONCE LOGGED IN

```sql
use <database_name>;
```

---

### CHECK THE STATUS OF MYSQL, INCLUDING THINGS LIKE CURRENT CHARACTER SET SETTINGS, MYSQL VERSION, CURRENT DATABASE BEING USED, UNIX SOCKET

```sql
status;
```

---

### DETERMINE WHICH DATABASE IS BEING USED

```sql
select database();
```

---

### SHOW THE TABLES IN A CERTAIN DATABASE

```sql
show tables;
```

---

### THREE WAYS TO DESCRIBE A TABLE IN A CERTAIN DATABASE

```sql
show columns from <table_name>;
desc <table_name>;
describe <table_name>;
```

---

### SELECT EVERYTHING FROM A CERTAIN TABLE

```sql
select * from <table_name>;
```

---

### SELECT A CERTAIN COLUMN FROM A CERTAIN TABLE

```sql
select <column_name> from <table_name>;
```

---

### SELECT TWO COLUMNS FROM A CERTAIN TABLE

```sql
select <column_1>, <column_2> from <table_name>;
```

---

### DELETE A TABLE

```sql
DROP TABLE <table_name>;
```

---
