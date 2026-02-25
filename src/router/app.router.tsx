import { createBrowserRouter } from "react-router";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { SearchPage } from "@/heroes/search/SearchPage";
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroesLayout } from "@/heroes/layout/HeroesLayout";

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <HeroesLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/hero/1',
                element: <HeroPage />
            },
            {
                path: '/search',
                element: <SearchPage />
            },
        ]
    },
    {
        path: '/admin',
        element: <AdminPage />
    }
]);