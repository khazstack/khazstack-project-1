import TopNav from "@/components/TopNav";
import aboutHero from "@/assets/about-hero.jpeg";

const parametry = [
  ["Рост", "196–197 см"],
  ["Возраст", "33 года"],
  ["Телосложение", "Спортивное"],
  ["Размер одежды", "54–56 (XL–XXL)"],
  ["Размер обуви", "45–46"],
];

const tipazh = [
  "Харизматичный",
  "Глубокий",
  "Брутальный",
  "Военный",
  "Телохранитель",
  "Сотрудник силовых структур",
  "Бандит",
  "Зэк",
  "Оперативник",
  "Бизнесмен",
  "Спортсмен",
  "Лидер",
  "Антагонист",
];

const navyki = [
  "Единоборства",
  "Базовые каскадёрские элементы",
  "Вокал",
  "Танцевальная подготовка",
  "Языки: русский, английский, итальянский, казахский",
];

const igrovoeKino = [
  "«7 Апке»",
  "«Альпийская баллада»",
  "«Крепость #307»",
  "«Рестарт»",
  "«Ханская охота»",
  "«Братья / Ағайындылар»",
  "«Принц Азии»",
];

const reklama = ["«Сбербанк»"];

const dopOpyt = [
  "Музыкальные клипы",
  "Работа на съёмочных площадках художественных и коммерческих проектов",
];

const About = () => (
  <main
    className="bg-black text-white min-h-screen"
    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
  >
    <TopNav />

    {/* Hero */}
    <section className="relative md:h-screen overflow-hidden">
      <img
        src={aboutHero}
        alt="Загоскин Евгений"
        className="block w-full h-auto max-h-[85vh] object-contain object-[center_20%] bg-black md:absolute md:inset-0 md:h-full md:max-h-none md:object-cover md:opacity-70"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 0%, #000 55%, rgba(0,0,0,0.7) 78%, rgba(0,0,0,0.25) 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, #000 0%, #000 55%, rgba(0,0,0,0.7) 78%, rgba(0,0,0,0.25) 92%, transparent 100%)",
        }}
      />

      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="relative md:absolute md:bottom-16 md:left-0 md:right-0 text-center px-6 -mt-16 md:mt-0 pb-8 md:pb-0">
        <h1 className="text-4xl md:text-8xl font-extrabold tracking-tight uppercase mb-4">
          Загоскин Евгений
        </h1>
        <p className="text-[11px] md:text-2xl font-light tracking-[0.2em] md:tracking-[0.3em] uppercase text-white/70 whitespace-nowrap">
          Актёр игровых и коммерческих проектов
        </p>
      </div>
    </section>

    {/* Bio */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <p className="text-base md:text-lg leading-[1.9] text-white/80 text-center">
        Имею опыт работы на съёмочных площадках художественного кино,
        сериалов, рекламы и музыкальных клипов. Уверенно чувствую себя перед
        камерой, быстро включаюсь в рабочий процесс и точно выполняю
        режиссёрские задачи. Благодаря выразительной фактуре в кадре
        убедительно работаю в ролях сильных, харизматичных и неоднозначных
        персонажей — в проектах различных жанров: от исторических драм и
        экшена до современных сериалов и коммерческой рекламы.
      </p>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Параметры */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Параметры
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-base">
        {parametry.map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between items-baseline py-3 border-b border-white/10"
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/50 font-semibold">
              {label}
            </span>
            <span className="text-base md:text-lg font-bold text-right">
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Типаж */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Типаж
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {tipazh.map((item) => (
          <span
            key={item}
            className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm md:text-base font-medium text-white/85"
          >
            {item}
          </span>
        ))}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Навыки */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Навыки
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {navyki.map((skill) => (
          <div
            key={skill}
            className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-base md:text-lg font-medium"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Опыт съёмок */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Опыт съёмок
      </h2>

      <div className="mb-12">
        <h3 className="text-sm md:text-base uppercase tracking-[0.2em] text-white/50 font-semibold mb-5 text-center">
          Игровое кино
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {igrovoeKino.map((title) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-base md:text-lg font-bold text-center"
            >
              {title}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm md:text-base uppercase tracking-[0.2em] text-white/50 font-semibold mb-5 text-center">
          Коммерческая реклама
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reklama.map((title) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-base md:text-lg font-bold text-center"
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Дополнительный опыт */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Дополнительный опыт
      </h2>
      <ul className="space-y-3 text-center">
        {dopOpyt.map((item) => (
          <li
            key={item}
            className="text-base md:text-lg font-medium flex items-center justify-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-white/40 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Готовность к съёмкам */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <p className="text-base md:text-lg leading-[1.9] text-white/80 text-center">
        Готов к участию в полнометражных фильмах, сериалах, рекламных
        кампаниях, музыкальных клипах и международных проектах. Рассматриваю
        предложения о съёмках в Казахстане, странах СНГ и за рубежом.
      </p>
    </section>
  </main>
);

export default About;
