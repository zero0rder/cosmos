export const typeDefs = `#graphql
    # query type
    type Query {
        launches: [Launches]
        rockets: [Rockets]
        dragons: [Dragons]
        crew: [Crew]
        starlink: [Starlink]
    }

    # custom types
    type Launches {
        id: String
        name: String
        flightNum: Int
        date: String
        webcast: String
    }

    type Rockets {
        id: String
        name: String
        costPerLaunch: String
        country: String
        company: String
        description: String
        firstFlight: String
        images: [String]
        height: Int
        diameter: Int
        mass: Int
    }

    type Dragons {
        id: String
        name: String
        firstFlight: String
        description: String
        images: [String]
        height: Int
        diameter: Int
    }

    type Crew {
        id: String
        name: String
        agency: String
        image: String
        status: String
        launches: [String]
    }

    type SpaceTrack {
        launchDate: String
        countryCode: String
        creationDate: String
        site: String
        epoch: String
    }

    type Starlink {
        id: String
        heightKm: Int
        latitude: Int
        longitude: Int
        velocity: Int
        #spaceTrack: SpaceTrack
    }
`;