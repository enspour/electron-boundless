import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

import MainLayout from "@components/layouts/MainLayout/MainLayout";

import Decks from "@components/pages/Decks/Decks";
import Discover from "@components/pages/Discover/Discover";
import Account from "@components/pages/Account/Account";
import Notifications from "@components/pages/Notifications/Notifications";
import Settings from "@components/pages/Settings/Settings";
import About from "@components/pages/About/About";

import DeckBrowse from "@components/pages/deck/DeckBrowse/DeckBrowse";
import DeckWords from "@components/pages/deck/DeckWords/DeckWords";
import DeckSettings from "@components/pages/deck/DeckSettings/DeckSettings";

import Cards from "@components/pages/exercises/Cards/Cards";

import services from "@services";

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
                path: "/decks/browse/:id",
                loader: async ({ params }) => {
                    return await services.decks.getOne(params.id);
                },
                element: <DeckBrowse />,
            },
            {
                path: "/decks/words/:id",
                loader: async ({ params }) => {
                    return await services.decks.getWords(params.id);
                },
                element: <DeckWords />,
            },
            {
                path: "/decks/settings/:id",
                loader: async ({ params }) => {
                    return await services.decks.getOne(params.id);
                },
                element: <DeckSettings />,
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
                path: "/exercises/cards",
                element: <Cards />,
            },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default React.memo(Router);
