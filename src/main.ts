/* import "./style.css";
import { ICharacters, ICharacterResult } from "./contracts/ICharacters";
import { ILocation, ILocationResult } from "./contracts/ILocation";
import { IEpisodes } from "./contracts/IEpisodes";

const outputElement = document.getElementById("output") as HTMLDivElement;
const characterElement = document.getElementById("api-character") as HTMLAnchorElement;
const locationElement = document.getElementById("api-location") as HTMLAnchorElement;
const episodeElement = document.getElementById("api-episode") as HTMLAnchorElement;

const BASE_URL = "https://rickandmortyapi.com/api";

const CHARACTER = `${BASE_URL}/character`;
const LOCATION = `${BASE_URL}/location`;
const EPISODE = `${BASE_URL}/episode`;

characterElement.addEventListener("click", async () => {
    try {
        const response: Response = await fetch(CHARACTER);
        const data = await response.json();
        outputElement.innerHTML = "";
        console.log(data.results);
        data.results.forEach((result: ICharacterResult) => {
            const characterDiv = document.createElement("div") as HTMLDivElement;
            characterDiv.innerHTML = displayCharacter(result);
            outputElement.appendChild(characterDiv);
        });
    } catch (error) {
        console.error(error);
    }
});

function displayCharacter(character: ICharacterResult): string {
    const resultAsString = `
  <h4> Name: ${character.name} </h4>
  <p> Status ${character.status} </p>
  <p> Gender ${character.gender} </p>
  <p> Location ${character.location.name} </p>
  <img src:"${character.image}" alt="${character.name}">

  `;
    return resultAsString;
}

locationElement?.addEventListener("click", async () => {
    try {
        const response: Response = await fetch(LOCATION);
        const data = await response.json();
        for (const result of data.results)
            const locationDiv = document.createElement("div") as HTMLDivElement;
    } catch (error) {}
});

async function displayLocation(location: ILocationResult): Promise<string> {
    const residents = await fetchResidents(location.residents);

}

async function fetrchResidents(locationResidents: string[]): Promise<string> {
    const resultArray: string[] = [];
    for (const resident of locationResidents) {
        try {
            const response: Response = await fetch(resident);
            const data: ICharacterResult = await response;
            resultArray.push(data.name);
        } catch (error) {
            console.error(error);
        }
        return 
    }
}
 */

function sayHi() {
    console.log("Hello hello");
}

sayHi();
