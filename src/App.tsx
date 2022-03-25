import React, { useEffect } from 'react';
import {
    ScrollView,
    View
} from 'react-native';
import { markdownStyle, styles } from "./App.style";
import Markdown from 'react-native-markdown-package';
import { useApi } from "./Hooks/useApi";
import constant from "./Utils/ApiConstants";
import Loader from "./Utils/Loader";
const App = () => {
    let text
    useEffect(() => { apiCall(constant.Base_url + "people/1/") }, [])
    const [isLoading, data, error, apiCall] = useApi();

    let compareString = data?.url ? data.url.toString() : ""
    if (compareString.includes("https://swapi.dev/api/people/")) {
        text = `
        ### \`${data?.name}\` has ${data?.height} cm height and ${data?.mass} lb mass.His hair color is ${data?.hair_color} having ${data?.skin_color} skin and ${data?.eye_color} eyes.
        ### He born in ${data?.birth_year}.His gender is ${data?.gender}
        ### films:
         ${data?.films.map((item: unknown, index: number) => {
            return "\n[" + ". " + "Film " + (index + 1) + "](" + item + ")"
        })}
        
        #### species: 
            ${data?.species.map((item: unknown, index: number) => {
            return "\n[" + ". " + "Specie " + (index + 1) + "](" + item + ")"
        })}
        
        #### vehicles:
        
        ${data?.vehicles.map((item: unknown, index: number) => {
            return "\n[" + ". " + "Vehicle " + (index + 1) + "](" + item + ")"
        })}
        
        #### starships:
        
        ${data?.starships.map((item: unknown, index: number) => {
            return "\n[" + ". " + "Starship " + (index + 1) + "](" + item + ")"
        })}
            
         ##### created: ${data?.created}
         ##### edited: ${data?.edited}
         ##### url: ${data?.url} `;
    } else if (compareString.includes("https://swapi.dev/api/films/")) {
        text = `
        ### \`${data?.title}\` has ${data?.episode_id} episode and ${data?.opening_crawl} opening_crawl.His director is ${data?.director} having ${data?.producer} as a producer and release_date is ${data?.release_date}.

        ### characters:
         ${data?.characters.map((item: unknown, index: number) => {
            return "\n[" + ". " + "Character " + (index + 1) + "](" + item + ")"
        })}
        
        #### planets: 
            ${data?.planets.map((item: unknown, index: number) => {
            return "\n[" + ". " + "Planet " + (index + 1) + "](" + item + ")"
        })}
        
        #### starships:
        
        ${data?.starships.map((item: unknown, index: number) => {
            return "\n[" + ". " + "Starship " + (index + 1) + "](" + item + ")"
        })}
        
        #### vehicles:
        
        ${data?.vehicles.map((item: unknown, index: number) => {
            return "\n[" + ". " + "Vehicle " + (index + 1) + "](" + item + ")"
        })}

        #### species:
        
        ${data?.species.map((item: unknown, index: number) => {
            return "\n[" + ". " + "Specie " + (index + 1) + "](" + item + ")"
        })}
        
            
         ##### created: ${data?.created}
         ##### edited: ${data?.edited}
         ##### url: ${data?.url} `;
    }
    else if (compareString.includes("https://swapi.dev/api/starships/")) {
        text = `
        ### \`${data?.name}\` has ${data?.model} model and his manufacturer is ${data?.manufacturer}.His cost_in_credits is ${data?.cost_in_credits} having ${data?.length} length , max_atmosphering_speed is ${data?.max_atmosphering_speed}.
       

        ##### crew: ${data?.crew}
        ##### passengers: ${data?.passengers}
        ##### cargo_capacity: ${data?.cargo_capacity}
        ##### consumables: ${data?.consumables}
        ##### hyperdrive_rating: ${data?.hyperdrive_rating}
        ##### MGLT: ${data?.MGLT}
        ##### starship_class: ${data?.starship_class}


        ### films:
        ${data?.films.map((item: unknown, index: number) => {
            return "\n[" + ". " + "Film " + (index + 1) + "](" + item + ")"
        })}


        ### pilots:
         ${data?.pilots.map((item: unknown, index: number) => {
            return "\n[" + ". " + "pilots " + (index + 1) + "](" + item + ")"
        })}
        
        
        ##### created: ${data?.created}
        ##### edited: ${data?.edited}
        ##### url: ${data?.url} `;
    }
    else if (compareString.includes("https://swapi.dev/api/planets/")) {
        text = `
        ### \`${data?.name}\` has ${data?.rotation_period} rotation_period and his orbital_period is ${data?.orbital_period}.His diameter is ${data?.diameter} having ${data?.climate} climate , gravity is ${data?.gravity}.
       
        
        ##### terrain: ${data?.terrain}
        ##### surface_water: ${data?.surface_water}
        ##### population: ${data?.population}


        ### films:
        ${data?.films.map((item: unknown, index: number) => {
            return "\n[" + ". " + "Film " + (index + 1) + "](" + item + ")"
        })}


        ### residents:
         ${data?.residents.map((item: unknown, index: number) => {
            return "\n[" + ". " + "residents " + (index + 1) + "](" + item + ")"
        })}
        
        
        ##### created: ${data?.created}
        ##### edited: ${data?.edited}
        ##### url: ${data?.url} `;
    }
    else if (compareString.includes("https://swapi.dev/api/vehicles/")) {
        text = `
        ### \`${data?.name}\` has ${data?.model} model and his manufacturer is ${data?.manufacturer}.His cost_in_credits is ${data?.cost_in_credits} having ${data?.length} length , max_atmosphering_speed is ${data?.max_atmosphering_speed}.
       
        
        ##### crew: ${data?.crew}
        ##### passengers: ${data?.passengers}
        ##### cargo_capacity: ${data?.cargo_capacity}
        ##### consumables: ${data?.consumables}
        ##### vehicle_class: ${data?.airspeeder}


        ### films:
        ${data?.films.map((item: unknown, index: number) => {
            return "\n[" + ". " + "Film " + (index + 1) + "](" + item + ")"
        })}


        ### pilots:
         ${data?.pilots.map((item: unknown, index: number) => {
            return "\n[" + ". " + "pilots " + (index + 1) + "](" + item + ")"
        })}
        

        ##### created: ${data?.created}
        ##### edited: ${data?.edited}
        ##### url: ${data?.url} `;
    }
    else if (compareString.includes("https://swapi.dev/api/species/")) {
        text = `
        ### \`${data?.name}\` has ${data?.classification} classification and his designation is ${data?.designation}.His average_height is ${data?.average_height} having ${data?.skin_colors} skin_colors , hair_colors is ${data?.hair_colors}.
       
        
        ##### eye_colors: ${data?.eye_colors}
        ##### average_lifespan: ${data?.average_lifespan}
        ##### homeworld: ${data?.homeworld}
        ##### language: ${data?.language}

        ### films:
        ${data?.films.map((item: unknown, index: number) => {
            return "\n[" + ". " + "Film " + (index + 1) + "](" + item + ")"
        })}


        ##### created: ${data?.created}
        ##### edited: ${data?.edited}
        ##### url: ${data?.url} `;
    }
    if (isLoading) return <Loader visible={isLoading} />
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.container}>
                <Markdown
                    styles={markdownStyle.collectiveMd}
                    onLink={(url: string) => {
                        apiCall(url)
                        const isErrorResult = false;
                        return new Promise((resolve, reject) => {
                            isErrorResult ? reject() : resolve(true);
                        });
                    }}
                >
                    {text}
                </Markdown>
            </View>
        </ScrollView>
    );
}
export default App;