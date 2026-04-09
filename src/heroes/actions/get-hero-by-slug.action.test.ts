import { describe, expect, test } from "vitest";
import { getHeroBySlugAction } from "./get-hero-by-slug.action";

const BASE_URL = import.meta.env.VITE_API_URL;

describe('Get Hero By Slug Action', () => {

    test('should fetch hero data and return with complete image url', async () => {
        const idSlug = 'clark-kent';
        const hero = await getHeroBySlugAction({ idSlug });

        expect(hero.image).toContain(`${BASE_URL}/images/`);
        expect(hero).toStrictEqual(
            {
                "id": "1",
                "name": "Clark Kent",
                "slug": "clark-kent",
                "alias": "Superman",
                "powers": [
                    "Súper fuerza",
                    "Vuelo",
                    "Visión de calor",
                    "Visión de rayos X",
                    "Invulnerabilidad",
                    "Súper velocidad"
                ],
                "description": "El Último Hijo de Krypton, protector de la Tierra y símbolo de esperanza para toda la humanidad.",
                "strength": 10,
                "intelligence": 8,
                "speed": 9,
                "durability": 10,
                "team": "Liga de la Justicia",
                "image": `${BASE_URL}/images/1.jpeg`,
                "firstAppearance": "1938",
                "status": "Active",
                "category": "Hero",
                "universe": "DC"
            }
        );


    });

    test('should throw an error if hero is not found', async () => {
        const idSlug = 'nonexistent';
        const result = await getHeroBySlugAction({ idSlug }).catch(error => {
            expect(error).toBeDefined();
            expect(error.response.status).toBe(404);
        });

        expect(result).toBeUndefined();
    });

});