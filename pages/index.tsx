import CardGallery from "./CardGallery";
import HamburgerButton from "./HamburgerButton";
import Head from "next/head";
import Sidebar from "./Sidebar";
import Toggle from "./Toggle";
import { useState } from "react";

export default function Home() {
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const [currentMainView, setCurrentMainView] = useState("card gallery");

  return (
    <>
      <Head>
        <title>Maca Screener</title>
      </Head>
      <main>
        {/* Container that provides layout for sidebar and main content elements and takes the full dimensions of the page */}
        <div className="flex min-h-screen h-full overflow-auto bg-gray-100">
          {/* Sidebar */}
          {sidebarHidden ? (
            <Sidebar setCurrentMainView={setCurrentMainView} />
          ) : null}
          {/* Main content */}
          <div className="flex flex-col flex-1">
            {/* Main content header */}
            <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
              <div className="flex items-center">
                {/* Hamburger icon button to collapse and open sidepanel. */}
                <HamburgerButton
                  sidebarHidden={sidebarHidden}
                  setSidebarHidden={setSidebarHidden}
                />
              </div>
            </div>
            {/* Changes main component view. Typically this would be replaced with Next Router. Swapping component logic is for demo purposes. */}
            {currentMainView === "card gallery" ? <CardGallery /> : <Toggle />}
          </div>
        </div>
      </main>
    </>
  );
}
