db = connect("localhost:27017/celebs"); // update host/port/db as necessary

db.filmStars.insertMany([ // seed the collection with these film stars
    {name: "George Clooney", age: 55, birthPlace: "Nebraska", relationship: "Married", children: 1},
    {name: "Roger Daltrey", age: 76, birthPlace: "London", relationship: "Married", children: 8, awards: 5},
    {name: "Jennifer Aniston", age: 51, birthPlace: "LA", relationship: "Single", children: 1},
    {name: "Simon Pegg", age: 51, birthPlace: "Luton", relationship: "Single", children: 4},
    {name: "Nick Frost", age: 42, birthPlace: "Tokyo", relationship: "Married", children: 0},
    {name: "Emma Watson", age: 28, birthPlace: "London", relationship: "Single", children: 0, awards: 1}
])
