import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "../../components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { searchHeroesAction } from "@/heroes/actions/search-hero.action";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";



export const SearchPage = () => {

    const [searchParams, _] = useSearchParams();

    const name = searchParams.get('name') ?? '';
    const strength = Number(searchParams.get('strength') ?? '');

    const { data: searchData } = useQuery({
        queryKey: ['search-heroes', { name, strength }],
        queryFn: () => {
            return searchHeroesAction({ name: name, strength: strength });
        },
        staleTime: 1000 * 60 * 5 // 5 minutos
    })

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

            {/* Results */}
            <HeroGrid heroes={searchData ?? []} />
        </>
    )
}

export default SearchPage;
