import { useParams } from 'react-router-dom'
import './BlogDetail.css'

const IMG = {
  // ── Cardiology ──────────────────────────────────────────────────────────────
  heartDoctor:     'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800&auto=format&fit=crop',
  chestPain:       'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&auto=format&fit=crop',
  breathless:      'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&auto=format&fit=crop',
  dizzy:           'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&auto=format&fit=crop',
  ecg:             'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&auto=format&fit=crop',
  swelling:        'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800&auto=format&fit=crop',
  consultation:    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop',

  // ── Lung Health ─────────────────────────────────────────────────────────────
  lungs:           'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&auto=format&fit=crop',
  coughing:        'https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=800&auto=format&fit=crop',
  smoking:         'https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?w=800&auto=format&fit=crop',
  exercise:        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop',

  // ── Virtual Consultations ───────────────────────────────────────────────────
  videoCall:       'https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800&auto=format&fit=crop',
  ruralHealth:     'https://images.unsplash.com/photo-1576765607924-3f7b8410a787?w=800&auto=format&fit=crop',
  savings:         'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop',
  mentalHealth:    'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?w=800&auto=format&fit=crop',

  // ── Gut Health ──────────────────────────────────────────────────────────────
  healthyFood:     'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop',
  gutPain:         'https://media.istockphoto.com/id/1085220674/photo/abdominal-pain-stock-image.webp?a=1&b=1&s=612x612&w=0&k=20&c=obKEwk8Vd0iJG_jiImPY57WBSo1ADMoOJBfmQjAEZOw=',
  fermented:       'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&auto=format&fit=crop',
  fiber:           'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop',

  // ── Cancer ──────────────────────────────────────────────────────────────────
  cancerAwareness: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop',
  earlyWarning:    'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&auto=format&fit=crop',
  noSmoking:       'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop',
  cancerDiet:      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop',
  screening:       'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&auto=format&fit=crop',

  // ── High Blood Pressure ─────────────────────────────────────────────────────
bpOverview:   'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&auto=format&fit=crop',
bpSymptoms:   'https://images.unsplash.com/photo-1541199249251-f713e6145474?w=800&auto=format&fit=crop',
bpCauses:     'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop',
bpDiet:       'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop',
bpScreening:  'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&auto=format&fit=crop',

// ── Diabetes ─────────────────────────────────────────────────────────────────
diabetesOverview:  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
diabetesSymptoms:  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop',
diabetesCauses:    'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop',
diabetesDiet:      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop',
diabetesScreening: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=800&auto=format&fit=crop', 

// ── Mental Health ───────────────────────────────────────────────────────────
mentalOverview:  'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&auto=format&fit=crop',
mentalSymptoms:  'https://images.unsplash.com/photo-1541199249251-f713e6145474?w=800&auto=format&fit=crop',
mentalCauses:    'https://images.unsplash.com/photo-1489533119213-66a5cd877091?w=800&auto=format&fit=crop',
mentalCoping:    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop',
mentalHelp:      'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&auto=format&fit=crop',

// ── Women's Health ──────────────────────────────────────────────────────────
womensOverview:  'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop',
womensSymptoms:  'https://images.unsplash.com/photo-1550831107-1553da8c8464?w=800&auto=format&fit=crop',
womensScreenings:'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&auto=format&fit=crop',
womensLifestyle: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop',
womensCare:      'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&auto=format&fit=crop',

// ── Joint Pain / Orthopedic ─────────────────────────────────────────────────
jointOverview:   'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop',
jointSymptoms:   'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop',
jointCauses:     'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop',
jointCare:       'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop',
jointDoctor:     'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop',

}

function SplitSection({ img, alt, title, children, reverse = false }) {
  return (
    <div className={`split-section${reverse ? ' reverse' : ''}`}>
      <div className="split-img-wrap">
        <img src={img} alt={alt} />
      </div>
      <div className="split-text">
        {title && <h2>{title}</h2>}
        <div className="split-body">{children}</div>
      </div>
    </div>
  )
}

