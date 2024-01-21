import { getUSerByClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db";

const getJournals = async()=>{
    const user = await getUSerByClerkId();

    const journals = await prisma.journalEntry.findMany({
        where :{
            id : user.id,
        },
        orderBy : {
            createdAt : 'desc',
        },
        }
    )
    return journals;
}


const Jornal =async () => {
    const journals = await getJournals();
    console.log('journals', journals);
    
  return (
    <div>page</div>
  )
}

export default Jornal