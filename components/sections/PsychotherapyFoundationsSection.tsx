import { BookOpen, HeartPulse, MessageCircleQuestion, Sparkles } from "lucide-react";

const intro =
  "Psikoterapi, depresyon, kaygı, ilişki sorunları ve yaşamda sıkışmışlık gibi şikayetlerde kanıta dayalı psikolojik müdahaleler sunar. Araştırmalar düzenli terapi ile duygu düzenleme, stresle başa çıkma ve öz-değer üzerinde olumlu etkiler olduğunu gösterir. Beşiktaş kliniğinde yüz yüze; şehir veya ülke dışından online terapi ile de aynı çerçevede çalışmak mümkündür. Hangi yaklaşımın size uygun olduğunu, başvuru nedeniniz ve hedefleriniz doğrultusunda birlikte şekillendiririz.";

const insightCards = [
  {
    icon: HeartPulse,
    title: "Psikoterapi ne işe yarar?",
    body: "Düşünce, duygu ve davranış örüntülerini güvenli bir ilişkide gözden geçirmenize yardımcı olur. Amaç semptomları azaltmak kadar, uzun vadede daha esnek başa çıkma becerileri geliştirmektir.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Online terapi yüz yüze kadar etkili mi?",
    body: "Uygun koşullarda (gizli ortam, stabil bağlantı) birçok başvuru için online psikolojik danışmanlık da güçlü sonuçlar verebilir. Format seçimini birlikte değerlendiririz.",
  },
  {
    icon: BookOpen,
    title: "Kanıta dayalı terapi ne demek?",
    body: "Yöntemlerin bilimsel araştırmalarla desteklenmesi ve etik ilkelerle yürütülmesi demektir. Uygulamada birey odaklı, BDT ve psikodinamik çizgiler birbirini tamamlayabilir.",
  },
] as const;

type ApproachBlock =
  | { type: "p"; text: string }
  | { type: "h4"; text: string }
  | { type: "ul"; items: string[] };

type Approach = {
  title: string;
  summary: string;
  subtitle: string;
  blocks: ApproachBlock[];
};

