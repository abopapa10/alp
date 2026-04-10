export const panseksuelFaqs = [
  {
    question: "Panseksüel bir tercih midir?",
    answer:
      "Hayır. Panseksüellik bir yaşam tarzı seçimi değil; kişinin kendini tanımladığı cinsel yönelim veya romantik çekim örüntüsüdür. Tercih sözcüğü bazen gönüllülük çağrıştırdığı için kapsayıcı dilde yönelim veya kimlik dili tercih edilir.",
  },
  {
    question: "Panseksüel bayrağı ne anlama gelir?",
    answer:
      "Yaygın panseksüel (pan) bayrağında pembe cinsiyet kimliklerine, sarı non-binary ve ikili dışı kimliklere, mavi erkek kimliğine atıf yapıldığı anlatılır; merkezdeki canlı çizgi ise cisgender olmayan, trans ve ikili dışı insanlara görünürlük vermeyi simgeler. Renk yorumları topluluk içinde küçük farklılıklar gösterebilir.",
  },
  {
    question: "Panseksüellik ve omniseksüellik farkı nedir?",
    answer:
      "Her iki terim de cinsiyetin çekimde merkezi bir filtre olmadığını vurgular. Omniseksüellik bazen tüm cinsiyet ifadelerine açık olmayı, panseksüellik ise cinsiyeti çekimin ön şartı olarak görmemeyi vurgular; sınırlar kişisel tanıma göre değişir ve etiketler üzerinde mutlak bir konsensus yoktur.",
  },
  {
    question: "Panseksüellik belirtileri var mıdır?",
    answer:
      "Cinsel yönelim bir ruhsal bozukluk değildir; bu nedenle tıbbi anlamda belirti listesi yoktur. Kişiler bazen kendilerini cinsiyet etiketlerinden bağımsız çekim yaşarken, karakter veya enerji gibi boyutlara daha çok odaklandıklarını fark edebilir; bu deneyimler kişisel keşif diliyle ele alınmalıdır.",
  },
  {
    question: "Panseksüel kime denir?",
    answer:
      "Kendini panseksüel olarak tanımlayan; romantik veya cinsel çekimini cinsiyet ikilisine veya belirli cinsiyet kategorilerine bağlı görmeyen kişilere yönelik üst bir kimlik/yönelim etiketidir. Tanımı kişi belirler; dışarıdan etiket dayatmak uygun değildir.",
  },
] as const;

export function buildPanseksuelFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: panseksuelFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
