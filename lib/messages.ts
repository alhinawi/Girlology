export type MessageKind = 'pickup-lines' | 'morning-texts' | 'conversation-topics';
export type MessageCategory = { id: string; ar: string; en: string; tipAr: string; tipEn: string };
export type MessageExample = { id: string; category: string; ar: string; en: string };
export const messageCategories: Record<MessageKind, MessageCategory[]> = {
  "pickup-lines": [
    {
      "id": "romantic",
      "ar": "غزل رومانسي شيك",
      "en": "Elegant Romantic Compliments",
      "tipAr": "الكلام ده لما يكون بينكم ارتياح وإعجاب متبادل. اختار مجاملة واحدة صادقة تناسب درجة القرب بينكم.",
      "tipEn": "Use these when there is mutual comfort and interest. Choose one sincere compliment that fits your relationship."
    },
    {
      "id": "playful",
      "ar": "هزار خفيف ودلع",
      "en": "Playful Teasing & Flirting",
      "tipAr": "الهزار ده لو بينكم ارتياح وتعارف بالفعل. لو مش بتضحك أو مش متجاوبة، غير الموضوع من غير إلحاح.",
      "tipEn": "These suit people who already know each other and feel comfortable. If she is not enjoying the joke, change the subject without pushing."
    },
    {
      "id": "direct",
      "ar": "تعارف مباشر وواثق",
      "en": "Confident & Direct Introductions",
      "tipAr": "ابدأ في وقت ومكان مناسبين للكلام. لو مش حابة تتعرف أو تكمل، احترم ده من غير محاولة تانية.",
      "tipEn": "Start at a suitable time and place. If she does not want to meet or keep talking, respect that without trying again."
    },
    {
      "id": "witty",
      "ar": "لعب بالكلام وغزل ذكي",
      "en": "Clever Wordplay & Witty Flirting",
      "tipAr": "خليها جملة خفيفة مش استعراض. لو الهزار مش مريح للطرف التاني، سيب له مساحته وغير الموضوع.",
      "tipEn": "Keep it light, rather than putting on a performance. If the joke is not welcome, give the other person space and change the subject."
    }
  ],
  "morning-texts": [
    {
      "id": "romantic",
      "ar": "صباح الخير برومانسية",
      "en": "Romantic Good Morning Messages",
      "tipAr": "الكلام الرومانسي لما تكونوا في علاقة واضحة والدرجة دي مريحة ليكم. مش مناسب لتعارف جديد أو مشاعر من طرف واحد.",
      "tipEn": "Use romantic language in an established relationship where that level of affection is welcome. Not for a new acquaintance or one-sided interest."
    },
    {
      "id": "playful",
      "ar": "صباح الخير بدلع وهزار",
      "en": "Playful & Funny Good Morning Messages",
      "tipAr": "الهزار ده لو بينكم ارتياح وتعارف بالفعل. لو مش بتضحك أو مش متجاوبة، غير الموضوع من غير إلحاح.",
      "tipEn": "These suit people who already know each other and feel comfortable. If she is not enjoying the joke, change the subject without pushing."
    },
    {
      "id": "support",
      "ar": "صباح الخير بتحفيز وطاقة إيجابية",
      "en": "Motivational & Positive Good Morning Messages",
      "tipAr": "شجعها من غير ما تضمن نتيجة أو تطلب تقرير. لو يومها صعب، اسمعها بدل ما تطلب منها تبقى مبسوطة.",
      "tipEn": "Encourage her without promising an outcome or asking for a report. If she is having a hard day, listen rather than asking her to be cheerful."
    },
    {
      "id": "care",
      "ar": "صباح الخير باهتمام واشتياق",
      "en": "Caring & Thoughtful Good Morning Messages",
      "tipAr": "لحد بينكم كلام مرحب بيه بالفعل. رسالة واحدة في وقت مناسب، من غير رنات ولا انتظار رد فوري.",
      "tipEn": "For someone who already welcomes your messages. Send one at a reasonable time, without calls or expecting an immediate reply."
    }
  ],
  "conversation-topics": [
    {
      "id": "personality",
      "ar": "التعارف واكتشاف الشخصية",
      "en": "Getting to Know Her Personality",
      "tipAr": "اسأل سؤال واحد وسيب مساحة للإجابة. مش لازم أي حد يجاوب على سؤال شخصي أو يشرح سبب رفضه.",
      "tipEn": "Ask one question and leave room for an answer. No one has to answer a personal question or explain why they decline."
    },
    {
      "id": "interests",
      "ar": "الهوايات والاهتمامات",
      "en": "Hobbies & Interests",
      "tipAr": "اسأل عشان تسمع بجد. متدعيش إنك بتحب نفس الحاجة لو ده مش حقيقي، وخلي الحوار رايح جاي.",
      "tipEn": "Ask because you want to listen. Do not pretend to share an interest you do not have, and keep the conversation two-way."
    },
    {
      "id": "fun",
      "ar": "أسئلة خفيفة ومسلية",
      "en": "Fun & Lighthearted Questions",
      "tipAr": "الهزار والأسئلة دي لو الطرف التاني مرتاح. لو سؤال عن موقف محرج ضايقه، غير الموضوع من غير إلحاح.",
      "tipEn": "Use these when the other person feels comfortable. If a question about an embarrassing moment bothers them, change the subject without pushing."
    },
    {
      "id": "relationships",
      "ar": "الرومانسية والتفكير في العلاقات",
      "en": "Romance & Relationships",
      "tipAr": "الكلام عن المشاعر والعلاقات لما يكون بينكم ارتياح متبادل. مش اختبار ولا طريقة تضغط بيها على حد يعترف بحاجة.",
      "tipEn": "Discuss feelings and relationships when there is mutual comfort. These are not a test or a way to pressure anyone into revealing feelings."
    }
  ]
};

