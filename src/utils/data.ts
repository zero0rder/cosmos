import Moon from "../assets/moon_sphere.png";
import Europa from "../assets/europa.png";
import Mars from "../assets/mars.png";
import Titan from "../assets/titan.png";
import Capsule from "../assets/capsule.jpg";

export const Dest_Data = [
    {
        id: 0,
        img: Moon,
        name: 'moon',
        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        stats: {
            distance: '384,400 KM',
            travel_time: '3 Days',
        },
    },
    {
        id: 1,
        img: Mars,
        name: 'mars',
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        stats: {
            distance: '225M KM',
            travel_time: '9 Months',
        },
    },
    {
        id: 2,
        img: Europa,
        name: 'europa',
        description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        stats: {
            distance: '628M KM',
            travel_time: '3 Years',
        },
    },
    {
        id: 3,
        img: Titan,
        name: 'titan',
        description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        stats: {
            distance: '828M KM',
            travel_time: '4.3 Years',
        },
    },
];


export const Crew_Data = [
    {
        id: 2,
        name: 'Jared Isaacman',
        agency: 'SpaceX',
        img: 'https://i.imgur.com/BpdQrMv.png',
        wiki: 'https://en.wikipedia.org/wiki/Jared_Isaacman',
        title: 'commander',
        description: 'Isaacman served as commander of Inspiration4, the first private human spaceflight in which none of the people aboard are from a government agency. The mission, operated by SpaceX, on board an autonomous Crew Dragon spacecraft launched by a Falcon 9 launch vehicle.',
    },
    {
        id: 1,
        name: 'Nicole Aunapu Mann',
        agency: 'NASA',
        img: 'https://i.imgur.com/EW93kmg.png',
        wiki: 'https://en.wikipedia.org/wiki/Nicole_Aunapu_Mann',
        title: 'astronaut',
        description: 'Mann was selected as one of the eight members of NASA Astronaut Group 21. She completed her training in 2015 and has since served as a T-38 Talon Safety and Training Officer and was the Assistant to the Chief of Exploration.'
    },
    {
        id: 4,
        name: 'Victor J. Glover',
        agency: 'NASA',
        img: 'https://imgur.com/Vv5Hgzh.png',
        wiki: 'https://en.wikipedia.org/wiki/Victor_J._Glover',
        title: 'astronaut',
        description: 'Glover is one of the Commercial Crew astronauts, assigned to fly on the first operational flight, and the second crewed flight overall, of SpaceX\'s Crew Dragon. Glover\'s first spacewalk, which lasted for more than six hours was conducted on January 27, 2021.'
    },
    {
        id: 3,
        name: 'Michael López-Alegría',
        agency: 'Axiom Space',
        img: 'https://i.imgur.com/60YDzr6.png',
        wiki: 'https://en.wikipedia.org/wiki/Michael_L%C3%B3pez-Alegr%C3%ADa',
        title: 'astronaut',
        description: 'López-Alegría\'s first space mission was STS-73 in 1995; for several years afterwards he led NASA\'s International Space Station (ISS) Crew Operations office before returning to space aboard STS-92 in 2000 and STS-113 in 2002.'
    },
    {
        id: 0,
        name: 'Jessica Watkins',
        agency: 'NASA',
        img: 'https://i.imgur.com/bNH8BSo.png',
        wiki: 'https://en.wikipedia.org/wiki/Jessica_Watkins',
        title: 'mission specialist',
        description: 'In June 2017, Watkins was selected as a member of NASA Astronaut Group 22 and began her two-year training in August. In December 2020, she was selected to be a part of the Artemis Team to return humans to the Moon.'
    },
];

export const Transport_Data = [
    {
        id: 2,
        name: 'Starship',
        img: 'https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg',
        description: 'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
        type: 'rocket'
    },
    {
        id: 3,
        name: 'Dragon 1',
        img: Capsule,
        description: 'Dragon is a reusable spacecraft developed by SpaceX. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed only for human travel, but so far has also been used to deliver cargo to the International Space Station (ISS).',
        type: 'capsule'
    },
    {
        id: 0,
        name: 'Dragon 2',
        img: 'https://farm9.staticflickr.com/8588/16661791299_a236e2f5dc_b.jpg',
        description: 'Dragon 2 (also Crew Dragon, Dragon V2, or formerly DragonRider) is the second version of the SpaceX Dragon spacecraft, which will be a human-rated vehicle. It includes a set of four side-mounted thruster pods with two SuperDraco engines each, which can serve as a launch escape system or launch abort system (LAS).',
        type: 'capsule'
    },
]