const approaches: Approach[] = [
  {
    title: "Bilişsel Davranışçı Terapi (BDT): Düşünceden Eyleme Değişim",
    summary:
      "Olaylara getirdiğimiz yorumların duygularımızı belirlediği felsefesine dayanır. İşlevsiz düşünceleri tespit edip sağlıklı davranış kalıpları geliştirir.",
    subtitle: "BDT’nin bilimsel temelleri ve uygulama protokolleri",
    blocks: [
      {
        type: "p",
        text: "Bilişsel Davranışçı Terapi (BDT), günümüzde klinik psikoloji alanında en çok araştırılmış ve etkinliği binlerce akademik çalışma ile kanıtlanmış bir ekoldür. Temel prensibi, bireyin olayları algılama biçiminin (biliş), duygusal tepkilerini ve davranışlarını doğrudan etkilediği gerçeğine dayanır.",
      },
      {
        type: "p",
        text: "Bilişsel çarpıtmalar: Zihnimiz bazen bilgiyi işlerken “ya hep ya hiç”, “felaketleştirme” veya “zihin okuma” gibi hatalar yapar. Terapi sürecinde bu çarpıtmaları fark etmek, gerçekçi olmayan inançların esnekleşmesini sağlar.",
      },
      {
        type: "p",
        text: "Davranış deneyleri ve maruz bırakma: Sadece konuşmak yetmez. BDT’de danışan, kaçındığı durumlara (örneğin sosyal fobi veya panik atak tetikleyicileri) kontrollü ve aşamalı bir şekilde maruz bırakılarak (exposure), korkulan sonucun gerçekleşmediğini deneyimsel olarak öğrenir.",
      },
      {
        type: "p",
        text: "Protokoller: Depresyon için Beck yönelimli terapi, kaygı bozuklukları için özgün protokoller ve obsesif kompulsif bozukluk (OKB) için maruz bırakma ve tepki önleme (ERP) gibi yapılandırılmış yöntemler kullanılır. Meta-analizler, BDT’nin nüks (tekrarlama) oranlarını düşürmede ilaç tedavisi kadar, hatta bazı durumlarda daha etkili olduğunu göstermektedir.",
      },
    ],
  },
  {
    title: "Gestalt Terapisi: Bütüncül Bir Farkındalık Yaklaşımı",
    summary:
      "Geçmişte kaybolmak yerine “şu an” deneyimlenen duygulara odaklanır. Boş sandalye tekniği gibi yöntemlerle bireyin farkındalığını artırır.",
    subtitle: "“Şimdi ve burada”: Gestalt’ın bütüncül bakış açısı",
    blocks: [
      {
        type: "p",
        text: "Gestalt terapisi, bireyi parçalara ayırarak değil, bir bütün (zihin, beden, çevre) olarak ele alır. Bu yaklaşım, geçmişin pişmanlıkları veya geleceğin kaygıları yerine “şu anki” deneyime odaklanır.",
      },
      {
        type: "p",
        text: "Figür-zemin ilişkisi: Hayatımızda o an en çok ihtiyaç duyduğumuz mesele “figür” haline gelirken, diğer her şey “zemin”e çekilir. Gestalt, arka planda kalmış ve tamamlanmamış işlerin (yarım kalmış vedalar, ifade edilmemiş öfkeler) nasıl bugünümüzü etkilediğini anlamamıza yardımcı olur.",
      },
      {
        type: "p",
        text: "Sorumluluk dili: “Yapamıyorum” yerine “yapmamayı tercih ediyorum” demek gibi küçük dilsel değişimler, bireyin kendi hayatı üzerindeki otoritesini yeniden kazanmasını sağlar.",
      },
      {
        type: "p",
        text: "Deney temelli egzersizler: Terapi odası sadece anlatılan bir yer değil, bir laboratuvardır. Boş sandalye tekniği veya bedensel duyumlara odaklanma gibi egzersizlerle, danışan entelektüel bir farkındalıktan öte, duygusal bir “temas” yaşar. Bu süreç, bireyin kendisiyle ve çevresiyle olan sınırlarını daha sağlıklı çizmesine olanak tanır.",
      },
    ],
  },
  {
    title: "Psikodinamik Terapi: Bilinçdışının Keşfi ve Derin Dönüşüm",
    summary:
      "Geçmiş deneyimlerin ve bilinçdışı çatışmaların güncel sorunlarımıza etkisini inceler. İçgörü kazanarak yıkıcı döngüleri kırmayı hedefler.",
    subtitle: "Psikanalitik mirastan güncel dinamik yaklaşımlara",
    blocks: [
      {
        type: "p",
        text: "Psikodinamik terapi, bireyin bugünkü davranışlarının kökenlerini çocukluk yaşantılarında, erken dönem bağlanma figürleriyle olan ilişkilerinde ve bilinçdışı süreçlerde arar.",
      },
      {
        type: "p",
        text: "Savunma mekanizmaları: İnsan zihni acı veren duygulardan korunmak için yansıtma, bastırma veya rasyonalizasyon gibi savunmalar geliştirir. Terapide bu savunmaların işlevi anlaşılır ve daha olgun baş etme yöntemlerine yer açılır.",
      },
      {
        type: "p",
        text: "Aktarım (transference): Danışanın geçmişteki önemli figürlere (anne, baba vb.) karşı hissettiği duyguları farkında olmadan terapistine yönlendirmesi, iyileşme için eşsiz bir fırsattır. Bu “burada ve şimdi” gerçekleşen etkileşim, geçmişin düğümlerini çözmek için kullanılır.",
      },
      {
        type: "p",
        text: "Meta-analiz bulguları: Shedler (2010) gibi araştırmacıların yaptığı meta-analizler, psikodinamik terapinin etkisinin sadece seans süresince devam etmediğini, terapi bittikten yıllar sonra bile iyileşme etkisinin artarak sürdüğünü (doz-etki ilişkisi) bilimsel olarak ortaya koymuştur. Kısa süreli dinamik psikoterapi (STDP) modelleri ise odaklanmış semptom giderimi için modern klinik pratikte sıklıkla tercih edilmektedir.",
      },
    ],
  },
  {
    title: "Birey Odaklı Terapi (Carl Rogers): İyileşmenin Kalbi",
    summary:
      "Birey Odaklı Terapi, her insanın kendi içinde büyüme ve iyileşme potansiyeline sahip olduğunu savunur. Terapist bir otorite değil, koşulsuz kabul ve empati sunan bir yol arkadaşıdır.",
    subtitle: "Koşulsuz Kabul ve Terapötik İlişkinin Gücü",
    blocks: [
      {
        type: "p",
        text: "1940’larda Carl Rogers tarafından temelleri atılan bu yaklaşım, psikoterapi dünyasında devrim yaratmıştır. Rogers’a göre iyileşmeyi sağlayan şey teknikler değil, kurulan ilişkinin niteliğidir.",
      },
      { type: "h4", text: "Temel kavramlar" },
      {
        type: "ul",
        items: [
          "Koşulsuz pozitif saygı: Danışanın ne anlattığından bağımsız olarak, bir insan olarak değerinin yargılanmadan kabul edilmesidir.",
          "Empatik anlayış: Terapistin, danışanın dünyasını “sanki kendi dünyasıymış gibi” ama o “sanki”yi kaybetmeden hissetmesidir.",
          "Tutarlılık (congruence): Terapistin seans anında maske takmadan, kendi duygularıyla bütünleşik ve şeffaf olmasıdır.",
        ],
      },
      {
        type: "p",
        text: "Seans içi örnek: Bir danışan “Kimsenin beni sevebileceğine inanmıyorum” dediğinde, terapist ona tavsiye vermek yerine bu duygunun derinliğini onunla birlikte hisseder. Bu derin kabul ortamı, danışanın kendine yönelik katı eleştirilerini yumuşatır ve içsel büyüme motorunu çalıştırır.",
      },
      {
        type: "p",
        text: "Araştırma özeti: On yıllardır süregelen araştırmalar, terapötik ittifakın (alliance) başarısının, hangi teknik kullanılırsa kullanılsın, iyileşme oranındaki en büyük belirleyici olduğunu göstermektedir. Birey odaklı yaklaşım, bu ittifakın alt yapısını oluşturur.",
      },
    ],
  },
];

