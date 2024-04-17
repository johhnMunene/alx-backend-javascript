<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Table</title>
</head>
<body>

<table id="studentTable" border="1">
    <thead>
        <tr>
            <th>First Name</th>
            <th>Location</th>
        </tr>
    </thead>
    <tbody>
        <!-- Table rows will be inserted here -->
    </tbody>
</table>

<script>
    // Define the Student interface
    function Student(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    // Create two student objects
    var student1 = new Student("John", "Doe", 20, "New York");
    var student2 = new Student("Jane", "Smith", 22, "Los Angeles");

    // Create an array named studentsList containing the two student objects
    var studentsList = [student1, student2];

    // Get the table body element
    var tbody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];

    // Loop through the studentsList array and append a new row to the table for each student
    studentsList.forEach(function(student) {
        var row = tbody.insertRow();
        
        // Insert new cells into the row and set their innerHTML
        var cell1 = row.insertCell(0);
        cell1.innerHTML = student.firstName;
        
        var cell2 = row.insertCell(1);
        cell2.innerHTML = student.location;
    });
</script>

</body>
</html>
