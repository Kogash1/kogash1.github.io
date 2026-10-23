// Полная база данных из 24 книг по всем направлениям и жанрам
const BOOKS_DB = {
    "master-i-margarita": {
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        authorAnchor: "authors.html#bulgakov",
        genre: "Фэнтези",
        category: "fiction",
        categoryName: "Художественная литература",
        year: 2026,
        price: 850,
        rating: 4.95,
        reviewsCount: 1420,
        convenience: "9.8/10",
        coverImg: "images/MaM.jpg",
        badge: "Хит продаж",
        subtitle: "Подарочное иллюстрированное издание",
        isbn: "978-5-17-090333-8",
        binding: "Твердый переплет (7БЦ) с золотым тиснением и ляссе",
        paper: "80 г/м², офсетная белая (не просвечивает)",
        weight: "460 г / 130×205 мм (512 страниц)",
        digital: "EPUB, FB2, PDF + Аудиокнига (14 ч. 20 мин.)",
        description: "Бессмертный философско-мистический роман Михаила Булгакова. Весенним днем в Москве на Патриарших прудах появляется загадочный иностранец Воланд со своей свитой, переплетая сатиру на столичный быт, историю любви Мастера и Маргариты и библейские главы о Понтии Пилате.",
        fragmentTitle: "Глава 1. Никогда не разговаривайте с неизвестными",
        fragmentText: "Однажды весною, в час небывало жаркого заката, в Москве, на Патриарших прудах, появились два гражданина. Первый из них, одетый в летнюю серенькую пару, был маленького роста, упитан, лыс...",
        sameAuthor: ["sobache-serdtse", "belaya-gvardiya"],
        similar: ["faust", "portret-doriana-greya"],
        reviews: [
            { name: "Екатерина Смирнова", score: 5, conv: 10, text: "Прекрасное издание! Бумага плотная 80 г/м², глаза не устают, корешок прошитый.", photos: true }
        ]
    },
    "lord-of-the-rings": {
        title: "Властелин Колец: Хранители Кольца",
        author: "Дж. Р. Р. Толкин",
        authorAnchor: "authors.html",
        genre: "Фэнтези",
        category: "fiction",
        categoryName: "Художественная литература",
        year: 2026,
        price: 1250,
        rating: 4.97,
        reviewsCount: 1890,
        convenience: "9.9/10",
        coverImg: "images/lotr.jpg",
        badge: "Топ-1 Фэнтези",
        subtitle: "Издание с картой Средиземья на форзаце",
        isbn: "978-5-17-120455-1",
        binding: "Твердый переплет с тиснением золотой фольгой",
        paper: "85 г/м², офсетная кремовая",
        weight: "680 г / 145×215 мм (576 страниц)",
        digital: "EPUB, FB2 + Аудиокнига (19 ч. 10 мин.)",
        description: "Величайшая фэнтези-эпопея в истории мировой литературы. Хоббиту Фродо Бэггинсу выпадает опасная миссия — отнести Кольцо Всевластия к роковой горе Ородруин в самом сердце Мордора.",
        fragmentTitle: "Глава 1. Долгожданное угощение",
        fragmentText: "Когда мистер Бильбо Бэггинс из Бэг-Энда объявил, что в скором времени намерен с размахом отпраздновать свое стоодиннадцатилетие, весь Хоббитон загудел от волнения...",
        sameAuthor: ["witcher-last-wish"],
        similar: ["witcher-last-wish", "dune"],
        reviews: [
            { name: "Артем Л.", score: 5, conv: 10, text: "Классический перевод, шикарная карта Средиземья на развороте!", photos: true }
        ]
    },
    "witcher-last-wish": {
        title: "Ведьмак: Последнее желание",
        author: "Анджей Сапковский",
        authorAnchor: "authors.html",
        genre: "Фэнтези",
        category: "fiction",
        categoryName: "Художественная литература",
        year: 2025,
        price: 790,
        rating: 4.91,
        reviewsCount: 1320,
        convenience: "9.6/10",
        coverImg: "images/9.jpg",
        badge: "Бестселлер",
        subtitle: "Первая книга культовой саги о Геральте",
        isbn: "978-5-17-095412-5",
        binding: "Твердый переплет",
        paper: "80 г/м², офсетная",
        weight: "390 г / 130×205 мм (384 страницы)",
        digital: "EPUB, FB2 + Аудиокнига (11 ч. 30 мин., читает В. Кузнецов)",
        description: "Геральт из Ривии — ведьмак, профессиональный охотник на чудовищ, странствующий по миру, где люди порой оказываются куда страшнее любых монстров.",
        fragmentTitle: "Глас рассудка 1",
        fragmentText: "Потом говорили, что человек этот пришел с севера, со стороны Канатчиковых ворот. Шел он пешком, а навьюченную лошадь вел под уздцы...",
        sameAuthor: ["lord-of-the-rings"],
        similar: ["lord-of-the-rings", "master-i-margarita"],
        reviews: [
            { name: "Максим Г.", score: 5, conv: 9, text: "Оторваться невозможно, диалоги и юмор на высоте.", photos: false }
        ]
    },
    "ten-little-indians": {
        title: "Десять негритят",
        author: "Агата Кристи",
        authorAnchor: "authors.html#christie",
        genre: "Детективы",
        category: "fiction",
        categoryName: "Художественная литература",
        year: 2025,
        price: 690,
        rating: 4.89,
        reviewsCount: 980,
        convenience: "9.6/10",
        coverImg: "images/10.jpg",
        badge: "Топ жанра",
        subtitle: "Золотой фонд мирового детектива",
        isbn: "978-5-04-112450-2",
        binding: "Твердый переплет с матовой ламинацией",
        paper: "75 г/м², офсетная кремовая",
        weight: "320 г / 130×200 мм (320 страниц)",
        digital: "EPUB, FB2 + Аудиокнига (8 ч. 10 мин.)",
        description: "Десять незнакомых друг с другом людей оказываются в особняке на уединенном острове. Отрезанные от материка бурей, гости начинают погибать один за другим по тексту детской считалки.",
        fragmentTitle: "Глава 1. На пути к острову",
        fragmentText: "В углу вагона первого класса для курящих сидел мистер судья Уоргрейв, недавно ушедший в отставку. Он затягивался сигарой и пробегал глазами новости в газете «Таймс»...",
        sameAuthor: ["orient-express", "sherlock-holmes"],
        similar: ["orient-express", "sherlock-holmes"],
        reviews: [
            { name: "Марина К.", score: 5, conv: 10, text: "Эталон герметичного детектива! Прочитала за одну ночь.", photos: true }
        ]
    },
    "orient-express": {
        title: "Убийство в «Восточном экспрессе»",
        author: "Агата Кристи",
        authorAnchor: "authors.html#christie",
        genre: "Детективы",
        category: "fiction",
        categoryName: "Художественная литература",
        year: 2026,
        price: 670,
        rating: 4.92,
        reviewsCount: 1140,
        convenience: "9.7/10",
        coverImg: "images/va.jpg",
        badge: "Классика",
        subtitle: "Лучшее расследование Эркюля Пуаро",
        isbn: "978-5-04-154890-1",
        binding: "Твердый переплет",
        paper: "80 г/м², офсетная белая",
        weight: "310 г / 130×200 мм (320 страниц)",
        digital: "EPUB, FB2 + Аудиокнига (7 ч. 50 мин.)",
        description: "Знаменитый поезд «Восточный экспресс» застревает в снежных заносах на Балканах. Ночью в одном из купе совершено загадочное убийство, а среди пассажиров оказывается сыщик Эркюль Пуаро.",
        fragmentTitle: "Часть 1. Факты. Глава 1",
        fragmentText: "Было пять часов утра зимнего дня в Сирии. На платформе вокзала в Алеппо стоял поезд, в железнодорожных справочниках громко именовавшийся «Таврским экспрессом»...",
        sameAuthor: ["ten-little-indians"],
        similar: ["ten-little-indians", "sherlock-holmes"],
        reviews: [
            { name: "Светлана В.", score: 5, conv: 10, text: "Атмосфера снежного поезда передана великолепно, развязка гениальная.", photos: true }
        ]
    },
    "sherlock-holmes": {
        title: "Приключения Шерлока Холмса",
        author: "Артур Конан Дойл",
        authorAnchor: "authors.html",
        genre: "Детективы",
        category: "fiction",
        categoryName: "Художественная литература",
        year: 2025,
        price: 740,
        rating: 4.94,
        reviewsCount: 1290,
        convenience: "9.8/10",
        coverClass: "cover-10",
        badge: "С иллюстрациями",
        subtitle: "С оригинальными гравюрами Сидни Паджета",
        isbn: "978-5-389-04512-5",
        binding: "Твердый переплет с тиснением",
        paper: "85 г/м², офсетная",
        weight: "480 г / 140×210 мм (448 страниц)",
        digital: "EPUB, PDF + Аудиокнига (12 ч. 40 мин.)",
        description: "Сборник классических детективных рассказов о великом лондонском сыщике с Бейкер-стрит, 221Б и его верном биографе докторе Ватсоне.",
        fragmentTitle: "Скандал в Богемии",
        fragmentText: "Для Шерлока Холмса она всегда оставалась «Этой Женщиной». Я редко слышал, чтобы он называл ее каким-либо другим именем...",
        sameAuthor: ["ten-little-indians"],
        similar: ["ten-little-indians", "orient-express"],
        reviews: [
            { name: "Роман П.", score: 5, conv: 10, text: "Классические гравюры внутри делают чтение вдвойне приятным!", photos: true }
        ]
    },
    "dune": {
        title: "Дюна. Хроники Арракиса",
        author: "Фрэнк Герберт",
        authorAnchor: "authors.html#herbert",
        genre: "Фантастика",
        category: "fiction",
        categoryName: "Художественная литература",
        year: 2026,
        price: 1120,
        rating: 4.91,
        reviewsCount: 1150,
        convenience: "9.9/10",
        coverImg: "images/du.jpg",
        badge: "Новинка",
        subtitle: "Иллюстрированное коллекционное издание",
        isbn: "978-5-17-112904-0",
        binding: "Твердый переплет с рельефным тиснением фольгой",
        paper: "85 г/м², офсетная повышенной белизны",
        weight: "790 г / 150×220 мм (768 страниц)",
        digital: "EPUB, FB2 + Многоголосая аудиокнига (23 ч. 15 мин.)",
        description: "Величайший научно-фантастический эпос XX века. Песчаная планета Арракис — единственный во Вселенной источник бесценной Пряности, за контроль над которой борются Великие Дома.",
        fragmentTitle: "Книга 1. Дюна — Начало пути",
        fragmentText: "В последнюю неделю перед отлетом на Арракис, когда вся эта преддорожная суматоха достигла почти невыносимого накала, к матери мальчика пришла в гости глубокая старуха...",
        sameAuthor: ["solaris"],
        similar: ["solaris", "sobache-serdtse"],
        reviews: [
            { name: "Дмитрий Н.", score: 5, conv: 10, text: "Монументальное издание! Книгу очень удобно держать в руках.", photos: true }
        ]
    },
    "solaris": {
        title: "Солярис",
        author: "Станислав Лем",
        authorAnchor: "authors.html",
        genre: "Фантастика",
        category: "fiction",
        categoryName: "Художественная литература",
        year: 2025,
        price: 680,
        rating: 4.86,
        reviewsCount: 740,
        convenience: "9.5/10",
        coverClass: "cover-8",
        badge: "Научная фантастика",
        subtitle: "Философская фантастика XX века",
        isbn: "978-5-17-108934-4",
        binding: "Твердый переплет",
        paper: "80 г/м², офсетная",
        weight: "310 г / 130×205 мм (288 страниц)",
        digital: "EPUB, FB2 + Аудиоспектакль (8 ч. 05 мин.)",
        description: "Психолог Крис Кельвин прибывает на исследовательскую станцию далекой планеты Солярис, покрытой разумным Океаном, который материализует самые сокровенные и мучительные воспоминания людей.",
        fragmentTitle: "Глава 1. Прибытие",
        fragmentText: "В девятнадцать часов по бортовому времени я спустился по металлическим ступенькам в капсулу старта...",
        sameAuthor: ["dune"],
        similar: ["dune", "brief-history-of-time"],
        reviews: [
            { name: "Илья К.", score: 5, conv: 9, text: "Глубокая книга о границах человеческого познания.", photos: false }
        ]
    },
    "sobache-serdtse": {
        title: "Собачье сердце",
        author: "Михаил Булгаков",
        authorAnchor: "authors.html#bulgakov",
        genre: "Фантастика",
        category: "fiction",
        categoryName: "Художественная литература",
        year: 2025,
        price: 520,
        rating: 4.92,
        reviewsCount: 1110,
        convenience: "9.7/10",
        coverClass: "cover-2",
        badge: "Классика",
        subtitle: "Повести и рассказы 1920-х годов",
        isbn: "978-5-17-098112-1",
        binding: "Твердый переплет",
        paper: "80 г/м², офсетная белая",
        weight: "290 г / 130×200 мм (256 страниц)",
        digital: "EPUB, FB2 + Аудиокнига (4 ч. 30 мин.)",
        description: "Блестящая сатирическая повесть о смелом научном эксперименте профессора Преображенского и доктора Борменталя, пересадивших бездомному псу Шарику человеческий гипофиз.",
        fragmentTitle: "Глава 1. В подворотне",
        fragmentText: "У-у-у-у-у-гу-гу-гу-уу! О, гляньте на меня, я погибаю! Вьюга в подворотне ревет мне отходную, и я вою с нею...",
        sameAuthor: ["master-i-margarita", "belaya-gvardiya"],
        similar: ["master-i-margarita", "dune"],
        reviews: [
            { name: "Сергей М.", score: 5, conv: 10, text: "Классика на все времена, каждую фразу знаешь наизусть.", photos: false }
        ]
    },
    "pride-and-prejudice": {
        title: "Гордость и предубеждение",
        author: "Джейн Остин",
        authorAnchor: "authors.html",
        genre: "Романы",
        category: "fiction",
        categoryName: "Художественная литература",
        year: 2026,
        price: 630,
        rating: 4.93,
        reviewsCount: 1490,
        convenience: "9.8/10",
        coverClass: "cover-5",
        badge: "Любимая классика",
        subtitle: "Подарочное издание с ляссе",
        isbn: "978-5-389-02134-1",
        binding: "Твердый переплет с тканевым корешком",
        paper: "80 г/м², офсетная кремовая",
        weight: "410 г / 130×205 мм (416 страниц)",
        digital: "EPUB, FB2 + Аудиокнига (13 ч. 15 мин.)",
        description: "Остроумный, тонкий и романтичный шедевр английской литературы об истории взаимоотношений своенравной Элизабет Беннет и горделивого мистера Дарси.",
        fragmentTitle: "Глава 1",
        fragmentText: "Все знают, что молодой человек, располагающий средствами, должен подыскивать себе жену...",
        sameAuthor: ["portret-doriana-greya"],
        similar: ["portret-doriana-greya", "belaya-gvardiya"],
        reviews: [
            { name: "Анна В.", score: 5, conv: 10, text: "Идеальное издание для домашней библиотеки, кремовая бумага очень приятна глазу.", photos: true }
        ]
    },
    "portret-doriana-greya": {
        title: "Портрет Дориана Грея",
        author: "Оскар Уайльд",
        authorAnchor: "authors.html",
        genre: "Романы",
        category: "fiction",
        categoryName: "Художественная литература",
        year: 2026,
        price: 610,
        rating: 4.90,
        reviewsCount: 1340,
        convenience: "9.8/10",
        coverClass: "cover-7",
        badge: "Бестселлер",
        subtitle: "Коллекционная серия зарубежной классики",
        isbn: "978-5-17-089143-6",
        binding: "Твердый переплет",
        paper: "80 г/м², офсетная белая",
        weight: "310 г / 130×200 мм (320 страниц)",
        digital: "EPUB, FB2 + Аудиокнига (8 ч. 50 мин.)",
        description: "Знаменитый роман Оскара Уайльда о прекрасном юноше Дориане Грее, чей живописный портрет стареет и отражает все пороки владельца вместо него самого.",
        fragmentTitle: "Глава 1. Мастерская художника",
        fragmentText: "Мастерская была наполнена густым благоуханием роз, а когда в саду поднимался летний ветерок, он доносил сквозь открытую дверь пьянящий запах сирени...",
        sameAuthor: ["pride-and-prejudice"],
        similar: ["master-i-margarita", "faust"],
        reviews: [
            { name: "Алина Т.", score: 5, conv: 10, text: "Книга полна блестящих афоризмов на каждой странице!", photos: true }
        ]
    },
    "count-of-monte-cristo": {
        title: "Граф Монте-Кристо",
        author: "Александр Дюма",
        authorAnchor: "authors.html",
        genre: "Приключения",
        category: "fiction",
        categoryName: "Художественная литература",
        year: 2025,
        price: 1190,
        rating: 4.96,
        reviewsCount: 1620,
        convenience: "9.8/10",
        coverImg: "images/mk.png",
        badge: "Золотая серия",
        subtitle: "Полное иллюстрированное издание в одном томе",
        isbn: "978-5-389-07891-8",
        binding: "Твердый переплет с золотым тиснением",
        paper: "80 г/м², офсетная",
        weight: "980 г / 150×220 мм (1024 страницы)",
        digital: "EPUB, FB2 + Аудиокнига (42 ч. 10 мин.)",
        description: "Захватывающая история моряка Эдмона Дантеса, несправедливо заточенного в мрачный замок Иф и вернувшегося спустя годы под именем загадочного и сказочно богатого графа Монте-Кристо.",
        fragmentTitle: "Глава 1. Марсель. Прибытие",
        fragmentText: "24 февраля 1815 года дозорный Нотр-Дам-де-ла-Гард дал сигнал, что приближается трехмачтовый корабль «Фараон», идущий из Смирны, Триеста и Неаполя...",
        sameAuthor: ["belaya-gvardiya"],
        similar: ["belaya-gvardiya", "pride-and-prejudice"],
        reviews: [
            { name: "Павел С.", score: 5, conv: 10, text: "Лучший приключенческий роман в истории! Издание шикарное.", photos: true }
        ]
    },
    "the-shining": {
        title: "Сияние",
        author: "Стивен Кинг",
        authorAnchor: "authors.html",
        genre: "Ужасы",
        category: "fiction",
        categoryName: "Художественная литература",
        year: 2025,
        price: 760,
        rating: 4.88,
        reviewsCount: 1080,
        convenience: "9.6/10",
        coverClass: "cover-1",
        badge: "Король ужасов",
        subtitle: "Культовый мистический триллер",
        isbn: "978-5-17-080492-4",
        binding: "Твердый переплет",
        paper: "80 г/м², офсетная",
        weight: "440 г / 130×205 мм (544 страницы)",
        digital: "EPUB, FB2 + Аудиокнига (16 ч. 20 мин.)",
        description: "Писатель Джек Торранс устраивается зимним смотрителем в отрезанный снегами горный отель «Оверлук», не подозревая, какие зловещие призраки прошлого обитают в его пустых коридорах.",
        fragmentTitle: "Часть 1. Предварительное собеседование",
        fragmentText: "Джек Торранс подумал: «Назойливый маленький человечишко». Уллман был ростом пять футов пять дюймов, а когда двигался, то делал это с суетливой быстротой...",
        sameAuthor: ["faust"],
        similar: ["master-i-margarita", "ten-little-indians"],
        reviews: [
            { name: "Денис В.", score: 5, conv: 9, text: "Напряжение держит до последней страницы, намного глубже и страшнее экранизации!", photos: true }
        ]
    },
    "belaya-gvardiya": {
        title: "Белая гвардия",
        author: "Михаил Булгаков",
        authorAnchor: "authors.html#bulgakov",
        genre: "Историческая литература",
        category: "fiction",
        categoryName: "Художественная литература",
        year: 2025,
        price: 640,
        rating: 4.86,
        reviewsCount: 790,
        convenience: "9.6/10",
        coverClass: "cover-3",
        badge: "Классика",
        subtitle: "Полная авторская редакция",
        isbn: "978-5-17-105421-3",
        binding: "Твердый переплет",
        paper: "80 г/м², офсетная",
        weight: "370 г / 130×205 мм (384 страницы)",
        digital: "EPUB, FB2 + Аудиокнига (11 ч. 40 мин.)",
        description: "Пронзительный исторический роман о судьбе интеллигентной семьи Турбиных в вихре событий зимы 1918 года.",
        fragmentTitle: "Часть первая. Белый снег",
        fragmentText: "Велик был год и страшен год по Рождестве Христовом 1918, от начала же революции второй. Был он обилен летом солнцем, а зимою снегом...",
        sameAuthor: ["master-i-margarita", "sobache-serdtse"],
        similar: ["count-of-monte-cristo", "history-of-russia"],
        reviews: [
            { name: "Елена П.", score: 5, conv: 9, text: "Невероятно уютный и одновременно трагичный роман.", photos: true }
        ]
    },
    "faust": {
        title: "Фауст",
        author: "Иоганн Вольфганг Гёте",
        authorAnchor: "authors.html",
        genre: "Историческая литература",
        category: "fiction",
        categoryName: "Художественная литература",
        year: 2024,
        price: 780,
        rating: 4.88,
        reviewsCount: 710,
        convenience: "9.7/10",
        coverClass: "cover-10",
        badge: "Гравюры Доре",
        subtitle: "Перевод Б. Л. Пастернака с гравюрами Гюстава Доре",
        isbn: "978-5-389-08412-4",
        binding: "Твердый переплет с золотым тиснением",
        paper: "85 г/м², офсетная",
        weight: "490 г / 140×210 мм (544 страницы)",
        digital: "EPUB, PDF + Аудиоспектакль (13 ч. 00 мин.)",
        description: "Вершина мировой философской поэзии, вдохновившая Михаила Булгакова на создание «Мастера и Маргариты».",
        fragmentTitle: "Пролог на небесах",
        fragmentText: "Звучит солнце по-старому в братстве дневных светил, и свой предписанный обход свершает с громом громовым...",
        sameAuthor: ["portret-doriana-greya"],
        similar: ["master-i-margarita", "portret-doriana-greya"],
        reviews: [
            { name: "Виктор Д.", score: 5, conv: 10, text: "Иллюстрации и комментарии в конце книги великолепны.", photos: true }
        ]
    },
    "brief-history-of-time": {
        title: "Краткая история времени",
        author: "Стивен Хокинг",
        authorAnchor: "authors.html#hawking",
        genre: "Наука",
        category: "nonfiction",
        categoryName: "Нехудожественная литература",
        year: 2024,
        price: 990,
        rating: 4.82,
        reviewsCount: 640,
        convenience: "9.7/10",
        coverClass: "cover-3",
        badge: "Нон-фикшн",
        subtitle: "От Большого взрыва до черных дыр",
        isbn: "978-5-17-148892-1",
        binding: "Твердый переплет, увеличенный формат",
        paper: "90 г/м², мелованная матовая с цветными схемами",
        weight: "540 г / 145×215 мм (288 страниц)",
        digital: "PDF, EPUB + Аудиокнига (7 ч. 45 мин.)",
        description: "Знаменитый научно-популярный бестселлер великого физика-теоретика Стивена Хокинга о происхождении Вселенной, черных дырах и природе времени.",
        fragmentTitle: "Глава 1. Наши представления о Вселенной",
        fragmentText: "Однажды известный ученый читал публичную лекцию по астрономии. Он рассказал, как Земля вращается вокруг Солнца...",
        sameAuthor: ["thinking-fast-and-slow"],
        similar: ["thinking-fast-and-slow", "solaris"],
        reviews: [
            { name: "Алексей В.", score: 5, conv: 10, text: "Отличная плотная бумага и наглядные иллюстрации.", photos: true }
        ]
    },
    "thinking-fast-and-slow": {
        title: "Думай медленно… решай быстро",
        author: "Даниэль Канеман",
        authorAnchor: "authors.html",
        genre: "Психология",
        category: "nonfiction",
        categoryName: "Нехудожественная литература",
        year: 2025,
        price: 940,
        rating: 4.87,
        reviewsCount: 890,
        convenience: "9.5/10",
        coverClass: "cover-8",
        badge: "Нобелевская премия",
        subtitle: "Главный мировой бестселлер по психологии мышления",
        isbn: "978-5-17-080053-7",
        binding: "Твердый переплет",
        paper: "80 г/м², офсетная белая",
        weight: "610 г / 145×215 мм (656 страниц)",
        digital: "EPUB, PDF + Аудиокнига (19 ч. 50 мин.)",
        description: "Нобелевский лауреат Даниэль Канеман объясняет, как работают две системы нашего мышления: быстрая эмоциональная и медленная аналитическая.",
        fragmentTitle: "Введение. Две системы мышления",
        fragmentText: "У каждого из нас есть множество впечатлений и мыслей, которые возникают на пике сознательной деятельности...",
        sameAuthor: ["atomic-habits"],
        similar: ["atomic-habits", "brief-history-of-time"],
        reviews: [
            { name: "Ольга С.", score: 5, conv: 9, text: "Книга перевернула взгляд на принятие решений в работе и финансах.", photos: false }
        ]
    },
    "atomic-habits": {
        title: "Атомные привычки",
        author: "Джеймс Клир",
        authorAnchor: "authors.html",
        genre: "Бизнес",
        category: "nonfiction",
        categoryName: "Нехудожественная литература",
        year: 2026,
        price: 890,
        rating: 4.94,
        reviewsCount: 1450,
        convenience: "9.9/10",
        coverImg: "images/ap.jpg",
        badge: "Топ Бизнес 2026",
        subtitle: "Как приобрести хорошие привычки и избавиться от плохих",
        isbn: "978-5-4461-1480-1",
        binding: "Твердый переплет с закладкой-ляссе",
        paper: "90 г/м², офсетная премиум",
        weight: "450 г / 145×215 мм (304 страницы)",
        digital: "EPUB, PDF + Аудиокнига (6 ч. 35 мин.)",
        description: "Практическое руководство по личной эффективности и бизнес-продуктивности: как микроскопические ежедневные улучшения на 1% приводят к выдающимся результатам.",
        fragmentTitle: "Глава 1. Удивительная сила атомных привычек",
        fragmentText: "Судьба британской сборной по велоспорту изменилась в один день в 2003 году, когда директором по результативности наняли Дэйва Брейлсфорда...",
        sameAuthor: ["thinking-fast-and-slow"],
        similar: ["thinking-fast-and-slow", "write-shorten"],
        reviews: [
            { name: "Кирилл Б.", score: 5, conv: 10, text: "Самая прикладная книга по самодисциплине без воды. Схемы и таблицы внутри очень удобные.", photos: true }
        ]
    },
    "history-of-russia": {
        title: "Курс русской истории (Полное издание)",
        author: "Василий Ключевский",
        authorAnchor: "authors.html",
        genre: "История",
        category: "nonfiction",
        categoryName: "Нехудожественная литература",
        year: 2025,
        price: 1050,
        rating: 4.90,
        reviewsCount: 530,
        convenience: "9.7/10",
        coverClass: "cover-1",
        badge: "Фундаментальный труд",
        subtitle: "Классические лекции с историческими картами",
        isbn: "978-5-389-09112-2",
        binding: "Твердый переплет с золотым тиснением",
        paper: "80 г/м², офсетная",
        weight: "820 г / 150×220 мм (896 страниц)",
        digital: "PDF, EPUB + Аудиолекции (28 ч. 00 мин.)",
        description: "Знаменитый цикл исторических лекций В. О. Ключевского, сочетающий строгую научную достоверность с блестящим живым литературным языком.",
        fragmentTitle: "Лекция 1. Предмет и метод истории",
        fragmentText: "Научное значение истории народа определяется совокупностью географических, экономических и культурных условий его развития...",
        sameAuthor: ["belaya-gvardiya"],
        similar: ["belaya-gvardiya", "brief-history-of-time"],
        reviews: [
            { name: "Андрей Ф.", score: 5, conv: 10, text: "Читается увлекательнее любого романа!", photos: true }
        ]
    },
    "write-shorten": {
        title: "Пиши, сокращай 2026: Как создавать сильный текст",
        author: "Максим Ильяхов, Людмила Сарычева",
        authorAnchor: "authors.html",
        genre: "Образование",
        category: "nonfiction",
        categoryName: "Нехудожественная литература",
        year: 2026,
        price: 980,
        rating: 4.88,
        reviewsCount: 1120,
        convenience: "9.8/10",
        coverClass: "cover-7",
        badge: "Образование",
        subtitle: "Обновленное издание с примерами и антипримерами",
        isbn: "978-5-9614-8120-4",
        binding: "Интегральный гибкий переплет",
        paper: "95 г/м², офсетная",
        weight: "590 г / 170×240 мм (440 страниц)",
        digital: "PDF, EPUB + Аудиокнига (10 ч. 15 мин.)",
        description: "Настольный учебник для редакторов, маркетологов, студентов и всех, кто работает с текстом. Информационный стиль, чистота языка и забота о читателе.",
        fragmentTitle: "Часть 1. Отжать воду",
        fragmentText: "Главное правило информационного стиля: убрать из текста все слова, которые не несут новой полезной информации для читателя...",
        sameAuthor: ["atomic-habits"],
        similar: ["atomic-habits", "thinking-fast-and-slow"],
        reviews: [
            { name: "Дарья М.", score: 5, conv: 10, text: "Наглядная верстка «было / стало» на каждом развороте.", photos: true }
        ]
    },
    "salt-fat-acid-heat": {
        title: "Соль, жир, кислота, жар: Энциклопедия кулинарии",
        author: "Самин Носрат",
        authorAnchor: "authors.html",
        genre: "Кулинария",
        category: "nonfiction",
        categoryName: "Нехудожественная литература",
        year: 2025,
        price: 1350,
        rating: 4.95,
        reviewsCount: 680,
        convenience: "10/10",
        coverClass: "cover-9",
        badge: "Подарочное издание",
        subtitle: "Как овладеть четырьмя стихиями хорошей кухни",
        isbn: "978-5-04-101245-8",
        binding: "Твердый переплет, большой подарочный формат",
        paper: "130 г/м², мелованная с цветными инфографиками",
        weight: "1150 г / 205×245 мм (480 страниц)",
        digital: "PDF (полноцветная версия)",
        description: "Мировой кулинарный бестселлер, который учит не просто готовить по рецептам, а понимать физику и химию вкуса через баланс 4 базовых элементов.",
        fragmentTitle: "Часть 1. Четыре стихии вкуса",
        fragmentText: "Независимо от того, готовите ли вы дома быстрый ужин или работаете на кухне мишленовского ресторана, успех любого блюда определяют всего четыре фактора...",
        sameAuthor: ["write-shorten"],
        similar: ["write-shorten", "atomic-habits"],
        reviews: [
            { name: "Вероника К.", score: 5, conv: 10, text: "Потрясающая полиграфия на плотной мелованной бумаге 130 г/м², идеальный подарок!", photos: true }
        ]
    },
    "little-prince": {
        title: "Маленький принц (с авторскими иллюстрациями)",
        author: "Антуан де Сент-Экзюпери",
        authorAnchor: "authors.html",
        genre: "Сказки",
        category: "kids",
        categoryName: "Детская литература",
        year: 2026,
        price: 590,
        rating: 4.96,
        reviewsCount: 1580,
        convenience: "10/10",
        coverImg: "images/mp.jpg",
        badge: "Топ-1 Детям",
        subtitle: "Полное собрание цветных акварелей автора",
        isbn: "978-5-699-91420-3",
        binding: "Твердый пухлый переплет с тиснением",
        paper: "120 г/м², мелованная плотная бумага",
        weight: "380 г / 170×230 мм (128 страниц)",
        digital: "PDF, EPUB + Аудиоспектакль (2 ч. 10 мин.)",
        description: "Самая трогательная и мудрая сказка-притча в мировой литературе в классическом переводе Норы Галь с оригинальными акварелями автора.",
        fragmentTitle: "Глава 1. Рисунок удава",
        fragmentText: "Когда мне было шесть лет, в книге под названием «Правдивые истории» я увидел однажды удивительную картинку...",
        sameAuthor: ["treasure-island"],
        similar: ["how-things-work", "treasure-island"],
        reviews: [
            { name: "Наталья Романова", score: 5, conv: 10, text: "Покупала ребенку в подарок — восторг! Бумага 120 г/м² как в художественном альбоме.", photos: true }
        ]
    },
    "how-things-work": {
        title: "Как всё устроено сегодня (Иллюстрированная энциклопедия)",
        author: "Дэвид Маколи",
        authorAnchor: "authors.html",
        genre: "Познавательная литература",
        category: "kids",
        categoryName: "Детская литература",
        year: 2026,
        price: 1420,
        rating: 4.94,
        reviewsCount: 820,
        convenience: "10/10",
        coverClass: "cover-4",
        badge: "Детский научпоп",
        subtitle: "От простых рычагов до смартфонов и космических ракет",
        isbn: "978-5-00169-412-0",
        binding: "Твердый переплет, энциклопедический формат",
        paper: "120 г/м², мелованная матовая",
        weight: "1280 г / 220×285 мм (400 страниц)",
        digital: "PDF (интерактивное издание)",
        description: "Знаменитая детская познавательная энциклопедия с забавными рисунками мамонтов, объясняющая устройство замков, двигателей, лазеров и компьютеров.",
        fragmentTitle: "Часть 1. Механика движения",
        fragmentText: "Любой сложный механизм состоит из нескольких простых деталей: наклонной плоскости, рычага, зубчатого колеса и блока...",
        sameAuthor: ["brief-history-of-time"],
        similar: ["little-prince", "brief-history-of-time"],
        reviews: [
            { name: "Михаил З.", score: 5, conv: 10, text: "Ребенок 9 лет читает каждый вечер, да и взрослым безумно интересно!", photos: true }
        ]
    },
    "kalle-blomkvist": {
        title: "Приключения Калле Блюмквиста (Детский детектив)",
        author: "Астрид Линдгрен",
        authorAnchor: "authors.html",
        genre: "Детские детективы",
        category: "kids",
        categoryName: "Детская литература",
        year: 2025,
        price: 620,
        rating: 4.91,
        reviewsCount: 690,
        convenience: "9.8/10",
        coverClass: "cover-7",
        badge: "Детский детектив",
        subtitle: "С цветными иллюстрациями и крупным шрифтом",
        isbn: "978-5-389-11234-6",
        binding: "Твердый переплет",
        paper: "100 г/м², офсетная белая",
        weight: "460 г / 170×215 мм (352 страницы)",
        digital: "EPUB, FB2 + Аудиокнига (9 ч. 15 мин.)",
        description: "Увлекательная трилогия Астрид Линдгрен о юном сыщике Калле Блюмквисте и его друзьях, расследующих настоящее похищение драгоценностей в тихом шведском городке.",
        fragmentTitle: "Глава 1. Загадочный гость",
        fragmentText: "Знаменитый сыщик Калле Блюмквист лежал под кустом сирени в саду и размышлял о том, почему в их маленьком городке так редко случаются настоящие тайны...",
        sameAuthor: ["treasure-island"],
        similar: ["treasure-island", "little-prince"],
        reviews: [
            { name: "Юлия К.", score: 5, conv: 10, text: "Крупный шрифт и плотная бумага — идеально для самостоятельного чтения в младшей школе.", photos: true }
        ]
    }
};

