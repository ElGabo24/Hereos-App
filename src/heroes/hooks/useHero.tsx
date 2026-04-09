import { useQuery } from "@tanstack/react-query"
import { getHeroBySlugAction } from "../actions/get-hero-by-slug.action"

interface Props {
    idSlug: string
}

export const useHero = ({ idSlug }: Props) => {

    return useQuery({
        queryKey: ['hero-information', { idSlug }],
        queryFn: () => {
            return getHeroBySlugAction({ idSlug });
        },
        staleTime: 1000 * 60 * 5 // 5 minutos
    })
}
