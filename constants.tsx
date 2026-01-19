import { SportCategory, NewsArticle, MatchScore, Product } from './types';

export const INITIAL_NEWS: NewsArticle[] = [
  {
    id: '1',
    title: 'World Cup Final: A Clash of Titans',
    content: 'The highly anticipated final match is set to take place this Sunday at the Grand Arena. Experts predict a high-intensity game with both teams showing peak physical condition in recent training sessions. The history between these two rivals suggests we are in for a tactical masterpiece.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.FOOTBALL,
    author: 'John Doe',
    date: new Date().toISOString(),
    readTime: '5 min read',
    tags: ['World Cup', 'Final', 'Football'],
    comments: []
  },
  {
    id: '2',
    title: 'Grand Slam Season Kicks Off',
    content: 'Tennis fans around the globe are tuning in for the first major of the year. The hard courts are playing faster than ever, favoring aggressive baseliners. Defending champions are under pressure as a new generation of talent rises through the ranks.',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a4bd13?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.TENNIS,
    author: 'Jane Smith',
    date: new Date().toISOString(),
    readTime: '3 min read',
    tags: ['Tennis', 'Grand Slam', 'Hard Court'],
    comments: []
  },
  {
    id: '3',
    title: 'NBA Playoffs: Underdogs Rise',
    content: 'The first round of the playoffs has delivered unexpected results. Several top-seeded teams are struggling against lower-ranked opponents who have brought defensive intensity to a new level. Fans are witnessing some of the most competitive basketball in recent memory.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.BASKETBALL,
    author: 'Mike Johnson',
    date: new Date(Date.now() - 86400000).toISOString(),
    readTime: '4 min read',
    tags: ['NBA', 'Playoffs', 'Basketball'],
    comments: []
  },
  {
    id: '4',
    title: 'T20 Cricket: Power Hitting Revolution',
    content: 'The modern era of T20 cricket has seen a massive shift in batting strategies. With shorter boundaries and innovative bat technology, 200+ scores are becoming the norm. Bowlers are forced to adapt with new variations like the knuckleball and wide yorkers.',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.CRICKET,
    author: 'Rahul Dravid',
    date: new Date(Date.now() - 172800000).toISOString(),
    readTime: '6 min read',
    tags: ['T20', 'Cricket', 'Power Hitting'],
    comments: []
  },
  {
    id: '5',
    title: 'The Future of Formula 1: Sustainability vs Speed',
    content: 'Formula 1 is at a crossroads as it attempts to balance its high-octane entertainment with a commitment to net-zero carbon by 2030. New engine regulations and the introduction of sustainable fuels are set to redefine the pinnacle of motorsport.',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.OTHER,
    author: 'Lewis Hamilton',
    date: new Date(Date.now() - 259200000).toISOString(),
    readTime: '7 min read',
    tags: ['F1', 'Motorsport', 'Sustainability'],
    comments: []
  },
  {
    id: '6',
    title: 'Champions League: The Road to Munich',
    content: 'The quarter-final draw has set the stage for some mouth-watering clashes. Defending champions face their toughest test yet against a resurgent tactical powerhouse. All eyes are on the golden boot race as the competitions top scorers go head-to-head.',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.FOOTBALL,
    author: 'Sarah Jennings',
    date: new Date(Date.now() - 345600000).toISOString(),
    readTime: '5 min read',
    tags: ['UCL', 'Football', 'Europe'],
    comments: []
  },
  {
    id: '7',
    title: 'Olympic Swimming: Records Shattered',
    content: 'Day three of the swimming trials saw three world records fall in a single session. The introduction of new biomechanical training methods seems to be paying dividends as athletes reach speeds previously thought impossible.',
    image: 'https://images.unsplash.com/photo-1530549387631-afb168819661?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.OTHER,
    author: 'Michael Phelps',
    date: new Date(Date.now() - 432000000).toISOString(),
    readTime: '4 min read',
    tags: ['Swimming', 'Olympics', 'Records'],
    comments: []
  },
  {
    id: '8',
    title: 'The Rise of Women in Cricket',
    content: 'Attendance figures for the latest Women’s Premier League have surpassed all expectations. The investment in grassroots programs and professional contracts has created a vibrant ecosystem where talent can flourish regardless of gender.',
    image: 'https://images.unsplash.com/photo-1593787424270-b0629ec7d5e6?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.CRICKET,
    author: 'Mithali Raj',
    date: new Date(Date.now() - 518400000).toISOString(),
    readTime: '6 min read',
    tags: ['WPL', 'Cricket', 'Equality'],
    comments: []
  }
];