// Инициализация счетчиков корзины, сравнения и бонусов
function updateHeaderCounters() {
    const compareList = JSON.parse(localStorage.getItem('compareBooks') || '["Мастер и Маргарита", "Десять негритят"]');
    const cartCount = parseInt(localStorage.getItem('cartCount') || '2', 10);
    const bonusPoints = parseInt(localStorage.getItem('bonusPoints') || '350', 10);

    document.querySelectorAll('.js-compare-count').forEach(el => el.textContent = compareList.length);
    document.querySelectorAll('.js-cart-count').forEach(el => el.textContent = cartCount);
    document.querySelectorAll('.js-bonus-count').forEach(el => el.textContent = bonusPoints);
}

function addToCart(bookTitle) {
    let count = parseInt(localStorage.getItem('cartCount') || '2', 10);
    localStorage.setItem('cartCount', count + 1);
    updateHeaderCounters();
    alert(`Книга «${bookTitle}» добавлена в корзину!`);
}

function addToCompare(bookTitle) {
    let list = JSON.parse(localStorage.getItem('compareBooks') || '["Мастер и Маргарита", "Десять негритят"]');
    if (!list.includes(bookTitle)) {
        list.push(bookTitle);
        localStorage.setItem('compareBooks', JSON.stringify(list));
        updateHeaderCounters();
        alert(`Книга «${bookTitle}» добавлена в список сравнения!`);
    } else {
        alert(`Книга «${bookTitle}» уже находится в списке сравнения.`);
    }
}

