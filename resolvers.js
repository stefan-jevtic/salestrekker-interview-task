export default {
    Query: {
        leads: (parent, args, { db }, info) => {
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
        },
        persons: (parent, args, { db }, info) => {
            return db.Leads.findAll(
                {
                    include: [
                        {model: db.Persons, required: true}, 
                    ]
                }
            )
            .then(leads => {
                return leads.map(
                    l => l.get({ plain: true })
                )
            })
        },
        companies: (parent, args, { db }, info) => {
            return db.Leads.findAll(
                {
                    include: [
                        {model: db.Companies, required: true}
                    ]
                }
            )
            .then(leads => {
                return leads.map(
                    l => l.get({ plain: true })
                )
            })
        }
    },
    
    Mutation: {
        addLead: (parent, obj, { db }, info) => {
            return db.Leads.create(obj.input, {
                include: [{ model: db.Persons }]
            })
            .catch(err => console.log(err));
        }
    }
}