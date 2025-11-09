// Sample K-Drama Data (Latest Popular Dramas)

const dramasData = [
    {
        id: 1,
        title: "Queen of Tears",
        koreanTitle: "눈물의 여왕",
        year: 2024,
        episodes: 16,
        director: "Jang Young-woo, Kim Hee-won",
        cast: "Kim Soo-hyun, Kim Ji-won, Park Sung-hoon, Kwak Dong-yeon",
        synopsis: "The miraculous love story of a married couple who manage to survive a crisis and stay together against all odds. Baek Hyun-woo, the legal director of conglomerate Queens Group, and Hong Hae-in, the heiress to the Queens Department Store empire, are married and considered the most enviable couple. However, their perfect marriage starts to crumble as they face an emotional crisis.",
        poster: "https://m.media-amazon.com/images/M/MV5BMTY3YmRmNzgtYWU3My00NTM5LWFiNTMtZWE0YzJlZDkyMGI4XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg"
    },
    {
        id: 2,
        title: "Sweet Home Season 3",
        koreanTitle: "스위트홈 3",
        year: 2024,
        episodes: 8,
        director: "Lee Eung-bok",
        cast: "Song Kang, Lee Jin-wook, Lee Si-young, Go Min-si",
        synopsis: "The final season of the apocalyptic horror series. As humans turn into savage monsters, survivors are forced to confront their own humanity. In this final chapter, the battle between humans and monsters reaches its peak as the survivors make their last stand to reclaim their world and find hope in the darkness.",
        poster: "https://m.media-amazon.com/images/M/MV5BNThmNGQ4NTItZjQzNC00MzI5LThkNmQtNDQyNjQzNmI5MjgyXkEyXkFqcGdeQXVyMTU2MzMzMTk0._V1_.jpg"
    },
    {
        id: 3,
        title: "The Glory",
        koreanTitle: "더 글로리",
        year: 2023,
        episodes: 16,
        director: "Ahn Gil-ho",
        cast: "Song Hye-kyo, Lee Do-hyun, Lim Ji-yeon, Yeom Hye-ran",
        synopsis: "A former victim of school violence meticulously plans her revenge against those who destroyed her childhood. Years after being tormented by her high school classmates, Moon Dong-eun returns with a carefully crafted plan to make her tormentors pay for what they did. Her elaborate revenge scheme targets not just her bullies, but their families and everything they hold dear.",
        poster: "https://m.media-amazon.com/images/M/MV5BYzNiZWE4ZWEtZGEzNy00NmY1LWIwNmUtMzkxMmUyMWQxZDMyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg"
    },
    {
        id: 4,
        title: "Extraordinary Attorney Woo",
        koreanTitle: "이상한 변호사 우영우",
        year: 2022,
        episodes: 16,
        director: "Yoo In-sik",
        cast: "Park Eun-bin, Kang Tae-oh, Kang Ki-young, Jeon Bae-soo",
        synopsis: "A brilliant young attorney with autism spectrum disorder joins a major law firm. Despite brilliant legal skills and a photographic memory, Woo Young-woo must navigate office politics and social challenges while proving her worth as a lawyer. Her unique perspective often leads to creative solutions that surprise everyone around her.",
        poster: "https://m.media-amazon.com/images/M/MV5BYmI4NWYxZGEtNzA2Zi00YTM2LWJlMmYtNzI1ZDI0ZjMwMTNiXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg"
    },
    {
        id: 5,
        title: "Reborn Rich",
        koreanTitle: "재벌집 막내아들",
        year: 2022,
        episodes: 16,
        director: "Jung Dae-yoon",
        cast: "Song Joong-ki, Lee Sung-min, Shin Hyun-been, Kim Shin-rok",
        synopsis: "After being framed and killed by the family he served, a loyal employee is reincarnated as the youngest son of the same chaebol family. Armed with knowledge of the future and a desire for revenge, he uses his second chance to climb to the top of the corporate empire while plotting against those who wronged him in his past life.",
        poster: "https://m.media-amazon.com/images/M/MV5BNDc1YjBjNTYtNDQ3MC00OWI2LThhMTItOGU0YmNiMDdmYzNhXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg"
    },
    {
        id: 6,
        title: "My Liberation Notes",
        koreanTitle: "나의 해방일지",
        year: 2022,
        episodes: 16,
        director: "Kim Seok-yoon",
        cast: "Lee Min-ki, Kim Ji-won, Son Seok-koo, Lee El",
        synopsis: "Three siblings living in the outskirts of Seoul struggle with their mundane lives and search for liberation from their daily routines. Each family member seeks their own form of escape - whether through love, change, or simply finding meaning in their existence. A mysterious stranger becomes a catalyst for their transformation.",
        poster: "https://m.media-amazon.com/images/M/MV5BZDI3ZmYzZjItZGMzYS00YjNhLWE2OTUtNjUwOWJkNmUxZmMxXkEyXkFqcGdeQXVyMTMxODk2OTU._V1_.jpg"
    },
    {
        id: 7,
        title: "All of Us Are Dead",
        koreanTitle: "지금 우리 학교는",
        year: 2022,
        episodes: 12,
        director: "Lee Jae-kyoo, Kim Nam-su",
        cast: "Yoon Chan-young, Park Ji-hoo, Cho Yi-hyun, Lomon",
        synopsis: "A high school becomes ground zero for a zombie virus outbreak, forcing students to fight for survival. Trapped inside their school with no way out, a group of students must navigate through hordes of infected classmates while dealing with personal conflicts and moral dilemmas. As they struggle to survive, they learn the true meaning of friendship and sacrifice.",
        poster: "https://m.media-amazon.com/images/M/MV5BOTQzN2YyNjEtNWFlYS00MjM1LWJiYmYtOGU2ZjQ2MDMyMDc0XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg"
    },
    {
        id: 8,
        title: "Squid Game",
        koreanTitle: "오징어 게임",
        year: 2021,
        episodes: 9,
        director: "Hwang Dong-hyuk",
        cast: "Lee Jung-jae, Park Hae-soo, Wi Ha-joon, Jung Ho-yeon",
        synopsis: "Desperate people compete in deadly children's games for a massive cash prize. Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly. As players are eliminated one by one, the survivors must confront moral choices and the dark side of human nature in their quest for the ultimate prize.",
        poster: "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg"
    },
    {
        id: 9,
        title: "Crash Landing on You",
        koreanTitle: "사랑의 불시착",
        year: 2019,
        episodes: 16,
        director: "Lee Jung-hyo",
        cast: "Hyun Bin, Son Ye-jin, Seo Ji-hye, Kim Jung-hyun",
        synopsis: "A South Korean heiress accidentally paraglides into North Korea and falls in love with a North Korean army officer. After a paragliding mishap drops South Korean heiress Yoon Se-ri in North Korea, she meets Ri Jeong-hyeok, who decides to hide and protect her. As they navigate the dangers of their forbidden romance across one of the world's most heavily guarded borders, they discover that love knows no boundaries.",
        poster: "https://m.media-amazon.com/images/M/MV5BNmM0YzE5N2MtZDI1NC00YWUzLWJhNWYtNDZiYWNmZGFkMTNkXkEyXkFqcGdeQXVyMTMxODk2OTU._V1_.jpg"
    },
    {
        id: 10,
        title: "Itaewon Class",
        koreanTitle: "이태원 클라쓰",
        year: 2020,
        episodes: 16,
        director: "Kim Sung-yoon",
        cast: "Park Seo-joon, Kim Da-mi, Yoo Jae-myung, Kwon Nara",
        synopsis: "An ex-convict opens a bar in Itaewon and seeks revenge against the food industry giant that ruined his life. Park Sae-ro-yi's life has been turned upside down after he gets expelled from school for punching a bully and his father is killed in an accident. Fueled by his desire for revenge, he opens a bar-restaurant in Itaewon, a multicultural district in Seoul, and aims to dethrone the restaurant empire that destroyed his family.",
        poster: "https://m.media-amazon.com/images/M/MV5BNzJiZjdkY2YtYzhkZS00YTViLWFkODQtZGM0MTEzN2E2ZDEzXkEyXkFqcGdeQXVyMTMxODk2OTU._V1_.jpg"
    }
];
