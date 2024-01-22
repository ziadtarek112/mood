import { UserButton } from "@clerk/nextjs"

const DashboardLayout = ({ children }) => {
    return (
        <div className="w-screen h-screen flex">

            <div className="h-full w-[200px] p-6 border-r border-gray-400">
                <h1>Mood</h1>
            </div>

            <div className="w-full p-6">
                <div className="flex justify-between w-full border-b border-gray-400">
                    <header className="h-[60px]">hello</header>
                    <UserButton />
                </div>
                <div>{children}</div>
            </div>


        </div>
    )
}

export default DashboardLayout