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

// ==========================================
// PROGRAMMATIC DYNAMIC QUESTION GENERATOR
// ==========================================
function generateDynamicQuestions(): Question[] {
  const list: Question[] = [];

  // --- SUB-GENERATOR 1: Speed Limits ---
  const speedVehicles = [
    { en: 'a scooter', ne: 'स्कूटर' },
    { en: 'an electric car', ne: 'इलेक्ट्रिक कार' },
    { en: 'a public minibus', ne: 'सार्वजनिक मिनीबस' },
    { en: 'a heavy tipper truck', ne: 'भारी टिपर ट्रक' }
  ];
  
  const speedLocations = [
    { en: 'near a national park wildlife crossing', ne: 'राष्ट्रिय निकुञ्जको वन्यजन्तु क्रसिङ नजिक', speed: 30 },
    { en: 'on a wet, rainy highway', ne: 'पानी परिरहेको चिप्लो राजमार्गमा', speed: 50 },
    { en: 'inside a narrow road tunnel', ne: 'साँघुरो सडक सुरुङ्ग मार्ग भित्र', speed: 40 },
    { en: 'on an elevated flyover bridge', ne: 'फ्लाइओभर पुल माथि', speed: 40 },
    { en: 'through a dense, foggy highway', ne: 'बाक्लो कुहिरो लागेको राजमार्गमा', speed: 30 },
    { en: 'on a narrow gravel village road', ne: 'साँघुरो कच्ची ग्रामीण सडकमा', speed: 20 }
  ];
  
  speedVehicles.forEach((v, vIndex) => {
    speedLocations.forEach((loc, locIndex) => {
      const id = `gen_speed_${vIndex}_${locIndex}`;
      list.push({
        id,
        category: 'traffic_rules',
        questionText: {
          en: `What is the recommended safe speed limit for ${v.en} while driving ${loc.en}?`,
          ne: `${loc.ne} मा ${v.ne} चलाउँदा सुरक्षित रहने तोकिएको वा सिफारिस गरिएको गति सीमा कति हो?`
        },
        options: {
          en: [
            `${loc.speed} km/h`,
            `${loc.speed + 15} km/h`,
            `${loc.speed + 30} km/h`,
            `10 km/h`
          ],
          ne: [
            `${loc.speed} किमी/घण्टा`,
            `${loc.speed + 15} किमी/घण्टा`,
            `${loc.speed + 30} किमी/घण्टा`,
            `१० किमी/घण्टा`
          ]
        },
        correctIndex: 0
      });
    });
  });

  // --- SUB-GENERATOR 2: License Categories & Registration ---
  const licenseVehicles = [
    { code: 'Category A', nameEn: 'Electric Scooter', nameNe: 'इलेक्ट्रिक स्कूटर', category: 'A' },
    { code: 'Category B', nameEn: 'Electric Jeep', nameNe: 'इलेक्ट्रिक जीप', category: 'B' },
    { code: 'Category D', nameEn: 'Power Tiller agricultural tractor', nameNe: 'पावर टिलर कृषि ट्याक्टर', category: 'D' },
    { code: 'Category C', nameEn: 'Three-wheeler Auto Tempo', nameNe: 'तीन पाङ्ग्रे टेम्पो अटो', category: 'C' },
    { code: 'Category E', nameEn: 'Farm Tractor', nameNe: 'कृषि कार्यमा प्रयोग हुने ट्याक्टर', category: 'E' },
    { code: 'Category F', nameEn: 'Delivery Minitruck', nameNe: 'डेलिभरी मिनीट्रक', category: 'F' },
    { code: 'Category G', nameEn: 'Standard Public Passenger Bus', nameNe: 'सार्वजनिक ठूलो बस', category: 'G' },
    { code: 'Category H', nameEn: 'Road Roller machine', nameNe: 'सडक पिच गर्ने रोड रोलर', category: 'H' }
  ];

  licenseVehicles.forEach((v, vIndex) => {
    // Question 1: Class category
    list.push({
      id: `gen_lic_cat_${vIndex}`,
      category: 'traffic_rules',
      questionText: {
        en: `Under Nepal regulations, which driving license category is required to legally drive ${v.nameEn}?`,
        ne: `नेपालको नियम अनुसार, ${v.nameNe} कानुनी रूपमा चलाउनका लागि कुन वर्ग (Category) को अनुमति पत्र आवश्यक पर्दछ?`
      },
      options: {
        en: [`${v.code}`, `Category Z`, `Category M`, `No license required`],
        ne: [`${v.code}`, `वर्ग Z`, `वर्ग M`, `लाइसेन्स आवश्यक पर्दैन`]
      },
      correctIndex: 0
    });

    // Question 2: Renew cycle
    list.push({
      id: `gen_lic_renew_${vIndex}`,
      category: 'traffic_rules',
      questionText: {
        en: `What is the standard interval for renewing the vehicle ownership tax and registration of ${v.nameEn} in Nepal?`,
        ne: `नेपालमा ${v.nameNe} को स्वामित्व कर तिर्ने र सवारी दर्ता किताब नवीकरण गर्ने मानक समयावधि कति हो?`
      },
      options: {
        en: ['Every year (annually)', 'Every 5 years', 'Once every 10 years', 'No renewal needed'],
        ne: ['प्रत्येक वर्ष (वार्षिक रूपमा)', 'प्रत्येक ५ वर्षमा', 'प्रत्येक १० वर्षमा', 'नवीकरण गर्न आवश्यक छैन']
      },
      correctIndex: 0
    });
  });

  // --- SUB-GENERATOR 3: Clearance distances ---
  const distanceObjects = [
    { nameEn: 'a fire hydrant outlet', nameNe: 'फायर हाइड्रेन्ट (दमकल पानी बिन्दु)', dist: 5 },
    { nameEn: 'a pedestrian zebra crossing', nameNe: 'जेब्रा क्रसिङ (पैदलयात्री क्रसिङ)', dist: 10 },
    { nameEn: 'a busy road intersection corner', nameNe: 'व्यस्त सडक चौबाटो वा मोडको छेउ', dist: 10 },
    { nameEn: 'a designated passenger bus stop', nameNe: 'तोकिएको सार्वजनिक बस विसौनी क्षेत्र', dist: 15 },
    { nameEn: 'a hospital main entrance gate', nameNe: 'अस्पतालको मुख्य प्रवेशद्वार', dist: 10 },
    { nameEn: 'a school main gate', nameNe: 'विद्यालयको मुख्य गेट', dist: 10 },
    { nameEn: 'a highway bridge entrance', nameNe: 'राजमार्गको पुलको प्रवेशद्वार', dist: 15 },
    { nameEn: 'a level railway crossing gate', nameNe: 'रेल्वे लेभल क्रसिङको ढोका', dist: 20 }
  ];

  distanceObjects.forEach((obj, objIndex) => {
    list.push({
      id: `gen_dist_park_${objIndex}`,
      category: 'traffic_rules',
      questionText: {
        en: `According to Nepal standards, within how many meters of ${obj.nameEn} is parking strictly prohibited?`,
        ne: `नेपालको मापदण्ड अनुसार, ${obj.nameNe} बाट कति मिटर भित्र सवारी साधन पार्किङ गर्न कडा रूपमा निषेध गरिएको छ?`
      },
      options: {
        en: [
          `${obj.dist} meters`,
          `${obj.dist + 10} meters`,
          `2 meters`,
          `No distance restriction`
        ],
        ne: [
          `${obj.dist} मिटर`,
          `${obj.dist + 10} मिटर`,
          `२ मिटर`,
          `कुनै दूरी सीमा छैन`
        ]
      },
      correctIndex: 0
    });

    list.push({
      id: `gen_dist_stop_${objIndex}`,
      category: 'road_safety',
      questionText: {
        en: `When stopping your vehicle behind another in heavy traffic near ${obj.nameEn}, what minimum clearance distance is recommended?`,
        ne: `व्यस्त ट्राफिकमा ${obj.nameNe} नजिक अर्को सवारी साधनको पछाडि रोकिँदा कम्तिमा कति दूरीको खाली ठाउँ छोड्न सिफारिस गरिन्छ?`
      },
      options: {
        en: [
          `At least 2 to 3 meters (so rear tires are visible)`,
          `Exactly 10 centimeters`,
          `At least 15 meters`,
          `Clearance is not needed`
        ],
        ne: [
          `कम्तिमा २ देखि ३ मिटर (अगाडिको गाडीको पछाडिको टायर देखिने गरी)`,
          `ठीक १० सेन्टिमिटर`,
          `कम्तिमा १५ मिटर`,
          `दूरी छोड्नु आवश्यक छैन`
        ]
      },
      correctIndex: 0
    });
  });

  // --- SUB-GENERATOR 4: Traffic Signals ---
  const trafficSignals = [
    {
      lightEn: 'flashing red traffic signal light',
      lightNe: 'झिझिम गरिरहेको (फ्लासिङ) रातो ट्राफिक बत्ती',
      actionEn: 'Stop completely, check for safety, and proceed when the way is clear',
      actionNe: 'पूर्ण रूपमा रोकिने, बाटो सुरक्षित छ भनी जाँच गर्ने र बाटो खाली भएपछि अगाडि बढ्ने'
    },
    {
      lightEn: 'flashing yellow traffic signal light',
      lightNe: 'झिझिम गरिरहेको (फ्लासिङ) पहेंलो ट्राफिक बत्ती',
      actionEn: 'Slow down and proceed with extreme caution and alertness',
      actionNe: 'गति कम गर्ने र अत्यधिक सावधानीका साथ चनाखो भई अगाडि बढ्ने'
    },
    {
      lightEn: 'steady red arrow signal pointing left',
      lightNe: 'स्थिर रातो बायाँतर्फ देखाउने तीर बत्ती',
      actionEn: 'Wait and do not turn left until the signal turns green',
      actionNe: 'प्रतीक्षा गर्ने र संकेत बत्ती हरियो नभएसम्म बायाँ नमोडिने'
    },
    {
      lightEn: 'steady green arrow signal pointing right',
      lightNe: 'स्थिर हरियो दायाँतर्फ देखाउने तीर बत्ती',
      actionEn: 'Right turn permitted with appropriate right-of-way priority',
      actionNe: 'दायाँ मोड्न सुरक्षित रूपमा प्राथमिकताका साथ अनुमति छ'
    },
    {
      lightEn: 'steady red pedestrian figure light',
      lightNe: 'पैदलयात्री संकेतको स्थिर रातो मानिस बत्ती',
      actionEn: 'Pedestrians must wait on the sidewalk and not cross the road',
      actionNe: 'पैदलयात्रीहरू सडक पेटीमै पर्खनुपर्छ र बाटो काट्नु हुँदैन'
    }
  ];

  const signalContexts = [
    { en: 'at a busy multi-lane highway junction', ne: 'व्यस्त बहु-लेन राजमार्गको चौबाटोमा' },
    { en: 'in an urban residential neighborhood crossroad', ne: 'सहरी आवासीय क्षेत्रको चौबाटोमा' },
    { en: 'during heavy rainy conditions at a city square', ne: 'सहरको चोकमा भारी वर्षा भइरहेको बेला' },
    { en: 'at a quiet intersection during late night hours', ne: 'अँध्यारो मध्यरातको समयमा सुनसान चौबाटोमा' }
  ];

  trafficSignals.forEach((sig, sigIndex) => {
    signalContexts.forEach((ctx, ctxIndex) => {
      list.push({
        id: `gen_sig_${sigIndex}_${ctxIndex}`,
        category: 'traffic_symbols',
        questionText: {
          en: `When encountering a ${sig.lightEn} ${ctx.en}, what is the correct driver action?`,
          ne: `${ctx.ne} मा ${sig.lightNe} देख्दा चालकले गर्नुपर्ने सही निर्णय के हो?`
        },
        options: {
          en: [
            `${sig.actionEn}`,
            `Ignore the light and proceed immediately`,
            `Stop and turn off the vehicle engine completely`,
            `Sound the horn continuously to clear traffic`
          ],
          ne: [
            `${sig.actionNe}`,
            `संकेतलाई बेवास्ता गरी तुरुन्तै अगाडि बढ्ने`,
            `रोकिने र सवारी साधनको इन्जिन पूर्ण रूपमा बन्द गर्ने`,
            `ट्राफिक खाली गराउन लगातार हर्न बजाउने`
          ]
        },
        correctIndex: 0
      });
    });
  });

  // --- SUB-GENERATOR 5: Component Functions ---
  const carComponents = [
    { nameEn: 'radiator pressure cap', nameNe: 'रेडिएटर प्रेसर बिर्को (Cap)', funcEn: 'To seal and maintain correct pressure in the engine cooling system', funcNe: 'इन्जिन कुलिङ प्रणालीमा सही दबाब (प्रेसर) कायम राख्न र सिल गर्न' },
    { nameEn: 'engine air filter', nameNe: 'इन्जिन एयर फिल्टर', funcEn: 'To filter out dust and debris from entering combustion cylinders', funcNe: 'इन्जिन दहन सिलिन्डर भित्र धुलो र फोहोरका कणहरू पस्नबाट रोक्न' },
    { nameEn: 'ignition spark plug', nameNe: 'इन्जिन स्पार्क प्लग', funcEn: 'To ignite the compressed air-fuel mixture in petrol engines', funcNe: 'पेट्रोल इन्जिनमा संकुचित इन्धन र हावाको मिश्रणलाई प्रज्वलित गर्न' },
    { nameEn: 'engine fuel filter', nameNe: 'इन्जिन फ्युल फिल्टर', funcEn: 'To screen out contaminants and particles from entering the fuel lines', funcNe: 'इन्धनका पाइपहरूमा फोहोर र ठोस कणहरू प्रवेश गर्नबाट रोक्न' },
    { nameEn: 'disc brake pads', nameNe: 'डिस्क ब्रेक प्याड', funcEn: 'To clamp against the brake rotor and generate slowing friction', funcNe: 'ब्रेक रोटरमा बलियोसँग समातेर गति कम गर्ने घर्षण उत्पन्न गराउन' },
    { nameEn: 'battery alternator', nameNe: 'ब्याट्री अल्टरनेटर', funcEn: 'To charge the car battery and power electrical equipment when running', funcNe: 'इन्जिन चल्दा गाडीको ब्याट्री चार्ज गर्न र विद्युतीय उपकरणहरूलाई उर्जा दिन' },
    { nameEn: 'catalytic converter', nameNe: 'क्याटालिटिक कन्भर्टर', funcEn: 'To convert toxic engine exhaust pollutants into less harmful gases', funcNe: 'इन्जिनबाट निस्कने विषाक्त ग्याँसहरूलाई कम हानिकारक ग्याँसमा परिणत गर्न' },
    { nameEn: 'suspension shock absorbers', nameNe: 'सस्पेन्सन शक एब्जर्भरहरू', funcEn: 'To dampen road shock and keep vehicle tires in constant road contact', funcNe: 'सडकका खाल्डाखुल्डीको धक्का कम गर्न र टायरलाई सडकमै टिकाइराख्न' },
    { nameEn: 'electrical safety fuses', nameNe: 'विद्युतीय सुरक्षा फ्युजहरू', funcEn: 'To break the circuit in case of excessive current to protect electronics', funcNe: 'अत्यधिक विद्युत प्रवाह हुँदा सर्किट विच्छेद गरी विद्युतीय उपकरण जोगाउन' },
    { nameEn: 'gearbox transmission system', nameNe: 'गियरबक्स ट्रान्समिशन प्रणाली', funcEn: 'To transfer engine power and torque to the driving wheels efficiently', funcNe: 'इन्जिनको शक्ति र टर्कलाई ड्राइभिङ पाङ्ग्राहरूमा कुशलतापूर्वक स्थानान्तरण गर्न' }
  ];

  carComponents.forEach((comp, compIndex) => {
    // Function question
    list.push({
      id: `gen_comp_func_${compIndex}`,
      category: 'driving_knowledge',
      questionText: {
        en: `What is the primary operational function of the ${comp.nameEn} in a standard vehicle?`,
        ne: `एक सामान्य सवारी साधनमा ${comp.nameNe} को मुख्य कार्य के हो?`
      },
      options: {
        en: [
          `${comp.funcEn}`,
          `To increase the maximum speed of the engine`,
          `To decrease fuel consumption to zero`,
          `To control the steering and alignment of front wheels`
        ],
        ne: [
          `${comp.funcNe}`,
          `इन्जिनको अधिकतम गति बढाउन`,
          `इन्धन खपतलाई शून्यमा झार्न`,
          `अगाडिको पाङ्ग्राको स्टेयरिङ र एलाइनमेन्ट नियन्त्रण गर्न`
        ]
      },
      correctIndex: 0
    });

    // Failing indicator question
    list.push({
      id: `gen_comp_fail_${compIndex}`,
      category: 'driving_knowledge',
      questionText: {
        en: `What is a common mechanical symptom of a worn or malfunctioning ${comp.nameEn}?`,
        ne: `सवारी साधनमा ${comp.nameNe} बिग्रिएमा वा काम नगरेमा देखा पर्ने सामान्य लक्षण के हो?`
      },
      options: {
        en: [
          `Decreased system efficiency and unusual noises or warnings`,
          `Immediate complete failure of the steering system`,
          `Siren sounds starting automatically`,
          `Windshield wipers turning on randomly`
        ],
        ne: [
          `प्रणालीको दक्षतामा ह्रास आउने र असामान्य आवाज वा चेतावनी देखा पर्ने`,
          `स्टेयरिङ प्रणाली तुरुन्तै पूर्ण रूपमा ठप्प हुने`,
          `आपतकालीन साइरन स्वतः बज्न सुरु हुने`,
          `विन्डशिल्ड वाइपरहरू बिना कारण चल्न थाल्ने`
        ]
      },
      correctIndex: 0
    });
  });

  // --- SUB-GENERATOR 6: Tire aspects ---
  const tireAspects = [
    { aspectEn: 'dangerously over-inflated tires', aspectNe: 'अत्यधिक हावा भरिएको टायरहरू', riskEn: 'Bumpy rigid ride, premature center tread wear, and risk of tire blowout', riskNe: 'सवारी कडा र उफ्रने हुने, टायरको बीच भाग चाँडै खिइने र पड्किने जोखिम' },
    { aspectEn: 'severely under-inflated tires', aspectNe: 'हावाको चाप धेरै कम भएको टायरहरू', riskEn: 'Increased fuel consumption, tire sidewall overheating, and outer edge wear', riskNe: 'इन्धन खपत बढी हुने, टायरको भित्री भाग तातो हुने र बाहिरी छेउ खिइने' },
    { aspectEn: 'improperly balanced tires or bad alignment', aspectNe: 'ह्विल एलाइनमेन्ट वा ह्विल ब्यालेन्सिङ नमिलेको टायरहरू', riskEn: 'Steering wheel vibrations at high speed and uneven patchy tread wear', riskNe: 'उच्च गतिमा स्टेयरिङ कम्पन हुने र टायरको कतिपय ठाउँ असमान रूपमा खिइने' },
    { aspectEn: 'tires with bulging bubbles on the sidewall', aspectNe: 'टायरको भित्ता सुन्निएको वा फोका उठेको अवस्था', riskEn: 'Severe internal structure damage and extreme risk of immediate tire blowout', riskNe: 'टायरको भित्री बलियो संरचना बिग्रिएको र गुडिरहेको बेला पड्किने अत्यधिक जोखिम' },
    { aspectEn: 'completely bald tires with no tread depth', aspectNe: 'थ्रेड नभएको चिल्लो घिसिएको टायरहरू', riskEn: 'Extremely high risk of skidding, poor braking grip, and aquaplaning', riskNe: 'चिप्लने, ब्रेक नलाग्ने र पानीमा अनियन्त्रित भई तैरिने अत्यधिक जोखिम' }
  ];

  tireAspects.forEach((t, tIndex) => {
    list.push({
      id: `gen_tire_aspect_${tIndex}`,
      category: 'driving_knowledge',
      questionText: {
        en: `What is the major safety hazard associated with driving a vehicle with ${t.aspectEn}?`,
        ne: `${t.aspectNe} भएको सवारी साधन चलाउँदा कुन मुख्य सुरक्षा जोखिम उत्पन्न हुन्छ?`
      },
      options: {
        en: [
          `${t.riskEn}`,
          `The exhaust will start blowing green smoke`,
          `The headlights will automatically turn off`,
          `The horn volume will decrease significantly`
        ],
        ne: [
          `${t.riskNe}`,
          `साइलेन्सरबाट हरियो धुवाँ आउन थाल्नेछ`,
          `हेडलाइटहरू स्वतः बन्द हुनेछन्`,
          `हर्नको आवाज निकै सानो हुनेछ`
        ]
      },
      correctIndex: 0
    });
  });

  // --- SUB-GENERATOR 7: Vehicle & Weather (120 Questions) ---
  const vehiclesCombo1 = [
    { en: 'scooter', ne: 'स्कूटर' },
    { en: 'electric car', ne: 'इलेक्ट्रिक कार' },
    { en: 'public bus', ne: 'सार्वजनिक बस' },
    { en: 'cargo truck', ne: 'सामान बोक्ने ट्रक' },
    { en: 'auto rickshaw', ne: 'अटो रिक्सा' },
    { en: 'private taxi', ne: 'निजी ट्याक्सी' },
    { en: 'farm tractor', ne: 'कृषि ट्याक्टर' },
    { en: 'ambulance', ne: 'एम्बुलेन्स' },
    { en: 'microbus', ne: 'माइक्रोबस' },
    { en: 'delivery van', ne: 'डेलिभरी भ्यान' },
    { en: 'motorcycle', ne: 'मोटरसाइकल' },
    { en: 'tipper truck', ne: 'टिपर ट्रक' }
  ];

  const conditionsCombo1 = [
    {
      en: 'heavy rainy road with deep water puddles',
      ne: 'भारी वर्षा भई सडकमा पानी जमेको अवस्था',
      tipEn: 'Drive slowly to avoid aquaplaning and check brakes immediately after passing through water',
      tipNe: 'एक्वाप्लेनिङबाट बच्न बिस्तारै चलाउने र पानी तरेपछि ब्रेक तुरुन्तै जाँच गर्ने'
    },
    {
      en: 'dense morning fog with low visibility',
      ne: 'बिहानको बाक्लो कुहिरो र हुस्सु लागेर बाटो नदेखिएको अवस्था',
      tipEn: 'Turn on low beam headlights and fog lights, reduce speed, and use lane markings to guide you',
      tipNe: 'लो बीम हेडलाइट र फग लाइट बाल्ने, गति कम गर्ने र लेनको रेखा पछ्याएर चलाउने'
    },
    {
      en: 'steep mountain uphill curves',
      ne: 'तीव्र पहाडी उकालो घुम्तीहरू',
      tipEn: 'Use low gear to maintain constant engine power and sound horn on blind curves',
      tipNe: 'इन्जिनको शक्ति कायम राख्न सानो गियर प्रयोग गर्ने र ओझेल घुम्तीमा हर्न बजाउने'
    },
    {
      en: 'steep downhill mountain slopes',
      ne: 'भिरालो पहाडी ओरालो सडक खण्ड',
      tipEn: 'Use low gear for engine braking to avoid brake overheating, and never drive in neutral',
      tipNe: 'ब्रेक बढी तात्न नदिन इन्जिन ब्रेकिङका लागि साना गियरहरू प्रयोग गर्ने, न्यूट्रलमा कहिल्यै नचलाउने'
    },
    {
      en: 'dark night driving with oncoming high beams',
      ne: 'राति विपरित दिशाबाट आउने गाडीले ठूलो बत्ती बालेको अवस्था',
      tipEn: 'Look slightly towards the left edge of your lane, reduce speed, and do not flash high beams in retaliation',
      tipNe: 'आफ्नो लेनको बायाँ छेउको सेतो रेखामा ध्यान दिने, गति कम गर्ने र रिसमा ठूलो बत्ती नबाल्ने'
    },
    {
      en: 'loose gravel roads under maintenance',
      ne: 'मर्मत भइरहेको रोडा र ढुङ्गा छरिएको कच्ची बाटो',
      tipEn: 'Maintain a slow speed, avoid sudden sharp braking, and increase following distance',
      tipNe: 'गति कम राख्ने, अचानक कडा ब्रेक नलगाउने र अगाडिको गाडीसँगको सुरक्षित दूरी बढाउने'
    },
    {
      en: 'strong gusty winds on an open highway bridge',
      ne: 'खुल्ला राजमार्गको पुलमा तीव्र हावाहुरी चलिरहेको अवस्था',
      tipEn: 'Hold the steering wheel firmly with both hands and decrease speed to counter crosswinds',
      tipNe: 'स्टेयरिङ ह्विल दुवै हातले बलियोसँग समात्ने र नियन्त्रण राख्न गति कम गर्ने'
    },
    {
      en: 'crowded school zone during school hours',
      ne: 'विद्यालय सुरु हुने वा छुट्टी हुने समयको विद्यालय क्षेत्र',
      tipEn: 'Drive at maximum 20 km/h speed limit and watch out for children crossing unexpectedly',
      tipNe: 'अधिकतम २० किमी/घण्टाको गतिमा मात्र चलाउने र अचानक सडकमा आउने बालबालिकाप्रति सजग रहने'
    },
    {
      en: 'entering a long unlit highway tunnel',
      ne: 'लामो र बत्ती नभएको राजमार्ग सुरुङ्ग मार्ग भित्र',
      tipEn: 'Turn on headlights prior to entering, maintain a steady speed, and do not attempt to overtake',
      tipNe: 'सुरुङ्गमा छिर्नु अगावै हेडलाइट बाल्ने, गति स्थिर राख्ने र ओभरटेक गर्ने प्रयास नगर्ने'
    },
    {
      en: 'heavy dusty gravel village road',
      ne: 'अत्यधिक धुलो उडिरहेको ग्रामीण कच्ची बाटो',
      tipEn: 'Roll up windows, turn on headlights or hazard lights for visibility, and increase safe gap',
      tipNe: 'झ्यालका सिसाहरू उठाउने, उज्यालोका लागि हेडलाइट बाल्ने र दुई गाडीबीचको दूरी बढाउने'
    }
  ];

  vehiclesCombo1.forEach((v, vIndex) => {
    conditionsCombo1.forEach((cond, cIndex) => {
      list.push({
        id: `gen_weather_${vIndex}_${cIndex}`,
        category: 'road_safety',
        questionText: {
          en: `When driving ${v.en} in a situation with ${cond.en}, what is the correct safety precaution?`,
          ne: `${cond.ne} मा ${v.ne} चलाउँदा अपनाउनुपर्ने सबैभन्दा सही सुरक्षा सावधानी के हो?`
        },
        options: {
          en: [
            `${cond.tipEn}`,
            `Accelerate to the maximum limit to cross quickly`,
            `Turn off all headlights and switch to neutral gear`,
            `Sound the horn continuously to warn everyone`
          ],
          ne: [
            `${cond.tipNe}`,
            `छिट्टै पार गर्न अधिकतम गतिमा सवारी हुइँक्याउने`,
            `सबै हेडलाइट बन्द गर्ने र न्यूट्रल गियरमा गुडाउने`,
            `सबैलाई सचेत गराउन लगातार हर्न बजाइरहने`
          ]
        },
        correctIndex: 0
      });
    });
  });

  // --- SUB-GENERATOR 8: Vehicle & Dashboard (120 Questions) ---
  const vehiclesCombo2 = [
    { en: 'motorcycle', ne: 'मोटरसाइकल' },
    { en: 'private car', ne: 'निजी कार' },
    { en: 'public bus', ne: 'सार्वजनिक बस' },
    { en: 'cargo truck', ne: 'सामान बोक्ने ट्रक' },
    { en: 'auto rickshaw', ne: 'अटो रिक्सा' },
    { en: 'private taxi', ne: 'निजी ट्याक्सी' },
    { en: 'farm tractor', ne: 'कृषि ट्याक्टर' },
    { en: 'ambulance', ne: 'एम्बुलेन्स' },
    { en: 'microbus', ne: 'माइक्रोबस' },
    { en: 'delivery van', ne: 'डेलिभरी भ्यान' }
  ];

  const indicatorsCombo2 = [
    { nameEn: 'Engine Oil Pressure Light', nameNe: 'इन्जिन आयल प्रेसर चेतावनी लाइट', actionEn: 'Pull over safely immediately, turn off the engine, and check the engine oil level', actionNe: 'तुरुन्तै सुरक्षित स्थानमा रोकेर इन्जिन बन्द गर्ने र इन्जिन आयलको स्तर जाँच गर्ने' },
    { nameEn: 'Engine Overheating Light', nameNe: 'इन्जिन बढी तातेको चेतावनी लाइट', actionEn: 'Stop the vehicle, let engine idle to cool down, check coolant, and never open hot radiator cap', actionNe: 'गाडी रोक्ने, इन्जिनलाई चिसो हुन दिने, कुलान्ट जाँच गर्ने तर तातो रेडिएटर क्याप कहिल्यै नखोल्ने' },
    { nameEn: 'Battery Charging Failure Light', nameNe: 'ब्याट्री चार्जिंग असफल चेतावनी लाइट', actionEn: 'Turn off all unnecessary electrical electronics and drive directly to the nearest workshop', actionNe: 'अनावश्यक सबै विद्युतीय उपकरण बन्द गर्ने र सिधै नजिकैको मर्मत केन्द्रमा लैजाने' },
    { nameEn: 'Brake Failure Warning Light', nameNe: 'ब्रेक प्रणाली खराबी चेतावनी लाइट', actionEn: 'Slow down carefully using gears, pull over to a safe area, check fluid, and call for help', actionNe: 'गियरको मद्दतले सावधानीपूर्वक गति कम गर्ने, गाडी रोक्ने, ब्रेक फ्लुइड जाँच गर्ने र प्राविधिक सहयोग माग्ने' },
    { nameEn: 'Low Fuel Warning Light', nameNe: 'कम इन्धनको चेतावनी लाइट', actionEn: 'Drive to the nearest refueling station and fill fuel immediately to avoid airlocks', actionNe: 'नजिकैको पेट्रोल पम्पमा गएर तुरुन्तै इन्धन भर्ने ताकि इन्जिनमा एयरलक नहोस्' },
    { nameEn: 'Tire Pressure Warning Light', nameNe: 'Tire Pressure Warning Light', actionEn: 'Check pressure in all tires at a safe stop and inflate to the recommended specification', actionNe: 'सुरक्षित स्थानमा रोकेर सबै टायरको हावा जाँच गर्ने र तोकिएको मापदण्डमा हावा भर्ने' },
    { nameEn: 'Check Engine Warning Light', nameNe: 'चेक इन्जिन चेतावनी लाइट', actionEn: 'Schedule a visit to a professional workshop soon for standard computer OBD diagnosis', actionNe: 'चाडै नै मर्मत केन्द्रमा लगेर इन्जिनको कम्प्युटर जाँच गराई खराबी पत्ता लगाउने' },
    { nameEn: 'ABS Warning Light', nameNe: 'एबीएस (ABS) प्रणाली खराबी चेतावनी लाइट', actionEn: 'Note that standard braking works but safety ABS anti-lock system is inactive; seek repair soon', actionNe: 'याद राख्ने कि सामान्य ब्रेकले काम गर्छ तर आपतकालीन एबीएस चल्दैन; त्यसैले चाँडै मर्मत गराउने' },
    { nameEn: 'Airbag Malfunction Light', nameNe: 'एयरब्याग खराबी चेतावनी लाइट', actionEn: 'Have the vehicle serviced soon as airbags may not deploy during a collision', actionNe: 'सुरक्षा जाँच गराउने किनभने दुर्घटना हुँदा एयरब्याग सुरक्षा प्रणाली नखुल्न सक्छ' },
    { nameEn: 'Seatbelt Warning Light', nameNe: 'सिट बेल्ट नलगाएको चेतावनी लाइट', actionEn: 'Fasten your seatbelt immediately and ensure all passengers do the same', actionNe: 'तुरुन्तै आफ्नो सिट बेल्ट बाँध्ने र सवारीमा सवार सबै यात्रुलाई पनि बाँध्न लगाउने' },
    { nameEn: 'High Beam Headlight Indicator', nameNe: 'ठूलो हेडलाइट सूचक लाइट', actionEn: 'Toggle to low beam when oncoming vehicles or pedestrians are in front', actionNe: 'विपरित दिशाबाट सवारी साधन वा मानिसहरू आइरहेको बेला लो बीम (सानो बत्ती) मा झार्ने' },
    { nameEn: 'Hazard Lights Warning Indicator', nameNe: 'हाजार्ड (आपतकालीन) बत्ती सूचक लाइट', actionEn: 'Use only when broken down, during emergency stops, or in severe hazard conditions', actionNe: 'आपतकालीन अवस्थामा, सडकमा गाडी बिग्रिएमा वा गम्भीर जोखिमको बेला मात्र प्रयोग गर्ने' }
  ];

  vehiclesCombo2.forEach((v, vIndex) => {
    indicatorsCombo2.forEach((ind, iIndex) => {
      list.push({
        id: `gen_dash_${vIndex}_${iIndex}`,
        category: 'driving_knowledge',
        questionText: {
          en: `If you are driving ${v.en} and the ${ind.nameEn} lights up on the dashboard, what is the best response?`,
          ne: `यदि तपाईं ${v.ne} चलाइरहनुभएको छ र ड्यासबोर्डमा ${ind.nameNe} बलेमा गर्नुपर्ने सबैभन्दा सही निर्णय के हो?`
        },
        options: {
          en: [
            `${ind.actionEn}`,
            `Increase vehicle speed to clear the fault`,
            `Ignore the warning light completely as it is minor`,
            `Sound the horn loudly and keep driving normally`
          ],
          ne: [
            `${ind.actionNe}`,
            `चेतावनी हटाउन सवारी साधनको गति झन् बढाउने`,
            `यस्ता साना चेतावनीलाई पूर्ण रूपमा बेवास्ता गरेर चलाइरहने`,
            `ठूलो आवाजमा हर्न बजाउने र सामान्य जस्तै चलाइरहने`
          ]
        },
        correctIndex: 0
      });
    });
  });

  // --- SUB-GENERATOR 9: Vehicle & Fine (80 Questions) ---
  const vehiclesCombo3 = [
    { en: 'motorcycle', ne: 'मोटरसाइकल' },
    { en: 'private car', ne: 'निजी कार' },
    { en: 'public bus', ne: 'सार्वजनिक बस' },
    { en: 'tipper truck', ne: 'टिपर ट्रक' },
    { en: 'scooter', ne: 'स्कूटर' },
    { en: 'tractor', ne: 'ट्याक्टर' },
    { en: 'tempo', ne: 'टेम्पो' },
    { en: 'microbus', ne: 'माइक्रोबस' }
  ];

  const violationsCombo3 = [
    { nameEn: 'driving without a valid license', nameNe: 'चालक अनुमति पत्र (लाइसेन्स) बिना चलाएको', penaltyEn: 'Fine of 1000 to 1500 Rupees', penaltyNe: 'रु. १००० देखि १५०० सम्म जरिवाना' },
    { nameEn: 'driving under influence of alcohol (MAPASE)', nameNe: 'मादक पदार्थ सेवन (मापसे) गरेर चलाएको', penaltyEn: 'Fine of 1000 Rupees, license marking, and mandatory 1-hour traffic class', penaltyNe: 'रु. १००० जरिवाना र १ घण्टाको अनिवार्य ट्राफिक सचेतना कक्षा' },
    { nameEn: 'violating red traffic light signals', nameNe: 'रातो ट्राफिक संकेत बत्तीको उल्लंघन गरेको', penaltyEn: 'Fine of 500 to 1500 Rupees and progress points deducted', penaltyNe: 'रु. ५०० देखि १५०० सम्म जरिवाना र रेकर्डमा गल्ती रेकर्ड' },
    { nameEn: 'using a mobile phone while driving', nameNe: 'सवारी चलाइरहेको बेला mobile phone प्रयोग गरेको', penaltyEn: 'Fine of 500 to 1500 Rupees', penaltyNe: 'रु. ५०० देखि १५०० सम्म जरिवाना' },
    { nameEn: 'driving the wrong way in a one-way street', nameNe: 'एकतर्फी (वान-वे) सडकमा गलत दिशाबाट चलाएको', penaltyEn: 'Fine of 500 to 1500 Rupees', penaltyNe: 'रु. ५०० देखि १५०० सम्म जरिवाना' },
    { nameEn: 'exceeding speed limit in residential zones', nameNe: 'आवासीय क्षेत्रमा तोकिएको गति सीमा भन्दा बढी तीव्र गतिमा चलाएको', penaltyEn: 'Fine of 500 to 1500 Rupees', penaltyNe: 'रु. ५०० देखि १५०० सम्म जरिवाना' },
    { nameEn: 'parking in a designated No Parking zone', nameNe: 'नो पार्किङ (पार्किङ निषेध) तोकिएको क्षेत्रमा पार्किङ गरेको', penaltyEn: 'Fine of 500 to 1500 Rupees and wheel locking or towing', penaltyNe: 'रु. ५०० देखि १५०० सम्म जरिवाना र ह्विल लक वा गाडी उठाइने' },
    { nameEn: 'refusing to present bluebook/documents to traffic police', nameNe: 'ट्राफिक प्रहरीले जाँच गर्दा कागजात वा ब्लूबुक देखाउन इन्कार गरेको', penaltyEn: 'Fine of 500 to 1500 Rupees', penaltyNe: 'रु. ५०० देखि १५०० सम्म जरिवाना' },
    { nameEn: 'carrying passengers on the roof or cargo area', nameNe: 'छतमा वा सामान लोड गर्ने भागमा यात्रु चढाएको', penaltyEn: 'Fine of 500 to 1500 Rupees and immediate removal of passengers', penaltyNe: 'रु. ५०० देखि १५०० सम्म जरिवाना र यात्रुलाई तुरुन्त ओराल्नुपर्ने' },
    { nameEn: 'driving with expired registration bluebook', nameNe: 'नवीकरण म्याद नाघेको ब्लूबुक (सवारी दर्ता किताब) राखेर चलाएको', penaltyEn: 'Fine of 500 to 1500 Rupees and regular tax penalties', penaltyNe: 'रु. ५०० देखि १५०० सम्म जरिवाना र नियमित सवारी करको जरिवाना' }
  ];

  vehiclesCombo3.forEach((v, vIndex) => {
    violationsCombo3.forEach((viol, viIndex) => {
      list.push({
        id: `gen_fine_${vIndex}_${viIndex}`,
        category: 'traffic_rules',
        questionText: {
          en: `If a driver of ${v.en} is penalized for ${viol.nameEn} in Nepal, what is the standard penalty?`,
          ne: `नेपालमा ${v.ne} चलाउँदा ${viol.nameNe} कसूरमा ट्राफिक प्रहरीले कस्तो सजाय वा जरिवाना गर्दछ?`
        },
        options: {
          en: [
            `${viol.penaltyEn}`,
            `Permanent cancellation of driving license`,
            `Jail sentence of up to 6 months`,
            `Confiscation of the vehicle permanently`
          ],
          ne: [
            `${viol.penaltyNe}`,
            `सवारी चालक अनुमति पत्र स्थायी रूपमा खारेज`,
            `६ महिना सम्मको जेल सजाय`,
            `सवारी साधन स्थायी रूपमा जफत`
          ]
        },
        correctIndex: 0
      });
    });
  });

  return list;
}

// Push generated questions to the QUESTIONS_DATABASE
QUESTIONS_DATABASE.push(...generateDynamicQuestions());

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
