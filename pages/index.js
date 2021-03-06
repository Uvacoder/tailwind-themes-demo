import Head from "next/head";
import React from "react";
import Background from "../components/SVGBackground";
import Navbar from "../components/Navbar";
import ColorButton from "../components/ColorButton";

const Home = () => {
  const demoRef = React.useRef();
  return (
    <div>
      <Head>
        <title>Tailwind Themes</title>
        <meta property="og:title" content="Tailwind Themes" />
        <meta
          property="og:description"
          content="A Tailwind CSS plugin that adds variants for multiple color themes."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta
          name="description"
          content="A Tailwind CSS plugin that adds variants for multiple color themes."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Background />
      <Navbar />
      <div className={"relative"}>
        <div
          className={
            "w-full px-16 py-24 flex flex-col items-center gap-8 bg-white bg-opacity-80"
          }
        >
          <h1
            className={
              "wavy leading-tight self-start md:self-center font-extrabold text-7xl red:text-red-900 orange:text-orange-900 yellow:text-yellow-900 green:text-green-900 blue:text-blue-900 indigo:text-indigo-900 purple:text-purple-900"
            }
          >
            Tailwind Themes
          </h1>
          <p className={"text-gray-700 text-xl self-start md:self-center"}>
            A Tailwind CSS plugin that adds variants for multiple themes, making
            it easy to create multiple color themes for your website.
          </p>
          <button
            className={
              "font-bold mt-8 bg-gray-200 hover:bg-gray-400 px-8 py-4 text-xl rounded-md shadow-sm hover:shadow-lg " +
              "red:bg-red-200 orange:bg-orange-200 yellow:bg-yellow-200 green:bg-green-200 blue:bg-blue-200 indigo:bg-indigo-200 purple:bg-purple-200 " +
              "red:hover:bg-red-400 orange:hover:bg-orange-400 yellow:hover:bg-yellow-500 green:hover:bg-green-400 blue:hover:bg-blue-400 indigo:hover:bg-indigo-400 purple:hover:bg-purple-400 " +
              //"red:border-red-800 orange:border-orange-700 yellow:border-yellow-600 green:border-green-800 blue:border-blue-800 indigo:border-indigo-800 purple:border-purple-800 " +
              "hover-white-text red:text-red-800 orange:text-orange-900 yellow:text-yellow-800 green:text-green-800 blue:text-blue-800 indigo:text-indigo-800 purple:text-purple-800"
            }
            onClick={() => {
              demoRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View demo
            <style jsx>{`
              .hover-white-text:hover {
                color: white;
              }
            `}</style>
          </button>
        </div>
        <div
          className={
            "transparent py-24 bg-gray-200 red:bg-red-100 orange:bg-orange-100 yellow:bg-yellow-100 green:bg-green-100 blue:bg-blue-100 indigo:bg-indigo-100 purple:bg-purple-100"
          }
          ref={demoRef}
        >
          <div
            className={
              "self-center flex w-max mx-auto bg-white rounded-lg shadow-xl"
            }
          >
            <div className={"grid w-full h-full p-8 sm:p-10 grid-cols-3 gap-8"}>
              <ColorButton
                className={"from-red-300 to-red-500 focus:ring-red-400"}
                selectedClasses={"ring-red-400"}
                themeName={"red"}
              >
                Red
              </ColorButton>
              <ColorButton
                className={
                  "from-orange-300 to-orange-500 focus:ring-orange-400"
                }
                selectedClasses={"ring-orange-400"}
                themeName={"orange"}
              >
                Orange
              </ColorButton>
              <ColorButton
                className={
                  "from-yellow-300 to-yellow-500 focus:ring-yellow-400"
                }
                selectedClasses={"ring-yellow-400"}
                themeName={"yellow"}
              >
                Yellow
              </ColorButton>
              <ColorButton
                className={"from-green-300 to-green-500 focus:ring-green-400"}
                selectedClasses={"ring-green-400"}
                themeName={"green"}
              >
                Green
              </ColorButton>
              <ColorButton
                className={"from-blue-300 to-blue-500 focus:ring-blue-400"}
                selectedClasses={"ring-blue-400"}
                themeName={"blue"}
              >
                Blue
              </ColorButton>
              <ColorButton
                className={
                  "from-indigo-300 to-indigo-500 focus:ring-indigo-400"
                }
                selectedClasses={"ring-indigo-400"}
                themeName={"indigo"}
              >
                Indigo
              </ColorButton>
              <ColorButton
                className={
                  "from-purple-300 to-purple-500 focus:ring-purple-400"
                }
                selectedClasses={"ring-purple-400"}
                themeName={"purple"}
              >
                Purple
              </ColorButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