export const INITIAL_SCORES: MatchScore[] = [
  // FOOTBALL
  {
    id: 's1',
    teamA: 'Real Madrid',
    teamALogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/240px-Real_Madrid_CF.svg.png',
    teamB: 'Barcelona',
    teamBLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_logo.svg/240px-FC_Barcelona_logo.svg.png',
    scoreA: 2,
    scoreB: 1,
    status: 'Live',
    sport: SportCategory.FOOTBALL,
    startTime: new Date().toISOString(),
    venue: 'Santiago Bernabéu',
    stats: {
      possessionA: 54,
      possessionB: 46,
      shotsA: 12,
      shotsB: 9
    }
  },
  {
    id: 's3',
    teamA: 'Man City',
    teamALogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/240px-Manchester_City_FC_badge.svg.png',
    teamB: 'Arsenal',
    teamBLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/240px-Arsenal_FC.svg.png',
    scoreA: 0,
    scoreB: 0,
    status: 'Upcoming',
    sport: SportCategory.FOOTBALL,
    startTime: new Date(Date.now() + 86400000).toISOString(),
    venue: 'Etihad Stadium'
  },
  {
    id: 's4',
    teamA: 'Liverpool',
    teamALogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/240px-Liverpool_FC.svg.png',
    teamB: 'Chelsea',
    teamBLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/240px-Chelsea_FC.svg.png',
    scoreA: 3,
    scoreB: 1,
    status: 'Finished',
    sport: SportCategory.FOOTBALL,
    startTime: new Date(Date.now() - 172800000).toISOString(),
    venue: 'Anfield',
    stats: {
      possessionA: 62,
      possessionB: 38,
      shotsA: 18,
      shotsB: 5
    }
  },
  {
    id: 's10',
    teamA: 'Bayern Munich',
    teamALogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/240px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png',
    teamB: 'Dortmund',
    teamBLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Borussia_Dortmund_logo.svg/240px-Borussia_Dortmund_logo.svg.png',
    scoreA: 1,
    scoreB: 1,
    status: 'Live',
    sport: SportCategory.FOOTBALL,
    startTime: new Date().toISOString(),
    venue: 'Allianz Arena',
    stats: {
      possessionA: 58,
      possessionB: 42,
      shotsA: 14,
      shotsB: 11
    }
  },

  // BASKETBALL
  {
    id: 's2',
    teamA: 'Lakers',
    teamALogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/240px-Los_Angeles_Lakers_logo.svg.png',
    teamB: 'Celtics',
    teamBLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/240px-Boston_Celtics.svg.png',
    scoreA: 102,
    scoreB: 98,
    status: 'Finished',
    sport: SportCategory.BASKETBALL,
    startTime: new Date(Date.now() - 86400000).toISOString(),
    venue: 'Crypto.com Arena',
    stats: {
      possessionA: 50,
      possessionB: 50,
      shotsA: 88,
      shotsB: 85
    }
  },
  {
    id: 's11',
    teamA: 'Warriors',
    teamALogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/240px-Golden_State_Warriors_logo.svg.png',
    teamB: 'Bulls',
    teamBLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/240px-Chicago_Bulls_logo.svg.png',
    scoreA: 112,
    scoreB: 108,
    status: 'Live',
    sport: SportCategory.BASKETBALL,
    startTime: new Date().toISOString(),
    venue: 'Chase Center',
    stats: {
      possessionA: 52,
      possessionB: 48,
      shotsA: 95,
      shotsB: 92
    }
  },

  // CRICKET
  {
    id: 's6',
    teamA: 'India',
    teamALogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Logo_of_the_Board_of_Control_for_Cricket_in_India.svg/240px-Logo_of_the_Board_of_Control_for_Cricket_in_India.svg.png',
    teamB: 'Australia',
    teamBLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Cricket_Australia_logo.svg/240px-Cricket_Australia_logo.svg.png',
    scoreA: 245,
    scoreB: 110,
    status: 'Live',
    sport: SportCategory.CRICKET,
    startTime: new Date().toISOString(),
    venue: 'Wankhede Stadium',
    stats: {
      possessionA: 100,
      possessionB: 0,
      shotsA: 34,
      shotsB: 15
    }
  },

  // TENNIS
  {
    id: 's14',
    teamA: 'N. Djokovic',
    teamALogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/240px-Flag_of_Serbia.svg.png',
    teamB: 'C. Alcaraz',
    teamBLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/240px-Flag_of_Spain.svg.png',
    scoreA: 2,
    scoreB: 2,
    status: 'Live',
    sport: SportCategory.TENNIS,
    startTime: new Date().toISOString(),
    venue: 'Arthur Ashe Stadium',
    stats: {
      possessionA: 50,
      possessionB: 50,
      shotsA: 88,
      shotsB: 84
    }
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Pro Speed Cleats',
    brand: 'AeroSport',
    price: 129.99,
    rating: 4.8,
    description: 'Ultra-lightweight synthetic upper for explosive speed and control. Designed for firm ground surfaces.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.FOOTBALL,
    stock: 25
  },
  {
    id: 'p2',
    name: 'Elite Basketball Jersey',
    brand: 'HoopStar',
    price: 75.00,
    rating: 4.5,
    description: 'Breathable, moisture-wicking fabric with reinforced stitching. Official team trim and aesthetic fit.',
    image: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.BASKETBALL,
    stock: 50
  },
  {
    id: 'p3',
    name: 'Graphite Power Racket',
    brand: 'CourtMaster',
    price: 195.00,
    rating: 4.9,
    description: 'High-modulus graphite construction provides unmatched power and stability for aggressive players.',
    image: 'https://images.unsplash.com/photo-1617083277662-843817688487?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.TENNIS,
    stock: 12
  },
  {
    id: 'p4',
    name: 'Premium Willow Cricket Bat',
    brand: 'WillowKing',
    price: 350.00,
    rating: 4.7,
    description: 'Grade 1 English Willow, handcrafted for perfect balance and explosive power from the sweet spot.',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.CRICKET,
    stock: 8
  },
  {
    id: 'p5',
    name: 'Performance Running Shoes',
    brand: 'SwiftStride',
    price: 110.00,
    rating: 4.6,
    description: 'Engineered mesh for breathability and responsive foam cushioning for long-distance comfort.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.OTHER,
    stock: 45
  },
  {
    id: 'p6',
    name: 'Leather Match Football',
    brand: 'GoalMaster',
    price: 45.00,
    rating: 4.9,
    description: 'Official match weight and size. High-grade PU leather for consistent flight and durability.',
    image: 'https://images.unsplash.com/photo-1614632537197-38a17461c2ba?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.FOOTBALL,
    stock: 100
  },
  {
    id: 'p7',
    name: 'Indoor Court Shoes',
    brand: 'HoopStar',
    price: 95.00,
    rating: 4.4,
    description: 'Non-marking rubber outsole with superior traction for quick lateral movements on hardwood.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.BASKETBALL,
    stock: 30
  },
  {
    id: 'p8',
    name: 'Tennis Ball Case (12 Pack)',
    brand: 'CourtMaster',
    price: 24.99,
    rating: 4.8,
    description: 'Professional grade felt for all court surfaces. Consistent bounce and high visibility.',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.TENNIS,
    stock: 200
  },
  {
    id: 'p9',
    name: 'Aero-Dynamic Swim Goggles',
    brand: 'AquaticPro',
    price: 35.00,
    rating: 4.7,
    description: 'Anti-fog coated lenses with UV protection. Low-profile design for minimal drag in water.',
    image: 'https://images.unsplash.com/photo-1530549387631-afb168819661?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.OTHER,
    stock: 60
  },
  {
    id: 'p10',
    name: 'Impact Resistance Cricket Helmet',
    brand: 'WillowKing',
    price: 89.00,
    rating: 4.8,
    description: 'Carbon fiber composite shell with high-density EVA lining for maximum protection and comfort.',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.CRICKET,
    stock: 15
  },
  {
    id: 'p11',
    name: 'Pro Training Yoga Mat',
    brand: 'ZenFit',
    price: 55.00,
    rating: 4.5,
    description: 'Eco-friendly TPE material with non-slip surface and 6mm thickness for joint support.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.OTHER,
    stock: 40
  },
  {
    id: 'p12',
    name: 'Smart Fitness Tracker',
    brand: 'TechSport',
    price: 149.00,
    rating: 4.3,
    description: 'Heart rate monitoring, GPS tracking, and multi-sport modes. Water-resistant up to 50m.',
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=800&q=80',
    category: SportCategory.OTHER,
    stock: 25
  }
];