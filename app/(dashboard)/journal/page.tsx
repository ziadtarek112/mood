import EntryCard from "@/components/EntryCard";
import NewEntryCard from "@/components/NewEntryCard";
import { getUSerByClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db";

const getJournals = async () => {
    const user = await getUSerByClerkId();

    const journals = await prisma.journalEntry.findMany({
        where: {
            id: user.id,
        },
        orderBy: {
            createdAt: 'desc',
        },
    }
    )
    return journals;
}


const Jornal = async () => {
    const journals = await getJournals();
    console.log('journals', journals);

    return (
        <div className="p-10 bg-slate-600" >
            <h2 className="text-3xl mb-8">Journals</h2>
            <div className="grid grid-cols-3 gap-4 ">
                <NewEntryCard />
                {journals.map((entry) => (
                    <EntryCard key={entry.id} entry={entry} />
                ))}
            </div>
        </div>
    )
}

export default Jornal