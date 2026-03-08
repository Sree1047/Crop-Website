export interface Crop {
  name: string;
  season: string;
  waterNeeds: string;
  temperature: string;
  soilType: string;
  growthDuration: string;
  description: string;
  cultivation: string;
  imageUrl: string;
  fertilizer: string;
  averagePrice: string;
  investmentPerAcre: string;
  category: 'Fiber' | 'Cereal' | 'Fruit' | 'Vegetable' | 'Spice' | 'Commercial';
}

export const crops: Crop[] = [
  {
    name: 'Cotton',
    category: 'Fiber',
    season: 'Summer (March-June)',
    waterNeeds: '700-1300mm annually',
    temperature: '21-30°C',
    soilType: 'Well-drained, deep black soil',
    growthDuration: '150-180 days',
    fertilizer: 'NPK (100:50:50 kg/ha)',
    averagePrice: '₹5,500-6,500/quintal',
    investmentPerAcre: '₹25,000-30,000',
    description: 'Cotton is one of the world\'s most important fiber crops, providing the basic raw material to the textile industry.',
    cultivation: 'Requires proper spacing of 60x30cm. Regular pest monitoring and management is crucial.',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/10/01/22/57/cotton-2807360_1280.jpg'
  },
  {
    name: 'Paddy',
    category: 'Cereal',
    season: 'Kharif (June-November)',
    waterNeeds: '1200-1600mm',
    temperature: '22-32°C',
    soilType: 'Clay or clay-loam',
    growthDuration: '120-150 days',
    fertilizer: 'NPK (120:60:60 kg/ha)',
    averagePrice: '₹1,900-2,100/quintal',
    investmentPerAcre: '₹20,000-25,000',
    description: 'Rice is a staple food crop for more than half of the world\'s population.',
    cultivation: 'Transplanting method preferred. Maintain 2-5cm water level.',
    imageUrl: 'https://cdn.pixabay.com/photo/2022/11/11/00/05/rice-7583921_1280.jpg'
  },
  {
    name: 'Wheat',
    category: 'Cereal',
    season: 'Rabi (November-April)',
    waterNeeds: '450-650mm',
    temperature: '15-25°C',
    soilType: 'Loamy soil',
    growthDuration: '120-150 days',
    fertilizer: 'NPK (120:60:40 kg/ha)',
    averagePrice: '₹2,000-2,200/quintal',
    investmentPerAcre: '₹18,000-22,000',
    description: 'Wheat is the world\'s most widely cultivated food crop and a staple grain.',
    cultivation: 'Line sowing recommended. First irrigation at crown root stage.',
    imageUrl: 'https://cdn.pixabay.com/photo/2014/07/02/06/47/wheat-381848_1280.jpg'
  },
  {
    name: 'Sugarcane',
    category: 'Commercial',
    season: 'Spring (February-March)',
    waterNeeds: '1500-2500mm',
    temperature: '20-35°C',
    soilType: 'Deep, well-drained soil',
    growthDuration: '12-18 months',
    fertilizer: 'NPK (250:100:125 kg/ha)',
    averagePrice: '₹285-315/quintal',
    investmentPerAcre: '₹35,000-40,000',
    description: 'A major source of sugar and biofuel worldwide.',
    cultivation: 'Row spacing of 90cm. Regular detrashing important.',
    imageUrl: 'https://cdn.pixabay.com/photo/2024/01/14/01/53/ai-generated-8507107_1280.jpg'
  },
  {
    name: 'Corn',
    category: 'Cereal',
    season: 'Kharif (June-October)',
    waterNeeds: '500-800mm',
    temperature: '20-30°C',
    soilType: 'Well-drained loamy soil',
    growthDuration: '90-120 days',
    fertilizer: 'NPK (120:60:40 kg/ha)',
    averagePrice: '₹1,800-2,200/quintal',
    investmentPerAcre: '₹20,000-25,000',
    description: 'Corn is a versatile crop used for food, feed, and industrial purposes.',
    cultivation: 'Row spacing of 60cm. Regular weeding essential.',
    imageUrl: 'https://cdn.pixabay.com/photo/2022/09/17/17/20/corn-7461390_1280.jpg'
  },
  {
    name: 'Apple',
    category: 'Fruit',
    season: 'Spring planting',
    waterNeeds: '1000-1200mm',
    temperature: '15-24°C',
    soilType: 'Deep, well-drained loamy soil',
    growthDuration: 'Perennial (Fruits in 4-5 years)',
    fertilizer: 'NPK (500:200:300 g/tree)',
    averagePrice: '₹60-100/kg',
    investmentPerAcre: '₹150,000-200,000',
    description: 'Popular temperate fruit known for its crisp texture and sweet taste.',
    cultivation: 'Requires proper pruning and training. Winter chilling necessary.',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/01/05/13/58/apple-1122537_1280.jpg'
  },
  {
    name: 'Mango',
    category: 'Fruit',
    season: 'Spring (February-March)',
    waterNeeds: '850-1000mm',
    temperature: '24-30°C',
    soilType: 'Deep, well-drained loamy soil',
    growthDuration: 'Perennial (Fruits in 4-5 years)',
    fertilizer: 'NPK (1000:500:1000 g/tree)',
    averagePrice: '₹40-80/kg',
    investmentPerAcre: '₹100,000-150,000',
    description: 'Known as the king of fruits, popular tropical fruit with diverse varieties.',
    cultivation: 'Regular pruning needed. Protection from strong winds important.',
    imageUrl: 'https://cdn.pixabay.com/photo/2014/04/10/16/47/mango-321080_1280.jpg'
  },
  {
    name: 'Tomato',
    category: 'Vegetable',
    season: 'Year-round',
    waterNeeds: '400-600mm',
    temperature: '20-27°C',
    soilType: 'Well-drained loamy soil',
    growthDuration: '90-120 days',
    fertilizer: 'NPK (100:50:50 kg/ha)',
    averagePrice: '₹15-40/kg',
    investmentPerAcre: '₹40,000-50,000',
    description: 'Essential vegetable crop with high nutritional value.',
    cultivation: 'Staking or trellising recommended. Regular pruning needed.',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/10/06/17/15/tomato-2823820_1280.jpg'
  },
  {
    name: 'Turmeric',
    category: 'Spice',
    season: 'Summer (April-May)',
    waterNeeds: '1500-2000mm',
    temperature: '20-30°C',
    soilType: 'Well-drained loamy soil',
    growthDuration: '8-9 months',
    fertilizer: 'NPK (60:50:120 kg/ha)',
    averagePrice: '₹7,000-9,000/quintal',
    investmentPerAcre: '₹45,000-55,000',
    description: 'Important spice crop with medicinal properties.',
    cultivation: 'Requires good organic matter. Mulching beneficial.',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/02/10/15/48/spices-1191945_1280.jpg'
  },
  {
    name: 'Chillies',
    category: 'Spice',
    season: 'Kharif/Rabi',
    waterNeeds: '600-1000mm',
    temperature: '20-30°C',
    soilType: 'Well-drained sandy loam',
    growthDuration: '150-180 days',
    fertilizer: 'NPK (120:60:60 kg/ha)',
    averagePrice: '₹8,000-12,000/quintal',
    investmentPerAcre: '₹35,000-45,000',
    description: 'Essential spice crop known for its pungency and color.',
    cultivation: 'Regular picking encourages more flowering. Staking needed.',
    imageUrl: 'https://cdn.pixabay.com/photo/2024/02/24/23/14/ai-generated-8594903_1280.jpg'
  },
  {
    name: 'Groundnut',
    category: 'Commercial',
    season: 'Kharif (June-July)',
    waterNeeds: '500-700mm',
    temperature: '25-30°C',
    soilType: 'Well-drained sandy loam',
    growthDuration: '120-140 days',
    fertilizer: 'NPK (20:40:40 kg/ha)',
    averagePrice: '₹4,500-5,500/quintal',
    investmentPerAcre: '₹25,000-30,000',
    description: 'Important oilseed and food crop.',
    cultivation: 'Gypsum application essential. Proper drainage needed.',
    imageUrl: 'https://cdn.pixabay.com/photo/2024/03/23/13/48/ai-generated-8651430_1280.jpg'
  },
  {
    name: 'Jute',
    category: 'Fiber',
    season: 'March-May',
    waterNeeds: '1500-2000mm',
    temperature: '24-35°C',
    soilType: 'Well-drained alluvial soil',
    growthDuration: '120-150 days',
    fertilizer: 'NPK (60:30:30 kg/ha)',
    averagePrice: '₹4,000-5,000/quintal',
    investmentPerAcre: '₹20,000-25,000',
    description: 'Important fiber crop used in packaging and textile industries.',
    cultivation: 'Requires proper spacing. Retting process crucial for fiber quality.',
    imageUrl: 'https://cdn.pixabay.com/photo/2019/03/26/15/47/twine-4082961_1280.jpg'
  },
  {
    name: 'Tobacco',
    category: 'Commercial',
    season: 'Rabi (Sept-Oct)',
    waterNeeds: '500-700mm',
    temperature: '20-30°C',
    soilType: 'Well-drained sandy loam',
    growthDuration: '160-180 days',
    fertilizer: 'NPK (115:50:120 kg/ha)',
    averagePrice: '₹130-160/kg',
    investmentPerAcre: '₹45,000-55,000',
    description: 'Commercial crop primarily used in tobacco industry.',
    cultivation: 'Topping and desuckering essential. Proper curing needed.',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/08/13/01/09/tobacco-3602145_1280.jpg'
  },
  {
    name: 'Mosambi',
    category: 'Fruit',
    season: 'Year-round',
    waterNeeds: '1000-1200mm',
    temperature: '25-35°C',
    soilType: 'Deep, well-drained loamy soil',
    growthDuration: 'Perennial (Fruits in 3-4 years)',
    fertilizer: 'NPK (600:200:200 g/tree)',
    averagePrice: '₹30-50/kg',
    investmentPerAcre: '₹80,000-100,000',
    description: 'Sweet lime fruit crop with high vitamin C content.',
    cultivation: 'Regular pruning needed. Protection from frost important.',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/08/03/12/26/limes-2575957_1280.jpg'
  }
];