function ApproachBlocks({ blocks }: { blocks: ApproachBlock[] }) {
  return (
    <div className="space-y-3">
      {blocks.map((block, i) => {
        if (block.type === "p") {
          return (
            <p key={i} className="text-sm leading-relaxed text-slate-700 md:text-[15px]">
              {block.text}
            </p>
          );
        }
        if (block.type === "h4") {
          return (
            <h4 key={i} className="pt-1 font-display text-sm font-semibold text-brand-navy md:text-[15px]">
              {block.text}
            </h4>
          );
        }
        return (
          <ul key={i} className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 md:text-[15px]">
            {block.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

export function PsychotherapyFoundationsSection() {
  return (
    <section
      className="border-t border-slate-200/80 bg-gradient-to-b from-white to-slate-50/90 py-12 md:py-16"
      aria-labelledby="psy-foundations-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2
            id="psy-foundations-heading"
            className="max-w-3xl font-display text-2xl font-bold leading-tight text-brand-navy md:text-3xl"
          >
            Psikoterapi Yaklaşımları ve Bilimsel Temelleri
          </h2>
          <p className="flex items-center gap-2 text-sm text-slate-500">
            <Sparkles className="size-4 text-brand-navy/50" aria-hidden />
            <span>Bilgi · Şeffaflık · Kapsayıcılık</span>
          </p>
        </div>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg md:leading-relaxed">
          {intro}
        </p>

        <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
          {insightCards.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="flex flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm ring-1 ring-slate-100"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-brand-sky/50 text-brand-navy">
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="font-display text-base font-semibold text-brand-navy">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-[15px]">{body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 md:mt-14">
          <h3 className="font-display text-lg font-bold text-brand-navy md:text-xl">Yönelen terapi ekolleri</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-[15px]">
            Her başlıkta kısa bir giriş özeti ve açıldığında bilimsel arka plan ile uygulama hatları yer alır.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2 md:gap-4">
            {approaches.map((item) => (
              <details
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm open:border-brand-navy/20 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 rounded-2xl px-4 py-4 marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-brand-navy">
                    <BookOpen className="size-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1 font-display text-sm font-bold leading-snug text-brand-navy md:text-base">
                    {item.title}
                  </span>
                </summary>
                <div className="space-y-4 border-t border-slate-100 px-4 pb-4 pt-3">
                  <p className="text-sm leading-relaxed text-slate-700 md:text-[15px]">{item.summary}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-navy/80 md:text-sm">
                    {item.subtitle}
                  </p>
                  <ApproachBlocks blocks={item.blocks} />
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
