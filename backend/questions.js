const questions = [
    {
        text: "У меня есть интерес заниматься и играть с детьми:",
        options: [
            { label: "Да, это мне нравится", score: 1, tags: ["до"] },
            { label: "Да, но иногда хочу побыть один", score: 0.5, tags: ["до"] },
            { label: "Нет, это совсем не мое", score: -1, tags: ["до"] },
            { label: "Нет, но если это требуется для работы, то я попробую", score: 1, tags: ["до"] }
        ]
    },
    {
        text: "Мне нравится учить людей новому и помогать окружающим?",
        options: [
            { label: "Да, у меня хорошо это получается", score: 1, tags: ["но"] },
            { label: "Да, но мне пока не хватает навыков", score: 0.5, tags: ["но"] },
            { label: "Нет, это совсем не мое", score: -1, tags: ["но"] },
            { label: "Нет, но я бы хотел научиться этому", score: 0.5, tags: ["но"] }
        ]
    },
    {
        text: "Мне нравится разбираться в устройстве различных механизмов и электрических схем:",
        options: [
            { label: "Да, я могу сам починить мелкую технику", score: 1, tags: ["мехатроники"] },
            { label: "Да, но мне пока не хватает навыков", score: 0.5, tags: ["мехатроники"] },
            { label: "Нет, это совсем не мое", score: -1, tags: ["мехатроники"] },
            { label: "Нет, но я бы хотел научиться этому", score: 0.5, tags: ["мехатроники"] }
        ]
    },
    {
        text: "Мне нравится работать с бумажной документацией и все систематизировать?",
        options: [
            { label: "Да, у меня хорошо это получается", score: 1, tags: ["Юриспруденция"] },
            { label: "Да, но я бы хотел заниматься еще каким-то видом деятельности", score: 0.5, tags: ["Юриспруденция"] },
            { label: "Нет, это совсем не мое", score: -1, tags: ["Юриспруденция"] },
            { label: "Нет, но я еще не пробовал такой вид работы", score: 0.5, tags: ["Юриспруденция"] }
        ]
    },
    {
        text: "Мне нравится работа за компьютером, и я хорошо разбираюсь в технике?",
        options: [
            { label: "Да, у меня хорошо это получается", score: 1, tags: ["исп"] },
            { label: "Да, но мне пока не хватает навыков", score: 0.5, tags: ["исп"] },
            { label: "Нет, это совсем не мое", score: -1, tags: ["исп"] },
            { label: "Нет, но я бы хотел научиться этому", score: 0.5, tags: ["исп"] }
        ]
    },
    {
        text: "Я бы хотел научиться управлять квадрокоптером, и мне нравится авиамоделирование?",
        options: [
            { label: "Да, у меня хорошо это получается", score: 1, tags: ["БПЛ"] },
            { label: "Да, но мне пока не хватает навыков", score: 0.5, tags: ["БПЛ"] },
            { label: "Нет, это совсем не мое", score: -1, tags: ["БПЛ"] },
            { label: "Нет, но я бы хотел научиться этому", score: 0.5, tags: ["БПЛ"] }
        ]
    },
    {
        text: "Мне нравится работать с цифрами и рассчетами",
        options: [
            { label: "Да, у меня хорошо это получается", score: 1, tags: ["Финансы"] },
            { label: "Да, но мне пока не хватает навыков", score: 0.5, tags: ["Финансы"] },
            { label: "Нет, это совсем не мое", score: -1, tags: ["Финансы"] },
            { label: "Нет, но я бы хотел научиться этому", score: 0.5, tags: ["Финансы"] }
        ]
    },
    {
        text: "Я люблю психологию и умею общаться с людьми",
        options: [
            { label: "Да, у меня хорошо это получается", score: 1, tags: ["Оператор ЕДДС"] },
            { label: "Да, но мне пока не хватает навыков", score: 0.5, tags: ["Оператор ЕДДС"] },
            { label: "Нет, это совсем не мое", score: -1, tags: ["Оператор ЕДДС"] },
            { label: "Нет, но я бы хотел научиться этому", score: 0.5, tags: ["Оператор ЕДДС"] }
        ]
    },
    {
        text: "Выберите интересующие вас больше всего предметы:",
        options: [
            { label: "Физика", score: 1, tags: ["мехатроники", "исп", "БПЛ"] },
            { label: "Математика", score: 1, tags: ["мехатроники", "исп", "БПЛ", "Финансы"] },
            { label: "Информатика и ИКТ", score: 1, tags: ["мехатроники", "исп", "БПЛ", "Финансы"] },
            { label: "Литература", score: 1, tags: ["до", "но", "Оператор ЕДДС", "Юриспруденция"] },
            { label: "История", score: 1, tags: ["до", "но", "Оператор ЕДДС", "Юриспруденция"] },
            { label: "Обществознание", score: 1, tags: ["до", "но", "Оператор ЕДДС", "Юриспруденция", "Финансы"] },
            { label: "Русский язык", score: 1, tags: ["до", "но", "Оператор ЕДДС", "Юриспруденция"] }
        ]
    }
];
