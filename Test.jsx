import React, { useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router";
import {
  IoMenu,
  IoNotificationsOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import DashboardSvg from "@/components/SVG/DashboardSvg";
import VideoSvg from "@/components/SVG/VideoSvg";
import TranscriptSvg from "@/components/SVG/TranscriptSvg";
import FileTranslatorSvg from "@/components/SVG/FileTranslatorSvg";
import DashboardBlueSvg from "@/components/SVG/DashboardBlueSvg";
import VideoCallBlueSvg from "@/components/SVG/VideoCallBlueSvg";
import TranscriptBlueSvg from "@/components/SVG/TranscriptBlueSvg";
import FileBlueSvg from "@/components/SVG/FileBlueSvg";
import userImg from "../assets/Images/userProfiledemo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import SettingModal from "@/pages/DashboardPages/Setting/SettingModal";
import { FaArrowLeft } from "react-icons/fa6";
import ProfileSvg from "@/components/SVG/ProfileSvg";
import CardSvg from "@/components/SVG/CardSvg";
import SignOutSvg from "@/components/SVG/SignOutSvg";
import LogoutConfirmModal from "@/components/common/LogoutConfirmModal/LogoutConfirmModal";
import useLogout from "@/hook/auth/useLogout";
import Loader from "@/components/common/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "@/hook/useAxiosSecure";
import { isPending } from "@reduxjs/toolkit";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [settingModal, setSettingModal] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const { mutate: logout, isPending } = useLogout();
  const axiosSecure = useAxiosSecure();

  const { data: user, isLoading } = useQuery({
    queryKey: ["user-profile"],
    queryFn: async () => {
      const res = await axiosSecure.get("/get-profile/");
      return res.data;
    },
  });

  const userName =
    user?.data?.first_name && user?.data?.last_name
      ? `${user?.data?.first_name} ${user?.data?.last_name}`
      : "User Name";

  //  const avatarUrl = user?.data?.avatar_url

  //  const avatar = (`http://172.16.200.94:8000/api${avatarUrl}`)

  //  console.log(avatar)

  if (isLoading) return <Loader />;

  const handleLogout = () => {
    setLogoutOpen(false);
    logout();
    navigate("/auth/login");
  };

  // dynamic page title
  const getPageTitle = () => {
    if (location.pathname === "/dashboard") return "Overview";
    if (location.pathname.includes("video-call")) return "Call Room";
    if (location.pathname.includes("create-room")) return "Create Room";
    if (location.pathname.includes("join-room")) return "Join Room";
    if (location.pathname.includes("video-transcript")) return "Transcript";
    if (location.pathname.includes("file-translator")) return "File Translator";
    if (location.pathname.includes("profile")) return "Profile";
    if (location.pathname.includes("billing")) return "Billing";
    return "Overview";
  };

  // sidebar links
  const SidebarContent = ({ closeSheet }) => (
    <div className="flex flex-col justify-between text-center items-center h-full py-5">
      <ul className="space-y-2 font-medium">
        <Link
          to="/"
          className="flex items-center my-4 lg:my-8 "
          onClick={closeSheet}
        >
          <h3 className="text-center mx-auto  text-2xl font-semibold">
            GetLingo
          </h3>
        </Link>

        <label className="flex px-4 font-normal text-gray-500 mt-14 mb-2 items-start">
          GENERAL
        </label>

        <li>
          <NavLink
            to="/dashboard/overview"
            end
            className={({ isActive }) =>
              `flex  text-gray-500 gap-2 py-4 px-6 rounded-xl mx-4 ${
                isActive
                  ? "bg-secondary/30 text-primary"
                  : "hover:bg-secondary/30 hover:text-black hover:dark:text-gray-100 duration-300"
              }`
            }
            onClick={closeSheet}
          >
            {({ isActive }) => (
              <>
                {isActive ? <DashboardBlueSvg /> : <DashboardSvg />} Dashboard
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/video-call"
            end
            className={({ isActive }) =>
              `flex items-center text-gray-500 gap-2 py-4 px-6 rounded-xl mx-4 ${
                isActive
                  ? "bg-secondary/30 text-primary"
                  : "hover:bg-secondary/30 hover:text-black hover:dark:text-gray-100 duration-300"
              }`
            }
            onClick={closeSheet}
          >
            {({ isActive }) => (
              <>{isActive ? <VideoCallBlueSvg /> : <VideoSvg />} Video Call</>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/video-transcript"
            end
            className={({ isActive }) =>
              `flex items-center text-gray-500 gap-2 py-4 px-6 rounded-xl mx-4 ${
                isActive
                  ? "bg-secondary/30 text-primary"
                  : "hover:bg-secondary/30 hover:text-black hover:dark:text-gray-100 duration-300"
              }`
            }
            onClick={closeSheet}
          >
            {({ isActive }) => (
              <>
                {isActive ? <TranscriptBlueSvg /> : <TranscriptSvg />}{" "}
                Transcript
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/file-translator"
            end
            className={({ isActive }) =>
              `flex items-center text-gray-500 gap-2 py-4 px-6 rounded-xl mx-4 ${
                isActive
                  ? "bg-secondary/30 text-primary"
                  : "hover:bg-secondary/30 hover:text-black hover:dark:text-gray-100 duration-300"
              }`
            }
            onClick={closeSheet}
          >
            {({ isActive }) => (
              <>
                {isActive ? <FileBlueSvg /> : <FileTranslatorSvg />} File
                Translator
              </>
            )}
          </NavLink>
        </li>
      </ul>

      <div>
        <label className="flex font-normal text-gray-500  mb-2 items-start">
          OTHER
        </label>
        <div
          onClick={() => setSettingModal(true)}
          className="mb-6 hover:dark:text-gray-200 cursor-pointer dark:text-gray-200 text-gray-500  hover:text-black justify-between mx-3  hover:bg-secondary/30 rounded-xl duration-300 ease-in-out py-4 px-10 flex gap-2"
        >
          <IoSettingsOutline size={24} /> Setting
        </div>
        <SettingModal
          open={settingModal}
          onClose={() => setSettingModal(false)}
        />
      </div>
    </div>
  );

  // console.log(isPending);

  if (isPending) {
    console.log("Inside the If condition");
    return <Loader />;
  }

  return (
    <>
      {
        <div className="w-full flex bg-gray-100 dark:bg-black h-screen">
          {/* desktop sidebar */}
          <div className="bg-white dark:bg-gray-900 w-[260px] rounded-2xl m-4 hidden xl:block h-[95%]">
            <SidebarContent closeSheet={() => {}} />
          </div>

          <main className="flex-1 lg:w-[calc(100%-300px)] flex flex-col overflow-y-hidden">
            {/* top bar */}
            <header className="sticky top-0 z-30 bg-white dark:bg-gray-900 rounded-2xl mt-4 mr-4 ml-4 lg:ml-0 flex justify-between items-center px-2 lg:px-6 py-4 md:py-5">
              <h5 className="flex items-center gap-2">
                {" "}
                <span
                  onClick={() => navigate(-1)}
                  className="cursor-pointer hover:scale-110 hover:bg-secondary dark:hover:bg-primary   p-1 duration-300"
                >
                  <FaArrowLeft />{" "}
                </span>{" "}
                {getPageTitle()}
              </h5>

              <div className="flex gap-1 items-center">
                {/* notification btn */}
                <div className="lg:mr-6 ">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="cursor-pointer rounded-full p-2 hover:bg-primary hover:text-white duration-300">
                      <IoNotificationsOutline size={26} />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      align="end"
                      className="lg:w-96 w-86 mx-5 px-5 py-4 rounded-2xl shadow-xl border dark:bg-black bg-white"
                    >
                      <DropdownMenuLabel className="text-lg font-semibold mb-3">
                        Notifications
                      </DropdownMenuLabel>

                      {/* notification with action btn */}
                      <div className="bg-[#F5F8FF] dark:bg-gray-900 p-4 rounded-xl flex gap-3 mb-4">
                        <img
                          src={userImg}
                          className="w-10 h-10 rounded-full object-cover"
                          alt="avatar"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-sm">
                            Even Luis{" "}
                            <span className="font-normal">
                              want to join your UI/UX room!
                            </span>
                          </p>
                          <p className="text-xs text-gray-500 mt-1">just now</p>

                          <div className="flex gap-3 mt-3">
                            <button className="px-4 py-2 rounded-xl border text-sm text-gray-700">
                              Decline
                            </button>
                            <button className="px-6 py-2 rounded-xl bg-primary text-white text-sm shadow">
                              Accept
                            </button>
                          </div>
                        </div>
                      </div>

                      {/*  notification items*/}
                      {[1, 2, 3].map((_, i) => (
                        <div
                          key={i}
                          className="flex gap-3 p-4 mb-3 border dark:bg-gray-900  rounded-xl hover:bg-gray-50 transition"
                        >
                          <img
                            src={userImg}
                            className="w-10 h-10 rounded-full object-cover"
                            alt="avatar"
                          />

                          <div className="flex-1">
                            <p className="text-sm">
                              <span className="font-semibold">Jack Haris</span>{" "}
                              your UI/UX room will start in{" "}
                              <span className="font-semibold">20 minute!</span>
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              2 min ago
                            </p>
                          </div>
                        </div>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* user profile */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer rounded-full p-px hover:bg-primary hover:text-white duration-300">
                    <img
                      className="rounded-full size-11 object-cover"
                      // src={userImg}
                      src={userImg}
                      alt="user img"
                    />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="end"
                    className=" mx-5 px-4 py-2 rounded-2xl shadow-xl *:text-sm border dark:bg-black bg-white"
                  >
                    <DropdownMenuItem asChild>
                      <Link
                        to="/dashboard/profile"
                        className="flex items-center gap-1 mb-2 duration-300 ease-in-out hover:bg-gray-300 p-1 rounded-lg"
                      >
                        <ProfileSvg /> Profile
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link
                        to="/dashboard/billing"
                        className="flex items-center gap-1 mb-2 duration-300 ease-in-out hover:bg-gray-300 p-1 rounded-lg"
                      >
                        <CardSvg /> Billing
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <button
                        onClick={() => setLogoutOpen(true)}
                        className="flex items-center gap-1 text-red-500 duration-300 ease-in-out hover:bg-gray-300 p-1 rounded-lg"
                      >
                        <SignOutSvg /> Sign out
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <h6 className="font-medium hidden lg:block">{userName}</h6>

                {/* mobile sidebar */}
                <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                  <SheetTrigger asChild>
                    <Button className="xl:hidden hover:bg-secondary text-black dark:text-primary cursor-pointer  bg-white dark:bg-gray-900 rounded ">
                      <IoMenu className="size-8!" size={24} />
                    </Button>
                  </SheetTrigger>

                  <SheetContent
                    side="left"
                    className="p-0 w-60 md:pt-10 border-none"
                  >
                    <SidebarContent closeSheet={() => setSheetOpen(false)} />
                  </SheetContent>
                </Sheet>
              </div>
            </header>

            {/* content */}
            <section className="flex-1 bg-gray-100 dark:bg-black overflow-y-auto lg:pr-2 px-4 lg:px-0 py-6">
              <ScrollRestoration />
              <Outlet />
            </section>
          </main>

          <LogoutConfirmModal
            open={logoutOpen}
            onClose={() => setLogoutOpen(false)}
            onConfirm={handleLogout}
          />
        </div>
      }
    </>
  );
}