const blogs = [

  // ── 1. CARDIOLOGY ──────────────────────────────────────────────────────────
{
  slug: "cardiologist-signs",
  title: "5 Warning Signs You Should See a Cardiologist",
  emoji: "❤️",

  category: "Cardiology",
  author: "Cuure Health Medical Team",
  published: "July 5, 2026",
  updated: "July 5, 2026",
  readTime: "6 min read",
    description: (
      <>
        <SplitSection img={IMG.heartDoctor} alt="Doctor examining heart patient" title="Why Heart Health Matters">
          <p>Knowing the warning signs you should see a cardiologist for can help detect heart disease early and prevent serious complications. Many heart conditions develop gradually, and recognizing symptoms early can significantly improve treatment outcomes.</p>
          <p>A cardiologist is a doctor who specializes in diagnosing and treating diseases affecting the heart and blood vessels. Consulting a heart specialist at the first sign of trouble allows early diagnosis through tests such as an ECG, echocardiogram, stress test, or heart monitoring. Identifying problems early can help reduce the risk of heart attack, stroke, and heart failure while improving long-term heart health.</p>
        </SplitSection>

        <SplitSection img={IMG.chestPain} alt="alt=Man experiencing chest pain, an early warning sign to see a cardiologist" reverse title="1. Chest Pain: A Warning Sign You Should See a Cardiologist">
          <p>Chest pain that occurs during physical activity, emotional stress, or while resting should never be ignored. Although chest pain can have non-cardiac causes, persistent or unexplained discomfort requires immediate medical evaluation to rule out serious heart conditions.</p>
          <p>Not all cardiac chest pain is dramatic. Some people describe it as mild discomfort or indigestion. Women, in particular, often experience atypical symptoms like nausea, jaw pain, or unusual fatigue rather than classic crushing chest pain. Any chest discomfort that is new, recurring, or unexplained deserves immediate medical evaluation.</p>
        </SplitSection>

        <SplitSection img={IMG.breathless} alt="Person experiencing unexplained shortness of breath due to a possible heart condition" title="2. Shortness of Breath May Indicate Heart Disease">
          <p>Feeling breathless after climbing stairs, walking short distances, or performing routine daily activities may be more than just poor fitness. When your heart cannot pump blood efficiently, your body receives less oxygen, making even simple tasks feel exhausting.</p>
          <p>Shortness of breath is a common symptom of conditions such as heart failure, coronary artery disease, or valve disorders. In some cases, fluid may build up in the lungs, causing difficulty breathing, especially while lying flat or during sleep. If you notice persistent or worsening breathlessness, scheduling a consultation with a cardiologist is important to identify the underlying cause before it becomes a medical emergency.</p>
        </SplitSection>

        <SplitSection img={IMG.dizzy} alt="Person experiencing dizziness caused by a possible cardiovascular condition" reverse title="3. Dizziness or Fainting Could Signal a Heart Problem">
          <p>Frequent dizziness, unexplained lightheadedness, or fainting can indicate that your brain is not receiving enough oxygen-rich blood. These symptoms may result from abnormal heart rhythms, low blood pressure, or other cardiovascular conditions that require prompt evaluation.</p>
          <p>Although occasional dizziness can have many causes, repeated episodes—particularly when accompanied by chest pain, palpitations, or shortness of breath—should never be ignored. A cardiologist can perform specialized heart tests to determine whether an underlying heart condition is responsible and recommend appropriate treatment.</p>
        </SplitSection>

        <SplitSection img={IMG.ecg} alt="ECG heart monitoring" title="4. Frequent Heart Palpitations or Irregular Heartbeats">
          <p>If your heart suddenly feels like it is racing, fluttering, pounding, or skipping beats, you may be experiencing heart palpitations. While temporary palpitations caused by stress, caffeine, exercise, or anxiety are usually harmless, frequent or prolonged episodes deserve medical attention.</p>
          <p>Heart rhythm disorders, including atrial fibrillation (AFib), can increase the risk of stroke, heart failure, and other serious complications. Your cardiologist may recommend tests such as an ECG or a Holter monitor to record your heart rhythm over time and identify irregularities that may not appear during a routine examination.</p>
        </SplitSection>

        <SplitSection img={IMG.swelling} alt="Cardiologist examining swollen legs for signs of heart failure" reverse title="5. Swollen Legs or Ankles Can Be a Sign of Heart Failure">
          <p>Persistent swelling in the legs, ankles, or feet can be an early warning sign of heart failure or poor blood circulation. When the heart struggles to pump blood effectively, fluid can accumulate in the lower limbs, causing noticeable swelling, discomfort, and tight-fitting shoes.</p>
          <p>If swelling occurs alongside fatigue, shortness of breath, rapid weight gain, or reduced physical activity, it may indicate that your heart needs immediate evaluation. A cardiologist can perform imaging studies and blood tests to determine whether your heart is functioning properly and recommend the most effective treatment.</p>
        </SplitSection>

        <SplitSection img={IMG.consultation} alt="Cardiologist consultation" title="When Should You Visit a Cardiologist?">
          <p>If you experience any of these warning signs, don't delay seeking medical advice. Early diagnosis plays a vital role in preventing serious heart complications and improving recovery outcomes.During your consultation, a cardiologist will review your medical history, family history, lifestyle habits, and symptoms before recommending appropriate diagnostic tests.</p>
          <p>Depending on the results, your treatment plan may include lifestyle modifications, medications, regular heart monitoring, or advanced cardiac procedures.Your heart works around the clock to keep your body healthy. Paying attention to early symptoms and seeking expert care at the right time can help protect your heart and improve your overall quality of life.</p>
        </SplitSection>
      </>
    )
  },

  // ── 2. LUNG HEALTH ─────────────────────────────────────────────────────────
  {
    slug: "lung-health",
    title: "How to Improve Lung Health: Symptoms, Causes & Prevention",
    emoji: "🫁",
    category: "Respiratory Health",
author: "Cuure Health Medical Team",
published: "July 5, 2026",
updated: "July 5, 2026",
readTime: "7 min read",
    description: (
      <>
        <SplitSection img={IMG.lungs} alt="Healthy human lungs supporting normal breathing and respiratory health" title="Why Lung Health is Critical">
          <p>Maintaining good lung health is essential for breathing, staying active, and supporting your overall well-being. Your lungs work around the clock, exchanging oxygen and carbon dioxide nearly 20,000 times each day. Although many lung diseases develop gradually, recognizing early symptoms and taking preventive steps can help protect your respiratory health for years to come.</p>
          <p>Globally, chronic respiratory diseases affect over 500 million people. Recognizing early warning signs, understanding your risk factors, and making lifestyle changes can dramatically protect your lung function for decades to come.</p>
        </SplitSection>

        <SplitSection img={IMG.coughing} alt="Person experiencing persistent cough and breathing difficulties due to possible lung disease" reverse title="Warning Signs of Poor Lung Health">
          <p>Lung diseases often develop silently, causing significant damage before symptoms become severe. Watch for these red flags:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Chronic Cough:</strong> A cough persisting beyond 3 weeks — especially with mucus or blood — is never normal.</li>
            <li><strong>Shortness of Breath:</strong> Breathlessness during routine activity that wasn't difficult before is a key early warning sign.</li>
            <li><strong>Wheezing:</strong> A whistling or rattling sound while breathing suggests narrowed or inflamed airways.</li>
            <li><strong>Persistent Fatigue:</strong> When lungs underperform, the body receives less oxygen, causing constant tiredness.</li>
            <li><strong>Chest Pain:</strong> Persistent chest pain, especially when breathing deeply or coughing, may indicate an underlying lung condition that requires medical evaluation.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.smoking} alt="Quit smoking to improve lung health and reduce the risk of chronic lung disease" title="Common Lung Conditions and Their Causes">
          <p>Understanding the most prevalent lung diseases helps you recognize risk and seek timely care:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>COPD:</strong> A progressive condition encompassing emphysema and chronic bronchitis, primarily caused by long-term smoking. It causes permanent airflow limitation that worsens over time.</li>
            <li><strong>Asthma:</strong> Chronic inflammation of the airways causing recurrent episodes of wheezing, breathlessness, and chest tightness. Often triggered by allergens, cold air, or exercise.</li>
            <li><strong>Pneumonia:</strong> An infection that inflames the air sacs, which may fill with fluid or pus. Can be bacterial, viral, or fungal in origin.</li>
            <li><strong>Lung Cancer:</strong> Persistent cough, coughing up blood, unexplained weight loss, and chest pain may be warning signs. Early diagnosis significantly improves treatment outcomes.</li>
            <li><strong>Tuberculosis (TB):</strong> A bacterial infection affecting the lungs that can cause a prolonged cough, fever, night sweats, and weight loss. Early diagnosis and treatment are essential to prevent complications and transmission.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.exercise} alt="Regular exercise helps improve lung capacity and respiratory health" reverse title="7 Proven Steps to Protect Your Lungs">
          <ul style={{ paddingLeft: '1.2rem', lineHeight: 2.1 }}>
            <li><strong>Don't Smoke:</strong> Smoking is responsible for 85% of lung cancer cases. Every cigarette damages alveoli that can never fully repair. Quitting at any age brings measurable benefits within weeks.</li>
            <li><strong>Monitor Indoor Air Quality:</strong> Use HEPA air purifiers, ventilate your home regularly, and avoid mold, dust mites, and chemical fumes from cleaning products or paint.</li>
            <li><strong>Exercise Aerobically:</strong> Brisk walking, swimming, and cycling strengthen the diaphragm and intercostal muscles, improving lung efficiency and oxygen uptake over time.</li>
            <li><strong>Practice Diaphragmatic Breathing:</strong> Deep belly breathing expands the lower lobes of the lungs and improves oxygen exchange — especially beneficial for those with COPD or asthma.</li>
            <li><strong>Stay Physically Active:</strong> Regular physical activity improves lung capacity, strengthens breathing muscles, and enhances oxygen delivery throughout the body.</li>
            <li><strong>Get Recommended Vaccinations:</strong> Vaccines such as influenza and pneumococcal vaccines can help reduce the risk of serious respiratory infections, especially for older adults and people with chronic health conditions.</li>
            <li><strong>Avoid Air Pollution:</strong> Limit exposure to smoke, industrial pollution, and poor air quality whenever possible. Wearing a mask in polluted environments may help reduce harmful particle exposure.</li>
          </ul>
        </SplitSection>
      </>
    )
  },

  // ── 3. VIRTUAL CONSULTATIONS ───────────────────────────────────────────────
  {
    slug: "virtual-consultations",
    title: "Virtual Doctor Consultations: Benefits, Process & When to Use Them",
    emoji: "💻",
    category: "Telemedicine",
author: "Cuure Health Medical Team",
published: "July 5, 2026",
updated: "July 5, 2026",
readTime: "5 min read",
    description: (
      <>
        <SplitSection img={IMG.videoCall} alt="Doctor providing an online video consultation to a patient">
          <p>Virtual doctor consultations have transformed the way people access healthcare. Whether you need medical advice, a follow-up appointment, a prescription refill, or specialist guidance, online consultations provide convenient, secure, and timely access to qualified healthcare professionals without visiting a clinic.</p>
          <p>From routine check-ups and prescription renewals to dermatology appointments, psychiatric therapy, and post-operative follow-ups — almost any non-emergency medical need can now be addressed virtually. And the technology continues to advance rapidly, bringing even more capabilities into the home setting.</p>
        </SplitSection>

        <SplitSection img={IMG.ruralHealth} alt="Patient using telemedicine for an online doctor consultation" reverse title="Who Can Benefit from Virtual Consultations?">
          <p>One of the most profound impacts of virtual consultations has been on healthcare equity. Millions of people in rural areas, developing nations, or underserved urban communities previously had to travel hours to see a specialist — or simply went without care altogether. Telehealth eliminates geography as a barrier, connecting anyone with an internet connection to world-class medical expertise.</p>
          <p>For elderly patients, those with mobility limitations, parents with young children, or anyone with a demanding work schedule, the ability to see a doctor without leaving home removes the most common reasons people delay or skip medical care. Studies show telehealth patients have higher follow-up rates and better medication adherence than traditional care patients.</p>
        </SplitSection>

        <SplitSection img={IMG.savings} alt="Online doctor consultation helping patients save time and healthcare costs" title="Benefits of Online Doctor Consultations">
          <p>The economics of virtual care benefit everyone. Patients save on transportation costs, parking, time off work, and childcare. Clinics reduce overhead costs associated with physical infrastructure, allowing them to see more patients per day. Insurance providers have increasingly recognized these efficiencies, with many now covering telehealth visits at the same rate as in-person appointments.</p>
          <p>A typical in-person appointment involves 20–30 minutes of travel each way, 15–30 minutes in a waiting room, and then the consultation itself. A virtual visit can begin exactly on time, from anywhere, lasting only as long as it needs to. For follow-up appointments or routine prescription management, the time savings over a year can amount to dozens of hours.</p>
        </SplitSection>

        <SplitSection img={IMG.mentalHealth} alt="Virtual mental health consultation with an online therapist" reverse title="Virtual Mental Health Consultations">
          <p>Mental health care is perhaps the single greatest beneficiary of the telehealth revolution. Prior to widespread virtual care, many patients avoided therapy due to stigma, inconvenience, cost, or lack of local providers. A patient in a small town might have had zero psychiatrists within 100 kilometers. Today, that same patient can access a licensed therapist or psychiatrist within days — sometimes hours.</p>
          <p>Research shows that virtual cognitive behavioral therapy (CBT), online support groups, and digital mental health tools are as effective as in-person equivalents for conditions including depression, anxiety, PTSD, and OCD. The privacy of receiving care at home also reduces the hesitation many patients feel about being seen entering a mental health clinic.</p>
        </SplitSection>
      </>
    )
  },

  // ── 4. GUT HEALTH ──────────────────────────────────────────────────────────
  {
    slug: "nutrition-gut-health",
    title: "How to Improve Gut Health Naturally: Diet, Symptoms & Tips",
   emoji: "🌿",
   category: "Nutrition & Gut Health",
author: "Cuure Health Medical Team",
published: "July 5, 2026",
updated: "July 5, 2026",
readTime: "7 min read",
    description: (
      <>
        <SplitSection img={IMG.healthyFood} alt="Healthy foods rich in fiber and probiotics for better gut health" title="Why Your Gut Health Matters More Than You Think">
          <p>Good gut health is essential for healthy digestion, strong immunity, and overall well-being. Your gut is home to trillions of beneficial microorganisms, collectively known as the gut microbiome, which help digest food, absorb nutrients, support immune function, and even influence your mood through the gut-brain connection. Maintaining a healthy gut can improve digestion and reduce the risk of several chronic health conditions.</p>
          <p>The gut microbiome — the community of trillions of bacteria, fungi, and other microorganisms living in your intestines — plays a central role in digesting food, synthesizing vitamins (including B12 and K2), training the immune system, and producing neurotransmitters like serotonin, of which 90% is made in the gut.</p>
        </SplitSection>

        <SplitSection img={IMG.gutPain} alt="Person experiencing bloating and digestive discomfort caused by poor gut health" reverse title="Symptoms of an Unhealthy Gut">
          <p>The gut communicates distress in many ways. Recognizing these signs early allows you to make corrections before chronic conditions develop:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Persistent Bloating and Gas:</strong> Chronic distension after meals often signals dysbiosis (microbial imbalance) or food intolerances.</li>
            <li><strong>Irregular Bowel Movements:</strong> Both chronic constipation and diarrhea indicate gut dysfunction. Healthy frequency is generally 1–3 times per day.</li>
            <li><strong>Unexplained Fatigue and Brain Fog:</strong> Poor nutrient absorption and disrupted sleep from gut issues deplete energy and cognitive performance.</li>
            <li><strong>Skin Problems:</strong> Conditions like acne, eczema, and rosacea are increasingly linked to gut inflammation — the gut-skin axis is well-established in research.</li>
            <li><strong>Frequent Heartburn or Acid Reflux:</strong> Persistent acid reflux or indigestion may indicate digestive imbalance and should be evaluated if symptoms continue.</li>
            <li><strong>Food Intolerances:</strong> Difficulty digesting certain foods can be associated with changes in gut bacteria or digestive enzyme function.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.fermented} alt="Fermented probiotic foods that support a healthy gut microbiome" title="The Power of Fermented Foods and Probiotics">
          <p>Fermented foods contain live beneficial bacteria (probiotics) that directly replenish and diversify your gut microbiome. Regular consumption is linked to reduced gut inflammation, improved digestion, better immune function, and even improved mood and mental health outcomes.</p>
          <p>Excellent sources include plain yogurt with live active cultures, kefir, traditional Indian fermented foods like idli, dosa, and kanji, Korean kimchi, German sauerkraut, Japanese miso and natto, Indonesian tempeh, and kombucha tea. Aim to include at least one fermented food with each meal for consistent microbiome support.</p>
        </SplitSection>

        <SplitSection img={IMG.fiber} alt="High-fiber fruits and vegetables that promote healthy digestion and gut bacteria" reverse title="Fiber, Prebiotics, and Hydration — The Foundation">
          <ul style={{ paddingLeft: '1.2rem', lineHeight: 2.1 }}>
            <li><strong>Eat More Dietary Fiber:</strong> Fiber is the primary fuel for beneficial gut bacteria. Soluble fiber (oats, legumes, apples, psyllium) feeds microbes, while insoluble fiber (whole grains, vegetables) adds bulk. Aim for at least 25–30g daily — most people get less than half that.</li>
            <li><strong>Prioritize Prebiotic Foods:</strong> Prebiotics selectively nourish beneficial bacteria. Top sources include garlic, onions, leeks, asparagus, Jerusalem artichokes, bananas, and chicory root.</li>
            <li><strong>Stay Consistently Hydrated:</strong> Water keeps the mucosal lining of the gut thin and pliable, supports peristalsis, and enables optimal nutrient absorption. Aim for 2.5–3 liters daily.</li>
          <li><strong>Limit Ultra-Processed Foods:</strong> Diets high in added sugars and highly processed foods may reduce the diversity of beneficial gut bacteria and contribute to inflammation.</li>
          <li><strong>Eat a Variety of Plant Foods:</strong> Consuming a wide range of fruits, vegetables, whole grains, legumes, nuts, and seeds supports a more diverse and resilient gut microbiome.</li>
          </ul>
        </SplitSection>
      </>
    )
  },

  // ── 5. CANCER AWARENESS ────────────────────────────────────────────────────
  {
    slug: "cancer-awareness",
    title: "Cancer Prevention: Symptoms, Risk Factors & Early Detection",
    emoji: "🎗️",
    category: "Cancer Awareness",
author: "Cuure Health Medical Team",
published: "July 5, 2026",
updated: "July 5, 2026",
readTime: "8 min read",  
    description: (
      <>
        <SplitSection img={IMG.cancerAwareness} alt="Cancer awareness campaign promoting early detection and prevention" title="What Is Cancer and How Does It Develop?">
          <p>Cancer awareness plays a vital role in preventing disease and improving survival through early detection. Understanding cancer symptoms, risk factors, screening tests, and healthy lifestyle choices can help reduce your risk and improve treatment outcomes if cancer is detected early.</p>
          <p>Through a process called metastasis, cancer cells can travel via the bloodstream or lymphatic system to form new tumors in distant organs. The earlier cancer is detected — before it has spread — the more treatment options are available and the higher the survival rates. For most cancer types, early-stage survival rates are dramatically higher than late-stage rates.</p>
        </SplitSection>

        <SplitSection img={IMG.earlyWarning} alt="Doctor evaluating a patient for possible early signs of cancer" reverse title="Common Early Symptoms of Cancer">
          <p>Many cancers are highly treatable when caught early, yet symptoms are frequently dismissed. Trust your body and seek medical evaluation promptly if you notice any of the following:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Unexplained Weight Loss:</strong> Losing more than 5kg without changes to diet or exercise is a significant red flag, as many cancers alter metabolism.</li>
            <li><strong>Persistent Fatigue:</strong> Tiredness that does not improve with rest and has no obvious cause can signal blood cancers like leukemia or advanced solid tumors.</li>
            <li><strong>Unusual Lumps:</strong> Any new lump, thickening, or swelling — in the breast, testicle, lymph node, or anywhere else — requires evaluation even if it is painless.</li>
          <li><strong>Persistent Changes in Bowel or Bladder Habits:</strong> Ongoing constipation, diarrhea, blood in the stool, or changes in urination should be evaluated, especially if symptoms persist.</li>
<li><strong>Unexplained Bleeding:</strong> Blood in the urine, stool, sputum, or unusual vaginal bleeding may indicate an underlying medical condition, including certain cancers.</li>
<li><strong>Persistent Cough or Hoarseness:</strong> A cough lasting more than three weeks or ongoing voice changes should be assessed by a healthcare professional.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.noSmoking} alt="Stopping tobacco use helps reduce the risk of several cancers" title="How to Reduce Your Risk of Cancer">
          <p>Up to 40% of all cancers are preventable through lifestyle modifications. The most powerful risk-reduction steps:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Quit Tobacco Completely:</strong> Smoking causes nearly 22% of all cancer deaths globally. The body begins repairing itself within hours of quitting, and cancer risk declines progressively over years.</li>
            <li><strong>Limit Alcohol:</strong> Even moderate drinking increases risk of breast, liver, colorectal, esophageal, and oral cancers. The safest amount from a cancer perspective is none.</li>
            <li><strong>Maintain a Healthy Weight:</strong> Obesity is linked to at least 13 types of cancer. Excess body fat drives chronic low-grade inflammation and raises levels of hormones that promote tumor growth.</li>
          <li><strong>Protect Your Skin:</strong> Use sunscreen, wear protective clothing, and avoid excessive ultraviolet (UV) exposure to reduce the risk of skin cancer.</li>
<li><strong>Stay Physically Active:</strong> Regular exercise supports a healthy weight, improves immune function, and may reduce the risk of several types of cancer.</li>
<li><strong>Avoid Tobacco Smoke:</strong> Limiting exposure to secondhand smoke is also important for reducing cancer risk.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.cancerDiet} alt="Healthy fruits and vegetables that support cancer prevention" reverse title="Healthy Foods That May Help Reduce Cancer Risk">
          <p>While no single food prevents cancer, a consistent pattern of eating can significantly modify risk. A diet rich in colorful fruits and vegetables provides powerful antioxidants, polyphenols, and phytochemicals that protect cells from the DNA damage that initiates cancer development.</p>
          <p>Foods with strong evidence for cancer risk reduction include cruciferous vegetables (broccoli, cauliflower, Brussels sprouts) which contain sulforaphane, berries rich in anthocyanins, turmeric containing curcumin, green tea with EGCG, and legumes providing fiber that protects against colorectal cancer. Regular aerobic exercise — at least 150 minutes per week — reduces cancer risk independently of diet by regulating inflammatory pathways and hormone levels.</p>
        </SplitSection>

        <SplitSection img={IMG.screening} alt="Patient undergoing routine cancer screening for early detection" title="Cancer Screening and Early Detection">
          <p>Two proven vaccines directly prevent specific cancers — the HPV vaccine (prevents cervical, throat, anal, and penile cancers) and the Hepatitis B vaccine (prevents liver cancer). Screening guidelines to discuss with your doctor based on age and risk factors:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Breast Cancer:</strong> Mammogram every 1–2 years from age 40–45 onward.</li>
            <li><strong>Colorectal Cancer:</strong> Colonoscopy from age 45, or earlier with family history.</li>
            <li><strong>Cervical Cancer:</strong> Pap smear every 3 years from age 21, with HPV co-test from age 30.</li>
            <li><strong>Lung Cancer:</strong> Annual low-dose CT scan for current or former heavy smokers aged 50–80.</li>
          <li><strong>Prostate Cancer:</strong> Men should discuss PSA testing with their healthcare provider based on age, family history, and personal risk factors.</li>
