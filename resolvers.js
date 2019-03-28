export default {
    // Lead: {
    //     leads: (parent, args, context, info) => parent.getLeads()
    // },
    Query: {
        leads: (parent, args, { db }, info) => {
            console.log(db.Leads.findAll())
            db.Leads.findAll()
        }
    }
}