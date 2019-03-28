export default {
    // Lead: {
    //     leads: (parent, args, context, info) => parent.getLeads()
    // },
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
        }
    }
}