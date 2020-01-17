print("Hi,Welcome to Lakes")
import pyodbc 
conn = pyodbc.connect('Driver={SQL Server};'
                      'Server=.;'
                      'Database=LakesDB;'
                      'Trusted_Connection=yes;')

cursor = conn.cursor()
cursor.execute('SELECT * FROM tbl_lakes')

for row in cursor:
    print(row)
