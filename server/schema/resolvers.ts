/// <reference lib="dom" /> 

export const resolvers = {
    Query: {
        launches: async() => {
            const launchReq = await fetch('https://api.spacexdata.com/v5/launches');
            const launches = await launchReq.json();
            return launches.map((obj: any) => {
                return {
                    id: obj.id,
                    name: obj.name,
                    flightNum: obj.flight_number,
                    date: obj.date_local,
                    webcast: obj.links.webcast
                }
            });
        },
        rockets: async() => {
            const rocketReq = await fetch('https://api.spacexdata.com/v4/rockets');
            const rockets = await rocketReq.json();
            return rockets.map((obj: any) => {
                return {
                    id: obj.id,
                    name: obj.name,
                    costPerLaunch: obj.cost_per_launch,
                    country: obj.country,
                    company: obj.company,
                    description: obj.description,
                    firstFlight: obj.first_flight,
                    images: obj.flickr_images,
                    height: obj.height.feet,
                    diameter: obj.diameter.feet,
                    mass: obj.mass.lb,
                }
            });

        },
        dragons: async() => {
            const dragonReq = await fetch('https://api.spacexdata.com/v4/dragons');
            const dragons = await dragonReq.json();
            return dragons.map((obj: any) => {
                return {
                    id: obj.id,
                    name: obj.name,
                    description: obj.description,
                    firstFlight: obj.first_flight,
                    images: obj.flickr_images,
                    height: obj.height_w_trunk.feet,
                    diameter: obj.diameter.feet,
                }
            });
        },
        crew: async()=> {
            const crewReq = await fetch('https://api.spacexdata.com/v4/crew');
            const crew = await crewReq.json();
            return crew.map((obj: any) => {
                return {
                    id: obj.id,
                    name: obj.name,
                    agency: obj.agency,
                    image: obj.image,
                    status: obj.status,
                    launches: obj.launches,
                }
            });
        },
        starlink: async()=> {
            const starlinkReq = await fetch('https://api.spacexdata.com/v4/starlink');
            const starlink = await starlinkReq.json();
            return starlink.map((obj: any) => {
                return {
                    id: obj.id,
                    latitude: obj.latitude,
                    longitude: obj.longitude,
                    heightKm: obj.height_km,
                    velocity: obj.velocity,
                }
            });
        }
    },
}