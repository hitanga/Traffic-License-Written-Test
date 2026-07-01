/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../types';

export const QUESTIONS_DATABASE: Question[] = [
  // --- CATEGORY 1: TRAFFIC RULES (यातायात नियमहरू) ---
  {
    id: 'tr_side_drive',
    category: 'traffic_rules',
    questionText: {
      en: 'From which side of the road should vehicles be driven in Nepal?',
      ne: 'नेपालमा सवारी साधन सडकको कुन साइडबाट चलाउनुपर्दछ?'
    },
    options: {
      en: ['Right side', 'Left side', 'Middle of the road', 'Any side as convenient'],
      ne: ['दायाँ साइडबाट', 'बायाँ साइडबाट', 'सडकको बीचबाट', 'जता सजिलो हुन्छ त्यतैबाट']
    },
    correctIndex: 1
  },
  {
    id: 'tr_yellow_light',
    category: 'traffic_rules',
    questionText: {
      en: 'What does a yellow light in a traffic signal indicate?',
      ne: 'ट्राफिक लाइटको पहेंलो बत्तीले के संकेत गर्दछ?'
    },
    options: {
      en: ['Stop immediately', 'Prepare to stop or proceed with caution', 'Go at high speed', 'Turn off the engine'],
      ne: ['तुरुन्त रोक्नुहोस्', 'रोकिन तयार हुनुहोस् वा सावधानीपूर्वक अघि बढ्नुहोस्', 'तिव्र गतिमा जानुहोस्', 'इन्जिन बन्द गर्नुहोस्']
    },
    correctIndex: 1
  },
  {
    id: 'tr_zebra_priority',
    category: 'traffic_rules',
    questionText: {
      en: 'Who has the first right of way at a pedestrian (zebra) crossing?',
      ne: 'जेब्रा क्रसिङ (पैदलयात्री क्रसिङ) मा पहिलो प्राथमिकता कसको हुन्छ?'
    },
    options: {
      en: ['Motorcycles', 'Heavy trucks', 'Pedestrians', 'Public buses'],
      ne: ['मोटरसाइकलको', 'भारी ट्रकको', 'पैदलयात्रीको', 'सार्वजनिक बसको']
    },
    correctIndex: 2
  },
  {
    id: 'tr_emergency_priority',
    category: 'traffic_rules',
    questionText: {
      en: 'Which of the following vehicles must be given priority/way first?',
      ne: 'तलका मध्ये कुन सवारी साधनलाई पहिलो प्राथमिकता/बाटो दिनुपर्दछ?'
    },
    options: {
      en: ['Private car', 'Government minister vehicle', 'Ambulance and Fire Brigade', 'VIP tourist bus'],
      ne: ['निजी कार', 'सरकारी मन्त्रीको गाडी', 'एम्बुलेन्स र दमकल', 'भीआईपी पर्यटक बस']
    },
    correctIndex: 2
  },
  {
    id: 'tr_overtake_side',
    category: 'traffic_rules',
    questionText: {
      en: 'From which side should you normally overtake another vehicle?',
      ne: 'सामान्यतया अर्को सवारी साधनलाई कुन साइडबाट ओभरटेक गर्नुपर्दछ?'
    },
    options: {
      en: ['From the left side', 'From the right side', 'From any side with space', 'Overtaking is not allowed in Nepal'],
      ne: ['बायाँ साइडबाट', 'दायाँ साइडबाट', 'जता ठाउँ खाली छ त्यतैबाट', 'नेपालमा ओभरटेक गर्न पाइँदैन']
    },
    correctIndex: 1
  },
  {
    id: 'tr_horn_rule',
    category: 'traffic_rules',
    questionText: {
      en: 'When is it appropriate to blow the horn?',
      ne: 'हर्न बजाउनु कतिबेला उपयुक्त मानिन्छ?'
    },
    options: {
      en: ['To express anger or frustration', 'Only when necessary to avoid an accident or at blind curves', 'To greet friends on the road', 'Continuously while driving in traffic'],
      ne: ['रिस वा आक्रोश व्यक्त गर्न', 'दुर्घटनाबाट बच्न आवश्यक पर्दा वा ओझेल घुम्तीहरूमा मात्र', 'बाटोमा साथीहरूलाई अभिवादन गर्न', 'ट्राफिक जाममा लगातार बजाउन']
    },
    correctIndex: 1
  },
  {
    id: 'tr_no_parking_zone',
    category: 'traffic_rules',
    questionText: {
      en: 'Where is parking strictly prohibited?',
      ne: 'सवारी साधन पार्किङ गर्न कहाँ कडा रूपमा निषेध गरिएको छ?'
    },
    options: {
      en: ['In front of hospital/school gates and on bridges', 'Inside private parking lots', 'In open public grounds', 'On wide empty side roads'],
      ne: ['अस्पताल/विद्यालयको गेट अगाडि र पुलमा', 'निजी पार्किङ स्थल भित्र', 'खुल्ला सार्वजनिक चौरमा', 'फराकिलो खाली सहायक सडकहरूमा']
    },
    correctIndex: 0
  },
  {
    id: 'tr_seatbelt_purpose',
    category: 'traffic_rules',
    questionText: {
      en: 'What is the primary purpose of wearing a seat belt?',
      ne: 'सिट बेल्ट बाँध्नुको मुख्य उद्देश्य के हो?'
    },
    options: {
      en: ['To avoid traffic police fines', 'To maintain neat posture while sitting', 'To minimize injury or death in case of sudden braking or accidents', 'To make the car go faster'],
      ne: ['ट्राफिक प्रहरीको जरिवानाबाट बच्न', 'बस्दा सीधा र सफा मुद्रा कायम राख्न', 'अचानक ब्रेक लाग्दा वा दुर्घटना हुँदा चोटपटक वा मृत्युको जोखिम कम गर्न', 'गाडीको गति बढाउन']
    },
    correctIndex: 2
  },
  {
    id: 'tr_u_turn_prohibit',
    category: 'traffic_rules',
    questionText: {
      en: 'Where should you not take a U-turn?',
      ne: 'कस्तो ठाउँमा सवारी साधन यू-टर्न (U-Turn) गर्नु हुँदैन?'
    },
    options: {
      en: ['On wide 4-lane highways', 'At blind curves, narrow roads, and busy intersections', 'At designated turning points', 'In private driving schools'],
      ne: ['फराकिलो ४ लेनको राजमार्गमा', 'ओझेल घुम्ती, साँघुरो सडक र व्यस्त चौबाटोहरूमा', 'तोकिएको घुम्ती बिन्दुहरूमा', 'निजी ड्राइभिङ स्कूलहरूमा']
    },
    correctIndex: 1
  },
  {
    id: 'tr_roundabout_rule',
    category: 'traffic_rules',
    questionText: {
      en: 'Who has the right of way at a roundabout (golambar)?',
      ne: 'गोलम्बर (Roundabout) मा पहिलो प्राथमिकता कसको हुन्छ?'
    },
    options: {
      en: ['Vehicles entering the roundabout', 'Vehicles already inside/circulating in the roundabout', 'Heavy vehicles only', 'Vehicles going straight'],
      ne: ['गोलम्बरमा प्रवेश गर्न लागेका सवारी साधनको', 'गोलम्बर भित्र घुमिरहेका सवारी साधनको', 'भारी सवारी साधनको मात्र', 'सीधा जान लागेका सवारी साधनको']
    },
    correctIndex: 1
  },

  // --- CATEGORY 2: DRIVING KNOWLEDGE (सवारी साधन ज्ञान) ---
  {
    id: 'dk_clutch_function',
    category: 'driving_knowledge',
    questionText: {
      en: 'What is the main function of the clutch in a manual vehicle?',
      ne: 'म्यानुअल सवारी साधनमा क्लच (Clutch) को मुख्य कार्य के हो?'
    },
    options: {
      en: ['To stop the vehicle instantly', 'To temporarily disconnect the engine from the gearbox to change gears', 'To charge the vehicle battery', 'To control the steering direction'],
      ne: ['सवारी साधनलाई तुरुन्तै रोक्न', 'गियर परिवर्तन गर्नका लागि इन्जिनलाई गियरबक्सबाट अस्थायी रूपमा विच्छेद गर्न', 'सवारीको ब्याट्री चार्ज गर्न', 'स्टेयरिङको दिशा नियन्त्रण गर्न']
    },
    correctIndex: 1
  },
  {
    id: 'dk_handbrake_use',
    category: 'driving_knowledge',
    questionText: {
      en: 'When is the handbrake (parking brake) primarily used?',
      ne: 'ह्यान्डब्रेक (Handbrake) को प्रयोग मुख्यतया कहिले गरिन्छ?'
    },
    options: {
      en: ['To slow down the car at high speeds', 'To keep the vehicle stationary when parked or stopped on slopes', 'To drift around tight corners', 'During reverse gear driving only'],
      ne: ['उच्च गतिमा गाडीको गति कम गर्न', 'पार्किङ गर्दा वा भिरालो बाटोमा गाडी रोकिएको बेला स्थिर राख्न', 'तीव्र मोडहरूमा गाडी घुमाउन (ड्रिफ्ट गर्न)', 'रिभर्स गियरमा गाडी गुडाउँदा मात्र']
    },
    correctIndex: 1
  },
  {
    id: 'dk_engine_oil',
    category: 'driving_knowledge',
    questionText: {
      en: 'What happens if you run an engine with insufficient or zero engine oil?',
      ne: 'सवारी साधनमा पर्याप्त इन्जिन आयल (Engine Oil) नभएमा वा सकिएमा के हुन्छ?'
    },
    options: {
      en: ['The vehicle will consume less fuel', 'The engine parts will overheat, suffer heavy friction, and seize (damage completely)', 'The steering will become stiff', 'The headlights will get dim'],
      ne: ['सवारी साधनले कम इन्धन खपत गर्नेछ', 'इन्जिनका पाटपुर्जाहरू अत्यधिक तातो हुने, खिइने र इन्जिन बिग्रने (सिज हुने) हुन्छ', 'स्टेयरिङ कडा हुनेछ', 'हेडलाइटको उज्यालो कम हुनेछ']
    },
    correctIndex: 1
  },
  {
    id: 'dk_mirror_check',
    category: 'driving_knowledge',
    questionText: {
      en: 'Why is the rearview mirror inside the car adjusted before driving?',
      ne: 'गाडी हाक्नु अघि भित्री रियरभ्यू मिरर (Rearview Mirror) किन मिलाउनुपर्छ?'
    },
    options: {
      en: ['To check the passengers behind', 'To clearly monitor the road and traffic behind without turning your head', 'To check your appearance', 'To reduce glare from front sunshine'],
      ne: ['पछाडि बसेका यात्रुहरूलाई हेर्न', 'टाउको नघुमाई पछाडिको सडक र सवारी साधनहरूको स्पष्ट निगरानी गर्न', 'आफ्नो अनुहार हेर्न', 'अगाडिको घामको किरण कम गर्न']
    },
    correctIndex: 1
  },
  {
    id: 'dk_wiper_purpose',
    category: 'driving_knowledge',
    questionText: {
      en: 'When should windshield wipers be turned on?',
      ne: 'विन्डशिल्ड वाइपर (Windshield Wiper) कहिले अन गर्नुपर्छ?'
    },
    options: {
      en: ['During dusty road driving only', 'When driving in rain, snow, or mist to clear the front view', 'While driving at night', 'When the engine temperature is high'],
      ne: ['धुलाम्मे सडकमा गुड्दा मात्र', 'पानी परेको, हिउँ परेको वा कुहिरो लागेको बेला अगाडिको दृश्य सफा गर्न', 'रातको समयमा गाडी चलाउँदा', 'इन्जिनको तापक्रम उच्च भएको बेला']
    },
    correctIndex: 1
  },
  {
    id: 'dk_battery_symbol',
    category: 'driving_knowledge',
    questionText: {
      en: 'What does the battery indicator light remaining red on the dashboard after starting the engine mean?',
      ne: 'इन्जिन सुरु गरेपछि पनि ड्यासबोर्डमा ब्याट्रीको रातो बत्ती बलिरहनुको अर्थ के हो?'
    },
    options: {
      en: ['The battery is fully charged', 'There is a fault in the charging system/alternator, and the battery is not charging', 'The engine oil is leaking', 'The fuel cap is open'],
      ne: ['ब्याट्री पूर्ण रूपमा चार्ज भएको छ', 'ब्याट्री चार्ज गर्ने प्रणाली/अल्टरनेटरमा खराबी छ र ब्याट्री चार्ज भइरहेको छैन', 'इन्जिन आयल चुहिरहेको छ', 'इन्धनको बिर्को खुल्ला छ']
    },
    correctIndex: 1
  },
  {
    id: 'dk_indicators_timing',
    category: 'driving_knowledge',
    questionText: {
      en: 'How much distance/time before a turn should you turn on your indicators (side lights)?',
      ne: 'मोड मोडिनु भन्दा सामान्यतया कति अघि नै साइड लाइट (इन्डिकेटर) बाल्नुपर्दछ?'
    },
    options: {
      en: ['Just as you start turning the steering wheel', 'At least 30 meters or sufficient time beforehand to warn behind traffic', 'Indicators are not necessary if no cars are visible', 'Only after completing the turn'],
      ne: ['स्टेयरिङ ह्विल घुमाउन सुरु गर्ने बित्तिकै', 'कम्तिमा ३० मिटर अगाडि वा पछाडिका सवारी साधनलाई सचेत गराउन पर्याप्त समय अघि', 'वरपर गाडीहरू नदेखिएमा इन्डिकेटर बाल्न आवश्यक छैन', 'मोड मोडिसकेपछि मात्र']
    },
    correctIndex: 1
  },
  {
    id: 'dk_tire_pressure',
    category: 'driving_knowledge',
    questionText: {
      en: 'What is a major risk of driving a vehicle with under-inflated tires?',
      ne: 'टायरमा हावाको चाप धेरै कम भएको अवस्थामा सवारी साधन गुडाउँदा के मुख्य जोखिम हुन्छ?'
    },
    options: {
      en: ['The brakes will not work at all', 'High risk of tire blowout, poor fuel efficiency, and unstable handling', 'The car engine will stop immediately', 'The sound of the horn will change'],
      ne: ['ब्रेकले पटक्कै काम गर्दैन', 'टायर पड्किने उच्च जोखिम, इन्धन बढी खपत हुने र नियन्त्रण अस्थिर हुने', 'गाडीको इन्जिन तुरुन्तै बन्द हुनेछ', 'हर्नको आवाज परिवर्तन हुनेछ']
    },
    correctIndex: 1
  },

  // --- CATEGORY 3: ROAD SAFETY (सडक सुरक्षा) ---
  {
    id: 'rs_defensive_driving',
    category: 'road_safety',
    questionText: {
      en: 'What is the core principle of "Defensive Driving"?',
      ne: '"डिफेन्सिभ ड्राइभिङ" (सजग ड्राइभिङ) को मुख्य सिद्धान्त के हो?'
    },
    options: {
      en: ['Driving as fast as possible to beat others', 'Anticipating potential hazards on the road and taking proactive safe actions', 'Using continuous horn and flashing high beams', 'Relying completely on other drivers to avoid you'],
      ne: ['अरूलाई जित्नका लागि सकेसम्म तीव्र गतिमा चलाउनु', 'सडकमा हुन सक्ने सम्भावित खतराहरूको पूर्वानुमान गरी पहिले नै सुरक्षित कदम चाल्नु', 'लगातार हर्न बजाउनु र ठूलो बत्ती (हाई बीम) चम्काउनु', 'आफू बच्नका लागि पूर्ण रूपमा अरू चालकहरूमाथि भर पर्नु']
    },
    correctIndex: 1
  },
  {
    id: 'rs_safe_distance',
    category: 'road_safety',
    questionText: {
      en: 'How should you maintain a safe following distance from the vehicle ahead?',
      ne: 'अगाडिको सवारी साधनबाट सुरक्षित दूरी कसरी कायम राख्नुपर्छ?'
    },
    options: {
      en: ['Keep exactly one meter distance', 'Apply the "three-second rule" (increase distance in rain or bad weather)', 'Drive closely to prevent others from cutting in', 'Blow your horn continuously so they move faster'],
      ne: ['ठीक एक मिटरको दूरी कायम राख्ने', '"तीन सेकेन्डको नियम" लागू गर्ने (पानी परेको वा खराब मौसममा यो दूरी बढाउने)', 'अरू गाडीहरू बीचमा छिर्न नदिन नजिकै टाँसिएर चलाउने', 'तिनीहरूलाई छिटो गुडाउन लगातार हर्न बजाउने']
    },
    correctIndex: 1
  },
  {
    id: 'rs_fog_driving',
    category: 'road_safety',
    questionText: {
      en: 'Which lights should you use when driving in dense fog?',
      ne: 'अत्यधिक बाक्लो कुहिरो वा हुस्सु लागेको बेला कुन बत्ती प्रयोग गर्नुपर्दछ?'
    },
    options: {
      en: ['High beam headlights', 'Low beam headlights along with fog lights', 'Interior cabin lights', 'No lights are required during daytime'],
      ne: ['ठूलो (हाई बीम) हेडलाइट', 'सानो (लो बीम) हेडलाइट र फग लाइट (Fog Lights)', 'गाडी भित्रको क्याबिन बत्ती', 'दिउँसोको समयमा कुनै बत्ती बाल्नु पर्दैन']
    },
    correctIndex: 1
  },
  {
    id: 'rs_rain_skid',
    category: 'road_safety',
    questionText: {
      en: 'Why do roads become exceptionally slippery during the first few minutes of rain?',
      ne: 'पानी पर्न सुरु भएको पहिलो केही मिनेटमा सडक किन अत्यधिक चिप्लो हुन्छ?'
    },
    options: {
      en: ['The water triggers chemical reactions in concrete', 'Rain mixes with existing oil, grease, and dust on the road surface', 'Tires expand in temperature changes', 'The wind speed increases suddenly'],
      ne: ['पानीले कङ्क्रिटमा रासायनिक प्रतिक्रिया उत्पन्न गराउँछ', 'पानी सडकको सतहमा जम्मा भएको तेल, ग्रीज र धुलोसँग मिसिन्छ', 'तापक्रम परिवर्तन हुँदा टायरहरू फुल्छन्', 'हावाको गति अचानक बढ्छ']
    },
    correctIndex: 1
  },
  {
    id: 'rs_aquaplaning',
    category: 'road_safety',
    questionText: {
      en: 'What should you do if your vehicle starts aquaplaning (sliding on water puddles)?',
      ne: 'यदि तपाईंको सवारी साधन एक्वाप्लेनिङ (पानी जमेको सडकमा नियन्त्रण गुमाएर चिप्लने) हुन थाल्यो भने के गर्नुपर्छ?'
    },
    options: {
      en: ['Slam the brakes immediately and turn the wheel sharply', 'Ease off the accelerator pedal gradually, hold the steering straight, and do not brake suddenly', 'Turn off the engine ignition key', 'Shift to the highest gear and accelerate'],
      ne: ['तुरुन्तै कडा ब्रेक लगाउने र स्टेयरिङ जोडले घुमाउने', 'एक्सेलेटरबाट खुट्टा बिस्तारै उठाउने, स्टेयरिङ सिधा समात्ने र अचानक ब्रेक नलगाउने', 'गाडीको स्टार्ट चाबी बन्द गर्ने', 'सबैभन्दा माथिल्लो गियरमा हालेर गति बढाउने']
    },
    correctIndex: 1
  },
  {
    id: 'rs_night_glare',
    category: 'road_safety',
    questionText: {
      en: 'What should you do if the high beam headlights of an oncoming vehicle at night dazzle your eyes?',
      ne: 'रातको समयमा विपरित दिशाबाट आउने सवारी साधनको ठूलो बत्ती (हाई बीम) ले आँखा तिर्मिर्याएमा के गर्नुपर्छ?'
    },
    options: {
      en: ['Turn on your high beam in retaliation', 'Look slightly towards the left edge of your lane (white/yellow line) to guide you, and slow down', 'Close both eyes until the vehicle passes', 'Stop immediately in the middle of the highway'],
      ne: ['बदला लिन आफ्नो पनि ठूलो बत्ती बाल्ने', 'आफ्नो लेनको बायाँ छेउको रेखा (सेतो/पहेंलो लाइन) तर्फ हेरेर बाटो ठम्याउने र गति कम गर्ने', 'गाडी नकटुन्जेल दुवै आँखा चिम्लिने', 'राजमार्गको बीचमै तुरुन्तै ब्रेक लगाएर रोकिने']
    },
    correctIndex: 1
  },
  {
    id: 'rs_drunk_driving',
    category: 'road_safety',
    questionText: {
      en: 'What is the legal limit of blood alcohol concentration (BAC) for drivers in Nepal?',
      ne: 'नेपालमा सवारी चालकका लागि रक्सी सेवन (मापसे) को कानुनी सीमा कति तोकिएको छ?'
    },
    options: {
      en: ['0.05% BAC', 'Strictly zero tolerance (0.00% absolute limit)', 'Depends on the weight of the driver', 'Up to 2 pegs of standard alcohol is allowed'],
      ne: ['०.०५% BAC', 'शून्य सहनशीलता (मापसे गरेर चलाउन पूर्ण रूपमा प्रतिबन्ध / ०.००%)', 'चालकको शारीरिक वजनमा भर पर्छ', '२ पेगसम्म रक्सी खाएर चलाउन पाइन्छ']
    },
    correctIndex: 1
  },

  // --- CATEGORY 4: TRAFFIC SYMBOLS (यातायात चिन्हहरू) ---
  {
    id: 'ts_stop',
    category: 'traffic_symbols',
    symbolId: 'stop',
    questionText: {
      en: 'What does this octagonal red traffic sign mean?',
      ne: 'यो आठकुने रातो ट्राफिक चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['Hospital ahead', 'No Entry', 'Stop', 'School crossing'],
      ne: ['अस्पताल अगाडि', 'प्रवेश निषेध', 'रोक्नुहोस् (स्टप)', 'विद्यालय क्षेत्र']
    },
    correctIndex: 2
  },
  {
    id: 'ts_no_entry',
    category: 'traffic_symbols',
    symbolId: 'no-entry',
    questionText: {
      en: 'What does this circular red sign with a horizontal white bar mean?',
      ne: 'सेतो तेर्सो पट्टी भएको यो गोलो रातो चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['No Entry', 'No Parking', 'One Way', 'Road closed ahead'],
      ne: ['प्रवेश निषेध (नो इन्ट्री)', 'पार्किङ निषेध', 'एकतर्फी बाटो', 'अगाडि सडक बन्द छ']
    },
    correctIndex: 0
  },
  {
    id: 'ts_give_way',
    category: 'traffic_symbols',
    symbolId: 'give-way',
    questionText: {
      en: 'What does this inverted triangular sign mean?',
      ne: 'यो उल्टो त्रिकोणात्मक चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['Speed limit ahead', 'Give Way / Yield', 'Danger zone', 'One-way traffic'],
      ne: ['अगाडि गति सीमा छ', 'बाटो दिनुहोस् (गिभ वे)', 'खतराको क्षेत्र', 'एकतर्फी ट्राफिक']
    },
    correctIndex: 1
  },
  {
    id: 'ts_no_parking',
    category: 'traffic_symbols',
    symbolId: 'no-parking',
    questionText: {
      en: 'What does this blue circle with a red border and red slash indicate?',
      ne: 'रातो घेरा र बीचमा रातो छड्के धर्का भएको यो नीलो गोलो चिन्हले के संकेत गर्छ?'
    },
    options: {
      en: ['Stop your vehicle', 'No Entry permitted', 'No Parking allowed', 'No Overtaking'],
      ne: ['गाडी रोक्नुहोस्', 'प्रवेश निषेध', 'पार्किङ निषेध (नो पार्किङ)', 'ओभरटेक निषेध']
    },
    correctIndex: 2
  },
  {
    id: 'ts_no_u_turn',
    category: 'traffic_symbols',
    symbolId: 'no-u-turn',
    questionText: {
      en: 'What restriction does this sign communicate?',
      ne: 'यो चिन्हले कुन प्रतिबन्धलाई संकेत गर्दछ?'
    },
    options: {
      en: ['No Left Turn', 'No Right Turn', 'No U-Turn permitted', 'No Overtaking'],
      ne: ['बायाँ मोड्न निषेध', 'दायाँ मोड्न निषेध', 'यू-टर्न गर्न निषेध (नो यू-टर्न)', 'ओभरटेक निषेध']
    },
    correctIndex: 2
  },
  {
    id: 'ts_no_overtaking',
    category: 'traffic_symbols',
    symbolId: 'no-overtaking',
    questionText: {
      en: 'What does this circular sign showing two cars side-by-side with a red slash mean?',
      ne: 'दुईवटा गाडीहरू समानान्तर रूपमा राखेर रातो धर्काले काटेको यो चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['Narrow road ahead', 'Two-way road starts', 'No Overtaking allowed', 'Speed limit ended'],
      ne: ['अगाडि साँघुरो सडक छ', 'दोहोरो सडक सुरु भयो', 'ओभरटेक गर्न निषेध', 'गति सीमा समाप्त भयो']
    },
    correctIndex: 2
  },
  {
    id: 'ts_speed_limit_50',
    category: 'traffic_symbols',
    symbolId: 'speed-limit-50',
    questionText: {
      en: 'What does this circular sign containing the number 50 mean?',
      ne: 'गोलो घेरा भित्र ५० (50) लेखिएको यो चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['Minimum speed limit is 50 km/h', 'Maximum speed limit is 50 km/h', 'Distance to destination is 50 km', 'Highway number 50'],
      ne: ['न्यूनतम गति ५० किमी/घण्टा', 'अधिकतम गति सीमा ५० किमी/घण्टा', 'गन्तव्यको दूरी ५० किमी बाँकी', 'राजमार्ग नम्बर ५०']
    },
    correctIndex: 1
  },
  {
    id: 'ts_school_ahead',
    category: 'traffic_symbols',
    symbolId: 'school-ahead',
    questionText: {
      en: 'What does this triangular sign depicting two children walking signify?',
      ne: 'दुई बालबालिका हिँडिरहेको यो त्रिकोणात्मक चिन्हले के संकेत गर्छ?'
    },
    options: {
      en: ['Pedestrian zone', 'Zebra crossing ahead', 'School Ahead (drive slowly and watch out)', 'Playground nearby'],
      ne: ['पैदलयात्री हिँड्ने ठाउँ', 'अगाडि जेब्रा क्रसिङ छ', 'विद्यालय क्षेत्र (बिस्तारै चलाउनुहोस् र चनाखो रहनुहोस्)', 'नजिकै खेल मैदान छ']
    },
    correctIndex: 2
  },
  {
    id: 'ts_hospital_ahead',
    category: 'traffic_symbols',
    symbolId: 'hospital-ahead',
    questionText: {
      en: 'What does this blue square sign with a bed and a red cross mean?',
      ne: 'ओछ्यान र रातो क्रस भएको यो नीलो वर्गाकार चिन्हले के बुझाउँछ?'
    },
    options: {
      en: ['Hotel / Lodge ahead', 'Hospital / Medical Centre ahead', 'Rest Area ahead', 'No Horn zone'],
      ne: ['होटल / लज अगाडि', 'अस्पताल / चिकित्सा केन्द्र अगाडि', 'आराम गर्ने ठाउँ अगाडि', 'हर्न बजाउन निषेध क्षेत्र']
    },
    correctIndex: 1
  },
  {
    id: 'ts_pedestrian_crossing',
    category: 'traffic_symbols',
    symbolId: 'pedestrian-crossing',
    questionText: {
      en: 'What does this blue sign depicting a pedestrian walking on stripes indicate?',
      ne: 'सेतो धर्कामा मानिस हिँडिरहेको देखाइएको यो नीलो चिन्हले के संकेत गर्दछ?'
    },
    options: {
      en: ['Pedestrian crossing (zebra crossing) location', 'No Pedestrian entry', 'Jogging track ahead', 'Railway platform'],
      ne: ['पैदलयात्री क्रसिङ (जेब्रा क्रसिङ) भएको स्थान', 'पैदलयात्री प्रवेश निषेध', 'अगाडि दौडने ट्र्याक छ', 'रेलवे प्लेटफर्म']
    },
    correctIndex: 0
  },
  {
    id: 'ts_railway_crossing',
    category: 'traffic_symbols',
    symbolId: 'railway-crossing',
    questionText: {
      en: 'What does this triangular sign showing a steam engine train mean?',
      ne: 'रेलको इन्जिन देखाइएको यो त्रिकोणात्मक चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['No trains allowed', 'Un-guarded or guarded Railway Crossing ahead', 'Metro station nearby', 'Heavy engine parking area'],
      ne: ['रेल निषेध क्षेत्र', 'अगाडि रेल्वे क्रसिङ (ढाट भएको वा नभएको) छ', 'नजिकै मेट्रो स्टेशन छ', 'भारी गाडी पार्किङ गर्ने क्षेत्र']
    },
    correctIndex: 1
  },
  {
    id: 'ts_roundabout',
    category: 'traffic_symbols',
    symbolId: 'roundabout',
    questionText: {
      en: 'What does this circular blue sign with circular arrows mean?',
      ne: 'घुमाउरो तीरहरू भएको यो नीलो गोलो चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['Sharp bend ahead', 'Roundabout (Golambar) ahead', 'No U-Turn permitted', 'One-way traffic only'],
      ne: ['अगाडि तिखो घुम्ती छ', 'अगाडि गोलम्बर (Roundabout) छ', 'यू-टर्न गर्न निषेध', 'एकतर्फी ट्राफिक मात्र']
    },
    correctIndex: 1
  },
  {
    id: 'ts_slippery_road',
    category: 'traffic_symbols',
    symbolId: 'slippery-road',
    questionText: {
      en: 'What does this sign showing a car with wiggly skid lines caution you about?',
      ne: 'बाङ्गो-टिङ्गो टायरको निशाना र कार देखाइएको यो चिन्हले के चेतावनी दिन्छ?'
    },
    options: {
      en: ['Dangerous turns ahead', 'Slippery road ahead (drive with care)', 'Car racing track ahead', 'Loose gravel on road'],
      ne: ['अगाडि खतरनाक घुम्तीहरू छन्', 'अगाडि चिप्लो बाटो छ (सावधानीपूर्वक चलाउनुहोस्)', 'अगाडि कार रेसिङ ट्र्याक छ', 'सडकमा रोडा/ढुङ्गाहरू छरिएका छन्']
    },
    correctIndex: 1
  },
  {
    id: 'ts_narrow_bridge',
    category: 'traffic_symbols',
    symbolId: 'narrow-bridge',
    questionText: {
      en: 'What does this triangular sign depicting a narrowing lane outline represent?',
      ne: 'दूवै छेउबाट साँघुरिँदै गएको बाटो देखाइएको यो त्रिकोणात्मक चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['Narrow bridge ahead', 'One-way street ahead', 'Dead end street', 'Steep descent ahead'],
      ne: ['अगाडि साँघुरो पुल छ', 'एकतर्फी सडक अगाडि छ', 'अगाडि बन्द सडक छ', 'अगाडि तीव्र ओरालो छ']
    },
    correctIndex: 0
  },
  {
    id: 'ts_road_work_ahead',
    category: 'traffic_symbols',
    symbolId: 'road-work-ahead',
    questionText: {
      en: 'What does this sign with a person digging with a shovel mean?',
      ne: 'फरुवा बोकेर काम गरिरहेको मानिसको आकृति भएको यो चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['No entry for pedestrians', 'Road Work Ahead (construction or repairs)', 'Farming zone ahead', 'Landslide prone area'],
      ne: ['पैदलयात्रीलाई प्रवेश निषेध', 'अगाडि सडक मर्मतको काम भइरहेको छ', 'अगाडि कृषि क्षेत्र छ', 'पहिरो जान सक्ने जोखिम क्षेत्र']
    },
    correctIndex: 1
  },
  {
    id: 'ts_dangerous_curve_right',
    category: 'traffic_symbols',
    symbolId: 'dangerous-curve-right',
    questionText: {
      en: 'What does this triangular sign with a right-bending arrow mean?',
      ne: 'दायाँतर्फ मोडिएको तीर चिन्ह भएको यो त्रिकोणात्मक चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['One way right only', 'Dangerous curve to the right', 'Diversion to right side', 'Right turn permitted'],
      ne: ['एकतर्फी दायाँ मात्र', 'दायाँतर्फ खतरनाक घुम्ती छ', 'दायाँतर्फ डाइभर्सन (बाटो परिवर्तन)', 'दायाँ मोड्न पाइने']
    },
    correctIndex: 1
  },
  {
    id: 'ts_steep_ascent',
    category: 'traffic_symbols',
    symbolId: 'steep-ascent',
    questionText: {
      en: 'What does this sign showing a car climbing a slope with 10% marking caution you about?',
      ne: '१०% (10%) लेखिएको र उकालो चढेको कार भएको यो चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['Steep ascent (upward climb) ahead', 'Steep descent (downward slope) ahead', 'Speed limits increase by 10%', 'Narrow uphill road'],
      ne: ['अगाडि तीव्र उकालो (Steep Ascent) छ', 'अगाडि तीव्र ओरालो (Steep Descent) छ', 'गति सीमा १०% ले बढ्यो', 'साँघुरो उकालो बाटो']
    },
    correctIndex: 0
  },
  {
    id: 'ts_steep_descent',
    category: 'traffic_symbols',
    symbolId: 'steep-descent',
    questionText: {
      en: 'What does this sign showing a car descending a slope with 10% marking represent?',
      ne: '१०% (10%) लेखिएको र ओरालो झरेको कार भएको यो चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['Steep ascent ahead', 'Steep descent (downward slope) ahead', 'Bumpy road ahead', 'Slippery bridge'],
      ne: ['अगाडि तीव्र उकालो छ', 'अगाडि तीव्र ओरालो (Steep Descent) छ', 'अगाडि खाल्डाखुल्डी भएको बाटो छ', 'चिप्लो पुल']
    },
    correctIndex: 1
  },
  {
    id: 'ts_one_way_right',
    category: 'traffic_symbols',
    symbolId: 'one-way-right',
    questionText: {
      en: 'What does this blue rectangular sign with a white arrow pointing right mean?',
      ne: 'दायाँतर्फ तीर देखाएको यो नीलो आयताकार चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['No entry for vehicles', 'One-Way traffic in the right direction', 'Turn right at the next crossing', 'End of highway'],
      ne: ['सवारी साधनको लागि प्रवेश निषेध', 'दायाँतर्फ एकतर्फी बाटो (वान-वे ट्राफिक)', 'अर्को चोकमा दायाँ मोड्नुहोस्', 'राजमार्गको अन्त्य']
    },
    correctIndex: 1
  },
  {
    id: 'ts_no_horn',
    category: 'traffic_symbols',
    symbolId: 'no-horn',
    questionText: {
      en: 'What does this circular sign showing a horn instrument with a red slash mean?',
      ne: 'हर्नको चित्रलाई रातो धर्काले काटेको यो चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['No Horn zone (silence area)', 'Blow horn continuously', 'No sound system in cars', 'Music festival ahead'],
      ne: ['हर्न बजाउन निषेध क्षेत्र (मौन क्षेत्र)', 'लगातार हर्न बजाउनुहोस्', 'गाडीमा साउण्ड सिस्टम राख्न निषेध', 'अगाडि सांगीतिक उत्सव छ']
    },
    correctIndex: 0
  },
  {
    id: 'ts_traffic_signal_ahead',
    category: 'traffic_symbols',
    symbolId: 'traffic-signal-ahead',
    questionText: {
      en: 'What does this triangular sign with red, yellow, and green stacked circles caution you about?',
      ne: 'रातो, पहेंलो र हरियो गोलाकार बत्तीहरू देखाइएको यो त्रिकोणात्मक चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['Amusement park ahead', 'Traffic Signal Ahead', 'Stop point', 'Toll booth ahead'],
      ne: ['अगाडि मनोरञ्जन पार्क छ', 'अगाडि ट्राफिक संकेत बत्ती (Traffic Signal) छ', 'रोकिने विन्दु', 'अगाडि टोल बुथ छ']
    },
    correctIndex: 1
  },
  {
    id: 'ts_speed_breaker',
    category: 'traffic_symbols',
    symbolId: 'speed-breaker',
    questionText: {
      en: 'What does this triangular sign showing double humps warning you about?',
      ne: 'दोहोरो ढिस्को (Double Humps) भएको यो त्रिकोणात्मक चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['Mountain range ahead', 'Speed Breaker / Bumpy road ahead', 'Ferry crossing', 'Tunnel entry ahead'],
      ne: ['अगाडि हिमाली श्रृंखला छ', 'अगाडि गति रोधक (Speed Breaker) वा खाल्डाखुल्डी सडक छ', 'डुङ्गा क्रसिङ', 'अगाडि सुरुङ्ग मार्ग छ']
    },
    correctIndex: 1
  },
  {
    id: 'ts_diversion_right',
    category: 'traffic_symbols',
    symbolId: 'diversion-right',
    questionText: {
      en: 'What does this blue square sign with an arrow pointing right and diagonal markings represent?',
      ne: 'दायाँतर्फ तीर र छड्के धर्काहरू भएको यो नीलो वर्गाकार चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['Right turn only', 'Diversion to the right side (main road blocked)', 'No parking on the right', 'Slippery curb'],
      ne: ['दायाँ मात्र मोड्न पाइने', 'दायाँतर्फ डाइभर्सन (मुख्य बाटो बन्द भई दायाँबाट जानुपर्ने)', 'दायाँतर्फ पार्किङ निषेध', 'चिप्लो छेउ']
    },
    correctIndex: 1
  },
  {
    id: 'ts_bus_stop',
    category: 'traffic_symbols',
    symbolId: 'bus-stop',
    questionText: {
      en: 'What does this blue rectangular sign with a white bus icon indicate?',
      ne: 'सेतो बसको चित्र अंकित यो नीलो आयताकार चिन्हले के बुझाउँछ?'
    },
    options: {
      en: ['No entry for buses', 'Bus Stop (designated loading/unloading area)', 'Bus workshop ahead', 'Bus parking only'],
      ne: ['बसहरूका लागि प्रवेश निषेध', 'बस विसौनी (बस स्टप)', 'अगाडि बस मर्मत केन्द्र छ', 'बस पार्किङ मात्र गर्ने ठाउँ']
    },
    correctIndex: 1
  },
  {
    id: 'ts_t_junction',
    category: 'traffic_symbols',
    symbolId: 't-junction',
    questionText: {
      en: 'What does this triangular sign showing a black "T" intersection mean?',
      ne: 'अंग्रेजी अक्षर टी (T) जस्तो कालो चिन्ह भएको यो त्रिकोणात्मक चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['Train station ahead', 'T-Junction ahead (main road ends, turn left or right)', 'Dead end ahead', 'No parking zone'],
      ne: ['रेलवे स्टेशन अगाडि', 'अगाडि टी-जङ्क्सन छ (मुख्य बाटो समाप्त भई दायाँ वा बायाँ मोड्नुपर्ने)', 'अगाडि बन्द सडक छ', 'पार्किङ निषेध क्षेत्र']
    },
    correctIndex: 1
  },
  {
    id: 'ts_crossroad',
    category: 'traffic_symbols',
    symbolId: 'crossroad',
    questionText: {
      en: 'What does this triangular sign depicting a black "+" crossroads signify?',
      ne: 'कालो जोड (+) जस्तो चिन्ह भएको यो त्रिकोणात्मक चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['Hospital ahead', 'Crossroad ahead (intersection of roads)', 'No entry from both sides', 'Railway tracks crossing'],
      ne: ['अगाडि अस्पताल छ', 'अगाडि चौबाटो (Crossroad) छ', 'दुवै तर्फबाट प्रवेश निषेध', 'रेल्वे पटरी काटिएको ठाउँ']
    },
    correctIndex: 1
  },
  {
    id: 'ts_y_junction',
    category: 'traffic_symbols',
    symbolId: 'y-junction',
    questionText: {
      en: 'What does this triangular sign depicting a black "Y" intersection mean?',
      ne: 'अंग्रेजी अक्षर वाई (Y) जस्तो कालो चिन्ह भएको यो त्रिकोणात्मक चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['Y-Junction ahead (road splits into two)', 'No parking in the center', 'Youth activity zone', 'Dead end ahead'],
      ne: ['अगाडि वाई-जङ्क्सन छ (सडक दुईवटा सहायक सडकमा बाँडिने ठाउँ)', 'बीच भागमा पार्किङ निषेध', 'युवा गतिविधि क्षेत्र', 'अगाडि सडक बन्द छ']
    },
    correctIndex: 0
  },
  {
    id: 'ts_dead_end',
    category: 'traffic_symbols',
    symbolId: 'dead-end',
    questionText: {
      en: 'What does this blue rectangular sign topped with a red horizontal line represent?',
      ne: 'माथि भागमा रातो तेर्सो रेखा भएको यो नीलो आयताकार चिन्हले के बुझाउँछ?'
    },
    options: {
      en: ['One-way highway starts', 'Dead End (no through road ahead)', 'T-Junction with priority', 'Railway crossing without gate'],
      ne: ['एकतर्फी राजमार्ग सुरु', 'बन्द सडक / मृत अन्त्य (अगाडि जाने बाटो छैन)', 'प्राथमिकता भएको टी-जङ्क्सन', 'गेट नभएको रेल्वे क्रसिङ']
    },
    correctIndex: 1
  },
  {
    id: 'ts_parking',
    category: 'traffic_symbols',
    symbolId: 'parking',
    questionText: {
      en: 'What does this blue square sign with a white "P" signify?',
      ne: 'सेतो पी (P) लेखिएको यो नीलो वर्गाकार चिन्हको अर्थ के हो?'
    },
    options: {
      en: ['Police Station ahead', 'Permitted Parking area', 'Pedestrians only', 'Petrol Pump ahead'],
      ne: ['अगाडि प्रहरी चौकी छ', 'तोकिएको पार्किङ क्षेत्र (पार्किङ गर्न पाइने ठाउँ)', 'पैदलयात्री मात्र हिँड्ने ठाउँ', 'अगाडि पेट्रोल पम्प छ']
    },
    correctIndex: 1
  },
  {
    id: 'ts_u_turn_permitted',
    category: 'traffic_symbols',
    symbolId: 'u-turn-permitted',
    questionText: {
      en: 'What does this blue square with a curved arrow pointing down and back up signify?',
      ne: 'घुमेको तीर चिन्ह भएको यो नीलो वर्गाकार चिन्हले के संकेत गर्दछ?'
    },
    options: {
      en: ['No U-Turn permitted', 'U-Turn Permitted here', 'Sharp curves ahead', 'Roundabout ahead'],
      ne: ['यू-टर्न गर्न निषेध', 'यहाँबाट यू-टर्न गर्न पाइने (अनुमति प्राप्त)', 'अगाडि तिखा मोडहरू छन्', 'अगाडि गोलम्बर छ']
    },
    correctIndex: 1
  }
];

/**
 * Shuffles an array of items randomly.
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Prepares a randomized exam consisting of exactly 25 questions selected
 * from the database, with questions and their options shuffled.
 */
export function generateRandomExam(count = 25): { question: Question; shuffledOptions: any[] }[] {
  // 1. Shuffled the questions in database
  const shuffledQuestions = shuffleArray(QUESTIONS_DATABASE);
  
  // 2. Select first `count` questions
  const selected = shuffledQuestions.slice(0, Math.min(count, shuffledQuestions.length));
  
  // 3. For each selected question, shuffle the options and map them
  return selected.map((q) => {
    // We will pack options with their original index to track correctness
    const optionPack = q.options.en.map((_, index) => ({
      originalIndex: index,
      textEn: q.options.en[index],
      textNe: q.options.ne[index]
    }));
    
    // Shuffle the options
    const shuffledOptions = shuffleArray(optionPack);
    
    return {
      question: q,
      shuffledOptions,
      userSelectedIndex: null
    };
  });
}