export const messageExamples: Record<MessageKind, MessageExample[]> = {
  "pickup-lines": [
    {
      "id": "p01",
      "category": "romantic",
      "ar": "مش عارف إيه الحلو في يومي، بس وجودك أكيد واحد منهم.",
      "en": "I don't know what's making my day better, but having you around is definitely one of those things."
    },
    {
      "id": "p02",
      "category": "romantic",
      "ar": "ضحكتك ليها طريقة غريبة إنها تحسّن المود.",
      "en": "There's something about your smile that instantly lifts my mood."
    },
    {
      "id": "p03",
      "category": "romantic",
      "ar": "في ناس حضورها بيخلّي الكلام أحلى، وإنتِ منهم.",
      "en": "Some people just make every conversation better, and you're one of them."
    },
    {
      "id": "p04",
      "category": "romantic",
      "ar": "هو عادي الواحد يبتسم لمجرد إنه افتكر حد؟",
      "en": "Is it normal to smile just because someone crossed your mind?"
    },
    {
      "id": "p05",
      "category": "romantic",
      "ar": "عندك هدوء كده يخلي الواحد يحب يعرفك أكتر.",
      "en": "There's something so calming about you that makes me want to get to know you better."
    },
    {
      "id": "p06",
      "category": "romantic",
      "ar": "مش كل يوم بنقابل حد يلفت انتباهنا بالطريقة دي.",
      "en": "You don't meet someone who catches your attention like this every day."
    },
    {
      "id": "p07",
      "category": "romantic",
      "ar": "شكلك من الناس اللي الكلام معاهم مابيخلصش.",
      "en": "You seem like the kind of person I could talk to for hours."
    },
    {
      "id": "p08",
      "category": "romantic",
      "ar": "في حاجة مميزة في طريقتك مش عارف أوصفها.",
      "en": "There's something special about the way you are that I can't quite put into words."
    },
    {
      "id": "p09",
      "category": "romantic",
      "ar": "ابتسامتك محتاجة تتحط ضمن الحاجات اللي بتحسّن اليوم.",
      "en": "Your smile should be on the list of things that make any day better."
    },
    {
      "id": "p10",
      "category": "romantic",
      "ar": "مش هبالغ لو قلت إن وجودك لطيف بشكل استثنائي.",
      "en": "I wouldn't be exaggerating if I said your presence is something special."
    },
    {
      "id": "p11",
      "category": "romantic",
      "ar": "كل مرة بنتكلم فيها باكتشف إنك ألطف مما توقعت.",
      "en": "Every time we talk, I discover another reason to think you're even sweeter than I expected."
    },
    {
      "id": "p12",
      "category": "romantic",
      "ar": "هو الجمال في الشكل بس؟ أصل شخصيتك ليها كلام تاني.",
      "en": "Is beauty really just about looks? Because your personality deserves a compliment of its own."
    },
    {
      "id": "p13",
      "category": "playful",
      "ar": "كنت داخل أقول هاي، بس شكلي محتاج مقدمة أحسن.",
      "en": "I was just going to say hi, but I guess I need a better opening line."
    },
    {
      "id": "p14",
      "category": "playful",
      "ar": "عندي سؤال مهم: إنتِ دايماً لطيفة كده ولا دي مناسبة خاصة؟",
      "en": "Important question: Are you always this charming, or is today a special occasion?"
    },
    {
      "id": "p15",
      "category": "playful",
      "ar": "هو ينفع حد يبقى خفيف الدم بالشكل ده من غير تصريح؟",
      "en": "Is it even legal to be this funny without a license?"
    },
    {
      "id": "p16",
      "category": "playful",
      "ar": "واضح إنك بتعرفي تسرقي الانتباه من غير مجهود.",
      "en": "You clearly know how to steal the spotlight without even trying."
    },
    {
      "id": "p17",
      "category": "playful",
      "ar": "أنا مش بتاع مجاملات كتير، بس إنتِ بتسهّلي المهمة.",
      "en": "I'm not big on compliments, but you make it pretty easy."
    },
    {
      "id": "p18",
      "category": "playful",
      "ar": "شكلي هحتاج أزوّد رصيد الهزار عشان ألحق خفة دمك.",
      "en": "Looks like I'll need to step up my humor game to keep up with you."
    },
    {
      "id": "p19",
      "category": "playful",
      "ar": "عندك موهبة تخلي أي محادثة عادية تبقى ممتعة.",
      "en": "You've got a talent for making even an ordinary conversation fun."
    },
    {
      "id": "p20",
      "category": "playful",
      "ar": "أنا كنت ناوي أكون غامض، بس فضولي غلبني.",
      "en": "I was planning to play it cool, but curiosity got the better of me."
    },
    {
      "id": "p21",
      "category": "playful",
      "ar": "هو إنتِ بتضحكي كده ليه؟ الواحد بينسى كان بيقول إيه.",
      "en": "Why do you smile like that? You make me forget what I was about to say."
    },
    {
      "id": "p22",
      "category": "playful",
      "ar": "محتاج أعرف سر الطاقة اللطيفة اللي عندك دي.",
      "en": "I need to know the secret behind your lovely energy."
    },
    {
      "id": "p23",
      "category": "playful",
      "ar": "مش عارف أبدأ بإيه، فخلينا نبدأ باعتراف: لفتّي نظري.",
      "en": "I don't know where to start, so let me just admit it: you've caught my attention."
    },
    {
      "id": "p24",
      "category": "playful",
      "ar": "واضح إن الكلام معاكي ممكن يبقى هواية جديدة.",
      "en": "Talking to you might just become my new favorite hobby."
    },
    {
      "id": "p25",
      "category": "direct",
      "ar": "حبيت أتعرف عليكِ، وحسيت إنك شخص يستاهل فرصة الكلام.",
      "en": "I'd like to get to know you. You seem like someone worth having a conversation with."
    },
    {
      "id": "p26",
      "category": "direct",
      "ar": "هقولها ببساطة: إنتِ لفتّي انتباهي وحابب أعرفك.",
      "en": "I'll keep it simple: you've caught my attention, and I'd like to get to know you."
    },
    {
      "id": "p27",
      "category": "direct",
      "ar": "مش بحب اللف والدوران، فحابب أبدأ معاكي بكلمة هاي.",
      "en": "I'm not into beating around the bush, so I thought I'd just say hi."
    },
    {
      "id": "p28",
      "category": "direct",
      "ar": "طريقتك شدتني، وحابب أعرف أكتر عن شخصيتك.",
      "en": "Something about your vibe caught my attention, and I'd love to know more about you."
    },
    {
      "id": "p29",
      "category": "direct",
      "ar": "أنا شايف إن أحلى التعارف بيبدأ بكلام بسيط وصادق.",
      "en": "I think the best connections start with simple, genuine conversations."
    },
    {
      "id": "p30",
      "category": "direct",
      "ar": "إيه رأيك نبدأ نتكلم ونعرف بعض من غير تكلف؟",
      "en": "How about we start talking and get to know each other without any pressure?"
    },
    {
      "id": "p31",
      "category": "direct",
      "ar": "حابب أعرف إيه الحاجات اللي بتخليكي مبسوطة بجد.",
      "en": "I'd love to know what genuinely makes you happy."
    },
    {
      "id": "p32",
      "category": "direct",
      "ar": "عندي فضول أعرف الشخصية اللي ورا الابتسامة دي.",
      "en": "I'm curious to get to know the person behind that smile."
    },
    {
      "id": "p33",
      "category": "direct",
      "ar": "مش جاي أقول كلام محفوظ، أنا فعلاً حابب أتعرف عليكي.",
      "en": "I'm not here with a bunch of rehearsed lines. I genuinely want to get to know you."
    },
    {
      "id": "p34",
      "category": "direct",
      "ar": "واضح إن عندك شخصية مميزة، وحابب أكتشفها بنفسي.",
      "en": "You seem to have a unique personality, and I'd like to discover that for myself."
    },
    {
      "id": "p35",
      "category": "direct",
      "ar": "ممكن نبدأ بصداقة وكلام لطيف ونشوف الدنيا هتودينا لفين.",
      "en": "We can start with friendship and good conversations, then see where things go."
    },
    {
      "id": "p36",
      "category": "direct",
      "ar": "أنا مؤمن إن الانطباع الحلو يستاهل إننا ندي له فرصة.",
      "en": "I believe a good first impression deserves a chance."
    },
    {
      "id": "p37",
      "category": "witty",
      "ar": "هو اسمك حلو كده لوحده ولا أنا اللي بقيت بحب أسمعه؟",
      "en": "Is your name naturally this lovely, or have I just started enjoying the sound of it?"
    },
    {
      "id": "p38",
      "category": "witty",
      "ar": "لو الكلام فن، فأنا حابب أتعلم منك شوية.",
      "en": "If conversation is an art, I'd love to learn a thing or two from you."
    },
    {
      "id": "p39",
      "category": "witty",
      "ar": "كنت بدور على موضوع أبدأ بيه، لقيت إنك أحلى موضوع.",
      "en": "I was looking for a conversation starter, then realized you're the best topic."
    },
    {
      "id": "p40",
      "category": "witty",
      "ar": "مش عارف الصدفة جابتنا هنا إزاي، بس شكلها ذوقها حلو.",
      "en": "I don't know how fate brought us here, but it clearly has good taste."
    },
    {
      "id": "p41",
      "category": "witty",
      "ar": "عندي نظرية إن بعض الناس بتغيّر مود المكان بمجرد وجودها.",
      "en": "I have a theory that some people can change the whole mood of a place just by being there."
    },
    {
      "id": "p42",
      "category": "witty",
      "ar": "إنتِ من النوع اللي بيخلّي علامة الاستفهام تبقى فضول لطيف.",
      "en": "You're the kind of person who turns a question mark into genuine curiosity."
    },
    {
      "id": "p43",
      "category": "witty",
      "ar": "لو اليوم فيلم، فأنا حاسس إن ظهورك فيه هيبقى مشهد مميز.",
      "en": "If today were a movie, I have a feeling your appearance would be a memorable scene."
    },
    {
      "id": "p44",
      "category": "witty",
      "ar": "مش كل الحاجات الحلوة محتاجة تفسير، صح؟",
      "en": "Not every beautiful thing needs an explanation, right?"
    },
    {
      "id": "p45",
      "category": "witty",
      "ar": "عندي إحساس إن عندك حكايات أحلى من أي مسلسل.",
      "en": "I have a feeling your stories are better than any TV series."
    },
    {
      "id": "p46",
      "category": "witty",
      "ar": "إنتِ بتختاري كلامك بعناية ولا دي موهبة طبيعية؟",
      "en": "Do you choose your words so carefully, or is that just a natural talent?"
    },
    {
      "id": "p47",
      "category": "witty",
      "ar": "هو ممكن محادثة تبدأ عادية وتبقى أحلى جزء في اليوم؟",
      "en": "Can an ordinary conversation turn into the best part of someone's day?"
    },
    {
      "id": "p48",
      "category": "witty",
      "ar": "شكلي محتاج أغيّر تعريف كلمة صدفة بعد ما اتعرفت عليكي.",
      "en": "I think I need to redefine the word \"coincidence\" after meeting you."
    }
  ],
  "morning-texts": [
    {
      "id": "m01",
      "category": "romantic",
      "ar": "صباح الخير على أحلى ابتسامة، أتمنى يومك يبقى جميل زيك.",
      "en": "Good morning to the sweetest smile. I hope your day is as beautiful as you are."
    },
    {
      "id": "m02",
      "category": "romantic",
      "ar": "صباحك راحة بال وحاجات حلوة تفرّح قلبك.",
      "en": "Wishing you a peaceful morning and lots of lovely things to make you smile."
    },
    {
      "id": "m03",
      "category": "romantic",
      "ar": "أتمنى أول حاجة تفرّحك النهارده تكون أحلى من اللي متوقعاه.",
      "en": "I hope the first thing that makes you smile today is even better than you expected."
    },
    {
      "id": "m04",
      "category": "romantic",
      "ar": "صباح الخير، وجودك في بالي خلّى الصبح ألطف.",
      "en": "Good morning. Just having you on my mind made this morning a little sweeter."
    },
    {
      "id": "m05",
      "category": "romantic",
      "ar": "يوم جديد وفرصة جديدة إنك تضحكي من قلبك.",
      "en": "A new day and a new chance to laugh your heart out."
    },
    {
      "id": "m06",
      "category": "romantic",
      "ar": "صباحك جميل يا صاحبة الحضور المميز.",
      "en": "Good morning to someone with such a lovely presence."
    },
    {
      "id": "m07",
      "category": "romantic",
      "ar": "أتمنى يومك يبدأ بابتسامة ويخلص على خبر حلو.",
      "en": "I hope your day starts with a smile and ends with some wonderful news."
    },
    {
      "id": "m08",
      "category": "romantic",
      "ar": "صباح الخير على حد وجوده بيضيف للحياة طعم حلو.",
      "en": "Good morning to someone who makes life a little sweeter just by being around."
    },
    {
      "id": "m09",
      "category": "romantic",
      "ar": "يا رب يومك يبقى هادي ولطيف زي روحك.",
      "en": "I hope your day is as peaceful and lovely as your soul."
    },
    {
      "id": "m10",
      "category": "romantic",
      "ar": "صباحك مليان لحظات تستاهلي تتبسطي بيها.",
      "en": "Wishing you a morning full of moments worth enjoying."
    },
    {
      "id": "m11",
      "category": "romantic",
      "ar": "حبيت أبدأ يومي برسالة بسيطة وأقولك إنك على بالي.",
      "en": "I wanted to start my day with a simple message to let you know you're on my mind."
    },
    {
      "id": "m12",
      "category": "romantic",
      "ar": "صباح الخير، أتمنى النهارده يكون حنين عليكي.",
      "en": "Good morning. I hope today treats you kindly."
    },
    {
      "id": "m13",
      "category": "playful",
      "ar": "صباح الفل، صحيتي ولا لسه بتفاوضي المخدة؟",
      "en": "Morning, sunshine! Are you awake, or are you still negotiating with your pillow?"
    },
    {
      "id": "m14",
      "category": "playful",
      "ar": "صباح النشاط، ولا نأجل النشاط لبعد القهوة؟",
      "en": "Good morning! Feeling energetic, or should we postpone that until after coffee?"
    },
    {
      "id": "m15",
      "category": "playful",
      "ar": "قومي للدنيا، عندها يوم جديد مستنياكي.",
      "en": "Rise and shine! A whole new day is waiting for you."
    },
    {
      "id": "m16",
      "category": "playful",
      "ar": "صباح الخير، أتمنى المنبه كان لطيف معاكي النهارده.",
      "en": "Good morning! I hope your alarm was gentle with you today."
    },
    {
      "id": "m17",
      "category": "playful",
      "ar": "هو الصبح بيبقى أحلى لما تبقي رايقة كده؟",
      "en": "Do mornings always get better when you're in such a good mood?"
    },
    {
      "id": "m18",
      "category": "playful",
      "ar": "صباحك سكر، بس من غير ما تنسي تفطري.",
      "en": "Sweet morning to you, but don't forget to have breakfast!"
    },
    {
      "id": "m19",
      "category": "playful",
      "ar": "أتمنى القهوة تكون مظبوطة والمود يكون أظبط.",
      "en": "Hope your coffee is just right and your mood is even better."
    },
    {
      "id": "m20",
      "category": "playful",
      "ar": "صباح الضحكة الحلوة، عندك رصيد ضحك لليوم؟",
      "en": "Good morning to that lovely smile! Got enough laughs saved up for today?"
    },
    {
      "id": "m21",
      "category": "playful",
      "ar": "يا رب يومك يعدّي من غير اجتماعات ملهاش لازمة.",
      "en": "I hope you make it through the day without any pointless meetings."
    },
    {
      "id": "m22",
      "category": "playful",
      "ar": "صباح الخير، النهارده ممنوع الزعل إلا بإذن مسبق.",
      "en": "Good morning! No getting upset today without prior permission."
    },
    {
      "id": "m23",
      "category": "playful",
      "ar": "لو يومك بدأ بنعاس، فاعتبري الرسالة دي محاولة إنقاذ.",
      "en": "If your day started with sleepiness, consider this message a rescue mission."
    },
    {
      "id": "m24",
      "category": "playful",
      "ar": "صباحك خفيف زي دمك، ومليان حاجات تضحكك.",
      "en": "Hope your morning is as fun as your sense of humor and full of reasons to laugh."
    },
    {
      "id": "m25",
      "category": "support",
      "ar": "صباح جديد، فرصة جديدة تعملي حاجة تفتخري بيها.",
      "en": "A new morning, a new chance to do something you'll be proud of."
    },
    {
      "id": "m26",
      "category": "support",
      "ar": "ابدئي يومك براحة، مش لازم كل حاجة تحصل مرة واحدة.",
      "en": "Start your day at your own pace. Not everything has to happen all at once."
    },
    {
      "id": "m27",
      "category": "support",
      "ar": "صباح الخير، خطوة صغيرة النهارده ممكن تعمل فرق كبير.",
      "en": "Good morning! One small step today can make a big difference."
    },
    {
      "id": "m28",
      "category": "support",
      "ar": "افتكري إنك تستاهلي يوم حلو ومليان إنجازات.",
      "en": "Remember, you deserve a beautiful day full of achievements."
    },
    {
      "id": "m29",
      "category": "support",
      "ar": "خليكي واثقة في نفسك، إنتِ قد اللي جاي.",
      "en": "Believe in yourself. You're more than capable of handling what's ahead."
    },
    {
      "id": "m30",
      "category": "support",
      "ar": "أتمنى النهارده يفتحلك باب كنتِ مستنياه من زمان.",
      "en": "I hope today opens a door you've been waiting to walk through for a long time."
    },
    {
      "id": "m31",
      "category": "support",
      "ar": "صباح التفاؤل، وسيبي مساحة للحاجات الحلوة تفاجئك.",
      "en": "Good morning! Stay optimistic and leave room for beautiful surprises."
    },
    {
      "id": "m32",
      "category": "support",
      "ar": "مش لازم اليوم يبقى مثالي عشان يبقى يوم جميل.",
      "en": "A day doesn't have to be perfect to be a beautiful one."
    },
    {
      "id": "m33",
      "category": "support",
      "ar": "ابدئي بابتسامة، وخدي الدنيا واحدة واحدة.",
      "en": "Start with a smile and take things one step at a time."
    },
    {
      "id": "m34",
      "category": "support",
      "ar": "أتمنى تلاقي النهارده سبب جديد يخليكي فخورة بنفسك.",
      "en": "I hope you find another reason to be proud of yourself today."
    },
    {
      "id": "m35",
      "category": "support",
      "ar": "صباح الخير، متنسيش تدي لنفسك حقها في الراحة.",
      "en": "Good morning! Don't forget to give yourself the rest you deserve."
    },
    {
      "id": "m36",
      "category": "support",
      "ar": "يومك فرصة جديدة، خليكي متحمسة للحاجات اللي مستنياكي.",
      "en": "Today is a fresh opportunity. Stay excited about all the good things waiting for you."
    },
    {
      "id": "m37",
      "category": "care",
      "ar": "صباح الخير، حبيت أطمن إنك بدأتي يومك كويس.",
      "en": "Good morning! Just wanted to check that your day is off to a good start."
    },
    {
      "id": "m38",
      "category": "care",
      "ar": "أول ما صحيت افتكرت إن في حد نفسي أقوله صباح الخير.",
      "en": "As soon as I woke up, I thought of someone I really wanted to say good morning to."
    },
    {
      "id": "m39",
      "category": "care",
      "ar": "صباحك جميل، يا رب تكوني نمتي كويس.",
      "en": "Hope you're having a lovely morning. I hope you slept well."
    },
    {
      "id": "m40",
      "category": "care",
      "ar": "كنت حابب أكون أول حد يتمنى لك يوم لطيف.",
      "en": "I wanted to be the first person to wish you a lovely day."
    },
    {
      "id": "m41",
      "category": "care",
      "ar": "صباح الخير، وحشتني حكاياتك وضحكتك.",
      "en": "Good morning! I miss your stories and your laughter."
    },
    {
      "id": "m42",
      "category": "care",
      "ar": "أتمنى تكوني صحيتي بمود حلو النهارده.",
      "en": "I hope you woke up in a good mood today."
    },
    {
      "id": "m43",
      "category": "care",
      "ar": "صباحك راحة، وخدي بالك من نفسك وسط زحمة اليوم.",
      "en": "Wishing you a peaceful morning. Take care of yourself in the middle of your busy day."
    },
    {
      "id": "m44",
      "category": "care",
      "ar": "حبيت أسيبلك رسالة صغيرة تخلي بداية يومك ألطف.",
      "en": "I wanted to leave you a little message to make the start of your day sweeter."
    },
    {
      "id": "m45",
      "category": "care",
      "ar": "صباح الخير، مستني أسمع أخبارك الحلوة لما تفضي.",
      "en": "Good morning! Looking forward to hearing your good news whenever you get a chance."
    },
    {
      "id": "m46",
      "category": "care",
      "ar": "أتمنى يومك يكون هادي، ونلاقي وقت نتكلم فيه.",
      "en": "I hope you have a peaceful day and that we find some time to talk."
    },
    {
      "id": "m47",
      "category": "care",
      "ar": "صباحك ورد، وجودك في يومي من الحاجات اللي بحبها.",
      "en": "A lovely morning to you. Having you in my day is one of the things I really enjoy."
    },
    {
      "id": "m48",
      "category": "care",
      "ar": "حتى لو اليوم زحمة، أتمنى تلاقي لحظة حلوة تفتكريني فيها.",
      "en": "Even if your day gets busy, I hope you find a sweet little moment that makes you think of me."
    }
  ],
  "conversation-topics": [
    {
      "id": "t01",
      "category": "personality",
      "ar": "إيه أكتر صفة بتحبيها في شخصيتك؟",
      "en": "What's your favorite thing about your personality?"
    },
    {
      "id": "t02",
      "category": "personality",
      "ar": "لو هتوصفي نفسك في ٣ كلمات، هتختاري إيه؟",
      "en": "If you had to describe yourself in three words, what would they be?"
    },
    {
      "id": "t03",
      "category": "personality",
      "ar": "إيه أكتر حاجة بتخليكي ترتاحي في التعامل مع حد؟",
      "en": "What makes you feel comfortable around someone?"
    },
    {
      "id": "t04",
      "category": "personality",
      "ar": "بتحبي تقضي وقتك وسط ناس كتير ولا في قعدة هادية؟",
      "en": "Do you prefer being around lots of people or having a quiet hangout?"
    },
    {
      "id": "t05",
      "category": "personality",
      "ar": "إيه حاجة صغيرة ممكن تحسّن يومك جداً؟",
      "en": "What's one little thing that can make your day so much better?"
    },
    {
      "id": "t06",
      "category": "personality",
      "ar": "بتحبي الناس اللي شبهك ولا اللي شخصياتهم مختلفة عنك؟",
      "en": "Do you prefer people who are similar to you or those with completely different personalities?"
    },
    {
      "id": "t07",
      "category": "interests",
      "ar": "إيه آخر فيلم أو مسلسل شدّك جداً؟",
      "en": "What's the last movie or TV show that really got you hooked?"
    },
    {
      "id": "t08",
      "category": "interests",
      "ar": "لو عندك يوم فاضي تماماً، هتقضيه إزاي؟",
      "en": "If you had a completely free day, how would you spend it?"
    },
    {
      "id": "t09",
      "category": "interests",
      "ar": "بتحبي السفر للبحر ولا الأماكن اللي فيها طبيعة؟",
      "en": "Do you prefer traveling to beach destinations or places surrounded by nature?"
    },
    {
      "id": "t10",
      "category": "interests",
      "ar": "إيه نوع الأغاني اللي بتسمعيها لما تكوني مبسوطة؟",
      "en": "What kind of music do you listen to when you're in a good mood?"
    },
    {
      "id": "t11",
      "category": "interests",
      "ar": "في هواية نفسك تتعلميها ولسه مجتش الفرصة؟",
      "en": "Is there a hobby you've always wanted to learn but haven't had the chance to try yet?"
    },
    {
      "id": "t12",
      "category": "interests",
      "ar": "بتحبي تجربة مطاعم جديدة ولا بتفضّلي الأماكن المضمونة؟",
      "en": "Do you enjoy trying new restaurants, or do you prefer sticking to places you already know?"
    },
    {
      "id": "t13",
      "category": "fun",
      "ar": "لو تقدري تسافري بكرة لأي بلد، هتختاري إيه؟",
      "en": "If you could travel to any country tomorrow, where would you go?"
    },
    {
      "id": "t14",
      "category": "fun",
      "ar": "إيه أغرب أكلة جربتيها وطلعت بتحبيها؟",
      "en": "What's the weirdest food you've ever tried and ended up loving?"
    },
    {
      "id": "t15",
      "category": "fun",
      "ar": "لو حياتك مسلسل، تحبي يكون كوميدي ولا رومانسي؟",
      "en": "If your life were a TV show, would you want it to be a comedy or a romance?"
    },
    {
      "id": "t16",
      "category": "fun",
      "ar": "إيه موقف محرج حصل لك وبقيتي تضحكي عليه دلوقتي؟",
      "en": "What's an embarrassing moment that you can laugh about now?"
    },
    {
      "id": "t17",
      "category": "fun",
      "ar": "لو تقدري تقابلي شخصية مشهورة وتقعدي معاها ساعة، هتختاري مين؟",
      "en": "If you could meet any celebrity and spend an hour with them, who would you choose?"
    },
    {
      "id": "t18",
      "category": "fun",
      "ar": "تفضّلي تعيشي من غير موبايل أسبوع ولا من غير قهوة شهر؟",
      "en": "Would you rather go a week without your phone or a whole month without coffee?"
    },
    {
      "id": "t19",
      "category": "relationships",
      "ar": "إيه أكتر تصرف بسيط ممكن يخليكي تحسي باهتمام حد؟",
      "en": "What's a small gesture that makes you feel genuinely cared for?"
    },
    {
      "id": "t20",
      "category": "relationships",
      "ar": "بالنسبة لك، إيه اللي بيخلي العلاقة مريحة وناجحة؟",
      "en": "What do you think makes a relationship comfortable and successful?"
    },
    {
      "id": "t21",
      "category": "relationships",
      "ar": "بتحبي التعبير عن المشاعر بالكلام ولا بالأفعال؟",
      "en": "Do you prefer expressing feelings through words or actions?"
    },
    {
      "id": "t22",
      "category": "relationships",
      "ar": "إيه رأيك في إن الصداقة تكون بداية لعلاقة رومانسية؟",
      "en": "What do you think about friendship turning into a romantic relationship?"
    },
    {
      "id": "t23",
      "category": "relationships",
      "ar": "إيه أكتر حاجة بتقدّريها في الشخص اللي بتتعرفي عليه؟",
      "en": "What's the quality you appreciate most in someone you're getting to know?"
    },
    {
      "id": "t24",
      "category": "relationships",
      "ar": "بالنسبة لك، إيه الفرق بين الإعجاب الحقيقي والانبهار المؤقت؟",
      "en": "What's the difference, to you, between genuine attraction and a passing infatuation?"
    }
  ]
};
