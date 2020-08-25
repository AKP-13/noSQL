db = connect("localhost:27017/celebs"); // update host/port/db as necessary

function getNames(){
    return db.filmStars.find({ name: { $exists: true }}, { name: 1, _id: 0 })
};

function hasKids(){
    return db.filmStars.find({ children: { $gte: 1 } }).count()
}

function getAwards(location){
    return db.filmStars.aggregate([
        {$match: { birthPlace: {$eq: location} }},
        {$group: { _id: "$birthPlace", total: {$sum: "$awards"} }}
    ])
}