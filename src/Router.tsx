import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

import MainLayout from "@components/layouts/MainLayout/MainLayout";
import Discover from "@components/pages/Discover/Discover";
import Decks from "@components/pages/Decks/Decks";
import CreateDeck from "@components/pages/CreateDeck/CreateDeck";
import Account from "@components/pages/Account/Account";
import Notifications from "@components/pages/Notifications/Notifications";
import Settings from "@components/pages/Settings/Settings";
import About from "@components/pages/About/About";
import Quiz from "@components/pages/Exercises/Quiz/Quiz";
import WordShake from "@components/pages/Exercises/WordShake/WordShake";

const router = createHashRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Discover />,
            },
            {
                path: "/decks",
                element: <Decks />,
            },
            {
                path: "/decks/create",
                element: <CreateDeck />,
            },
            {
                path: "/account",
                element: <Account />,
            },
            {
                path: "/notifications",
                element: <Notifications />,
            },
            {
                path: "/settings",
                element: <Settings />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/exercises/quiz",
                element: <Quiz />,
            },
            {
                path: "/exercises/word-shake",
                element: <WordShake />,
            },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default React.memo(Router);
