import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "../../components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";


export const SearchPage = () => {
    return (
        <>
            {/* Header */}
            <CustomJumbotron
                title="Búsqueda de SuperHéroes"
                description="Descubre, explora y administra super héroes y villanos"
            />

            <CustomBreadcrumbs currentPage="Buscador de héroes" />

            {/* Stats Dashboard */}
            <HeroStats />

            {/* Filter and search */}
            <SearchControls />
        </>
    )
}

export default SearchPage;
