export default {
    Query: {
        leads: (parent, args, { db }, info) => {
            console.log(parent);
            return db.Leads.findAll(
                {
                    include: [
                        {model: db.Persons}, 
                        {model: db.Companies}
                    ]
                }
            )
            .then(leads => {
                return leads.map(
                    l => l.get({ plain: true })
                )
            })
        }
    }
}