<li><strong>Oral Cancer:</strong> Regular dental check-ups can help identify early changes in the mouth, particularly in people who use tobacco or alcohol.</li>
          </ul>
        </SplitSection>
      </>
    )
  },
  // ── 6. HIGH BLOOD PRESSURE ──────────────────────────────────────────────────
  {
    slug: "high-blood-pressure",
    title: "High Blood Pressure: Symptoms, Causes & Prevention",
    emoji: "🩺",
    category: "Heart Health",
    author: "Cuure Health Medical Team",
    published: "July 7, 2026",
    updated: "July 7, 2026",
    readTime: "9 min read",
    description: (
      <>
        <SplitSection img={IMG.bpOverview} alt="Doctor checking a patient's blood pressure with a digital monitor" title="What Is High Blood Pressure?">
          <p>High blood pressure, also called hypertension, occurs when the force of blood against your artery walls stays consistently too high. It's often called the "silent killer" because it typically causes no symptoms while quietly damaging the heart, kidneys, and blood vessels over time.</p>
          <p>Blood pressure is recorded as two numbers — systolic (pressure when the heart beats) over diastolic (pressure when the heart rests). A reading below 120/80 mmHg is considered normal, while readings of 130/80 mmHg or higher fall into the hypertension range. Because most people feel completely fine even with elevated numbers, regular screening is the only reliable way to catch it early.</p>
        </SplitSection>

        <SplitSection img={IMG.bpSymptoms} alt="Person experiencing dizziness and headache from high blood pressure" reverse title="Common Symptoms of High Blood Pressure">
          <p>Hypertension often develops silently, but in more advanced cases, some people do notice warning signs. Seek medical evaluation if you experience:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Severe Headaches:</strong> Recurring or unusually intense headaches can signal significantly elevated blood pressure.</li>
            <li><strong>Dizziness or Blurred Vision:</strong> High pressure can affect blood flow to the brain and eyes, causing lightheadedness or visual disturbances.</li>
            <li><strong>Chest Pain or Shortness of Breath:</strong> These symptoms may indicate your heart is under significant strain and require prompt evaluation.</li>
            <li><strong>Unexplained Fatigue or Confusion:</strong> Persistent tiredness or difficulty concentrating can be linked to poorly controlled blood pressure.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.bpCauses} alt="Illustration of lifestyle factors that contribute to high blood pressure" title="Causes and Risk Factors">
          <p>Most cases of high blood pressure, known as primary hypertension, develop gradually from a combination of genetics, aging, and lifestyle factors rather than one single cause. Secondary hypertension, by contrast, appears suddenly due to an underlying condition such as kidney disease or a hormonal disorder.</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Excess Salt Intake:</strong> High sodium levels cause the body to retain fluid, raising blood volume and pressure.</li>
            <li><strong>Obesity and Physical Inactivity:</strong> Extra body weight and a sedentary lifestyle make the heart work harder to circulate blood.</li>
            <li><strong>Smoking and Alcohol:</strong> Both narrow and stiffen blood vessels, contributing directly to higher blood pressure.</li>
            <li><strong>Chronic Stress:</strong> Ongoing stress can raise blood pressure over time, especially when combined with poor coping habits.</li>
            <li><strong>Family History:</strong> A genetic predisposition significantly increases your likelihood of developing hypertension.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.bpDiet} alt="Heart-healthy foods including leafy greens, berries, and nuts that support healthy blood pressure" reverse title="Foods and Habits That Support Healthy Blood Pressure">
          <p>No single food controls blood pressure, but a consistent, heart-healthy eating pattern makes a measurable difference. Diets rich in potassium, fiber, and healthy fats help relax blood vessels and support fluid balance.</p>
          <p>Foods with strong evidence for supporting healthy blood pressure include leafy greens, bananas, berries, oats, beans, fatty fish, garlic, nuts, and olive oil. At the same time, limiting high-sodium processed foods, sugary drinks, and excess alcohol is just as important. Regular exercise — at least 150 minutes per week — further supports healthy blood pressure by strengthening the heart and improving circulation.</p>
        </SplitSection>

        <SplitSection img={IMG.bpScreening} alt="Patient having a routine blood pressure screening at a clinic" title="Diagnosis and When to See a Doctor">
          <p>Because hypertension rarely causes symptoms, diagnosis relies on regular measurement rather than how you feel. Doctors typically confirm a diagnosis using multiple readings over time, and may recommend home monitoring or ambulatory blood pressure monitoring for a more complete picture.</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Routine Screening:</strong> Adults should have their blood pressure checked at every regular check-up, regardless of how they feel.</li>
            <li><strong>Home Monitoring:</strong> Tracking readings at home over several days can reveal patterns a single office visit might miss.</li>
            <li><strong>Seek Immediate Care:</strong> Sudden severe headache, chest pain, difficulty breathing, or confusion may signal a hypertensive emergency and require immediate medical attention.</li>
          </ul>
        </SplitSection>
      </>
    )
  },
  // ── 7. DIABETES ─────────────────────────────────────────────────────────────
  {
    slug: "diabetes-management",
    title: "Diabetes: Symptoms, Causes & Blood Sugar Management",
    emoji: "🩸",
    category: "Diabetes Care",
    author: "Cuure Health Medical Team",
    published: "July 7, 2026",
    updated: "July 7, 2026",
    readTime: "9 min read",
    description: (
      <>
        <SplitSection img={IMG.diabetesOverview} alt="Person checking blood sugar levels with a glucose monitor" title="What Is Diabetes?">
          <p>Diabetes is a chronic condition that affects how your body turns food into energy. Normally, the hormone insulin helps move sugar (glucose) from your bloodstream into your cells for fuel. In diabetes, the body either doesn't produce enough insulin or can't use it effectively, causing blood sugar levels to stay too high.</p>
          <p>There are two main types. Type 1 diabetes is an autoimmune condition where the body stops producing insulin, usually diagnosed in childhood or young adulthood. Type 2 diabetes, the more common form, develops when the body becomes resistant to insulin over time and is closely linked to lifestyle and genetic factors. Prediabetes, where blood sugar is elevated but not yet in the diabetic range, is a critical window where lifestyle changes can often prevent progression entirely.</p>
        </SplitSection>

        <SplitSection img={IMG.diabetesSymptoms} alt="Person experiencing fatigue and excessive thirst, common early signs of diabetes" reverse title="Common Symptoms of Diabetes">
          <p>Type 2 diabetes often develops gradually, and symptoms can be easy to overlook or mistake for normal fatigue. Pay attention to your body and seek evaluation if you notice:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Frequent Urination and Excessive Thirst:</strong> High blood sugar pulls fluid from tissues, triggering dehydration and a constant need to drink and urinate.</li>
            <li><strong>Unexplained Fatigue:</strong> When cells can't access glucose properly for energy, persistent tiredness is a common early sign.</li>
            <li><strong>Increased Hunger:</strong> Despite eating regularly, cells starved of usable glucose can trigger ongoing hunger.</li>
            <li><strong>Blurred Vision:</strong> High blood sugar can cause the lens of the eye to swell, temporarily affecting focus.</li>
            <li><strong>Slow-Healing Wounds or Frequent Infections:</strong> Elevated glucose impairs circulation and immune response, slowing recovery from cuts and infections.</li>
            <li><strong>Unintended Weight Loss:</strong> More common in type 1 diabetes, this occurs when the body burns fat and muscle for energy it can't get from glucose.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.diabetesCauses} alt="Illustration of lifestyle and genetic factors contributing to type 2 diabetes" title="Causes and Risk Factors">
          <p>Type 1 diabetes results from the immune system mistakenly attacking insulin-producing cells in the pancreas, and its exact trigger isn't fully understood. Type 2 diabetes, however, develops from a combination of factors that often build up over years.</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Excess Body Weight:</strong> Carrying extra weight, particularly around the abdomen, is strongly linked to insulin resistance.</li>
            <li><strong>Physical Inactivity:</strong> Regular movement helps cells use insulin more efficiently, so a sedentary lifestyle raises risk.</li>
            <li><strong>Family History and Genetics:</strong> Having a parent or sibling with type 2 diabetes increases your own likelihood of developing it.</li>
            <li><strong>Age:</strong> Risk rises after age 45, though type 2 diabetes is increasingly diagnosed in younger adults.</li>
            <li><strong>Prediabetes and Gestational Diabetes History:</strong> Both significantly increase the likelihood of developing type 2 diabetes later in life.</li>
            <li><strong>Poor Diet:</strong> Diets high in refined carbohydrates and sugary beverages contribute to insulin resistance over time.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.diabetesDiet} alt="Balanced plate of vegetables, whole grains, and lean protein for blood sugar management" reverse title="Foods and Habits That Support Healthy Blood Sugar">
          <p>Managing blood sugar isn't about eliminating entire food groups — it's about consistency, balance, and portion awareness. Foods that digest slowly help prevent the sharp blood sugar spikes that put strain on the body over time.</p>
          <p>Non-starchy vegetables, whole grains, legumes, nuts, and lean proteins all help slow glucose absorption and support steadier energy levels throughout the day. Fiber-rich foods like beans, oats, and leafy greens are especially valuable, as they slow digestion and improve insulin sensitivity. On the other hand, sugary drinks, refined white bread and pastries, and heavily processed snacks cause rapid blood sugar spikes and should be limited. Regular physical activity — even a daily 30-minute walk — further improves how effectively your body uses insulin, often producing noticeable benefits within weeks.</p>
        </SplitSection>

        <SplitSection img={IMG.diabetesScreening} alt="Doctor reviewing blood sugar test results with a patient" title="Diagnosis, Monitoring, and When to See a Doctor">
          <p>Diabetes and prediabetes are typically diagnosed through simple blood tests, including fasting blood glucose, A1C (which reflects average blood sugar over roughly three months), or an oral glucose tolerance test. Because early type 2 diabetes often has mild or no symptoms, routine screening is essential for anyone with risk factors.</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Routine Screening:</strong> Adults over 45, or younger adults with risk factors like obesity or a family history, should be screened regularly.</li>
            <li><strong>Home Monitoring:</strong> For those already diagnosed, regular blood sugar checks help guide daily food, activity, and medication decisions.</li>
            <li><strong>Seek Prompt Care:</strong> Extreme thirst, rapid breathing, confusion, or fruity-smelling breath can signal a diabetic emergency and require immediate medical attention.</li>
          </ul>
        </SplitSection>
      </>
    )
  },
  // ── 8. MENTAL HEALTH ────────────────────────────────────────────────────────
  {
    slug: "mental-health",
    title: "Mental Health: Signs, Symptoms & When to Seek Help",
    emoji: "🧠",
    category: "Mental Health",
    author: "Cuure Health Medical Team",
    published: "July 7, 2026",
    updated: "July 7, 2026",
    readTime: "8 min read",
    description: (
      <>
        <SplitSection img={IMG.mentalOverview} alt="Person reflecting on their mental wellbeing in a calm setting" title="Why Mental Health Deserves the Same Attention as Physical Health">
          <p>Mental health affects how you think, feel, and handle daily life — from managing stress and relating to others to making decisions and coping with challenges. Just like physical health, mental health exists on a spectrum and can fluctuate over time due to biology, life circumstances, and environment.</p>
          <p>Despite growing awareness, many people delay seeking help due to stigma, uncertainty about symptoms, or simply not recognizing that what they're experiencing is treatable. Understanding common warning signs is the first step toward getting timely, effective support.</p>
        </SplitSection>

        <SplitSection img={IMG.mentalSymptoms} alt="Person experiencing signs of stress, anxiety, or low mood" reverse title="Common Signs and Symptoms">
          <p>Mental health conditions can show up differently in each person, but certain patterns are worth paying attention to. Consider reaching out for support if you notice:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Persistent Sadness or Low Mood:</strong> Feeling down, empty, or hopeless most days for two weeks or longer can be a sign of depression.</li>
            <li><strong>Excessive Worry or Fear:</strong> Ongoing anxiety that interferes with daily activities, sleep, or concentration may indicate an anxiety disorder.</li>
            <li><strong>Withdrawal from Activities or Relationships:</strong> Losing interest in hobbies, work, or socializing that once brought enjoyment is a common early warning sign.</li>
            <li><strong>Changes in Sleep or Appetite:</strong> Sleeping much more or less than usual, or significant changes in eating patterns, often accompany mental health struggles.</li>
            <li><strong>Difficulty Concentrating:</strong> Trouble focusing, making decisions, or remembering things can be linked to stress, anxiety, or mood disorders.</li>
            <li><strong>Irritability or Mood Swings:</strong> Sudden or intense shifts in mood, or feeling easily agitated, can signal underlying emotional distress.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.mentalCauses} alt="Illustration of factors that can contribute to mental health challenges" title="What Contributes to Mental Health Challenges">
          <p>Mental health conditions rarely stem from a single cause. Instead, they typically develop from a combination of biological, psychological, and environmental factors that vary from person to person.</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Genetics and Family History:</strong> A family history of mental health conditions can increase individual risk, though it doesn't guarantee it.</li>
            <li><strong>Brain Chemistry:</strong> Imbalances in neurotransmitters can affect mood regulation and contribute to conditions like depression and anxiety.</li>
            <li><strong>Life Stress and Trauma:</strong> Major life changes, grief, financial pressure, or past trauma can trigger or worsen mental health symptoms.</li>
            <li><strong>Chronic Illness:</strong> Living with a long-term physical health condition is closely linked to higher rates of depression and anxiety.</li>
            <li><strong>Social Isolation:</strong> Limited social support and loneliness are significant risk factors for declining mental health.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.mentalCoping} alt="Person practicing healthy coping habits like exercise and mindfulness" reverse title="Habits That Support Mental Wellbeing">
          <p>While professional treatment is essential for many conditions, daily habits can meaningfully support mental health alongside clinical care. Consistency matters more than intensity.</p>
          <p>Regular physical activity, even a daily walk, has been shown to reduce symptoms of anxiety and depression by boosting endorphins and improving sleep. Maintaining a consistent sleep schedule, staying connected with supportive people, practicing mindfulness or relaxation techniques, and limiting alcohol help stabilize mood over time. Setting realistic goals and breaking tasks into smaller steps can also reduce feelings of overwhelm during difficult periods.</p>
        </SplitSection>

        <SplitSection img={IMG.mentalHelp} alt="Person having a supportive conversation with a mental health professional" title="When and How to Seek Professional Help">
          <p>Reaching out for support is a sign of strength, not weakness. A mental health professional can help identify what you're experiencing and recommend an appropriate path forward, whether that's therapy, medication, lifestyle changes, or a combination.</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Talk to a Professional:</strong> If symptoms persist for more than two weeks or interfere with daily life, consider consulting a therapist, counselor, or psychiatrist.</li>
            <li><strong>Primary Care Can Help Too:</strong> A general doctor can screen for common conditions and refer you to specialized mental health care if needed.</li>
            <li><strong>Seek Immediate Help:</strong> If you or someone you know is having thoughts of self-harm or suicide, contact a crisis helpline or emergency services immediately — this is a medical emergency.</li>
          </ul>
        </SplitSection>
      </>
    )
  },
  // ── 9. WOMEN'S HEALTH ───────────────────────────────────────────────────────
  {
    slug: "womens-health",
    title: "Women's Health: Essential Screenings & Preventive Care",
    emoji: "🌸",
    category: "Women's Health",
    author: "Cuure Health Medical Team",
    published: "July 7, 2026",
    updated: "July 7, 2026",
    readTime: "8 min read",
    description: (
      <>
        <SplitSection img={IMG.womensOverview} alt="Woman consulting with her doctor about preventive health care" title="Why Preventive Care Matters for Women">
          <p>Women's health needs shift across every life stage — from adolescence and reproductive years through pregnancy, perimenopause, and beyond. Preventive care, including regular screenings and open conversations with a healthcare provider, plays a central role in catching conditions early, when they're most treatable.</p>
          <p>Many conditions that disproportionately affect women — including certain cancers, thyroid disorders, and osteoporosis — develop gradually and produce few symptoms in early stages. Routine screening, rather than waiting for symptoms to appear, is the most reliable way to protect long-term health.</p>
        </SplitSection>

        <SplitSection img={IMG.womensSymptoms} alt="Woman experiencing symptoms that may warrant a medical evaluation" reverse title="Symptoms That Shouldn't Be Ignored">
          <p>While occasional discomfort is common, certain symptoms warrant a conversation with your doctor rather than being dismissed as routine:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Irregular or Heavy Menstrual Bleeding:</strong> Significant changes in cycle length, flow, or bleeding between periods can indicate hormonal imbalance or other underlying conditions.</li>
            <li><strong>Persistent Pelvic Pain:</strong> Ongoing pain in the pelvic region, especially outside of menstruation, deserves medical evaluation.</li>
            <li><strong>Unusual Breast Changes:</strong> New lumps, dimpling, nipple discharge, or changes in breast shape should be assessed promptly, even if painless.</li>
            <li><strong>Persistent Fatigue:</strong> Ongoing tiredness unrelated to sleep or activity levels can be linked to thyroid disorders, anemia, or other conditions more common in women.</li>
            <li><strong>Mood Changes Around Hormonal Shifts:</strong> Severe mood symptoms tied to the menstrual cycle, pregnancy, or menopause may benefit from medical support rather than being dismissed as normal.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.womensScreenings} alt="Woman undergoing a routine health screening at a clinic" title="Essential Screenings by Life Stage">
          <p>Recommended screenings evolve as you age. Discuss the right schedule for your individual risk factors with your doctor, but general guidelines include:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Cervical Cancer Screening:</strong> Pap smear every 3 years starting at age 21, with HPV co-testing typically added from age 30.</li>
            <li><strong>Breast Cancer Screening:</strong> Mammograms are generally recommended every 1–2 years starting between ages 40–45, or earlier with family history.</li>
            <li><strong>Bone Density Testing:</strong> Recommended around menopause or age 65 to screen for osteoporosis, which affects women at higher rates than men.</li>
            <li><strong>Thyroid Function Tests:</strong> Worth discussing if you experience unexplained fatigue, weight changes, or mood shifts, as thyroid disorders are significantly more common in women.</li>
            <li><strong>Blood Pressure and Cholesterol Checks:</strong> Cardiovascular disease is often underdiagnosed in women, making routine checks especially important.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.womensLifestyle} alt="Woman engaging in healthy lifestyle habits like exercise and balanced nutrition" reverse title="Lifestyle Habits That Support Long-Term Health">
          <p>Daily habits play a meaningful role in supporting hormonal balance, bone health, and overall wellbeing across every life stage.</p>
          <p>Adequate calcium and vitamin D intake supports bone density, particularly important during and after menopause when bone loss accelerates. Regular weight-bearing exercise strengthens bones and supports cardiovascular health, while a diet rich in iron helps prevent anemia, which disproportionately affects women of reproductive age. Managing stress and prioritizing sleep also help regulate hormones that influence mood, metabolism, and menstrual health.</p>
        </SplitSection>

        <SplitSection img={IMG.womensCare} alt="Woman having a supportive consultation with her healthcare provider" title="When to See a Doctor">
          <p>Building a relationship with a trusted healthcare provider — whether a primary care doctor, gynecologist, or both — makes it easier to raise concerns early rather than waiting until symptoms become severe.</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Annual Wellness Visits:</strong> Even without symptoms, yearly check-ups allow for screening, vaccination updates, and early detection of emerging issues.</li>
            <li><strong>Pregnancy Planning:</strong> Preconception counseling can help identify and manage health factors before pregnancy for the best possible outcomes.</li>
            <li><strong>Seek Prompt Care:</strong> Sudden severe pelvic pain, heavy bleeding, or symptoms of a possible ectopic pregnancy require immediate medical attention.</li>
          </ul>
        </SplitSection>
      </>
    )
  },
  // ── 10. JOINT PAIN ──────────────────────────────────────────────────────────
  {
    slug: "joint-pain",
    title: "Joint Pain: Causes, Prevention & When to See an Orthopedic Doctor",
    emoji: "🦴",
    category: "Orthopedic Health",
    author: "Cuure Health Medical Team",
    published: "July 7, 2026",
    updated: "July 7, 2026",
    readTime: "8 min read",
    description: (
      <>
        <SplitSection img={IMG.jointOverview} alt="Person experiencing joint discomfort in the knee" title="Understanding Joint Pain">
          <p>Joint pain is one of the most common reasons people seek medical care, affecting the knees, hips, shoulders, hands, and spine. It can range from mild stiffness after activity to persistent pain that limits daily movement and quality of life.</p>
          <p>Joint pain can be acute, resulting from an injury or short-term inflammation, or chronic, developing gradually from wear and tear, autoimmune conditions, or long-term overuse. Understanding the underlying cause is essential, since treatment differs significantly depending on whether pain stems from mechanical wear, inflammation, or injury.</p>
        </SplitSection>

        <SplitSection img={IMG.jointSymptoms} alt="Person holding their knee due to joint pain and stiffness" reverse title="Common Symptoms to Watch For">
          <p>Joint pain can present differently depending on its cause. Pay attention to these patterns and seek evaluation if they persist:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Stiffness, Especially in the Morning:</strong> Joint stiffness that improves with movement but returns after rest can indicate osteoarthritis or an inflammatory condition.</li>
            <li><strong>Swelling and Warmth:</strong> Visible swelling, redness, or warmth around a joint often signals inflammation and should be evaluated.</li>
            <li><strong>Reduced Range of Motion:</strong> Difficulty fully bending, straightening, or rotating a joint can indicate cartilage damage or structural changes.</li>
            <li><strong>Clicking, Grinding, or Popping:</strong> Sounds or sensations during movement, especially with pain, may point to cartilage wear.</li>
            <li><strong>Pain That Worsens with Activity or Rest:</strong> Mechanical pain typically worsens with use, while inflammatory pain often worsens after periods of rest.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.jointCauses} alt="Illustration of common causes of joint pain including arthritis and injury" title="Common Causes of Joint Pain">
          <p>Joint pain can stem from a wide range of conditions, and identifying the underlying cause guides the most effective treatment approach.</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Osteoarthritis:</strong> The most common form of arthritis, caused by gradual breakdown of cartilage that cushions the joints, typically worsening with age.</li>
            <li><strong>Rheumatoid Arthritis:</strong> An autoimmune condition where the immune system attacks joint tissue, causing inflammation, swelling, and pain, often symmetrically.</li>
            <li><strong>Injuries:</strong> Sprains, strains, ligament tears, and fractures can cause both acute and long-term joint pain if not properly treated.</li>
            <li><strong>Excess Body Weight:</strong> Extra weight places additional mechanical stress on weight-bearing joints like the knees and hips, accelerating wear.</li>
            <li><strong>Overuse:</strong> Repetitive motion from certain jobs, sports, or activities can gradually damage joint structures over time.</li>
            <li><strong>Gout:</strong> A buildup of uric acid crystals in a joint, often the big toe, causing sudden, severe pain, swelling, and redness.</li>
          </ul>
        </SplitSection>

        <SplitSection img={IMG.jointCare} alt="Person doing gentle stretching exercises to support joint health" reverse title="Protecting Your Joints">
          <p>While not all joint conditions can be prevented, several habits can reduce strain and slow progression of existing damage.</p>
          <p>Maintaining a healthy weight significantly reduces load on weight-bearing joints, while regular low-impact exercise like swimming, cycling, or walking strengthens the muscles that support and stabilize joints. Stretching and mobility work help preserve range of motion, and strength training around major joints, particularly the knees and hips, provides added protection. Proper footwear, good posture, and using correct form during exercise or manual work also help reduce unnecessary joint stress.</p>
        </SplitSection>

        <SplitSection img={IMG.jointDoctor} alt="Orthopedic doctor examining a patient's joint mobility" title="When to See an Orthopedic Doctor">
          <p>Occasional joint soreness after activity is normal, but certain signs indicate it's time for a professional evaluation rather than waiting for symptoms to resolve on their own.</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Persistent or Worsening Pain:</strong> Pain lasting more than a few weeks, or steadily getting worse, warrants an orthopedic evaluation.</li>
            <li><strong>Joint Instability:</strong> A joint that feels like it's giving way, locking, or catching may indicate structural damage requiring imaging and treatment.</li>
            <li><strong>Seek Prompt Care:</strong> Sudden severe pain, inability to bear weight, visible deformity, or significant swelling after an injury requires urgent medical attention.</li>
          </ul>
        </SplitSection>
      </>
    )
  },
]


export { blogs }

export default function BlogDetail() {
  const { slug } = useParams()
  const blog = blogs.find(b => b.slug === slug)

  if (!blog) return <p style={{ padding: '2rem' }}>Blog not found.</p>

  return (
    <main className="blog-main">
      <p className="blog-tag">{blog.tag}</p>
      <h1 className="blog-title">{blog.emoji} {blog.title}</h1>
      <div className="blog-meta">
  <span>📅 Updated: {blog.updated}</span>
  <span>⏱️ {blog.readTime}</span>
  <span>🏷️ {blog.category}</span>
</div>
      <hr className="blog-divider" />
      <div>{blog.description}</div>
    </main>
  )
}