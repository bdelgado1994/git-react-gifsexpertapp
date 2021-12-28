import React from "react";
import { getGifs } from "../../helpers/GetGifs";

describe('Pruebas Unitarias de Fetch', () => {

    test('debe de Traer 10 elementos', async () => {
        const gifs = await getGifs('nauto');

        expect(gifs.length).toBe(10);
    })

})
