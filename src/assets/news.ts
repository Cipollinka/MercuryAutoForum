const mock = {
  data: [
    {
      id: '0e9ae8dc-36c1-4f9c-83be-bd9a1f21b2ac',
      name: 'Mercury Capri, 1990 – 1995, Roadster',
      description:
        'Mercury Capri is a 2-door car presented in the body of a Roadster C class. The model is equipped with a gasoline engine with a volume of 1.6 liters, a power of 100 hp, and a consumption of about a liter. The average size of the body distinguishes the Mercury Capri with its stability on the road surface and good smoothness of the ride over long distances.',
      gearbox: 'mechanics',
      drive: 'front',
      maximum_number_of_seats: 2,
      image: require('app/assets/images/images/2.png'),
    },
    {
      id: '36c1-4f9c-83be-bd9a1f21b2ac',
      name: 'Mercury Colony Park, V 1969 - 1978, 5-door station wagon',
      description:
        'Mercury Colony Park - a 5-door car, presented in a Universal 5-door body. The model is equipped with a gasoline engine with a volume of 5.8 to 6.6 liters, a capacity of 210 to 264 hp, and a consumption of 1 liter. The large dimensions of the car body make it a convenient vehicle for long trips and journeys.',
      gearbox: 'automatic',
      drive: 'rear',
      maximum_number_of_seats: '5, 9',
      image: require('app/assets/images/images/3.png'),
    },
    {
      id: '4f9c-83be-bd9a1f21b2ac',
      name: 'Mercury Cougar, IV 1977 - 1979, Sedan',
      description:
        'Mercury Cougar - 4-door car, presented in the body of an E class sedan. The model is equipped with a gasoline engine with a volume of 5.8 liters, a capacity of 149 hp, and a consumption of 1 liter. Mercury Cougar has large body dimensions that add practicality to the car and a lot of space in the cabin. Due to the large dimensions, there may be insufficient maneuverability on narrow city streets.',
      gearbox: 'automatic',
      drive: 'rear',
      maximum_number_of_seats: 6,
      image: require('app/assets/images/images/4.png'),
    },
    {
      id: '0e9ae8dc',
      name: 'Mercury Cougar, IV 1977 - 1979, Coupe',
      description:
        'Mercury Cougar is a 2-door car presented in the body of an E class coupe. The model is equipped with a gasoline engine with a volume of 4.9 to 5.8 liters, a capacity of 134 to 149 hp, and a consumption of 1 liter. Mercury Cougar has impressive body dimensions that provide excellent driving comfort and increased safety for the driver and passengers.',
      gearbox: 'automatic',
      drive: 'rear',
      maximum_number_of_seats: 4,
      image: require('app/assets/images/images/5.png'),
    },
    {
      id: 'bd9a1f21b2ac',
      name: 'Mercury Cougar, IV 1977 - 1979, station wagon 5 dv.',
      description:
        'Mercury Cougar is a 5-door car, presented in a 5-door Universal body. E class. The model is equipped with a gasoline engine with a volume of 5.8 liters, a capacity of 161 hp, and a consumption of about 1 liter. Mercury Cougar has large body dimensions that add practicality to the car and a lot of space in the cabin. Due to the large dimensions, there may be insufficient maneuverability on narrow city streets.',
      gearbox: 'automatic',
      drive: 'rear',
      maximum_number_of_seats: 5,
      image: require('app/assets/images/images/6.png'),
    },
    {
      id: '83be-bd9a1f21b2ac',
      name: 'Mercury Grand Marquis, IV Рестайлинг 2005 – 2011, Sedan',
      description:
        'Mercury Grand Marquis is a 4-door car presented in the body of an F-class sedan. The model is equipped with a gasoline engine with a volume of 4.6 liters, a capacity of 227 hp, and a consumption of 11.2 liters. The large dimensions of the car body make it a convenient vehicle for long trips and journeys. The car has a large, impressive trunk, which can fit everything you need. Ideal for a large family. It will be convenient for those who have to carry a lot of things with them.',
      gearbox: 'automatic',
      drive: 'rear',
      maximum_number_of_seats: 6,
      image: require('app/assets/images/images/7.png'),
    },
    {
      id: '0e9ae8dc-83be-bd9a1f21b2ac',
      name: 'Mercury Marauder, 2002 – 2004, Sedan',
      description:
        'Mercury Marauder is a 4-door car, presented in the body of an E class sedan. The model is equipped with a gasoline engine with a volume of 4.6 liters, a power of 300 hp, with a consumption of about 1 liter. Mercury Marauder has impressive body dimensions that provide excellent driving comfort and increased safety for the driver and passengers. The car has a large, impressive trunk, which can fit everything you need. Ideal for a large family. It will be convenient for those who have to carry a lot of things with them. The car is characterized by average acceleration indicators. The dynamics are at a sufficient level.',
      gearbox: 'automatic',
      drive: 'rear',
      maximum_number_of_seats: 5,
      image: require('app/assets/images/images/8.png'),
    },
    {
      id: '0e9ae8dc-bd9a1f21b2ac',
      name: 'Mercury Mariner, II 2007 - 2010, 5-door SUV',
      description:
        'Mercury Mariner - 5-door car, presented in the body of a 5-door SUV. J class. The model is equipped with a gasoline hybrid engine with a volume of 2.3 to 3.0 liters, a capacity of 155 to 243 hp, and a consumption of 7.3 liters. Mercury Mariner is characterized by medium body dimensions. The optimal combination of smooth running, comfortable handling and maneuverability. The car has a large trunk space. The volume of the luggage compartment will allow you to transport large objects without difficulty and without special inconvenience.',
      gearbox: 'automatic, variator',
      drive: 'front, full',
      maximum_number_of_seats: 5,
      image: require('app/assets/images/images/15.png'),
    },
    {
      id: '0e9ae8dc45c',
      name: 'Mercury Marauder, 2002 - 2004, Convertible',
      description:
        'Mercury Marauder is a 2-door car, presented in the body of an E-Class Cabriolet. The model is equipped with a gasoline engine with a volume of 4.6 liters, a power of 340 hp, with a consumption of about a liter. Mercury Marauder has impressive body dimensions that provide excellent driving comfort and increased safety for the driver and passengers. The model has a large space in the luggage compartment, which will allow you to comfortably place the luggage of all passengers. The car is characterized by aggressive dynamics and fast acceleration, guaranteeing bright emotions and drive to the driver.',
      gearbox: 'automatic',
      drive: 'rear',
      maximum_number_of_seats: 4,
      image: require('app/assets/images/images/9.png'),
    },
    {
      id: '0e9ae8d67',
      name: 'Mercury Grand Marquis, I 1983 - 1991, Sedan',
      description:
        'Mercury Grand Marquis is a 4-door car presented in the body of an F-class sedan. The model is equipped with a gasoline engine with a volume of 4.9 liters, a capacity of 150 hp, and a consumption of 1 liter. The large dimensions of the car body make it a convenient vehicle for long trips and journeys.',
      gearbox: 'automatic',
      drive: 'rear',
      maximum_number_of_seats: 6,
      image: require('app/assets/images/images/10.png'),
    },
    {
      id: '36c1-rebd9a1f21b2ac',
      name: 'Mercury Grand Marquis, II 1991 - 1997, Sedan',
      description:
        'Mercury Grand Marquis is a 4-door car presented in the body of an F-class sedan. The model is equipped with a gasoline engine with a volume of 4.6 liters, a capacity of 190 hp, and a consumption of 1 liter. Mercury Grand Marquis has impressive body dimensions that provide excellent driving comfort and increased safety for the driver and passengers. The car has a large trunk space. The volume of the luggage compartment will allow you to transport large objects without difficulty and without special inconvenience.',
      gearbox: 'automatic',
      drive: 'rear',
      maximum_number_of_seats: 6,
      image: require('app/assets/images/images/11.png'),
    },
    {
      id: '0e9aeb2ac',
      name: 'Mercury Grand Marquis, III 1997 - 2002, Sedan',
      description:
        'Mercury Grand Marquis is a 4-door car presented in the body of an F-class sedan. The model is equipped with a gasoline engine with a volume of 4.6 liters, a capacity of 203 hp, with a consumption of about 1 liter. The large dimensions of the car body make it a convenient vehicle for long trips and journeys. The car has a large, impressive trunk, which can fit everything you need. Ideal for a large family. It will be convenient for those who have to carry a lot of things with them.',
      gearbox: 'automatic',
      drive: 'rear',
      maximum_number_of_seats: 6,
      image: require('app/assets/images/images/12.png'),
    },
    {
      id: '0e9bd9a1f21b2ac',
      name: 'Mercury Grand Marquis, IV 2002 - 2005, Sedan',
      description:
        'Mercury Grand Marquis is a 4-door car presented in the body of an F-class sedan. The model is equipped with a gasoline engine with a volume of 4.6 liters, a capacity of 227 hp, and a consumption of 11.8 liters. Mercury Grand Marquis has impressive body dimensions that provide excellent driving comfort and increased safety for the driver and passengers. The car has a large, impressive trunk, which can fit everything you need. Ideal for a large family. It will be convenient for those who have to carry a lot of things with them.',
      gearbox: 'automatic',
      drive: 'rear',
      maximum_number_of_seats: 6,
      image: require('app/assets/images/images/13.png'),
    },
    {
      id: '0e9bd9a1fb2ac',
      name: 'Mercury Mariner, I 2004 - 2007, 5-door SUV',
      description:
        'Mercury Mariner - 5-door car, presented in the body of a 5-door SUV. J class. The model is equipped with a gasoline engine with a volume of 2.3 to 3.0 liters, a capacity of 155 to 200 hp, and a consumption of 1 liter. Mercury Mariner differs in average dimensions, which makes the car a comfortable vehicle that will not create inconvenience in the city. It differs in comfort when driving on highways and motorways. The car has a large, impressive trunk, which can fit everything you need. Ideal for a large family. It will be convenient for those who have to carry a lot of things with them. The acceleration dynamics of the car is within the average range. The power reserve of the engine is quite enough for everyday road situations.',
      gearbox: 'automatic',
      drive: 'front',
      maximum_number_of_seats: 5,
      image: require('app/assets/images/images/14.png'),
    },
    {
      id: '0e9bd9a1fbc',
      name: 'Mercury Marquis, IV 1979 – 1982, Sedan 2 doors',
      description:
        'Mercury Marquis is a 2-door car, presented in the body of a 2-door E class sedan. The model is equipped with a gasoline engine with a volume of 4.9 liters, a capacity of 150 hp, and a consumption of 1 liter. Mercury Marquis has impressive body dimensions that provide excellent driving comfort and increased safety for the driver and passengers.',
      gearbox: 'automatic',
      drive: 'rear',
      maximum_number_of_seats: 5,
      image: require('app/assets/images/images/16.png'),
    },
    {
      id: '0e9bd9bc',
      name: 'Mercury Marquis, IV 1979 - 1982, Sedan',
      description:
        'Mercury Marquis is a 4-door car, presented in the body of an E class sedan. The model is equipped with a gasoline engine with a volume of 4.9 to 5.8 liters, a capacity of 150 to 210 hp, and a consumption of 1 liter. Mercury Marquis has large body dimensions that add practicality to the car and a lot of space in the cabin. Due to the large dimensions, there may be insufficient maneuverability on narrow city streets. The dynamics of overclocking are at an average level, providing comfort in traffic and during overtaking.',
      gearbox: 'automatic',
      drive: 'rear',
      maximum_number_of_seats: 5,
      image: require('app/assets/images/images/17.png'),
    },
    {
      id: '0e9rererbd9a1fbc',
      name: 'Mercury Marquis, V 1983 - 1986, Station Wagon',
      description:
        'Mercury Marquis is a 5-door car, presented in a Universal 5-door E class body. The model is equipped with a gasoline engine with a volume of 3.3 to 3.8 liters, a capacity of 105 to 120 hp, and a consumption of 1 liter. Mercury Marquis is distinguished by large dimensions, which makes it a comfortable vehicle for highway driving, though it may create inconvenience in the city.',
      gearbox: 'automatic',
      drive: 'front',
      maximum_number_of_seats: 5,
      image: require('app/assets/images/images/18.png'),
    },
    {
      id: '0e9bd9asdada1fbc',
      name: 'Mercury Marquis, V 1983 - 1986, Sedan',
      description:
        'Mercury Marquis is a 4-door car, presented in the body of an E class sedan. The model is equipped with a gasoline engine with a volume of 3.3 to 3.8 liters, a capacity of 105 to 120 hp, and a consumption of 1 liter. The large body dimensions make it a convenient vehicle for long trips and journeys.',
      gearbox: 'automatic',
      drive: 'front',
      maximum_number_of_seats: 5,
      image: require('app/assets/images/images/19.png'),
    },
  ],
};

export default mock;
