import { Navbar } from "@/components/Navbar";
import Landing from "./(nondashboard)/landing/page";
// import { NAVBAR_HEIGHT } from "@/lib/constants";


export default function Home() {
  return (
    <div>
          <Navbar />
          <main 
            className="h-full flex flex-col w-full"
            // style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
          >
            <Landing />
          </main>
        </div>
  );
}