// Шаблон карточки книги
function createBookCardHTML(id, book) {
    // Если указана картинка, выводим <img>, иначе оставляем градиент
    const coverContent = book.coverImg 
        ? `<img src="${book.coverImg}" alt="${book.title}" loading="lazy">` 
        : `<span>${book.title}</span>`;

    return `
        <div class="book-card" 
             data-category="${book.category}" 
             data-genre="${book.genre}" 
             data-rating="${book.rating}" 
             data-reviews="${book.reviewsCount}" 
             data-year="${book.year}" 
             data-title="${book.title}" 
             data-author="${book.author}">
            <a href="book.html?id=${id}" class="book-cover ${book.coverImg ? '' : book.coverClass}" style="position:relative; overflow:hidden;">
                <span class="book-badge">${book.badge}</span>
                ${coverContent}
            </a>
            <div class="book-body">
                <span class="book-genre">${book.genre} • ${book.year}</span>
                <a href="book.html?id=${id}" class="book-title">${book.title}</a>
                <a href="${book.authorAnchor}" class="book-author">${book.author}</a>
                <div class="book-rating">⭐ ${book.rating} (${book.reviewsCount} оценок)</div>
                <div class="book-price-row">
                    <span class="price">${book.price} ₽</span>
                    <div style="display:flex; gap:6px;">
                        <button class="btn btn-outline" onclick="addToCompare('${book.title.replace(/'/g, "\\'")}')" title="В сравнение">⚖️</button>
                        <a href="book.html?id=${id}" class="btn btn-primary">Подробнее</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Отрисовка витрины на главной странице (index.html)
function renderHomeBooks() {
    const popularGrid = document.getElementById('home-popular-grid');
    if (popularGrid) {
        const popularIds = ["master-i-margarita", "lord-of-the-rings", "ten-little-indians", "dune", "atomic-habits", "little-prince", "count-of-monte-cristo", "orient-express"];
        popularGrid.innerHTML = popularIds.map(id => createBookCardHTML(id, BOOKS_DB[id])).join('');
    }

    const newGrid = document.getElementById('home-new-grid');
    if (newGrid) {
        const newIds = ["write-shorten", "salt-fat-acid-heat", "how-things-work", "the-shining"];
        newGrid.innerHTML = newIds.map(id => createBookCardHTML(id, BOOKS_DB[id])).join('');
    }
}

// Автогенерация полного каталога на странице catalog.html + чтение URL-фильтров
function initCatalogPage() {
    const container = document.getElementById('catalog-books-grid');
    if (!container) return;

    container.innerHTML = Object.entries(BOOKS_DB)
        .map(([id, book]) => createBookCardHTML(id, book))
        .join('');

    const params = new URLSearchParams(window.location.search);
    const urlCat = params.get('cat');
    const urlGenre = params.get('genre');
    const urlQuery = params.get('q');

    if (urlCat && document.getElementById('filter-category')) {
        document.getElementById('filter-category').value = urlCat;
    }
    if (urlGenre && document.getElementById('filter-genre')) {
        document.getElementById('filter-genre').value = urlGenre;
    }
    if (urlQuery && document.getElementById('filter-search')) {
        document.getElementById('filter-search').value = urlQuery;
    }

    filterCatalog();
}

// Фильтрация и сортировка на странице каталога
function filterCatalog() {
    const category = document.getElementById('filter-category')?.value || 'all';
    const genre = document.getElementById('filter-genre')?.value || 'all';
    const minRating = parseFloat(document.getElementById('filter-rating')?.value || '0');
    const searchQuery = (document.getElementById('filter-search')?.value || '').toLowerCase();
    const sortBy = document.getElementById('sort-select')?.value || 'popular';

    const container = document.getElementById('catalog-books-grid');
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.book-card'));
    let visibleCount = 0;

    cards.forEach(card => {
        const cCat = card.dataset.category;
        const cGenre = card.dataset.genre;
        const cRating = parseFloat(card.dataset.rating);
        const cTitle = card.dataset.title.toLowerCase();
        const cAuthor = card.dataset.author.toLowerCase();

        const matchCat = (category === 'all' || cCat === category);
        const matchGenre = (genre === 'all' || cGenre === genre);
        const matchRating = cRating >= minRating;
        const matchSearch = (!searchQuery || cTitle.includes(searchQuery) || cAuthor.includes(searchQuery) || cGenre.toLowerCase().includes(searchQuery));

        const isVisible = (matchCat && matchGenre && matchRating && matchSearch);
        card.style.display = isVisible ? 'flex' : 'none';
        if (isVisible) visibleCount++;
    });

    const countEl = document.getElementById('js-catalog-count');
    if (countEl) {
        countEl.textContent = `Найдено изданий в каталоге: ${visibleCount}`;
    }

    const sorted = cards.sort((a, b) => {
        if (sortBy === 'rating') return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
        if (sortBy === 'date') return parseInt(b.dataset.year) - parseInt(a.dataset.year);
        if (sortBy === 'title') return a.dataset.title.localeCompare(b.dataset.title);
        return parseInt(b.dataset.reviews) - parseInt(a.dataset.reviews);
    });

    sorted.forEach(card => container.appendChild(card));
}

// Калькулятор доставки в карточке книги
function calculateDelivery(city) {
    const rates = {
        'Москва': { courier: 'завтра, 200 ₽ (бесплатно от 1500 ₽)', pvz: 'завтра, 120 ₽', pickup: 'сегодня, бесплатно' },
        'Тула': { courier: 'завтра, 180 ₽ (бесплатно от 1200 ₽)', pvz: 'завтра, 90 ₽', pickup: 'сегодня, бесплатно (пр. Ленина, 1)' },
        'Санкт-Петербург': { courier: '1–2 дня, 250 ₽', pvz: '1–2 дня, 150 ₽', pickup: 'завтра, бесплатно' },
        'Уфа': { courier: '2–3 дня, 320 ₽', pvz: '2–3 дня, 190 ₽', pickup: 'через 2 дня, бесплатно' },
        'Екатеринбург': { courier: '2–3 дня, 340 ₽', pvz: '2–3 дня, 210 ₽', pickup: 'через 2 дня, бесплатно' }
    };
    const info = rates[city] || rates['Москва'];
    const resultEl = document.getElementById('delivery-result');
    if (resultEl) {
        resultEl.innerHTML = `
            <li><strong>Курьером до двери:</strong> ${info.courier}</li>
            <li><strong>Пункты выдачи (СДЭК, Boxberry):</strong> ${info.pvz}</li>
            <li><strong>Самовывоз из магазина:</strong> ${info.pickup}</li>
        `;
    }
}

// Загрузка конкретной книги на странице book.html по параметру ?id=...
function loadBookDetailsPage() {
    const titleEl = document.getElementById('js-book-title');
    if (!titleEl) return;

    const params = new URLSearchParams(window.location.search);
    const bookId = params.get('id') || 'master-i-margarita';
    const book = BOOKS_DB[bookId] || BOOKS_DB['master-i-margarita'];

    document.title = `Купить книгу «${book.title}» ${book.author} — отзывы, ISBN ${book.isbn} | Книжный Мир`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', `Книга ${book.title} (${book.author}, ISBN ${book.isbn}). ${book.binding}, бумага ${book.paper}. Читать фрагмент, слушать аудио и отзывы.`);
    }

    const breadCat = document.getElementById('js-bread-cat');
    breadCat.textContent = book.categoryName;
    breadCat.href = `catalog.html?cat=${book.category}`;

    document.getElementById('js-bread-title').textContent = book.title;
    document.getElementById('js-book-genre').textContent = `${book.categoryName} • ${book.genre}`;
    titleEl.textContent = book.title;

    const authorLink = document.getElementById('js-book-author');
    authorLink.textContent = book.author;
    authorLink.href = book.authorAnchor;

    document.getElementById('js-book-rating').innerHTML = `⭐ ${book.rating} (${book.reviewsCount} оценок) • Удобство издания: ${book.convenience} • <a href="#reviews" style="color:var(--primary);">Читать отзывы</a>`;

    const coverBox = document.getElementById('js-book-cover');
    if (book.coverImg) {
        coverBox.className = "book-cover";
        coverBox.style.position = "relative";
        coverBox.style.overflow = "hidden";
        coverBox.innerHTML = `<img src="${book.coverImg}" alt="${book.title}" style="width:100%; height:100%; object-fit:cover; position:absolute; top:0; left:0;">`;
    } else {
        coverBox.className = `book-cover ${book.coverClass}`;
        coverBox.innerHTML = `${book.title}<br><small style="font-size:0.9rem; opacity:0.85; margin-top:10px;">${book.subtitle}</small>`;
    }

    const bonusEarned = Math.round(book.price * 0.05);
    const splitPart = (book.price / 4).toFixed(2);
    document.getElementById('js-book-price').innerHTML = `${book.price} ₽ <span style="font-size:0.95rem; font-weight:500; color:var(--success);">✓ В наличии (+${bonusEarned} бонусов)</span>`;
    document.getElementById('js-book-split').innerHTML = `В Сплит / Долями: <strong>4 платежа по ${splitPart} ₽</strong> без переплат`;

    document.getElementById('js-btn-cart').onclick = () => addToCart(book.title);
    document.getElementById('js-btn-compare').onclick = () => addToCompare(book.title);

    document.getElementById('js-spec-isbn').textContent = book.isbn;
    document.getElementById('js-spec-year').textContent = `${book.year} г.`;
    document.getElementById('js-spec-binding').textContent = book.binding;
    document.getElementById('js-spec-paper').textContent = book.paper;
    document.getElementById('js-spec-weight').textContent = book.weight;
    document.getElementById('js-spec-digital').textContent = book.digital;
    document.getElementById('js-book-desc').textContent = book.description;

    document.getElementById('js-fragment-title').textContent = `Ознакомительный фрагмент — ${book.fragmentTitle}`;
    document.getElementById('js-fragment-text').textContent = book.fragmentText;
    document.getElementById('js-audio-info').textContent = `${book.title} (${book.author}) • Формат: ${book.digital}`;

    const relatedContainer = document.getElementById('js-related-books');
    const relatedList = [
        ...book.sameAuthor.map(id => ({ id, label: 'Другая книга автора' })),
        ...book.similar.map(id => ({ id, label: 'Похожее произведение' }))
    ].slice(0, 4);

    relatedContainer.innerHTML = relatedList.map(item => {
        const rel = BOOKS_DB[item.id];
        if (!rel) return '';
        return `
            <div class="book-card">
                <a href="book.html?id=${item.id}" class="book-cover ${rel.coverClass}"><span>${rel.title}</span></a>
                <div class="book-body">
                    <span class="book-genre">${item.label}</span>
                    <a href="book.html?id=${item.id}" class="book-title">${rel.title}</a>
                    <a href="${rel.authorAnchor}" class="book-author">${rel.author}</a>
                    <div class="book-rating">⭐ ${rel.rating} (${rel.reviewsCount} оценок)</div>
                    <div class="book-price-row">
                        <span class="price">${rel.price} ₽</span>
                        <a href="book.html?id=${item.id}" class="btn btn-primary">Открыть</a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const reviewsContainer = document.getElementById('reviews-list');
    reviewsContainer.innerHTML = book.reviews.map(rev => `
        <div class="card" style="margin-bottom:16px;">
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <strong>${rev.name} (Проверенный покупатель)</strong>
                <span style="color:#d97706; font-weight:700;">⭐ Оценка: ${rev.score}/5 | Удобство издания: ${rev.conv}/10</span>
            </div>
            <p>${rev.text}</p>
            ${rev.photos ? '<div class="genre-tags" style="margin-top:10px;"><span class="tag">Фото: Обложка вживую</span><span class="tag">Фото: Разворот книги</span></div>' : ''}
        </div>
    `).join('');
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

function submitBookReview(event) {
    event.preventDefault();
    const name = document.getElementById('rev-name').value;
    const text = document.getElementById('rev-text').value;
    const score = document.getElementById('rev-score').value;
    const convenience = document.getElementById('rev-convenience').value;
    const hasPhoto = document.getElementById('rev-photo').checked;

    const reviewsList = document.getElementById('reviews-list');
    const newReview = document.createElement('div');
    newReview.className = 'card';
    newReview.style.marginBottom = '16px';
    newReview.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <strong>${name}</strong>
            <span style="color:#d97706; font-weight:700;">⭐ Оценка: ${score}/5 | Удобство издания: ${convenience}/10</span>
        </div>
        <p>${text}</p>
        ${hasPhoto ? '<div class="genre-tags" style="margin-top:10px;"><span class="tag">Фото обложки (прикреплено)</span><span class="tag">Фото разворота (прикреплено)</span></div>' : ''}
    `;
    reviewsList.prepend(newReview);

    let bonus = parseInt(localStorage.getItem('bonusPoints') || '350', 10);
    bonus += hasPhoto ? 50 : 20;
    localStorage.setItem('bonusPoints', bonus);
    updateHeaderCounters();

    event.target.reset();
    alert(`Спасибо за отзыв! На ваш бонусный счет начислено ${hasPhoto ? 50 : 20} баллов.`);
}

document.addEventListener('DOMContentLoaded', () => {
    updateHeaderCounters();
    renderHomeBooks();
    initCatalogPage();
    loadBookDetailsPage();
    if (document.getElementById('delivery-city')) {
        calculateDelivery(document.getElementById('delivery-city').value);
    }
});