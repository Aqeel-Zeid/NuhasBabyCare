const Mutation = 
{
    testQuery : (parents, args , {Prisma} , info ) =>   {
                            console.log()
                            return `Hi How Are You ${args.name}`
                        }

}


export {Mutation as default}
