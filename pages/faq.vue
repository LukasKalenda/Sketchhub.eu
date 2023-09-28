<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="container max-w-4xl px-6 py-10 mx-auto">
      <h1
        class="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white"
      >
        Frequently asked questions
      </h1>

      <div class="mt-12 space-y-8">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border-2 border-gray-100 rounded-lg dark:border-gray-700"
        >
          <button
            class="flex items-center justify-between w-full p-8"
            @click="toggleFaq(index)"
          >
            <h1 class="font-semibold text-2xl lg:text-4xl text-gray-700 dark:text-white">{{ faq.question }}</h1>
            <span
              class="text-gray-400 bg-gray-200 rounded-full"
              :class="{ 'rotate-45': faq.opened, 'rotate-0': !faq.opened }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 transform transition-transform duration-300 ease-in-out"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </span>
          </button>

          <hr class="border-gray-200 dark:border-gray-700" />

          <p
            class="p-8 text-md text-gray-500 dark:text-gray-300"
            v-if="faq.opened"
          >
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "Z čeho tisknete modely?",
          answer: "Modely jsou tištěny nejčastěji za využití technologie FDM. Ta využívá známé materiály PLA, PETG, ABS... Jedná se o běžně dostupnou technologii. Dále využíváme také Resin. Ten je vhodný pro složitější tisk, který vyžaduje větší přesnost a obsahuje záhyby, kam by se hlava běžné tiskárny nedostala.",
          opened: false,
        },
        {
          question: "Jak modely vypadají po vytištění?",
          answer: "Výrobek z tiskárny je již ve velice pěkném stavu. Někdy je potřeba zahladit některé hrany nebo odsranit podpěry. Následná úprava již spočívá pouze v nátěru na konkrétní barvu, maskování nebo simulování poškození.",
          opened: false,
        },
        {
          question: "Jak vytváříte vodní plochu?",
          answer: "Možností vytvoření vodní plochy je spousta. My využíváme nejčastěji průhlednou epoxidovou pryskyřici, která je následně obarvena. Výhodou je, že se dá vytvořit i vlnování, které je věrnější realitě. Další možností je použití průhledného akrylátu, který je však méně průhledný a vlnování se nedá vytvořit. V neposlední řadě je možné použít i průhlednou fólii, která je však méně odolná, ovšem cenově je tato možnost nejvýhodnější.",
          opened: false,
        },
        {
          question: "Odkud berete nápady na modely?",
          answer: "Nápady čerpáme různě z internetu, historických videí atd. Snažíme se zachytit zajímavé modely z historie. Konstrukce modelů je většinou založena na nákresu, který je následně převeden do 3D prostoru. Někdy je nutné model upravit a zjednodušit, aby byl tisknutelný.",
          opened: false,
        },
        {
          question: "Můžu si u Vás požádat o loď na míru?",
          answer: "Jistě, budeme moc rádi. Se zakázkami zatím nemáme zkušenosti, ale modely již vytvářet umíme, takže to nebude problém. Ozvěte se nám prosím na některých z kontaktů.",
          opened: false,
        },
        // {
        //   question: "Zvládnu jako začátečník vytvořit model dle návodu?",
        //   answer: "Určitě ano. Popisek je co nejblíže přiblížen začátečníkům a snažíme se v něm popsat vše potřebné, jelikož jsme i my začínali a kladli jsme si otázky a spoustu toho odkoukali.",
        //   opened: false,
        // },
      ],
    };
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].opened = !this.faqs[index].opened;
    },
  },
};
</script>

<style>
.rotate-45 {
  transform: rotate(45deg);
}
.rotate-0 {
  transform: rotate(0deg);
}
</style>